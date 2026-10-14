import { NextResponse } from 'next/server';

// Sends the approved WhatsApp template "website_thank_you" to a visitor who just left their details
// on the ISPO form. Runs server-side so the Meta token never reaches the browser.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
// shortcut: in-memory per-instance limit, resets on cold start; move to Firestore/Redis if this gets abused.
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

export async function POST(req: Request) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const { name, phone } = await req.json().catch(() => ({}));
    const to = String(phone ?? '').replace(/\D/g, '');
    if (to.length < 8 || to.length > 15) {
        return NextResponse.json({ error: 'Invalid phone' }, { status: 400 });
    }
    // Only a plain first name goes into the template, so nobody can inject links or text into our message.
    const first = String(name ?? '').trim().split(/\s+/)[0] ?? '';
    const firstName = /^[\p{L}\p{M}'.-]{1,40}$/u.test(first) ? first : 'there';

    const { WA_TOKEN, WA_PHONE_ID } = process.env;
    if (!WA_TOKEN || !WA_PHONE_ID) {
        return NextResponse.json({ error: 'WhatsApp not configured' }, { status: 503 });
    }

    // ISPO-specific message first; the general thank-you covers the time Meta has not approved it (or paused it)
    for (const template of ['ispo_thank_you', 'website_thank_you']) {
        const res = await fetch(`https://graph.facebook.com/v25.0/${WA_PHONE_ID}/messages`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${WA_TOKEN}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to,
                type: 'template',
                template: {
                    name: template,
                    language: { code: 'en' },
                    components: [{ type: 'body', parameters: [{ type: 'text', text: firstName }] }],
                },
            }),
            signal: AbortSignal.timeout(10_000),
        });
        if (res.ok) return NextResponse.json({ success: true, template });
        console.error(`[WhatsApp] ${template} failed`, res.status, await res.text());
    }
    return NextResponse.json({ error: 'WhatsApp send failed' }, { status: 502 });
}
