"use client";
import React from 'react';

const Schema = () => {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Force Sports & Wears India',
        'alternateName': ['Force Sports', 'Force Sports India', 'Force Sports and Wears India'],
        'url': 'https://www.forcesportsindia.com',
        'logo': 'https://www.forcesportsindia.com/brand-logo.png',
        'description': 'Premium manufacturer of customized sports jerseys and athletic apparel in Mumbai.',
        'founder': 'Anand Sanghai',
        'foundingDate': '2007',
        'slogan': 'Fueling Champions Since 2007',
        'knowsAbout': [
            'Force Sports',
            'Force Sports India',
            'Force Sports and Wears India',
            'Custom Sportswear Manufacturing',
            'Force Sports Jerseys',
            'Force Sports Uniforms',
            'Bulk T-Shirts',
            'Corporate Uniforms',
            'Team Jerseys',
            'Sportex Fabrics',
            'Sublimation Printing',
            'Cricket Jerseys',
            'Football Kits',
            'Kabaddi Uniforms',
            'School Sports Uniforms'
        ],
        'sameAs': [
            'https://www.facebook.com/ForceSportsandWearsIndia/',
            'https://www.instagram.com/forcesports_india',
            'https://www.youtube.com/@forcesportsindia',
            'https://www.indiamart.com/forcesportswearindia/'
        ]
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': ['SportsStore', 'Manufacturer', 'WholesaleStore'],
        'name': 'Force Sports & Wears India',
        'areaServed': 'Worldwide',
        'description': 'Global Exporter and Top Bulk T-Shirt & Custom Sportswear Manufacturer. Based in India, supplying worldwide.',
        'image': 'https://www.forcesportsindia.com/og-image.jpg',
        '@id': 'https://www.forcesportsindia.com',
        'url': 'https://www.forcesportsindia.com',
        'telephone': '+91 9594021303',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': '5/31, near Jain Hospital, Motilal Nagar III, Goregaon West',
            'addressLocality': 'Mumbai',
            'postalCode': '400062',
            'addressCountry': 'IN'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 19.1601,
            'longitude': 72.8421
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            'opens': '10:00',
            'closes': '19:00'
        }
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </>
    );
};

export default Schema;
