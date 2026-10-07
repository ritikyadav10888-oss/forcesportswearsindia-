"use client";

import React from 'react';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import Layout from './Layout';

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // route segments of the page actually rendered: on ispo.forcesportsindia.com the URL is "/" but
    // proxy.ts renders /ispo/showroom, so the browser path alone can't tell
    const segments = useSelectedLayoutSegments();
    const isAdmin = pathname?.startsWith('/force-hq');
    // the ISPO digital showroom has its own full-screen layout
    const isShowroom = segments[0] === 'ispo' && segments[1] === 'showroom';

    if (isAdmin || isShowroom) {
        return <>{children}</>;
    }

    return (
        <Layout>
            {children}
        </Layout>
    );
}
