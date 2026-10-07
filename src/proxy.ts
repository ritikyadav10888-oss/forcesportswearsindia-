import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ispo.forcesportsindia.com is the ISPO digital showroom (src/app/ispo/showroom), served by this same app.
// Its home page shows the showroom; any other page on that host redirects to the main site.
const SHOWROOM = '/ispo/showroom';
const MAIN_SITE = 'https://www.forcesportsindia.com';
// assets the showroom loads from its own host
const SHARED = ['/ispo/showroom', '/design-studio', '/catalog/force-sports-catalog.pdf', '/api/garment-image'];

export function proxy(request: NextRequest) {
    const host = (request.headers.get('host') || '').toLowerCase();
    if (!host.startsWith('ispo.')) return NextResponse.next();

    const { pathname, search } = request.nextUrl;
    if (pathname === '/') return NextResponse.rewrite(new URL(SHOWROOM + search, request.url));
    if (SHARED.some((p) => pathname.startsWith(p)) || /\.[a-z0-9]+$/i.test(pathname)) return NextResponse.next();
    return NextResponse.redirect(MAIN_SITE + pathname + search);
}

export const config = {
    // skip Next.js internals; everything else is checked above
    matcher: ['/((?!_next/|favicon.ico).*)'],
};
