import { BRAND_DETAILS } from '../../../data/brandData';
import { ISPO_EVENT } from '../../../data/ispoEvent';

// "Save our contact" on /ispo: a vCard built from the brand data, so it never drifts from the site.
export function GET() {
    const { name, contacts, addresses, social } = BRAND_DETAILS;
    const hq = addresses[0];
    const phone = contacts.phone.replace(/\s/g, '');
    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${name};;;;`,
        `FN:${name}`,
        `ORG:${name}`,
        `TEL;TYPE=CELL,VOICE:${phone}`,
        `EMAIL;TYPE=WORK:${ISPO_EVENT.email}`,
        'URL:https://www.forcesportsindia.com/',
        `ADR;TYPE=WORK:;;${hq.text.replace(/,/g, '\\,')};${hq.city};${hq.state};${hq.pincode};India`,
        `X-SOCIALPROFILE;TYPE=instagram:${social.instagram.split('?')[0]}`,
        'NOTE:Team kits and performance sportswear\\, made in Mumbai since 2007.',
        'END:VCARD',
    ].join('\r\n');

    return new Response(vcard, {
        headers: {
            'Content-Type': 'text/vcard; charset=utf-8',
            'Content-Disposition': 'attachment; filename="force-sports.vcf"',
        },
    });
}
