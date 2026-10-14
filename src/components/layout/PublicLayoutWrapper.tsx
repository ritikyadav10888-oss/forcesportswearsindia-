"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import Layout from './Layout';

// Live chat bubble (self-hosted Chatwoot). Chats land in the "Force Sports Website" inbox.
const CHATWOOT_URL = 'https://chatwoot.tech';
const CHATWOOT_WEBSITE_TOKEN = 'u4V4BCUDYxcUfE4V3YrC1V1k'; // public by design, not a secret
type ChatwootWindow = Window & {
    chatwootSettings?: Record<string, unknown>;
    chatwootSDK?: { run: (opts: { websiteToken: string; baseUrl: string }) => void };
    $chatwoot?: { toggleBubbleVisibility: (state: 'show' | 'hide') => void };
};

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // route segments of the page actually rendered: on ispo.forcesportsindia.com the URL is "/" but
    // proxy.ts renders /ispo/showroom, so the browser path alone can't tell
    const segments = useSelectedLayoutSegments();
    const isAdmin = pathname?.startsWith('/force-hq');
    // the ISPO digital showroom has its own full-screen layout
    const isShowroom = segments[0] === 'ispo' && segments[1] === 'showroom';
    const hideChat = isAdmin || isShowroom;

    // the SDK stays loaded across client-side navigation, so hide the bubble when moving into admin/showroom
    useEffect(() => {
        (window as ChatwootWindow).$chatwoot?.toggleBubbleVisibility(hideChat ? 'hide' : 'show');
    }, [hideChat]);

    if (hideChat) {
        return <>{children}</>;
    }

    return (
        <>
            <Layout>
                {children}
            </Layout>
            <Script
                id="chatwoot-sdk"
                src={`${CHATWOOT_URL}/packs/js/sdk.js`}
                strategy="lazyOnload"
                onLoad={() => {
                    const w = window as ChatwootWindow;
                    // bottom-left: the WhatsApp button already sits bottom-right
                    w.chatwootSettings = { position: 'left', type: 'standard' };
                    w.chatwootSDK?.run({ websiteToken: CHATWOOT_WEBSITE_TOKEN, baseUrl: CHATWOOT_URL });
                }}
            />
        </>
    );
}
