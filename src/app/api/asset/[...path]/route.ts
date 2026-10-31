import { NextResponse } from 'next/server';

// Fallback for /public paths that aren't in the deploy (see next.config rewrites):
// streams the file from our Firebase bucket on the site's own origin, cached at Vercel's edge.
const BUCKET = 'https://firebasestorage.googleapis.com/v0/b/force-sports-and-wears-i-a38aa.firebasestorage.app/o/';

export async function GET(_request: Request, { params }: { params: Promise<{ path: string[] }> }) {
    const path = (await params).path.join('/');

    const upstream = await fetch(`${BUCKET}${encodeURIComponent(path)}?alt=media`);
    const contentType = upstream.headers.get('content-type') || '';
    if (!upstream.ok || !(contentType.startsWith('image/') || contentType === 'application/pdf')) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return new NextResponse(upstream.body, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400, s-maxage=2592000',
        },
    });
}
