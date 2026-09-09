"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Loader2, LayoutDashboard, ShoppingBag, Users, Layers, MessageSquare, Star, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                if (pathname !== '/force-hq/login') {
                    router.push('/force-hq/login');
                }
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [pathname, router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/force-hq/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-cyan-600 animate-spin" />
            </div>
        );
    }

    // Don't show sidebar on login page
    if (pathname === '/force-hq/login') {
        return <>{children}</>;
    }

    if (!isAuthenticated) return null;

    const navItems = [
        { name: 'Dashboard', path: '/force-hq', icon: LayoutDashboard },
        { name: 'Leads', path: '/force-hq/leads', icon: MessageSquare },
        { name: 'Testimonials', path: '/force-hq/testimonials', icon: Star },
        { name: 'Products', path: '/force-hq/products', icon: ShoppingBag },
        { name: 'Uniforms', path: '/force-hq/uniforms', icon: Users },
        { name: 'Fabrics', path: '/force-hq/fabrics', icon: Layers },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 z-50">
                <div className="p-6">
                    <h1 className="text-xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Force Admin
                    </h1>
                </div>
                
                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                            <Link 
                                key={item.path} 
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                    isActive 
                                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/20' 
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-bold text-sm tracking-wide">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-xl transition-all font-bold text-sm tracking-wide"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
