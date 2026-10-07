import { NextResponse } from 'next/server';

// Serves product photos from our Firebase bucket on the site's own origin, so the
// Customize studio can draw them onto its canvas (Firebase sends no CORS headers).
const ALLOWED_PREFIX =
    'https://firebasestorage.googleapis.com/v0/b/force-sports-and-wears-i-a38aa.firebasestorage.app/o/';

export async function GET(request: Request) {
    const src = new URL(request.url).searchParams.get('src') || '';
    if (!src.startsWith(ALLOWED_PREFIX)) {
        return NextResponse.json({ error: 'Image source not allowed' }, { status: 400 });
    }

    const upstream = await fetch(src);
    const contentType = upstream.headers.get('content-type') || '';
    if (!upstream.ok || !contentType.startsWith('image/')) {
        return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return new NextResponse(upstream.body, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400, s-maxage=604800',
        },
    });
}
