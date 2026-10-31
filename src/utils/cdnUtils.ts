/**
 * Resolve image/asset URLs. Everything is served from the site's own origin (Vercel CDN):
 * files in /public load directly, and paths missing from /public fall back to Firebase
 * Storage through the /api/asset rewrite in next.config.
 */
export const getCDNUrl = (
  localPath: string,
  _options?: { width?: number; quality?: number }
): string => {
  if (!localPath?.trim()) return '';

  const path = localPath.trim();

  // If it's already a firebase storage URL or data URI, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  return encodeURI(path.startsWith('/') ? path : `/${path}`);
};
