"use client";

import React, { useEffect, useState } from 'react';

// Live Mumbai time, so international visitors know when to reach us.
export default function MumbaiClock() {
    const [text, setText] = useState('Mumbai, India · IST (UTC+5:30)');

    useEffect(() => {
        const format = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit' });
        const tick = () => setText(`It’s ${format.format(new Date())} in Mumbai`);
        tick();
        const id = setInterval(tick, 30000);
        return () => clearInterval(id);
    }, []);

    return <span>{text}</span>;
}
