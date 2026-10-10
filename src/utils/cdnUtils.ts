

/**
 * Resolve image/asset URLs for dev and Firebase App Hosting.
 * Static files in /public are served from the same origin (no external CDN).
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

  const normalized = path.startsWith('/') ? path : `/${path}`;

  // brand assets (logo) ship with the site itself, never from Firebase Storage
  if (normalized.startsWith('/brand/')) return encodeURI(normalized);
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  const ext = cleanPath.split('.').pop()?.toLowerCase() || '';
  const isAsset = ['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif', 'pdf'].includes(ext);

  if (isAsset) {
    return `https://firebasestorage.googleapis.com/v0/b/force-sports-and-wears-i-a38aa.firebasestorage.app/o/${encodeURIComponent(cleanPath)}?alt=media`;
  }

  return encodeURI(normalized);
};


