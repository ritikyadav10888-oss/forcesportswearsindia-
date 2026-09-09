import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BRAND_DETAILS } from '../../../data/brandData';

// In-memory rate limiting: Max 5 submissions per IP every 10 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = ipMap.get(ip);
    if (!record || now > record.resetAt) {
        ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }
    record.count += 1;
    return record.count > MAX_REQUESTS_PER_WINDOW;
}

// Escape HTML to prevent XSS / HTML injection in email templates
function escapeHtml(str: string): string {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Detect spam bot patterns (e.g. Gmail dot-tricks like ur.uq.a.fu.xo.b.u.w.52@gmail.com)
function isSpamEmail(email: string): boolean {
    if (!email || typeof email !== 'string') return true;
    const cleanEmail = email.trim().toLowerCase();
    const parts = cleanEmail.split('@');
    if (parts.length !== 2) return true;

    const [username, domain] = parts;

    // Detect Gmail dot-trick abuse (e.g. 3 or more dots in the username part)
    const dotCount = (username.match(/\./g) || []).length;
    if (domain === 'gmail.com' && dotCount >= 3) {
        return true;
    }

    // Detect suspicious spam pattern: username with dot after every 1-2 letters
    if (/\b([a-z]\.){3,}/i.test(username)) {
        return true;
    }

    // Detect known disposable/burner email domains
    const disposableDomains = [
        'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
        'sharklasers.com', 'dispostable.com', 'trashmail.com', 'yopmail.com', 'getairmail.com'
    ];
    if (disposableDomains.includes(domain)) {
        return true;
    }

    return false;
}

export async function POST(req: Request) {
    try {
        // Extract IP for rate limiting
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

        if (isRateLimited(ip)) {
            console.warn(`[Anti-Spam] Rate limit triggered for IP: ${ip}`);
            return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }

        const body = await req.json();
        const {
            fullName, email, phone, quantity, productType, message, source,
            // Honeypot field (hidden from human users, filled by bots)
            website_hp,
            // Customize context fields
            product, productCode, fabric, placement, logoSize
        } = body;

        // 1. HONEYPOT CHECK: If the invisible honeypot field is filled, silently drop the submission
        if (website_hp && website_hp.trim() !== '') {
            console.warn(`[Anti-Spam] Honeypot field triggered by IP: ${ip}`);
            // Return fake success so bots don't adapt
            return NextResponse.json({ success: true, message: 'Inquiry received' });
        }

        // 2. REQUIRED FIELDS
        if (!fullName || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
        }

        // 3. SPAM EMAIL PATTERN FILTER
        if (isSpamEmail(email)) {
            console.warn(`[Anti-Spam] Blocked spam/burner email pattern: ${email} from IP: ${ip}`);
            // Return fake success so bots don't adapt
            return NextResponse.json({ success: true, message: 'Inquiry received' });
        }

        // 4. URL / LINK SPAM FILTER IN NAME
        if (/https?:\/\/|www\./i.test(fullName)) {
            console.warn(`[Anti-Spam] Blocked URL in name: ${fullName}`);
            return NextResponse.json({ success: true, message: 'Inquiry received' });
        }

        // Sanitize user inputs for HTML email output
        const safeName = escapeHtml(fullName);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeQuantity = escapeHtml(quantity);
        const safeCategory = escapeHtml(productType);
        const safeMessage = escapeHtml(message);
        const safeProduct = escapeHtml(product);
        const safeProductCode = escapeHtml(productCode);
        const safeFabric = escapeHtml(fabric);
        const safePlacement = escapeHtml(placement);
        const safeLogoSize = escapeHtml(logoSize);
        const safeSource = escapeHtml(source);

        const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');
        const isFromCustomize = safeSource === 'Customize Button';
        const emailSubject = isFromCustomize
            ? `🎽 Customize Request: ${safeProduct || safeCategory || 'Product'} — ${safeName}`
            : `📋 New Lead: ${safeCategory || 'General Inquiry'} from ${safeName}`;

        // Build the customize context block
        const customizeContextBlock = isFromCustomize ? `
            <div style="margin-top: 20px; background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); padding: 20px; border-radius: 12px; color: white;">
                <p style="margin: 0 0 12px 0; font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8;">🎨 Product Customization Details</p>
                <table style="width: 100%; border-collapse: collapse;">
                    ${safeProduct ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Product</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${safeProduct}</td>
                    </tr>` : ''}
                    ${safeProductCode ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Product Code</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold; font-family: monospace;">${safeProductCode}</td>
                    </tr>` : ''}
                    ${safeFabric ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Fabric</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${safeFabric}</td>
                    </tr>` : ''}
                    ${safePlacement ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Logo Placement</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${safePlacement}</td>
                    </tr>` : ''}
                    ${safeLogoSize ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Logo Size</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${safeLogoSize}</td>
                    </tr>` : ''}
                </table>
            </div>
        ` : '';

        const htmlContent = `
            <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 620px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">

                <!-- Header -->
                <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 32px 24px; text-align: center;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 900; letter-spacing: 3px; color: #06b6d4; text-transform: uppercase;">Force Sports & Wears India</p>
                    <h1 style="margin: 0; font-size: 26px; font-weight: 900; color: white; letter-spacing: -0.5px;">
                        ${isFromCustomize ? '🎽 New Customize Request' : '📋 New Inquiry Received'}
                    </h1>
                    <p style="margin: 10px 0 0; font-size: 13px; color: #94a3b8;">
                        Via: <strong style="color: #e2e8f0;">${safeSource || 'Website Contact Form'}</strong>
                    </p>
                </div>

                <!-- Body -->
                <div style="padding: 32px;">

                    <!-- Customize Context -->
                    ${customizeContextBlock}

                    <!-- Customer Details -->
                    <div style="margin-top: ${isFromCustomize ? '20px' : '0'}; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
                        <div style="padding: 14px 20px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; color: #64748b;">👤 Customer Information</p>
                        </div>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; width: 35%; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 15px; font-weight: 700; color: #0f172a;">${safeName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9;">
                                    <a href="mailto:${safeEmail}" style="color: #0891b2; font-weight: 700; text-decoration: none; font-size: 14px;">${safeEmail}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9;">
                                    <a href="tel:${safePhone}" style="color: #16a34a; font-weight: 700; text-decoration: none; font-size: 14px;">${safePhone || 'Not provided'}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Category</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #334155;">${safeCategory || 'Not specified'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Quantity</td>
                                <td style="padding: 12px 20px; font-size: 14px; font-weight: 600; color: #334155;">${safeQuantity || 'Not specified'}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Message -->
                    <div style="margin-top: 16px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                        <div style="padding: 14px 20px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; color: #64748b;">💬 Customer Message</p>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin: 0; color: #334155; line-height: 1.8; font-size: 14px; white-space: pre-wrap;">${safeMessage || 'No message provided.'}</p>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
                        <a href="mailto:${safeEmail}?subject=Re: Your Inquiry at Force Sports India" 
                           style="display: inline-block; padding: 12px 24px; background: #0f172a; color: white; border-radius: 8px; font-size: 12px; font-weight: 900; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">
                            ✉️ Reply to Customer
                        </a>
                        <a href="https://wa.me/91${(safePhone || '').replace(/\D/g, '').slice(-10)}" 
                           style="display: inline-block; padding: 12px 24px; background: #16a34a; color: white; border-radius: 8px; font-size: 12px; font-weight: 900; text-decoration: none; text-transform: uppercase; letter-spacing: 1px;">
                            📱 WhatsApp Customer
                        </a>
                    </div>

                    <!-- Footer -->
                    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                        <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                            This lead has been saved to your 
                            <a href="https://forcesportswearsindia.com/force-hq" style="color: #0891b2;">Firebase Leads Dashboard</a>.
                        </p>
                        <p style="margin: 6px 0 0; font-size: 11px; color: #cbd5e1;">Force Sports & Wears India · ${BRAND_DETAILS.headquarters}</p>
                    </div>
                </div>
            </div>
        `;

        const data = await resend.emails.send({
            from: 'Force Sports Leads <onboarding@resend.dev>',
            to: BRAND_DETAILS.contacts.inquiryEmail,
            subject: emailSubject,
            html: htmlContent,
            replyTo: email
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Error sending email via Resend:', error);
        return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }
}

