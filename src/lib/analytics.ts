// Sends a GA4 event through the gtag snippet loaded in app/layout.tsx. No-op if it hasn't loaded
// (server render, ad blocker).
export function trackEvent(name: string, params?: Record<string, unknown>) {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.('event', name, params);
}
