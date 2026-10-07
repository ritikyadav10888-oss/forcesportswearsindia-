"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Layout from './Layout';

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/force-hq');
    // the ISPO digital showroom has its own full-screen layout (also served on ispo.forcesportsindia.com)
    const isShowroom = pathname?.startsWith('/ispo/showroom');

    if (isAdmin || isShowroom) {
        return <>{children}</>;
    }

    return (
        <Layout>
            {children}
        </Layout>
    );
}
