export interface Product {
    id: string;
    title: string;
    brand?: string;
    category: 'T-Shirts' | 'Track Pants' | 'Shorts' | 'Jackets' | 'Bags' | 'Caps' | '3D Innovations';
    sport?: 'Badminton' | 'Cricket' | 'Football' | 'Volleyball' | 'Kabaddi' | 'Pickleball' | 'Tennis' | 'Table Tennis' | 'Other' | 'All';
    usageType?: 'T20' | 'Practice' | 'Travel' | 'Coaches' | 'Officials' | 'General';
    productCode?: string;
    description: string;
    longDescription: string;
    image: string;
    imageBack?: string;
    gallery?: string[];
    features: string[];
    specs: Record<string, string>;
    customizationOptions?: string[];
    fabrics?: string[];
    gsms?: string[];
    sizeCharts?: Record<string, { label: string; values: Record<string, string>[] }>;
}

export const PRODUCTS: Product[] = [
    {
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 1/326.png",
            "/New folder/ppt 1/327.png",
            "/New folder/ppt 1/firozi.png",
            "/New folder/ppt 1/india blue.png",
            "/New folder/ppt 1/L grey.png",
            "/New folder/ppt 1/lemon.png",
            "/New folder/ppt 1/orange.png",
            "/New folder/ppt 1/parrot.png",
            "/New folder/ppt 1/peach.png",
            "/New folder/ppt 1/pink.png",
            "/New folder/ppt 1/red.png",
            "/New folder/ppt 1/sky.png",
            "/New folder/ppt 1/turquoise.png"
        ],
        "image": "/New folder/ppt 1/326.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #1 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 1/327.png",
        "productCode": "#3D-INV-01",
        "title": "3D Innovation Design #1",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "sport": "All",
        "id": "force-3d-innov-01",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "category": "3D Innovations",
        "brand": "Force"
    },
    {
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-02",
        "brand": "Force",
        "category": "3D Innovations",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #2 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 2/339.png",
        "productCode": "#3D-INV-02",
        "image": "/New folder/ppt 2/340.png",
        "gallery": [
            "/New folder/ppt 2/339.png",
            "/New folder/ppt 2/340.png",
            "/New folder/ppt 2/beige.png",
            "/New folder/ppt 2/bisleri.png",
            "/New folder/ppt 2/d grey.png",
            "/New folder/ppt 2/firozi.png",
            "/New folder/ppt 2/l grey.png",
            "/New folder/ppt 2/orange.png",
            "/New folder/ppt 2/parrot.png",
            "/New folder/ppt 2/peach.png",
            "/New folder/ppt 2/peacock.png",
            "/New folder/ppt 2/pink.png",
            "/New folder/ppt 2/red.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "sport": "All",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "title": "3D Innovation Design #2"
    },
    {
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #3 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 3/353.png",
        "productCode": "#3D-INV-03",
        "image": "/New folder/ppt 3/352.png",
        "gallery": [
            "/New folder/ppt 3/352.png",
            "/New folder/ppt 3/353.png",
            "/New folder/ppt 3/bisleri.png",
            "/New folder/ppt 3/dark grey.png",
            "/New folder/ppt 3/firozi.png",
            "/New folder/ppt 3/green.png",
            "/New folder/ppt 3/light grey.png",
            "/New folder/ppt 3/navy blue.png",
            "/New folder/ppt 3/orange.png",
            "/New folder/ppt 3/pink.png",
            "/New folder/ppt 3/red.png",
            "/New folder/ppt 3/skyblue.png",
            "/New folder/ppt 3/turquoise.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "title": "3D Innovation Design #3",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "sport": "All",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-03",
        "brand": "Force",
        "category": "3D Innovations"
    },
    {
        "category": "3D Innovations",
        "brand": "Force",
        "id": "force-3d-innov-04",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "sport": "All",
        "title": "3D Innovation Design #4",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 4/365.png",
            "/New folder/ppt 4/366.png",
            "/New folder/ppt 4/bisleri.png",
            "/New folder/ppt 4/dark grey.png",
            "/New folder/ppt 4/green.png",
            "/New folder/ppt 4/inidia bule.png",
            "/New folder/ppt 4/Light grey.png",
            "/New folder/ppt 4/maroon.png",
            "/New folder/ppt 4/orange.png",
            "/New folder/ppt 4/peach.png",
            "/New folder/ppt 4/peacock.png",
            "/New folder/ppt 4/red.png",
            "/New folder/ppt 4/sky bule.png"
        ],
        "image": "/New folder/ppt 4/366.png",
        "productCode": "#3D-INV-04",
        "imageBack": "/New folder/ppt 4/365.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #4 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation."
    },
    {
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-05",
        "category": "3D Innovations",
        "brand": "Force",
        "gallery": [
            "/New folder/ppt 5/379.png",
            "/New folder/ppt 5/380.png",
            "/New folder/ppt 5/bisleri.png",
            "/New folder/ppt 5/firozi.png",
            "/New folder/ppt 5/india blue.png",
            "/New folder/ppt 5/lemon.png",
            "/New folder/ppt 5/maroon.png",
            "/New folder/ppt 5/navy blue.png",
            "/New folder/ppt 5/orange.png",
            "/New folder/ppt 5/pink.png",
            "/New folder/ppt 5/red.png",
            "/New folder/ppt 5/royal bule.png",
            "/New folder/ppt 5/sky bule.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "productCode": "#3D-INV-05",
        "imageBack": "/New folder/ppt 5/379.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #5 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "image": "/New folder/ppt 5/380.png",
        "sport": "All",
        "title": "3D Innovation Design #5",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        }
    },
    {
        "title": "3D Innovation Design #6",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "sport": "All",
        "gallery": [
            "/New folder/ppt 6/392.png",
            "/New folder/ppt 6/393.png",
            "/New folder/ppt 6/bisleri.png",
            "/New folder/ppt 6/firozi.png",
            "/New folder/ppt 6/golden.png",
            "/New folder/ppt 6/india blue.png",
            "/New folder/ppt 6/lemon.png",
            "/New folder/ppt 6/light grey.png",
            "/New folder/ppt 6/navy blue.png",
            "/New folder/ppt 6/porrot.png",
            "/New folder/ppt 6/red.png",
            "/New folder/ppt 6/royal blue.png",
            "/New folder/ppt 6/sky blue.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "productCode": "#3D-INV-06",
        "imageBack": "/New folder/ppt 6/393.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #6 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "image": "/New folder/ppt 6/392.png",
        "category": "3D Innovations",
        "brand": "Force",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-06"
    },
    {
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-07",
        "brand": "Force",
        "category": "3D Innovations",
        "productCode": "#3D-INV-07",
        "imageBack": "/New folder/ppt 7/1.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #7 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "image": "/New folder/ppt 7/2.png",
        "gallery": [
            "/New folder/ppt 7/1.png",
            "/New folder/ppt 7/2.png",
            "/New folder/ppt 7/bisleri.png",
            "/New folder/ppt 7/Dark grey.png",
            "/New folder/ppt 7/firozi.png",
            "/New folder/ppt 7/leomen.png",
            "/New folder/ppt 7/Light purple.png",
            "/New folder/ppt 7/navyblue.png",
            "/New folder/ppt 7/orange.png",
            "/New folder/ppt 7/peacock.png",
            "/New folder/ppt 7/red.png",
            "/New folder/ppt 7/royal bule.png",
            "/New folder/ppt 7/sky blue.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "title": "3D Innovation Design #7",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "sport": "All"
    },
    {
        "title": "3D Innovation Design #8",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "sport": "All",
        "gallery": [
            "/New folder/ppt 8/14.png",
            "/New folder/ppt 8/15.png",
            "/New folder/ppt 8/firozi.png",
            "/New folder/ppt 8/golden.png",
            "/New folder/ppt 8/indian blue.png",
            "/New folder/ppt 8/lemon.png",
            "/New folder/ppt 8/light grey.png",
            "/New folder/ppt 8/navy blue.png",
            "/New folder/ppt 8/orange.png",
            "/New folder/ppt 8/parrot.png",
            "/New folder/ppt 8/peach.png",
            "/New folder/ppt 8/peacock.png",
            "/New folder/ppt 8/Red pink.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #8 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 8/15.png",
        "productCode": "#3D-INV-08",
        "image": "/New folder/ppt 8/14.png",
        "category": "3D Innovations",
        "brand": "Force",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-08"
    },
    {
        "category": "3D Innovations",
        "brand": "Force",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-09",
        "title": "3D Innovation Design #9",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "sport": "All",
        "gallery": [
            "/New folder/ppt 9/27.png",
            "/New folder/ppt 9/28.png",
            "/New folder/ppt 9/bisleri.png",
            "/New folder/ppt 9/firozi.png",
            "/New folder/ppt 9/golden (2).png",
            "/New folder/ppt 9/golden.png",
            "/New folder/ppt 9/green.png",
            "/New folder/ppt 9/indian blue.png",
            "/New folder/ppt 9/light purple.png",
            "/New folder/ppt 9/maroon.png",
            "/New folder/ppt 9/orange.png",
            "/New folder/ppt 9/peacock.png",
            "/New folder/ppt 9/skyblue.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "productCode": "#3D-INV-09",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #9 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 9/27.png",
        "image": "/New folder/ppt 9/28.png"
    },
    {
        "brand": "Force",
        "category": "3D Innovations",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-10",
        "sport": "All",
        "title": "3D Innovation Design #10",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "imageBack": "/New folder/ppt 10/41.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #10 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "productCode": "#3D-INV-10",
        "image": "/New folder/ppt 10/40.png",
        "gallery": [
            "/New folder/ppt 10/40.png",
            "/New folder/ppt 10/41.png",
            "/New folder/ppt 10/beight.png",
            "/New folder/ppt 10/bisleri.png",
            "/New folder/ppt 10/india blue.png",
            "/New folder/ppt 10/lemon.png",
            "/New folder/ppt 10/light grey.png",
            "/New folder/ppt 10/maroon.png",
            "/New folder/ppt 10/orange.png",
            "/New folder/ppt 10/parrot.png",
            "/New folder/ppt 10/red pink.png",
            "/New folder/ppt 10/red.png",
            "/New folder/ppt 10/sky blue.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ]
    },
    {
        "image": "/New folder/ppt 11/54.png",
        "productCode": "#3D-INV-11",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #11 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 11/53.png",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 11/53.png",
            "/New folder/ppt 11/54.png",
            "/New folder/ppt 11/61.png",
            "/New folder/ppt 11/bisleri.png",
            "/New folder/ppt 11/dark grey.png",
            "/New folder/ppt 11/green.png",
            "/New folder/ppt 11/india blue.png",
            "/New folder/ppt 11/light pink.png",
            "/New folder/ppt 11/light purple.png",
            "/New folder/ppt 11/maroon.png",
            "/New folder/ppt 11/orange.png",
            "/New folder/ppt 11/purple.png",
            "/New folder/ppt 11/red.png"
        ],
        "title": "3D Innovation Design #11",
        "specs": {
            "Design": "3D Technical",
            "Series": "3D Innovations",
            "Material": "Performance Polyester"
        },
        "sport": "All",
        "id": "force-3d-innov-11",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "brand": "Force",
        "category": "3D Innovations"
    },
    {
        "image": "/New folder/ppt 12/66.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #12 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 12/67.png",
        "productCode": "#3D-INV-12",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 12/66.png",
            "/New folder/ppt 12/67.png",
            "/New folder/ppt 12/beige.png",
            "/New folder/ppt 12/golden yellow.png",
            "/New folder/ppt 12/green.png",
            "/New folder/ppt 12/lemon.png",
            "/New folder/ppt 12/light grey.png",
            "/New folder/ppt 12/light purple.png",
            "/New folder/ppt 12/navy blue.png",
            "/New folder/ppt 12/peacock.png",
            "/New folder/ppt 12/red pink.png",
            "/New folder/ppt 12/red.png",
            "/New folder/ppt 12/turquoise.png"
        ],
        "sport": "All",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "title": "3D Innovation Design #12",
        "id": "force-3d-innov-12",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "brand": "Force",
        "category": "3D Innovations"
    },
    {
        "id": "force-3d-innov-13",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "category": "3D Innovations",
        "brand": "Force",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 13/79.png",
            "/New folder/ppt 13/80.png",
            "/New folder/ppt 13/golden.png",
            "/New folder/ppt 13/india blue.png",
            "/New folder/ppt 13/maroon.png",
            "/New folder/ppt 13/orange.png",
            "/New folder/ppt 13/parrot.png",
            "/New folder/ppt 13/peacock.png",
            "/New folder/ppt 13/pink.png",
            "/New folder/ppt 13/purple.png",
            "/New folder/ppt 13/red.png",
            "/New folder/ppt 13/sky bule.png",
            "/New folder/ppt 13/yellow.png"
        ],
        "image": "/New folder/ppt 13/80.png",
        "productCode": "#3D-INV-13",
        "imageBack": "/New folder/ppt 13/79.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #13 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "title": "3D Innovation Design #13",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "sport": "All"
    },
    {
        "image": "/New folder/ppt 14/92.png",
        "productCode": "#3D-INV-14",
        "imageBack": "/New folder/ppt 14/93.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #14 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 14/92.png",
            "/New folder/ppt 14/93.png",
            "/New folder/ppt 14/94.png",
            "/New folder/ppt 14/95.png",
            "/New folder/ppt 14/96.png",
            "/New folder/ppt 14/97.png",
            "/New folder/ppt 14/98.png",
            "/New folder/ppt 14/99.png",
            "/New folder/ppt 14/100.png",
            "/New folder/ppt 14/101.png",
            "/New folder/ppt 14/102.png",
            "/New folder/ppt 14/103.png",
            "/New folder/ppt 14/104.png"
        ],
        "sport": "All",
        "title": "3D Innovation Design #14",
        "specs": {
            "Design": "3D Technical",
            "Series": "3D Innovations",
            "Material": "Performance Polyester"
        },
        "id": "force-3d-innov-14",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "brand": "Force",
        "category": "3D Innovations"
    },
    {
        "id": "force-3d-innov-15",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "brand": "Force",
        "category": "3D Innovations",
        "image": "/New folder/ppt 15/106.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #15 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 15/105.png",
        "productCode": "#3D-INV-15",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 15/105.png",
            "/New folder/ppt 15/106.png",
            "/New folder/ppt 15/107.png",
            "/New folder/ppt 15/108.png",
            "/New folder/ppt 15/109.png",
            "/New folder/ppt 15/110.png",
            "/New folder/ppt 15/111.png",
            "/New folder/ppt 15/112.png",
            "/New folder/ppt 15/113.png",
            "/New folder/ppt 15/114.png",
            "/New folder/ppt 15/115.png",
            "/New folder/ppt 15/116.png",
            "/New folder/ppt 15/117.png"
        ],
        "title": "3D Innovation Design #15",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "sport": "All"
    },
    {
        "brand": "Force",
        "category": "3D Innovations",
        "id": "force-3d-innov-16",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "title": "3D Innovation Design #16",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "sport": "All",
        "image": "/New folder/ppt 16/118.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #16 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 16/119.png",
        "productCode": "#3D-INV-16",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 16/118.png",
            "/New folder/ppt 16/119.png",
            "/New folder/ppt 16/120.png",
            "/New folder/ppt 16/121.png",
            "/New folder/ppt 16/122.png",
            "/New folder/ppt 16/123.png",
            "/New folder/ppt 16/124.png",
            "/New folder/ppt 16/125.png",
            "/New folder/ppt 16/126.png",
            "/New folder/ppt 16/127.png",
            "/New folder/ppt 16/128.png",
            "/New folder/ppt 16/129.png",
            "/New folder/ppt 16/130.png"
        ]
    },
    {
        "title": "3D Innovation Design #17",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "sport": "All",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 17/144.png",
            "/New folder/ppt 17/145.png",
            "/New folder/ppt 17/146.png",
            "/New folder/ppt 17/147.png",
            "/New folder/ppt 17/148.png",
            "/New folder/ppt 17/149.png",
            "/New folder/ppt 17/150.png",
            "/New folder/ppt 17/151.png",
            "/New folder/ppt 17/152.png",
            "/New folder/ppt 17/153.png",
            "/New folder/ppt 17/154.png",
            "/New folder/ppt 17/155.png",
            "/New folder/ppt 17/156.png"
        ],
        "image": "/New folder/ppt 17/144.png",
        "imageBack": "/New folder/ppt 17/145.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #17 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "productCode": "#3D-INV-17",
        "category": "3D Innovations",
        "brand": "Force",
        "id": "force-3d-innov-17",
        "description": "Advanced technical 3D sublimated design with multiple color variants."
    },
    {
        "sport": "All",
        "title": "3D Innovation Design #18",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "productCode": "#3D-INV-18",
        "imageBack": "/New folder/ppt 18/131.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #18 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "image": "/New folder/ppt 18/132.png",
        "gallery": [
            "/New folder/ppt 18/131.png",
            "/New folder/ppt 18/132.png",
            "/New folder/ppt 18/133.png",
            "/New folder/ppt 18/134.png",
            "/New folder/ppt 18/135.png",
            "/New folder/ppt 18/136.png",
            "/New folder/ppt 18/137.png",
            "/New folder/ppt 18/138.png",
            "/New folder/ppt 18/139.png",
            "/New folder/ppt 18/140.png",
            "/New folder/ppt 18/141.png",
            "/New folder/ppt 18/142.png",
            "/New folder/ppt 18/143.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "brand": "Force",
        "category": "3D Innovations",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-18"
    },
    {
        "category": "3D Innovations",
        "brand": "Force",
        "id": "force-3d-innov-19",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "sport": "All",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "title": "3D Innovation Design #19",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 19/183.png",
            "/New folder/ppt 19/184.png",
            "/New folder/ppt 19/185.png",
            "/New folder/ppt 19/186.png",
            "/New folder/ppt 19/187.png",
            "/New folder/ppt 19/188.png",
            "/New folder/ppt 19/189.png",
            "/New folder/ppt 19/190.png",
            "/New folder/ppt 19/191.png",
            "/New folder/ppt 19/192.png",
            "/New folder/ppt 19/193.png",
            "/New folder/ppt 19/194.png",
            "/New folder/ppt 19/195.png"
        ],
        "image": "/New folder/ppt 19/184.png",
        "productCode": "#3D-INV-19",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #19 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 19/183.png"
    },
    {
        "category": "3D Innovations",
        "brand": "Force",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-20",
        "title": "3D Innovation Design #20",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "sport": "All",
        "gallery": [
            "/New folder/ppt 20/196.png",
            "/New folder/ppt 20/197.png",
            "/New folder/ppt 20/198.png",
            "/New folder/ppt 20/199.png",
            "/New folder/ppt 20/200.png",
            "/New folder/ppt 20/201.png",
            "/New folder/ppt 20/202.png",
            "/New folder/ppt 20/203.png",
            "/New folder/ppt 20/204.png",
            "/New folder/ppt 20/205.png",
            "/New folder/ppt 20/206.png",
            "/New folder/ppt 20/207.png",
            "/New folder/ppt 20/208.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #20 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 20/197.png",
        "productCode": "#3D-INV-20",
        "image": "/New folder/ppt 20/196.png"
    },
    {
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-21",
        "brand": "Force",
        "category": "3D Innovations",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #21 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 21/209.png",
        "productCode": "#3D-INV-21",
        "image": "/New folder/ppt 21/210.png",
        "gallery": [
            "/New folder/ppt 21/209.png",
            "/New folder/ppt 21/210.png",
            "/New folder/ppt 21/211.png",
            "/New folder/ppt 21/212.png",
            "/New folder/ppt 21/213.png",
            "/New folder/ppt 21/214.png",
            "/New folder/ppt 21/215.png",
            "/New folder/ppt 21/216.png",
            "/New folder/ppt 21/217.png",
            "/New folder/ppt 21/218.png",
            "/New folder/ppt 21/219.png",
            "/New folder/ppt 21/220.png",
            "/New folder/ppt 21/221.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "sport": "All",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "title": "3D Innovation Design #21"
    },
    {
        "sport": "All",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "title": "3D Innovation Design #22",
        "image": "/New folder/ppt 22/222.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #22 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 22/223.png",
        "productCode": "#3D-INV-22",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 22/222.png",
            "/New folder/ppt 22/223.png",
            "/New folder/ppt 22/224.png",
            "/New folder/ppt 22/225.png",
            "/New folder/ppt 22/226.png",
            "/New folder/ppt 22/227.png",
            "/New folder/ppt 22/228.png",
            "/New folder/ppt 22/229.png",
            "/New folder/ppt 22/230.png",
            "/New folder/ppt 22/231.png",
            "/New folder/ppt 22/232.png",
            "/New folder/ppt 22/233.png",
            "/New folder/ppt 22/234.png"
        ],
        "brand": "Force",
        "category": "3D Innovations",
        "id": "force-3d-innov-22",
        "description": "Advanced technical 3D sublimated design with multiple color variants."
    },
    {
        "id": "force-3d-innov-23",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "brand": "Force",
        "category": "3D Innovations",
        "image": "/New folder/ppt 23/274.png",
        "productCode": "#3D-INV-23",
        "imageBack": "/New folder/ppt 23/275.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #23 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 23/274.png",
            "/New folder/ppt 23/275.png",
            "/New folder/ppt 23/276.png",
            "/New folder/ppt 23/277.png",
            "/New folder/ppt 23/278.png",
            "/New folder/ppt 23/279.png",
            "/New folder/ppt 23/280.png",
            "/New folder/ppt 23/281.png",
            "/New folder/ppt 23/282.png",
            "/New folder/ppt 23/283.png",
            "/New folder/ppt 23/284.png",
            "/New folder/ppt 23/285.png",
            "/New folder/ppt 23/286.png",
            "/New folder/ppt 23/285 (2).png"
        ],
        "sport": "All",
        "title": "3D Innovation Design #23",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        }
    },
    {
        "title": "3D Innovation Design #24",
        "specs": {
            "Design": "3D Technical",
            "Series": "3D Innovations",
            "Material": "Performance Polyester"
        },
        "sport": "All",
        "image": "/New folder/ppt 24/288.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #24 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 24/287.png",
        "productCode": "#3D-INV-24",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 24/287.png",
            "/New folder/ppt 24/288.png",
            "/New folder/ppt 24/289.png",
            "/New folder/ppt 24/290.png",
            "/New folder/ppt 24/291.png",
            "/New folder/ppt 24/292.png",
            "/New folder/ppt 24/293.png",
            "/New folder/ppt 24/294.png",
            "/New folder/ppt 24/295.png",
            "/New folder/ppt 24/296.png",
            "/New folder/ppt 24/297.png",
            "/New folder/ppt 24/298.png",
            "/New folder/ppt 24/299.png"
        ],
        "brand": "Force",
        "category": "3D Innovations",
        "id": "force-3d-innov-24",
        "description": "Advanced technical 3D sublimated design with multiple color variants."
    },
    {
        "id": "force-3d-innov-25",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "category": "3D Innovations",
        "brand": "Force",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 25/235.png",
            "/New folder/ppt 25/236.png",
            "/New folder/ppt 25/237.png",
            "/New folder/ppt 25/238.png",
            "/New folder/ppt 25/239.png",
            "/New folder/ppt 25/240.png",
            "/New folder/ppt 25/241.png",
            "/New folder/ppt 25/242.png",
            "/New folder/ppt 25/243.png",
            "/New folder/ppt 25/244.png",
            "/New folder/ppt 25/245.png",
            "/New folder/ppt 25/246.png",
            "/New folder/ppt 25/247.png"
        ],
        "image": "/New folder/ppt 25/236.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #25 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 25/235.png",
        "productCode": "#3D-INV-25",
        "sport": "All",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "title": "3D Innovation Design #25"
    },
    {
        "title": "3D Innovation Design #26",
        "specs": {
            "Design": "3D Technical",
            "Material": "Performance Polyester",
            "Series": "3D Innovations"
        },
        "sport": "All",
        "productCode": "#3D-INV-26",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #26 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 26/249.png",
        "image": "/New folder/ppt 26/248.png",
        "gallery": [
            "/New folder/ppt 26/248.png",
            "/New folder/ppt 26/249.png",
            "/New folder/ppt 26/250.png",
            "/New folder/ppt 26/251.png",
            "/New folder/ppt 26/252.png",
            "/New folder/ppt 26/253.png",
            "/New folder/ppt 26/254.png",
            "/New folder/ppt 26/255.png",
            "/New folder/ppt 26/256.png",
            "/New folder/ppt 26/257.png",
            "/New folder/ppt 26/258.png",
            "/New folder/ppt 26/259.png",
            "/New folder/ppt 26/260.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "brand": "Force",
        "category": "3D Innovations",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-26"
    },
    {
        "brand": "Force",
        "category": "3D Innovations",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-27",
        "title": "3D Innovation Design #27",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "sport": "All",
        "imageBack": "/New folder/ppt 27/301.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #27 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "productCode": "#3D-INV-27",
        "image": "/New folder/ppt 27/300.png",
        "gallery": [
            "/New folder/ppt 27/300.png",
            "/New folder/ppt 27/301.png",
            "/New folder/ppt 27/302.png",
            "/New folder/ppt 27/303.png",
            "/New folder/ppt 27/304.png",
            "/New folder/ppt 27/305.png",
            "/New folder/ppt 27/306.png",
            "/New folder/ppt 27/307.png",
            "/New folder/ppt 27/308.png",
            "/New folder/ppt 27/309.png",
            "/New folder/ppt 27/310.png",
            "/New folder/ppt 27/311.png",
            "/New folder/ppt 27/312.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ]
    },
    {
        "brand": "Force",
        "category": "3D Innovations",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-28",
        "title": "3D Innovation Design #28",
        "specs": {
            "Design": "3D Technical",
            "Series": "3D Innovations",
            "Material": "Performance Polyester"
        },
        "sport": "All",
        "productCode": "#3D-INV-28",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #28 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 28/313.png",
        "image": "/New folder/ppt 28/314.png",
        "gallery": [
            "/New folder/ppt 28/313.png",
            "/New folder/ppt 28/314.png",
            "/New folder/ppt 28/315.png",
            "/New folder/ppt 28/316.png",
            "/New folder/ppt 28/317.png",
            "/New folder/ppt 28/318.png",
            "/New folder/ppt 28/319.png",
            "/New folder/ppt 28/320.png",
            "/New folder/ppt 28/321.png",
            "/New folder/ppt 28/322.png",
            "/New folder/ppt 28/323.png",
            "/New folder/ppt 28/324.png",
            "/New folder/ppt 28/325.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ]
    },
    {
        "gallery": [
            "/New folder/ppt 29/157.png",
            "/New folder/ppt 29/158.png",
            "/New folder/ppt 29/159.png",
            "/New folder/ppt 29/160.png",
            "/New folder/ppt 29/161.png",
            "/New folder/ppt 29/162.png",
            "/New folder/ppt 29/163.png",
            "/New folder/ppt 29/164.png",
            "/New folder/ppt 29/165.png",
            "/New folder/ppt 29/166.png",
            "/New folder/ppt 29/167.png",
            "/New folder/ppt 29/168.png",
            "/New folder/ppt 29/169.png"
        ],
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #29 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "imageBack": "/New folder/ppt 29/157.png",
        "productCode": "#3D-INV-29",
        "image": "/New folder/ppt 29/158.png",
        "title": "3D Innovation Design #29",
        "specs": {
            "Series": "3D Innovations",
            "Material": "Performance Polyester",
            "Design": "3D Technical"
        },
        "sport": "All",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "id": "force-3d-innov-29",
        "category": "3D Innovations",
        "brand": "Force"
    },
    {
        "id": "force-3d-innov-30",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "category": "3D Innovations",
        "brand": "Force",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 30/170.png",
            "/New folder/ppt 30/171.png",
            "/New folder/ppt 30/172.png",
            "/New folder/ppt 30/173.png",
            "/New folder/ppt 30/174.png",
            "/New folder/ppt 30/175.png",
            "/New folder/ppt 30/176.png",
            "/New folder/ppt 30/177.png",
            "/New folder/ppt 30/178.png",
            "/New folder/ppt 30/179.png",
            "/New folder/ppt 30/180.png",
            "/New folder/ppt 30/181.png",
            "/New folder/ppt 30/182.png"
        ],
        "image": "/New folder/ppt 30/170.png",
        "productCode": "#3D-INV-30",
        "imageBack": "/New folder/ppt 30/171.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #30 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "sport": "All",
        "title": "3D Innovation Design #30",
        "specs": {
            "Design": "3D Technical",
            "Series": "3D Innovations",
            "Material": "Performance Polyester"
        }
    },
    {
        "brand": "Force",
        "category": "T-Shirts",
        "id": "force-3d-innov-31",
        "description": "Advanced technical 3D sublimated design with multiple color variants.",
        "title": "3D Innovation Design #31",
        "specs": {
            "Material": "Performance Polyester",
            "Series": "3D Innovations",
            "Design": "3D Technical"
        },
        "sport": "All",
        "image": "/New folder/ppt 31/262.png",
        "imageBack": "/New folder/ppt 31/261.png",
        "longDescription": "Part of our cutting-edge 3D Innovations series, Design #31 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.",
        "productCode": "#3D-INV-31",
        "features": [
            "Multiple Color Variants",
            "3D Sublimated Graphics",
            "High-Performance Technical Fabric",
            "Moisture-Wicking Technology"
        ],
        "gallery": [
            "/New folder/ppt 31/261.png",
            "/New folder/ppt 31/262.png",
            "/New folder/ppt 31/263.png",
            "/New folder/ppt 31/264.png",
            "/New folder/ppt 31/265.png",
            "/New folder/ppt 31/266.png",
            "/New folder/ppt 31/267.png",
            "/New folder/ppt 31/268.png",
            "/New folder/ppt 31/269.png",
            "/New folder/ppt 31/270.png",
            "/New folder/ppt 31/271.png",
            "/New folder/ppt 31/272.png",
            "/New folder/ppt 31/273.png"
        ]
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 1/326.png",
            "/New folder/ppt 1/327.png",
            "/New folder/ppt 1/firozi.png",
            "/New folder/ppt 1/india blue.png",
            "/New folder/ppt 1/L grey.png",
            "/New folder/ppt 1/lemon.png",
            "/New folder/ppt 1/orange.png",
            "/New folder/ppt 1/parrot.png",
            "/New folder/ppt 1/peach.png",
            "/New folder/ppt 1/pink.png",
            "/New folder/ppt 1/red.png",
            "/New folder/ppt 1/sky.png",
            "/New folder/ppt 1/turquoise.png"
        ],
        "image": "/New folder/ppt 1/326.png",
        "productCode": "#3D-INV-01",
        "imageBack": "/New folder/ppt 1/327.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "usageType": "T20",
        "title": "3D Innovation Kit 01",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "id": "force-3d-inv-01",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports"
    },
    {
        "id": "force-3d-inv-02",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 2/339.png",
            "/New folder/ppt 2/340.png",
            "/New folder/ppt 2/beige.png",
            "/New folder/ppt 2/bisleri.png",
            "/New folder/ppt 2/d grey.png",
            "/New folder/ppt 2/firozi.png",
            "/New folder/ppt 2/l grey.png",
            "/New folder/ppt 2/orange.png",
            "/New folder/ppt 2/parrot.png",
            "/New folder/ppt 2/peach.png",
            "/New folder/ppt 2/peacock.png",
            "/New folder/ppt 2/pink.png",
            "/New folder/ppt 2/red.png"
        ],
        "image": "/New folder/ppt 2/339.png",
        "productCode": "#3D-INV-02",
        "imageBack": "/New folder/ppt 2/340.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "usageType": "T20",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 02"
    },
    {
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-03",
        "brand": "Force Sports",
        "category": "3D Innovations",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 3/353.png",
        "productCode": "#3D-INV-03",
        "image": "/New folder/ppt 3/352.png",
        "gallery": [
            "/New folder/ppt 3/352.png",
            "/New folder/ppt 3/353.png",
            "/New folder/ppt 3/bisleri.png",
            "/New folder/ppt 3/dark grey.png",
            "/New folder/ppt 3/firozi.png",
            "/New folder/ppt 3/green.png",
            "/New folder/ppt 3/light grey.png",
            "/New folder/ppt 3/navy blue.png",
            "/New folder/ppt 3/orange.png",
            "/New folder/ppt 3/pink.png",
            "/New folder/ppt 3/red.png",
            "/New folder/ppt 3/skyblue.png",
            "/New folder/ppt 3/turquoise.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "3D Innovation Kit 03",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "usageType": "T20"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 4/365.png",
            "/New folder/ppt 4/366.png",
            "/New folder/ppt 4/bisleri.png",
            "/New folder/ppt 4/dark grey.png",
            "/New folder/ppt 4/green.png",
            "/New folder/ppt 4/inidia bule.png",
            "/New folder/ppt 4/Light grey.png",
            "/New folder/ppt 4/maroon.png",
            "/New folder/ppt 4/orange.png",
            "/New folder/ppt 4/peach.png",
            "/New folder/ppt 4/peacock.png",
            "/New folder/ppt 4/red.png",
            "/New folder/ppt 4/sky bule.png"
        ],
        "image": "/New folder/ppt 4/365.png",
        "productCode": "#3D-INV-04",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 4/366.png",
        "usageType": "T20",
        "sport": "Cricket",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "title": "3D Innovation Kit 04",
        "id": "force-3d-inv-04",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports"
    },
    {
        "title": "3D Innovation Kit 05",
        "sport": "Cricket",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "usageType": "T20",
        "gallery": [
            "/New folder/ppt 5/379.png",
            "/New folder/ppt 5/380.png",
            "/New folder/ppt 5/bisleri.png",
            "/New folder/ppt 5/firozi.png",
            "/New folder/ppt 5/india blue.png",
            "/New folder/ppt 5/lemon.png",
            "/New folder/ppt 5/maroon.png",
            "/New folder/ppt 5/navy blue.png",
            "/New folder/ppt 5/orange.png",
            "/New folder/ppt 5/pink.png",
            "/New folder/ppt 5/red.png",
            "/New folder/ppt 5/royal bule.png",
            "/New folder/ppt 5/sky bule.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#3D-INV-05",
        "imageBack": "/New folder/ppt 5/380.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "image": "/New folder/ppt 5/379.png",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-05"
    },
    {
        "usageType": "T20",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "title": "3D Innovation Kit 06",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 6/392.png",
            "/New folder/ppt 6/393.png",
            "/New folder/ppt 6/bisleri.png",
            "/New folder/ppt 6/firozi.png",
            "/New folder/ppt 6/golden.png",
            "/New folder/ppt 6/india blue.png",
            "/New folder/ppt 6/lemon.png",
            "/New folder/ppt 6/light grey.png",
            "/New folder/ppt 6/navy blue.png",
            "/New folder/ppt 6/porrot.png",
            "/New folder/ppt 6/red.png",
            "/New folder/ppt 6/royal blue.png",
            "/New folder/ppt 6/sky blue.png"
        ],
        "image": "/New folder/ppt 6/392.png",
        "productCode": "#3D-INV-06",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 6/393.png",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "id": "force-3d-inv-06",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability."
    },
    {
        "category": "3D Innovations",
        "brand": "Force Sports",
        "id": "force-3d-inv-07",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "sport": "Cricket",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Fit": "Athletic Fit"
        },
        "title": "3D Innovation Kit 07",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 7/1.png",
            "/New folder/ppt 7/2.png",
            "/New folder/ppt 7/bisleri.png",
            "/New folder/ppt 7/Dark grey.png",
            "/New folder/ppt 7/firozi.png",
            "/New folder/ppt 7/leomen.png",
            "/New folder/ppt 7/Light purple.png",
            "/New folder/ppt 7/navyblue.png",
            "/New folder/ppt 7/orange.png",
            "/New folder/ppt 7/peacock.png",
            "/New folder/ppt 7/red.png",
            "/New folder/ppt 7/royal bule.png",
            "/New folder/ppt 7/sky blue.png"
        ],
        "image": "/New folder/ppt 7/1.png",
        "imageBack": "/New folder/ppt 7/2.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "productCode": "#3D-INV-07"
    },
    {
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 8/15.png",
        "productCode": "#3D-INV-08",
        "image": "/New folder/ppt 8/14.png",
        "gallery": [
            "/New folder/ppt 8/14.png",
            "/New folder/ppt 8/15.png",
            "/New folder/ppt 8/firozi.png",
            "/New folder/ppt 8/golden.png",
            "/New folder/ppt 8/indian blue.png",
            "/New folder/ppt 8/lemon.png",
            "/New folder/ppt 8/light grey.png",
            "/New folder/ppt 8/navy blue.png",
            "/New folder/ppt 8/orange.png",
            "/New folder/ppt 8/parrot.png",
            "/New folder/ppt 8/peach.png",
            "/New folder/ppt 8/peacock.png",
            "/New folder/ppt 8/Red pink.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "title": "3D Innovation Kit 08",
        "usageType": "T20",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-08",
        "brand": "Force Sports",
        "category": "3D Innovations"
    },
    {
        "category": "3D Innovations",
        "brand": "Force Sports",
        "id": "force-3d-inv-09",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 09",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 9/27.png",
            "/New folder/ppt 9/28.png",
            "/New folder/ppt 9/bisleri.png",
            "/New folder/ppt 9/firozi.png",
            "/New folder/ppt 9/golden (2).png",
            "/New folder/ppt 9/golden.png",
            "/New folder/ppt 9/green.png",
            "/New folder/ppt 9/indian blue.png",
            "/New folder/ppt 9/light purple.png",
            "/New folder/ppt 9/maroon.png",
            "/New folder/ppt 9/orange.png",
            "/New folder/ppt 9/peacock.png",
            "/New folder/ppt 9/skyblue.png"
        ],
        "image": "/New folder/ppt 9/27.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 9/28.png",
        "productCode": "#3D-INV-09"
    },
    {
        "brand": "Force Sports",
        "category": "3D Innovations",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-10",
        "sport": "Cricket",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Fit": "Athletic Fit"
        },
        "title": "3D Innovation Kit 10",
        "usageType": "T20",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 10/41.png",
        "productCode": "#3D-INV-10",
        "image": "/New folder/ppt 10/40.png",
        "gallery": [
            "/New folder/ppt 10/40.png",
            "/New folder/ppt 10/41.png",
            "/New folder/ppt 10/beight.png",
            "/New folder/ppt 10/bisleri.png",
            "/New folder/ppt 10/india blue.png",
            "/New folder/ppt 10/lemon.png",
            "/New folder/ppt 10/light grey.png",
            "/New folder/ppt 10/maroon.png",
            "/New folder/ppt 10/orange.png",
            "/New folder/ppt 10/parrot.png",
            "/New folder/ppt 10/red pink.png",
            "/New folder/ppt 10/red.png",
            "/New folder/ppt 10/sky blue.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "usageType": "T20",
        "title": "3D Innovation Kit 11",
        "sport": "Cricket",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 11/53.png",
            "/New folder/ppt 11/54.png",
            "/New folder/ppt 11/61.png",
            "/New folder/ppt 11/bisleri.png",
            "/New folder/ppt 11/dark grey.png",
            "/New folder/ppt 11/green.png",
            "/New folder/ppt 11/india blue.png",
            "/New folder/ppt 11/light pink.png",
            "/New folder/ppt 11/light purple.png",
            "/New folder/ppt 11/maroon.png",
            "/New folder/ppt 11/orange.png",
            "/New folder/ppt 11/purple.png",
            "/New folder/ppt 11/red.png"
        ],
        "image": "/New folder/ppt 11/53.png",
        "productCode": "#3D-INV-11",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 11/54.png",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "id": "force-3d-inv-11",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability."
    },
    {
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-12",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "gallery": [
            "/New folder/ppt 12/66.png",
            "/New folder/ppt 12/67.png",
            "/New folder/ppt 12/beige.png",
            "/New folder/ppt 12/golden yellow.png",
            "/New folder/ppt 12/green.png",
            "/New folder/ppt 12/lemon.png",
            "/New folder/ppt 12/light grey.png",
            "/New folder/ppt 12/light purple.png",
            "/New folder/ppt 12/navy blue.png",
            "/New folder/ppt 12/peacock.png",
            "/New folder/ppt 12/red pink.png",
            "/New folder/ppt 12/red.png",
            "/New folder/ppt 12/turquoise.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 12/67.png",
        "productCode": "#3D-INV-12",
        "image": "/New folder/ppt 12/66.png",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 12",
        "usageType": "T20"
    },
    {
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 13",
        "usageType": "T20",
        "gallery": [
            "/New folder/ppt 13/79.png",
            "/New folder/ppt 13/80.png",
            "/New folder/ppt 13/golden.png",
            "/New folder/ppt 13/india blue.png",
            "/New folder/ppt 13/maroon.png",
            "/New folder/ppt 13/orange.png",
            "/New folder/ppt 13/parrot.png",
            "/New folder/ppt 13/peacock.png",
            "/New folder/ppt 13/pink.png",
            "/New folder/ppt 13/purple.png",
            "/New folder/ppt 13/red.png",
            "/New folder/ppt 13/sky bule.png",
            "/New folder/ppt 13/yellow.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#3D-INV-13",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 13/80.png",
        "image": "/New folder/ppt 13/79.png",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-13"
    },
    {
        "image": "/New folder/ppt 14/100.png",
        "productCode": "#3D-INV-14",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 14/101.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 14/100.png",
            "/New folder/ppt 14/101.png",
            "/New folder/ppt 14/102.png",
            "/New folder/ppt 14/103.png",
            "/New folder/ppt 14/104.png",
            "/New folder/ppt 14/92.png",
            "/New folder/ppt 14/93.png",
            "/New folder/ppt 14/94.png",
            "/New folder/ppt 14/95.png",
            "/New folder/ppt 14/96.png",
            "/New folder/ppt 14/97.png",
            "/New folder/ppt 14/98.png",
            "/New folder/ppt 14/99.png"
        ],
        "usageType": "T20",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 14",
        "id": "force-3d-inv-14",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "3D Innovations"
    },
    {
        "id": "force-3d-inv-15",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "3D Innovations",
        "image": "/New folder/ppt 15/105.png",
        "productCode": "#3D-INV-15",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 15/106.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 15/105.png",
            "/New folder/ppt 15/106.png",
            "/New folder/ppt 15/107.png",
            "/New folder/ppt 15/108.png",
            "/New folder/ppt 15/109.png",
            "/New folder/ppt 15/110.png",
            "/New folder/ppt 15/111.png",
            "/New folder/ppt 15/112.png",
            "/New folder/ppt 15/113.png",
            "/New folder/ppt 15/114.png",
            "/New folder/ppt 15/115.png",
            "/New folder/ppt 15/116.png",
            "/New folder/ppt 15/117.png"
        ],
        "usageType": "T20",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 15"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 16/118.png",
            "/New folder/ppt 16/119.png",
            "/New folder/ppt 16/120.png",
            "/New folder/ppt 16/121.png",
            "/New folder/ppt 16/122.png",
            "/New folder/ppt 16/123.png",
            "/New folder/ppt 16/124.png",
            "/New folder/ppt 16/125.png",
            "/New folder/ppt 16/126.png",
            "/New folder/ppt 16/127.png",
            "/New folder/ppt 16/128.png",
            "/New folder/ppt 16/129.png",
            "/New folder/ppt 16/130.png"
        ],
        "image": "/New folder/ppt 16/118.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 16/119.png",
        "productCode": "#3D-INV-16",
        "usageType": "T20",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 16",
        "id": "force-3d-inv-16",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports"
    },
    {
        "image": "/New folder/ppt 17/144.png",
        "productCode": "#3D-INV-17",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 17/145.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 17/144.png",
            "/New folder/ppt 17/145.png",
            "/New folder/ppt 17/146.png",
            "/New folder/ppt 17/147.png",
            "/New folder/ppt 17/148.png",
            "/New folder/ppt 17/149.png",
            "/New folder/ppt 17/150.png",
            "/New folder/ppt 17/151.png",
            "/New folder/ppt 17/152.png",
            "/New folder/ppt 17/153.png",
            "/New folder/ppt 17/154.png",
            "/New folder/ppt 17/155.png",
            "/New folder/ppt 17/156.png"
        ],
        "usageType": "T20",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "title": "3D Innovation Kit 17",
        "id": "force-3d-inv-17",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "3D Innovations"
    },
    {
        "brand": "Force Sports",
        "category": "3D Innovations",
        "id": "force-3d-inv-18",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "title": "3D Innovation Kit 18",
        "sport": "Cricket",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "image": "/New folder/ppt 18/131.png",
        "productCode": "#3D-INV-18",
        "imageBack": "/New folder/ppt 18/132.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 18/131.png",
            "/New folder/ppt 18/132.png",
            "/New folder/ppt 18/133.png",
            "/New folder/ppt 18/134.png",
            "/New folder/ppt 18/135.png",
            "/New folder/ppt 18/136.png",
            "/New folder/ppt 18/137.png",
            "/New folder/ppt 18/138.png",
            "/New folder/ppt 18/139.png",
            "/New folder/ppt 18/140.png",
            "/New folder/ppt 18/141.png",
            "/New folder/ppt 18/142.png",
            "/New folder/ppt 18/143.png"
        ]
    },
    {
        "category": "3D Innovations",
        "brand": "Force Sports",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-19",
        "title": "3D Innovation Kit 19",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations"
        },
        "sport": "Cricket",
        "usageType": "T20",
        "gallery": [
            "/New folder/ppt 19/183.png",
            "/New folder/ppt 19/184.png",
            "/New folder/ppt 19/185.png",
            "/New folder/ppt 19/186.png",
            "/New folder/ppt 19/187.png",
            "/New folder/ppt 19/188.png",
            "/New folder/ppt 19/189.png",
            "/New folder/ppt 19/190.png",
            "/New folder/ppt 19/191.png",
            "/New folder/ppt 19/192.png",
            "/New folder/ppt 19/193.png",
            "/New folder/ppt 19/194.png",
            "/New folder/ppt 19/195.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#3D-INV-19",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 19/184.png",
        "image": "/New folder/ppt 19/183.png"
    },
    {
        "id": "force-3d-inv-20",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "3D Innovations",
        "image": "/New folder/ppt 20/196.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 20/197.png",
        "productCode": "#3D-INV-20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 20/196.png",
            "/New folder/ppt 20/197.png",
            "/New folder/ppt 20/198.png",
            "/New folder/ppt 20/199.png",
            "/New folder/ppt 20/200.png",
            "/New folder/ppt 20/201.png",
            "/New folder/ppt 20/202.png",
            "/New folder/ppt 20/203.png",
            "/New folder/ppt 20/204.png",
            "/New folder/ppt 20/205.png",
            "/New folder/ppt 20/206.png",
            "/New folder/ppt 20/207.png",
            "/New folder/ppt 20/208.png"
        ],
        "usageType": "T20",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "title": "3D Innovation Kit 20"
    },
    {
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-21",
        "brand": "Force Sports",
        "category": "3D Innovations",
        "imageBack": "/New folder/ppt 21/210.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "productCode": "#3D-INV-21",
        "image": "/New folder/ppt 21/209.png",
        "gallery": [
            "/New folder/ppt 21/209.png",
            "/New folder/ppt 21/210.png",
            "/New folder/ppt 21/211.png",
            "/New folder/ppt 21/212.png",
            "/New folder/ppt 21/213.png",
            "/New folder/ppt 21/214.png",
            "/New folder/ppt 21/215.png",
            "/New folder/ppt 21/216.png",
            "/New folder/ppt 21/217.png",
            "/New folder/ppt 21/218.png",
            "/New folder/ppt 21/219.png",
            "/New folder/ppt 21/220.png",
            "/New folder/ppt 21/221.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 21",
        "usageType": "T20"
    },
    {
        "id": "force-3d-inv-22",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "3D Innovations",
        "image": "/New folder/ppt 22/222.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 22/223.png",
        "productCode": "#3D-INV-22",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 22/222.png",
            "/New folder/ppt 22/223.png",
            "/New folder/ppt 22/224.png",
            "/New folder/ppt 22/225.png",
            "/New folder/ppt 22/226.png",
            "/New folder/ppt 22/227.png",
            "/New folder/ppt 22/228.png",
            "/New folder/ppt 22/229.png",
            "/New folder/ppt 22/230.png",
            "/New folder/ppt 22/231.png",
            "/New folder/ppt 22/232.png",
            "/New folder/ppt 22/233.png",
            "/New folder/ppt 22/234.png"
        ],
        "usageType": "T20",
        "title": "3D Innovation Kit 22",
        "specs": {
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Cricket"
    },
    {
        "productCode": "#3D-INV-23",
        "imageBack": "/New folder/ppt 23/275.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "image": "/New folder/ppt 23/274.png",
        "gallery": [
            "/New folder/ppt 23/274.png",
            "/New folder/ppt 23/275.png",
            "/New folder/ppt 23/276.png",
            "/New folder/ppt 23/277.png",
            "/New folder/ppt 23/278.png",
            "/New folder/ppt 23/279.png",
            "/New folder/ppt 23/280.png",
            "/New folder/ppt 23/281.png",
            "/New folder/ppt 23/282.png",
            "/New folder/ppt 23/283.png",
            "/New folder/ppt 23/284.png",
            "/New folder/ppt 23/285 (2).png",
            "/New folder/ppt 23/285.png",
            "/New folder/ppt 23/286.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "specs": {
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "title": "3D Innovation Kit 23",
        "usageType": "T20",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-23",
        "brand": "Force Sports",
        "category": "3D Innovations"
    },
    {
        "brand": "Force Sports",
        "category": "3D Innovations",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-24",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 24",
        "usageType": "T20",
        "productCode": "#3D-INV-24",
        "imageBack": "/New folder/ppt 24/288.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "image": "/New folder/ppt 24/287.png",
        "gallery": [
            "/New folder/ppt 24/287.png",
            "/New folder/ppt 24/288.png",
            "/New folder/ppt 24/289.png",
            "/New folder/ppt 24/290.png",
            "/New folder/ppt 24/291.png",
            "/New folder/ppt 24/292.png",
            "/New folder/ppt 24/293.png",
            "/New folder/ppt 24/294.png",
            "/New folder/ppt 24/295.png",
            "/New folder/ppt 24/296.png",
            "/New folder/ppt 24/297.png",
            "/New folder/ppt 24/298.png",
            "/New folder/ppt 24/299.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "brand": "Force Sports",
        "category": "3D Innovations",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-25",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "title": "3D Innovation Kit 25",
        "usageType": "T20",
        "productCode": "#3D-INV-25",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 25/236.png",
        "image": "/New folder/ppt 25/235.png",
        "gallery": [
            "/New folder/ppt 25/235.png",
            "/New folder/ppt 25/236.png",
            "/New folder/ppt 25/237.png",
            "/New folder/ppt 25/238.png",
            "/New folder/ppt 25/239.png",
            "/New folder/ppt 25/240.png",
            "/New folder/ppt 25/241.png",
            "/New folder/ppt 25/242.png",
            "/New folder/ppt 25/243.png",
            "/New folder/ppt 25/244.png",
            "/New folder/ppt 25/245.png",
            "/New folder/ppt 25/246.png",
            "/New folder/ppt 25/247.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "category": "3D Innovations",
        "brand": "Force Sports",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-26",
        "title": "3D Innovation Kit 26",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "usageType": "T20",
        "gallery": [
            "/New folder/ppt 26/248.png",
            "/New folder/ppt 26/249.png",
            "/New folder/ppt 26/250.png",
            "/New folder/ppt 26/251.png",
            "/New folder/ppt 26/252.png",
            "/New folder/ppt 26/253.png",
            "/New folder/ppt 26/254.png",
            "/New folder/ppt 26/255.png",
            "/New folder/ppt 26/256.png",
            "/New folder/ppt 26/257.png",
            "/New folder/ppt 26/258.png",
            "/New folder/ppt 26/259.png",
            "/New folder/ppt 26/260.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#3D-INV-26",
        "imageBack": "/New folder/ppt 26/249.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "image": "/New folder/ppt 26/248.png"
    },
    {
        "gallery": [
            "/New folder/ppt 27/300.png",
            "/New folder/ppt 27/301.png",
            "/New folder/ppt 27/302.png",
            "/New folder/ppt 27/303.png",
            "/New folder/ppt 27/304.png",
            "/New folder/ppt 27/305.png",
            "/New folder/ppt 27/306.png",
            "/New folder/ppt 27/307.png",
            "/New folder/ppt 27/308.png",
            "/New folder/ppt 27/309.png",
            "/New folder/ppt 27/310.png",
            "/New folder/ppt 27/311.png",
            "/New folder/ppt 27/312.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#3D-INV-27",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "imageBack": "/New folder/ppt 27/301.png",
        "image": "/New folder/ppt 27/300.png",
        "title": "3D Innovation Kit 27",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "usageType": "T20",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "id": "force-3d-inv-27",
        "category": "3D Innovations",
        "brand": "Force Sports"
    },
    {
        "usageType": "T20",
        "title": "3D Innovation Kit 28",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "image": "/New folder/ppt 28/313.png",
        "productCode": "#3D-INV-28",
        "imageBack": "/New folder/ppt 28/314.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 28/313.png",
            "/New folder/ppt 28/314.png",
            "/New folder/ppt 28/315.png",
            "/New folder/ppt 28/316.png",
            "/New folder/ppt 28/317.png",
            "/New folder/ppt 28/318.png",
            "/New folder/ppt 28/319.png",
            "/New folder/ppt 28/320.png",
            "/New folder/ppt 28/321.png",
            "/New folder/ppt 28/322.png",
            "/New folder/ppt 28/323.png",
            "/New folder/ppt 28/324.png",
            "/New folder/ppt 28/325.png"
        ],
        "brand": "Force Sports",
        "category": "3D Innovations",
        "id": "force-3d-inv-28",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability."
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 29/157.png",
            "/New folder/ppt 29/158.png",
            "/New folder/ppt 29/159.png",
            "/New folder/ppt 29/160.png",
            "/New folder/ppt 29/161.png",
            "/New folder/ppt 29/162.png",
            "/New folder/ppt 29/163.png",
            "/New folder/ppt 29/164.png",
            "/New folder/ppt 29/165.png",
            "/New folder/ppt 29/166.png",
            "/New folder/ppt 29/167.png",
            "/New folder/ppt 29/168.png",
            "/New folder/ppt 29/169.png"
        ],
        "image": "/New folder/ppt 29/157.png",
        "imageBack": "/New folder/ppt 29/158.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "productCode": "#3D-INV-29",
        "usageType": "T20",
        "title": "3D Innovation Kit 29",
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "id": "force-3d-inv-29",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 30/170.png",
            "/New folder/ppt 30/171.png",
            "/New folder/ppt 30/172.png",
            "/New folder/ppt 30/173.png",
            "/New folder/ppt 30/174.png",
            "/New folder/ppt 30/175.png",
            "/New folder/ppt 30/176.png",
            "/New folder/ppt 30/177.png",
            "/New folder/ppt 30/178.png",
            "/New folder/ppt 30/179.png",
            "/New folder/ppt 30/180.png",
            "/New folder/ppt 30/181.png",
            "/New folder/ppt 30/182.png"
        ],
        "image": "/New folder/ppt 30/170.png",
        "productCode": "#3D-INV-30",
        "imageBack": "/New folder/ppt 30/171.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "usageType": "T20",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Category": "3D Innovations",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "sport": "Cricket",
        "title": "3D Innovation Kit 30",
        "id": "force-3d-inv-30",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports"
    },
    {
        "id": "force-3d-inv-31",
        "description": "Premium sublimated technical sports uniform kit featuring 3D design patterns. Engineered for maximum breathability.",
        "category": "3D Innovations",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/New folder/ppt 31/261.png",
            "/New folder/ppt 31/262.png",
            "/New folder/ppt 31/263.png",
            "/New folder/ppt 31/264.png",
            "/New folder/ppt 31/265.png",
            "/New folder/ppt 31/266.png",
            "/New folder/ppt 31/267.png",
            "/New folder/ppt 31/268.png",
            "/New folder/ppt 31/269.png",
            "/New folder/ppt 31/270.png",
            "/New folder/ppt 31/271.png",
            "/New folder/ppt 31/272.png",
            "/New folder/ppt 31/273.png"
        ],
        "image": "/New folder/ppt 31/261.png",
        "productCode": "#3D-INV-31",
        "imageBack": "/New folder/ppt 31/262.png",
        "longDescription": "Our 3D Innovations range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability.",
        "usageType": "T20",
        "title": "3D Innovation Kit 31",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "3D Innovations",
            "Fit": "Athletic Fit"
        },
        "sport": "Cricket"
    },
    {
        "category": "T-Shirts",
        "brand": "Force",
        "description": "Durable training tee for daily practice sessions.",
        "id": "force-activity-practice",
        "sport": "Other",
        "title": "Everyday Practice Tee",
        "specs": {
            "Material": "Performance Cotton-Poly",
            "Usage": "Practice"
        },
        "usageType": "Practice",
        "features": [
            "Durable Stitching",
            "Comfort Fit",
            "Soft Touch"
        ],
        "imageBack": "/T-shirts/29.png",
        "longDescription": "The Everyday Practice Tee is built to withstand repeated washes and intense training while maintaining its shape and comfort.",
        "productCode": "#ACT-PRAC",
        "image": "/T-shirts/28.png"
    },
    {
        "category": "T-Shirts",
        "brand": "Force",
        "description": "Lightweight jersey for fast-paced T20 activity.",
        "id": "force-activity-t20",
        "specs": {
            "Material": "Aero-Poly",
            "Usage": "T20 Practice"
        },
        "title": "Activity T20 Jersey",
        "sport": "Other",
        "usageType": "T20",
        "features": [
            "Breathable Mesh",
            "Quick-Dry",
            "Athletic Fit"
        ],
        "productCode": "#ACT-T20",
        "imageBack": "/T-shirts/27.png",
        "longDescription": "Engineered for high-intensity T20 sessions, this jersey offers maximum breathability and a modern athletic fit.",
        "image": "/T-shirts/26.png"
    },
    {
        "image": "/caps/grey-cap.png",
        "id": "force-aero-cap-grey",
        "longDescription": "The Aero Cap in Heather Grey combines lifestyle aesthetics with professional sports utility. The melange fabric is treated for quick-dry performance.",
        "description": "Modern heather grey melange cap with ultra-light flex-fit.",
        "productCode": "#CP-GREY",
        "features": [
            "Melange texture",
            "Quick-dry treatment",
            "Flex-fit band"
        ],
        "brand": "Force",
        "category": "Caps",
        "sport": "Cricket",
        "title": "Aero Cap - Heather Grey",
        "specs": {
            "Color": "Heather Grey",
            "Material": "Melange Tech Fabric"
        }
    },
    {
        "brand": "Force",
        "category": "Caps",
        "sport": "Badminton",
        "title": "Aero Cap - Dynamic Teal",
        "specs": {
            "Color": "Dynamic Teal",
            "Material": "Aero-Mesh Poly"
        },
        "id": "force-aero-cap-teal",
        "image": "/caps/teal-cap.png",
        "productCode": "#CP-TEAL",
        "description": "Modern teal athletic cap with technical mesh ventilation.",
        "longDescription": "The Dynamic Teal cap uses advanced fabric tech to maximize airflow while providing a striking modern look.",
        "features": [
            "Technical mesh",
            "Ultra-lightweight",
            "Reflective branding"
        ]
    },
    {
        "imageBack": "/T-shirts/2.png",
        "longDescription": "Engineered for speed and agility, the Aero Training Tee is practically weightless. With strategic laser-cut ventilation zones, it offers supreme airflow for endurance athletes who demand the very best.",
        "description": "Ultra-lightweight aerodynamic training apparel.",
        "productCode": "#SX 500",
        "image": "/T-shirts/1.png",
        "id": "force-aero-tee",
        "features": [
            "Ultra-Lightweight Material",
            "Laser-Cut Ventilation",
            "Aerodynamic Cut",
            "Quick-Dry Technology"
        ],
        "brand": "Force",
        "sport": "Other",
        "title": "Aero Training Tee",
        "specs": {
            "Fit": "Aerodynamic Slim Fit",
            "Weight": "Featherlight 120 GSM",
            "Material": "90% Recycled Poly, 10% Elastane"
        },
        "category": "T-Shirts"
    },
    {
        "id": "force-badminton-01",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/1_back.png",
            "/Badminton/1_front.png"
        ],
        "image": "/Badminton/1_front.png",
        "imageBack": "/Badminton/1_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#BAD-01",
        "usageType": "T20",
        "title": "Badminton Kit 01",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "sport": "Badminton"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-02",
        "title": "Badminton Kit 02",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Badminton",
        "usageType": "T20",
        "productCode": "#BAD-02",
        "imageBack": "/Badminton/2_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/2_front.png",
        "gallery": [
            "/Badminton/2_back.png",
            "/Badminton/2_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "image": "/Badminton/3_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/3_back.png",
        "productCode": "#BAD-03",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/3_back.png",
            "/Badminton/3_front.png"
        ],
        "usageType": "T20",
        "title": "Badminton Kit 03",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "id": "force-badminton-03",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "title": "Badminton Kit 04",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "usageType": "T20",
        "gallery": [
            "/Badminton/4_back.png",
            "/Badminton/4_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#BAD-04",
        "imageBack": "/Badminton/4_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/4_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-04"
    },
    {
        "id": "force-badminton-05",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/5_back.png",
            "/Badminton/5_front.png"
        ],
        "image": "/Badminton/5_front.png",
        "productCode": "#BAD-05",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/5_back.png",
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "title": "Badminton Kit 05"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-06",
        "title": "Badminton Kit 06",
        "sport": "Badminton",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "usageType": "T20",
        "productCode": "#BAD-06",
        "imageBack": "/Badminton/6_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/6_front.png",
        "gallery": [
            "/Badminton/6_back.png",
            "/Badminton/6_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-07",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/7_back.png",
        "productCode": "#BAD-07",
        "image": "/Badminton/7_front.png",
        "gallery": [
            "/Badminton/7_back.png",
            "/Badminton/7_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "title": "Badminton Kit 07",
        "usageType": "T20"
    },
    {
        "image": "/Badminton/8_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/8_back.png",
        "productCode": "#BAD-08",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/8_back.png",
            "/Badminton/8_front.png"
        ],
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "title": "Badminton Kit 08",
        "id": "force-badminton-08",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "id": "force-badminton-09",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/9_back.png",
            "/Badminton/9_front.png"
        ],
        "image": "/Badminton/9_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/9_back.png",
        "productCode": "#BAD-09",
        "usageType": "T20",
        "title": "Badminton Kit 09",
        "sport": "Badminton",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        }
    },
    {
        "title": "Badminton Kit 10",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "usageType": "T20",
        "gallery": [
            "/Badminton/10_back.png",
            "/Badminton/10_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/10_back.png",
        "productCode": "#BAD-10",
        "image": "/Badminton/10_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-10"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "id": "force-badminton-11",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "title": "Badminton Kit 11",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "image": "/Badminton/11_front.png",
        "productCode": "#BAD-11",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/11_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/11_back.png",
            "/Badminton/11_front.png"
        ]
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-badminton-12",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "title": "Badminton Kit 12",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/12_back.png",
            "/Badminton/12_front.png"
        ],
        "image": "/Badminton/12_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/12_back.png",
        "productCode": "#BAD-12"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-13",
        "title": "Badminton Kit 13",
        "sport": "Badminton",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "usageType": "T20",
        "productCode": "#BAD-13",
        "imageBack": "/Badminton/13_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/13_front.png",
        "gallery": [
            "/Badminton/13_back.png",
            "/Badminton/13_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "id": "force-badminton-14",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Badminton/14_front.png",
        "productCode": "#BAD-14",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/14_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/14_back.png",
            "/Badminton/14_front.png"
        ],
        "usageType": "T20",
        "title": "Badminton Kit 14",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "sport": "Badminton"
    },
    {
        "productCode": "#BAD-15",
        "imageBack": "/Badminton/15_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/15_front.png",
        "gallery": [
            "/Badminton/15_back.png",
            "/Badminton/15_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Badminton",
        "title": "Badminton Kit 15",
        "usageType": "T20",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-15",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/16_back.png",
            "/Badminton/16_front.png"
        ],
        "image": "/Badminton/16_front.png",
        "productCode": "#BAD-16",
        "imageBack": "/Badminton/16_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Badminton Kit 16",
        "sport": "Badminton",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "id": "force-badminton-16",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "brand": "Force Sports"
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-badminton-17",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "title": "Badminton Kit 17",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/17_back.png",
            "/Badminton/17_front.png"
        ],
        "image": "/Badminton/17_front.png",
        "productCode": "#BAD-17",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/17_back.png"
    },
    {
        "gallery": [
            "/Badminton/18_back.png",
            "/Badminton/18_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/18_back.png",
        "productCode": "#BAD-18",
        "image": "/Badminton/18_front.png",
        "title": "Badminton Kit 18",
        "sport": "Badminton",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "usageType": "T20",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-18",
        "category": "T-Shirts",
        "brand": "Force Sports"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-19",
        "title": "Badminton Kit 19",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "usageType": "T20",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/19_back.png",
        "productCode": "#BAD-19",
        "image": "/Badminton/19_front.png",
        "gallery": [
            "/Badminton/19_back.png",
            "/Badminton/19_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "id": "force-badminton-20",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Badminton/20_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/20_back.png",
        "productCode": "#BAD-20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/20_back.png",
            "/Badminton/20_front.png"
        ],
        "usageType": "T20",
        "title": "Badminton Kit 20",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        }
    },
    {
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-21",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/21_back.png",
        "productCode": "#BAD-21",
        "image": "/Badminton/21_front.png",
        "gallery": [
            "/Badminton/21_back.png",
            "/Badminton/21_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Badminton Kit 21",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Badminton",
        "usageType": "T20"
    },
    {
        "title": "Badminton Kit 22",
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "usageType": "T20",
        "productCode": "#BAD-22",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/22_back.png",
        "image": "/Badminton/22_front.png",
        "gallery": [
            "/Badminton/22_back.png",
            "/Badminton/22_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-22"
    },
    {
        "gallery": [
            "/Badminton/23_back.png",
            "/Badminton/23_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/23_back.png",
        "productCode": "#BAD-23",
        "image": "/Badminton/23_front.png",
        "title": "Badminton Kit 23",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Badminton",
        "usageType": "T20",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-23",
        "category": "T-Shirts",
        "brand": "Force Sports"
    },
    {
        "image": "/Badminton/24_front.png",
        "imageBack": "/Badminton/24_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#BAD-24",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/24_back.png",
            "/Badminton/24_front.png"
        ],
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "title": "Badminton Kit 24",
        "id": "force-badminton-24",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-25",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Badminton/25_back.png",
            "/Badminton/25_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#BAD-25",
        "imageBack": "/Badminton/25_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/25_front.png",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "sport": "Badminton",
        "title": "Badminton Kit 25",
        "usageType": "T20"
    },
    {
        "image": "/Badminton/26_front.png",
        "imageBack": "/Badminton/26_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#BAD-26",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/26_back.png",
            "/Badminton/26_front.png"
        ],
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "title": "Badminton Kit 26",
        "id": "force-badminton-26",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "id": "force-badminton-27",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "usageType": "T20",
        "title": "Badminton Kit 27",
        "sport": "Badminton",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "image": "/Badminton/27_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/27_back.png",
        "productCode": "#BAD-27",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/27_back.png",
            "/Badminton/27_front.png"
        ]
    },
    {
        "usageType": "T20",
        "sport": "Badminton",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "title": "Badminton Kit 28",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/28_back.png",
            "/Badminton/28_front.png"
        ],
        "image": "/Badminton/28_front.png",
        "imageBack": "/Badminton/28_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#BAD-28",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-badminton-28",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Badminton/29_front.png",
        "productCode": "#BAD-29",
        "imageBack": "/Badminton/29_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/29_back.png",
            "/Badminton/29_front.png"
        ],
        "usageType": "T20",
        "title": "Badminton Kit 29",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Badminton",
        "id": "force-badminton-29",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "id": "force-badminton-30",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Badminton/30_front.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/30_back.png",
        "productCode": "#BAD-30",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Badminton/30_back.png",
            "/Badminton/30_front.png"
        ],
        "usageType": "T20",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Badminton",
        "title": "Badminton Kit 30"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-31",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "sport": "Badminton",
        "title": "Badminton Kit 31",
        "usageType": "T20",
        "productCode": "#BAD-31",
        "imageBack": "/Badminton/31_back.png",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/31_front.png",
        "gallery": [
            "/Badminton/31_back.png",
            "/Badminton/31_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-badminton-32",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Badminton/32_back.png",
            "/Badminton/32_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Badminton/32_back.png",
        "productCode": "#BAD-32",
        "image": "/Badminton/32_front.png",
        "sport": "Badminton",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "title": "Badminton Kit 32",
        "usageType": "T20"
    },
    {
        "specs": {
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "productCode": "#BAD-33",
        "title": "Badminton Kit 33",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "usageType": "T20",
        "id": "force-badminton-33",
        "imageBack": "/Badminton/33_back.png",
        "gallery": [
            "/Badminton/33_back.png",
            "/Badminton/33_front.png"
        ],
        "image": "/Badminton/33_front.png"
    },
    {
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#BAD-34",
        "category": "T-Shirts",
        "title": "Badminton Kit 34",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "usageType": "T20",
        "id": "force-badminton-34",
        "imageBack": "/Badminton/34_back.png",
        "image": "/Badminton/34_front.png",
        "gallery": [
            "/Badminton/34_back.png",
            "/Badminton/34_front.png"
        ]
    },
    {
        "image": "/Badminton/35_front.png",
        "gallery": [
            "/Badminton/35_back.png",
            "/Badminton/35_front.png"
        ],
        "id": "force-badminton-35",
        "usageType": "T20",
        "imageBack": "/Badminton/35_back.png",
        "title": "Badminton Kit 35",
        "category": "T-Shirts",
        "productCode": "#BAD-35",
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "imageBack": "/Badminton/36_back.png",
        "id": "force-badminton-36",
        "usageType": "T20",
        "image": "/Badminton/36_front.png",
        "gallery": [
            "/Badminton/36_back.png",
            "/Badminton/36_front.png"
        ],
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#BAD-36",
        "title": "Badminton Kit 36"
    },
    {
        "title": "Badminton Kit 37",
        "category": "T-Shirts",
        "productCode": "#BAD-37",
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "image": "/Badminton/37_front.png",
        "gallery": [
            "/Badminton/37_back.png",
            "/Badminton/37_front.png"
        ],
        "id": "force-badminton-37",
        "usageType": "T20",
        "imageBack": "/Badminton/37_back.png"
    },
    {
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Badminton Kit 38",
        "category": "T-Shirts",
        "productCode": "#BAD-38",
        "imageBack": "/Badminton/38_back.png",
        "id": "force-badminton-38",
        "usageType": "T20",
        "image": "/Badminton/38_front.png",
        "gallery": [
            "/Badminton/38_back.png",
            "/Badminton/38_front.png"
        ]
    },
    {
        "gallery": [
            "/Badminton/39_back.png",
            "/Badminton/39_front.png"
        ],
        "image": "/Badminton/39_front.png",
        "imageBack": "/Badminton/39_back.png",
        "id": "force-badminton-39",
        "usageType": "T20",
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#BAD-39",
        "title": "Badminton Kit 39",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        }
    },
    {
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#BAD-40",
        "category": "T-Shirts",
        "title": "Badminton Kit 40",
        "imageBack": "/Badminton/40_back.png",
        "id": "force-badminton-40",
        "usageType": "T20",
        "image": "/Badminton/40_front.png",
        "gallery": [
            "/Badminton/40_back.png",
            "/Badminton/40_front.png"
        ]
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "title": "Badminton Kit 41",
        "category": "T-Shirts",
        "productCode": "#BAD-41",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Badminton/41_front.png",
        "gallery": [
            "/Badminton/41_back.png",
            "/Badminton/41_front.png"
        ],
        "imageBack": "/Badminton/41_back.png",
        "usageType": "T20",
        "id": "force-badminton-41"
    },
    {
        "productCode": "#BAD-42",
        "category": "T-Shirts",
        "title": "Badminton Kit 42",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "image": "/Badminton/42_front.png",
        "gallery": [
            "/Badminton/42_back.png",
            "/Badminton/42_front.png"
        ],
        "usageType": "T20",
        "id": "force-badminton-42",
        "imageBack": "/Badminton/42_back.png"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "title": "Badminton Kit 43",
        "productCode": "#BAD-43",
        "category": "T-Shirts",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "gallery": [
            "/Badminton/43_back.png",
            "/Badminton/43_front.png"
        ],
        "image": "/Badminton/43_front.png",
        "imageBack": "/Badminton/43_back.png",
        "usageType": "T20",
        "id": "force-badminton-43"
    },
    {
        "title": "Badminton Kit 44",
        "category": "T-Shirts",
        "productCode": "#BAD-44",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "image": "/Badminton/44_front.png",
        "gallery": [
            "/Badminton/44_back.png",
            "/Badminton/44_front.png"
        ],
        "usageType": "T20",
        "id": "force-badminton-44",
        "imageBack": "/Badminton/44_back.png"
    },
    {
        "image": "/Badminton/45_front.png",
        "gallery": [
            "/Badminton/45_back.png",
            "/Badminton/45_front.png"
        ],
        "usageType": "T20",
        "id": "force-badminton-45",
        "imageBack": "/Badminton/45_back.png",
        "category": "T-Shirts",
        "productCode": "#BAD-45",
        "title": "Badminton Kit 45",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports"
    },
    {
        "imageBack": "/Badminton/46_back.png",
        "usageType": "T20",
        "id": "force-badminton-46",
        "image": "/Badminton/46_front.png",
        "gallery": [
            "/Badminton/46_back.png",
            "/Badminton/46_front.png"
        ],
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "category": "T-Shirts",
        "productCode": "#BAD-46",
        "title": "Badminton Kit 46"
    },
    {
        "image": "/Badminton/47_front.png",
        "gallery": [
            "/Badminton/47_back.png",
            "/Badminton/47_front.png"
        ],
        "usageType": "T20",
        "id": "force-badminton-47",
        "imageBack": "/Badminton/47_back.png",
        "category": "T-Shirts",
        "productCode": "#BAD-47",
        "title": "Badminton Kit 47",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Badminton/48_front.png",
        "gallery": [
            "/Badminton/48_back.png",
            "/Badminton/48_front.png"
        ],
        "imageBack": "/Badminton/48_back.png",
        "id": "force-badminton-48",
        "usageType": "T20",
        "sport": "Badminton",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Badminton Kit 48",
        "category": "T-Shirts",
        "productCode": "#BAD-48",
        "brand": "Force Sports",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        }
    },
    {
        "productCode": "#BAD-49",
        "category": "T-Shirts",
        "title": "Badminton Kit 49",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Badminton",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Badminton range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Badminton technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "image": "/Badminton/49_front.png",
        "gallery": [
            "/Badminton/49_back.png",
            "/Badminton/49_front.png"
        ],
        "usageType": "T20",
        "id": "force-badminton-49",
        "imageBack": "/Badminton/49_back.png"
    },
    {
        "usageType": "Practice",
        "id": "force-badminton-pro",
        "imageBack": "/T-shirts/31.png",
        "image": "/T-shirts/30.png",
        "specs": {
            "Material": "Pro-Flex Poly",
            "Usage": "Tournament Practice"
        },
        "longDescription": "Featuring side-ventilation and a darted back for maximum overhead reach, the Smash-Pro is built for the badminton court.",
        "brand": "Force",
        "description": "Ultra-flexible T-shirt for rapid badminton movements.",
        "productCode": "#BD-501",
        "title": "Smash-Pro Tee",
        "category": "T-Shirts",
        "features": [
            "Racket-Reach Shoulders",
            "Cool-Mesh Back",
            "Anti-Static"
        ],
        "sport": "Badminton"
    },
    {
        "specs": {
            "Material": "Reinforced Polyester / Carbon Vinyl",
            "Ventilation": "Air-Flow System",
            "Type": "Performance Backpack",
            "Capacity": "35 Liters"
        },
        "id": "force-bag-back-01",
        "longDescription": "The Elite Gym Backpack combines style with technical function. Designed with an ergonomic ventilated back panel and specialized compartments for tech and training gear, it is the ultimate bag for the active professional.",
        "brand": "Force",
        "description": "Ergonomic performance backpack with laptop and shoe storage.",
        "title": "Elite Gym Backpack",
        "productCode": "#FB-EBP-01",
        "category": "Bags",
        "features": [
            "Padded 15.6\" Laptop Sleeve",
            "Ventilated Air-Mesh Back",
            "Bottom Shoe Access",
            "Sternum Support Strap",
            "Carbon Fiber Texture Accents"
        ],
        "image": "/Bags/elite_gym_backpack_1773738892671.png",
        "sport": "Other"
    },
    {
        "brand": "Force",
        "description": "Rugged canvas and mesh bag for team ball storage.",
        "id": "force-bag-ball-01",
        "longDescription": "Designed for the rigors of the training field, the Heavy-Duty Ball Carrier features a reinforced canvas bottom and breathable mesh top. It is built to last through seasons of intense team use.",
        "specs": {
            "Material": "Canvas / High-Density Mesh",
            "Durability": "Club Grade Resilience",
            "Type": "Team Equipment Bag",
            "Capacity": "12 Full-Size Balls"
        },
        "sport": "Other",
        "features": [
            "Reinforced 900D Canvas Base",
            "Air-Flow Mesh Top Section",
            "Heavy-Duty Shoulder Carry Strap",
            "Industrial Toggle Closure",
            "Holds 10-12 Regulation Balls"
        ],
        "image": "/Bags/heavy_duty_ball_carrier_bag_ball_1773739029492.png",
        "title": "Heavy-Duty Ball Carrier",
        "productCode": "#FB-HBC-01",
        "category": "Bags"
    },
    {
        "features": [
            "Dual Mesh Air Vents",
            "Easy-Carry Top Handle",
            "Wipe-Clean Internal Lining",
            "Compact Foldable Design",
            "Heavy-Duty Zipper"
        ],
        "image": "/Bags/compact_sports_boot_bag_1773738913964.png",
        "sport": "Football",
        "category": "Bags",
        "productCode": "#FB-CBB-01",
        "title": "Compact Sports Boot Bag",
        "brand": "Force",
        "description": "Minimalist ventilated bag for sports footwear.",
        "specs": {
            "Breathability": "High-Flow Mesh",
            "Material": "420D Ripstop Nylon",
            "Size": "Universal Shoe Size",
            "Type": "Footwear Storage"
        },
        "id": "force-bag-boot-01",
        "longDescription": "Keep your gear clean with the Force Compact Boot Bag. Designed specifically for sports shoes, it features large mesh side panels for maximum ventilation and a durable ripstop exterior to handle post-match grit."
    },
    {
        "specs": {
            "Capacity": "120 Liters",
            "Wheels": "Triple-Wheel System",
            "Type": "Professional Kit Bag",
            "Material": "1680D Ballistic Nylon"
        },
        "id": "force-bag-cricket-01",
        "longDescription": "The Elite Force Cricket Kit Bag is designed for the serious cricketer. Featuring rugged all-terrain wheels, padded internal bat sleeves, and a ventilated shoe compartment, it offers maximum protection and organization for all your match-day essentials.",
        "brand": "Force",
        "description": "Heavy-duty wheelie kit bag with specialized compartments for bats and gear.",
        "category": "Bags",
        "productCode": "#FB-CRK-01",
        "title": "Professional Cricket Kit Bag",
        "features": [
            "Heavy-Duty All-Terrain Wheels",
            "Internal Padded Bat Sleeves",
            "Ventilated Separate Shoe Compartment",
            "Industrial Grade Zippers",
            "Reinforced Base & Handles"
        ],
        "image": "/Bags/professional_cricket_kit_bag_1773738848299.png",
        "sport": "Cricket"
    },
    {
        "brand": "Force",
        "description": "Lightweight essentials bag for active lifestyle.",
        "id": "force-bag-cross-01",
        "longDescription": "Keep your essentials secure and accessible with the Crossbody Active Bag. Built with ultralight ripstop fabric and featuring a technical multi-point strap, it is the perfect companion for cycling, running, or quick travel.",
        "specs": {
            "Material": "Featherweight Ripstop Nylon",
            "Weight": "110 grams",
            "Strap": "Adjustable Tech-Webbing",
            "Type": "Essentials Carrier"
        },
        "sport": "Other",
        "features": [
            "Ultralight Ripstop Construction",
            "Technical 3-Point Strap",
            "Quick-Access Security Pocket",
            "Sweat-Resistant Backing",
            "Vibrant Technical Design"
        ],
        "image": "/Bags/crossbody_active_sports_bag_active_1773739009916.png",
        "category": "Bags",
        "productCode": "#FB-CAA-01",
        "title": "Crossbody Active Bag"
    },
    {
        "brand": "Force",
        "description": "Water-resistant tactical duffel with multiple utility pockets.",
        "specs": {
            "Type": "All-Purpose Duffel",
            "Weight": "850 grams",
            "Dimensions": "60 x 30 x 28 cm",
            "Material": "Ripstop Technical Fabric"
        },
        "id": "force-bag-duffel-01",
        "longDescription": "Built for durability and versatility, the Tactical Sports Duffel features a rugged water-resistant exterior. With its tactical modular design and multiple quick-access pockets, it is perfect for transitions between the gym, field, and travel.",
        "features": [
            "Water-Resistant Coating",
            "Tactical Molle Webbing",
            "Integrated Wet/Dry Pocket",
            "Padded Adjustable Strap",
            "Reflective Safety Piping"
        ],
        "image": "/Bags/tactical_sports_duffel_bag_1773738867037.png",
        "sport": "Other",
        "title": "Tactical Sports Duffel Bag",
        "productCode": "#FB-TDUF-01",
        "category": "Bags"
    },
    {
        "sport": "Other",
        "image": "/Bags/team_training_holdall_large_bag_1773738933752.png",
        "features": [
            "Ultra-Large Main Cavity",
            "Reinforced Load-Bearing Straps",
            "Internal Mesh Organizers",
            "Identification Name Slot",
            "Weather-Shield Base"
        ],
        "category": "Bags",
        "title": "Team Training Holdall (Large)",
        "productCode": "#FB-TTH-01",
        "description": "Spacious team bag with reinforced base and handles.",
        "brand": "Force",
        "longDescription": "The Team Training Holdall is built for volume and resilience. Capable of carrying full sets of uniforms or equipment, it features a heavy-duty reinforced base and industrial stitching to support significant weight during team travel.",
        "id": "force-bag-holdall-01",
        "specs": {
            "Durability": "Extreme Load Grade",
            "Material": "Heavy-Duty 900D Canvas",
            "Capacity": "90 Liters",
            "Type": "Equipment Holdall"
        }
    },
    {
        "specs": {
            "Material": "Matte Technical PU / Nylon",
            "Style": "Hybrid Professional",
            "Fit": "Slim Vertical",
            "Type": "Utility Work-Bag"
        },
        "id": "force-bag-hyb-01",
        "longDescription": "The Force Hybrid is designed for the modern lifestyle transition. Its slim profile hides a specialized laptop compartment alongside a dedicated space for gym apparel, ensuring you stay professional and active.",
        "brand": "Force",
        "description": "Modern minimalist hybrid for office and gym use.",
        "category": "Bags",
        "productCode": "#FB-LGH-01",
        "title": "Slim Laptop/Gym Hybrid Bag",
        "features": [
            "Invisible Waterproof Zippers",
            "Dual-Purpose Compartments",
            "Minimalist Sleek Profile",
            "Scratch-Resistant Surface",
            "Internal Accessory Tech-Pouch"
        ],
        "image": "/Bags/slim_laptop_gym_hybrid_bag_gym_1773738988004.png",
        "sport": "Other"
    },
    {
        "description": "Durable mesh bag for sports ball and equipment storage.",
        "brand": "Force",
        "longDescription": "A essential for coaches and teams, this heavy-duty mesh bag allows for easy drying and transport of sports balls. The high-tension drawstring ensures gear stays secure during transport.",
        "id": "force-bag-mesh-01",
        "specs": {
            "Type": "Equipment Net",
            "Material": "Polyester Technical Mesh",
            "Size": "Standard Multi-Ball",
            "Maintenance": "Washable"
        },
        "sport": "Other",
        "image": "/Bags/mesh_equipment_sports_bag_equipment_1773738951652.png",
        "features": [
            "High-Tension Mesh Weave",
            "Reinforced Drawstring Closure",
            "Holds up to 12 Footballs",
            "Anti-Mold Technical Mesh",
            "Compact Storage When Empty"
        ],
        "category": "Bags",
        "productCode": "#FB-MME-01",
        "title": "Versatile Mesh Equipment Bag"
    },
    {
        "brand": "Force",
        "description": "Hard-shell rolling gear case with technical design.",
        "id": "force-bag-roll-01",
        "longDescription": "Combining travel elegance with sports utility, this premium rolling case features a semi-rigid technical shell to protect high-value gear. Perfect for international athletes and frequent travelers.",
        "specs": {
            "Size": "International Carry-on Compliant",
            "Material": "Polycarbonate / Technical Fabric",
            "Security": "TSA Approved Lock System",
            "Type": "Rolling Travel Case"
        },
        "sport": "Other",
        "features": [
            "Impact-Resistant Hard Shell",
            "Retractable Telescopic Handle",
            "Silent-Glide Spin Wheels",
            "Padded Internal Dividers",
            "Integrated Security Lock"
        ],
        "image": "/Bags/premium_rolling_kit_case_kit_1773738969285.png",
        "title": "Premium Rolling Kit Case",
        "productCode": "#FB-RKC-01",
        "category": "Bags"
    },
    {
        "description": "Dedicated apparel for coaching staff.",
        "brand": "Force",
        "longDescription": "High-visibility and professional design for coaches on the field. Features extra ventilation and a professional aesthetic.",
        "specs": {
            "Material": "100% Performance Poly",
            "Usage": "Coaching"
        },
        "sport": "Other",
        "features": [
            "Extra Ventilation",
            "Professional Look",
            "Anti-Odor",
            "UV Protection"
        ],
        "productCode": "#CH 101",
        "title": "Coach Performance Tee",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/23.png",
        "id": "force-coach-tee",
        "usageType": "Coaches",
        "image": "/T-shirts/22.png"
    },
    {
        "image": "/T-shirts/3.png",
        "features": [
            "4-Way Stretch",
            "Flat-lock Seams",
            "Muscle Support",
            "Breathable Panels"
        ],
        "sport": "Kabaddi",
        "title": "Elite Compression Tee",
        "productCode": "#JB 202",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/4.png",
        "description": "Second-skin compression for muscle support and improved recovery.",
        "brand": "Force",
        "specs": {
            "Tech": "Recovery-Plus",
            "Fit": "Skin-Tight Compression",
            "Material": "85% Nylon, 15% Spandex"
        },
        "longDescription": "The Elite Compression Tee provides targeted muscle support, reducing fatigue and accelerating recovery. The 4-way stretch fabric allows for unrestricted movement, while flat-lock seams prevent chafing.",
        "id": "force-compression-tee"
    },
    {
        "gallery": [
            "/Cricket/1_back.png",
            "/Cricket/1_front.png"
        ],
        "image": "/Cricket/1_front.png",
        "imageBack": "/Cricket/1_back.png",
        "id": "force-cricket-01",
        "usageType": "T20",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#CRI-01",
        "title": "Cricket Kit 01",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        }
    },
    {
        "category": "T-Shirts",
        "productCode": "#CRI-02",
        "title": "Cricket Kit 02",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "gallery": [
            "/Cricket/2_back.png",
            "/Cricket/2_front.png"
        ],
        "image": "/Cricket/2_front.png",
        "id": "force-cricket-02",
        "usageType": "T20",
        "imageBack": "/Cricket/2_back.png"
    },
    {
        "image": "/Cricket/3_front.png",
        "gallery": [
            "/Cricket/3_back.png",
            "/Cricket/3_front.png"
        ],
        "imageBack": "/Cricket/3_back.png",
        "id": "force-cricket-03",
        "usageType": "T20",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#CRI-03",
        "title": "Cricket Kit 03",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        }
    },
    {
        "imageBack": "/Cricket/4_back.png",
        "id": "force-cricket-04",
        "usageType": "T20",
        "image": "/Cricket/4_front.png",
        "gallery": [
            "/Cricket/4_back.png",
            "/Cricket/4_front.png"
        ],
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Cricket Kit 04",
        "category": "T-Shirts",
        "productCode": "#CRI-04"
    },
    {
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#CRI-05",
        "category": "T-Shirts",
        "title": "Cricket Kit 05",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "image": "/Cricket/5_front.png",
        "gallery": [
            "/Cricket/5_back.png",
            "/Cricket/5_front.png"
        ],
        "imageBack": "/Cricket/5_back.png",
        "id": "force-cricket-05",
        "usageType": "T20"
    },
    {
        "category": "T-Shirts",
        "productCode": "#CRI-06",
        "title": "Cricket Kit 06",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "image": "/Cricket/6_front.png",
        "gallery": [
            "/Cricket/6_back.png",
            "/Cricket/6_front.png"
        ],
        "usageType": "T20",
        "id": "force-cricket-06",
        "imageBack": "/Cricket/6_back.png"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "title": "Cricket Kit 07",
        "category": "T-Shirts",
        "productCode": "#CRI-07",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "usageType": "T20",
        "id": "force-cricket-07",
        "imageBack": "/Cricket/7_back.png",
        "image": "/Cricket/7_front.png",
        "gallery": [
            "/Cricket/7_back.png",
            "/Cricket/7_front.png"
        ]
    },
    {
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "productCode": "#CRI-08",
        "category": "T-Shirts",
        "title": "Cricket Kit 08",
        "imageBack": "/Cricket/8_back.png",
        "usageType": "T20",
        "id": "force-cricket-08",
        "image": "/Cricket/8_front.png",
        "gallery": [
            "/Cricket/8_back.png",
            "/Cricket/8_front.png"
        ]
    },
    {
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#CRI-09",
        "title": "Cricket Kit 09",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "image": "/Cricket/9_front.png",
        "gallery": [
            "/Cricket/9_back.png",
            "/Cricket/9_front.png"
        ],
        "imageBack": "/Cricket/9_back.png",
        "id": "force-cricket-09",
        "usageType": "T20"
    },
    {
        "image": "/Cricket/10_front.png",
        "gallery": [
            "/Cricket/10_back.png",
            "/Cricket/10_front.png"
        ],
        "imageBack": "/Cricket/10_back.png",
        "id": "force-cricket-10",
        "usageType": "T20",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#CRI-10",
        "category": "T-Shirts",
        "title": "Cricket Kit 10",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        }
    },
    {
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "category": "T-Shirts",
        "productCode": "#CRI-11",
        "title": "Cricket Kit 11",
        "imageBack": "/Cricket/11_back.png",
        "usageType": "T20",
        "id": "force-cricket-11",
        "image": "/Cricket/11_front.png",
        "gallery": [
            "/Cricket/11_back.png",
            "/Cricket/11_front.png"
        ]
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "category": "T-Shirts",
        "productCode": "#CRI-12",
        "title": "Cricket Kit 12",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Cricket/12_front.png",
        "gallery": [
            "/Cricket/12_back.png",
            "/Cricket/12_front.png"
        ],
        "imageBack": "/Cricket/12_back.png",
        "usageType": "T20",
        "id": "force-cricket-12"
    },
    {
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Cricket Kit 13",
        "category": "T-Shirts",
        "productCode": "#CRI-13",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "image": "/Cricket/13_front.png",
        "gallery": [
            "/Cricket/13_back.png",
            "/Cricket/13_front.png"
        ],
        "imageBack": "/Cricket/13_back.png",
        "id": "force-cricket-13",
        "usageType": "T20"
    },
    {
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#CRI-14",
        "category": "T-Shirts",
        "title": "Cricket Kit 14",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "usageType": "T20",
        "id": "force-cricket-14",
        "imageBack": "/Cricket/14_back.png",
        "image": "/Cricket/14_front.png",
        "gallery": [
            "/Cricket/14_back.png",
            "/Cricket/14_front.png"
        ]
    },
    {
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "productCode": "#CRI-15",
        "title": "Cricket Kit 15",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-cricket-15",
        "usageType": "T20",
        "imageBack": "/Cricket/15_back.png",
        "image": "/Cricket/15_front.png",
        "gallery": [
            "/Cricket/15_back.png",
            "/Cricket/15_front.png"
        ]
    },
    {
        "id": "force-cricket-16",
        "usageType": "T20",
        "imageBack": "/Cricket/16_back.png",
        "image": "/Cricket/16_front.png",
        "gallery": [
            "/Cricket/16_back.png",
            "/Cricket/16_front.png"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "productCode": "#CRI-16",
        "category": "T-Shirts",
        "title": "Cricket Kit 16",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "category": "T-Shirts",
        "productCode": "#CRI-17",
        "title": "Cricket Kit 17",
        "imageBack": "/Cricket/17_back.png",
        "usageType": "T20",
        "id": "force-cricket-17",
        "image": "/Cricket/17_front.png",
        "gallery": [
            "/Cricket/17_back.png",
            "/Cricket/17_front.png"
        ]
    },
    {
        "imageBack": "/Cricket/18_back.png",
        "id": "force-cricket-18",
        "usageType": "T20",
        "image": "/Cricket/18_front.png",
        "gallery": [
            "/Cricket/18_back.png",
            "/Cricket/18_front.png"
        ],
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#CRI-18",
        "category": "T-Shirts",
        "title": "Cricket Kit 18"
    },
    {
        "imageBack": "/Cricket/19_back.png",
        "usageType": "T20",
        "id": "force-cricket-19",
        "image": "/Cricket/19_front.png",
        "gallery": [
            "/Cricket/19_back.png",
            "/Cricket/19_front.png"
        ],
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "productCode": "#CRI-19",
        "category": "T-Shirts",
        "title": "Cricket Kit 19"
    },
    {
        "category": "T-Shirts",
        "productCode": "#CRI-20",
        "title": "Cricket Kit 20",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "image": "/Cricket/20_front.png",
        "gallery": [
            "/Cricket/20_back.png",
            "/Cricket/20_front.png"
        ],
        "id": "force-cricket-20",
        "usageType": "T20",
        "imageBack": "/Cricket/20_back.png"
    },
    {
        "productCode": "#CRI-21",
        "category": "T-Shirts",
        "title": "Cricket Kit 21",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "image": "/Cricket/21_front.png",
        "gallery": [
            "/Cricket/21_back.png",
            "/Cricket/21_front.png"
        ],
        "id": "force-cricket-21",
        "usageType": "T20",
        "imageBack": "/Cricket/21_back.png"
    },
    {
        "image": "/Cricket/22_front.png",
        "gallery": [
            "/Cricket/22_back.png",
            "/Cricket/22_front.png"
        ],
        "imageBack": "/Cricket/22_back.png",
        "id": "force-cricket-22",
        "usageType": "T20",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#CRI-22",
        "title": "Cricket Kit 22",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        }
    },
    {
        "image": "/Cricket/23_front.png",
        "gallery": [
            "/Cricket/23_back.png",
            "/Cricket/23_front.png"
        ],
        "id": "force-cricket-23",
        "usageType": "T20",
        "imageBack": "/Cricket/23_back.png",
        "title": "Cricket Kit 23",
        "category": "T-Shirts",
        "productCode": "#CRI-23",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "id": "force-cricket-24",
        "usageType": "T20",
        "imageBack": "/Cricket/24_back.png",
        "image": "/Cricket/24_front.png",
        "gallery": [
            "/Cricket/24_back.png",
            "/Cricket/24_front.png"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "title": "Cricket Kit 24",
        "category": "T-Shirts",
        "productCode": "#CRI-24",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Cricket Kit 25",
        "category": "T-Shirts",
        "productCode": "#CRI-25",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-cricket-25",
        "usageType": "T20",
        "imageBack": "/Cricket/25_back.png",
        "image": "/Cricket/25_front.png",
        "gallery": [
            "/Cricket/25_back.png",
            "/Cricket/25_front.png"
        ]
    },
    {
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "title": "Cricket Kit 26",
        "category": "T-Shirts",
        "productCode": "#CRI-26",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-cricket-26",
        "usageType": "T20",
        "imageBack": "/Cricket/26_back.png",
        "image": "/Cricket/26_front.png",
        "gallery": [
            "/Cricket/26_back.png",
            "/Cricket/26_front.png"
        ]
    },
    {
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "productCode": "#CRI-27",
        "category": "T-Shirts",
        "title": "Cricket Kit 27",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "usageType": "T20",
        "id": "force-cricket-27",
        "imageBack": "/Cricket/27_back.png",
        "image": "/Cricket/27_front.png",
        "gallery": [
            "/Cricket/27_back.png",
            "/Cricket/27_front.png"
        ]
    },
    {
        "imageBack": "/Cricket/28_back.png",
        "usageType": "T20",
        "id": "force-cricket-28",
        "image": "/Cricket/28_front.png",
        "gallery": [
            "/Cricket/28_back.png",
            "/Cricket/28_front.png"
        ],
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "title": "Cricket Kit 28",
        "category": "T-Shirts",
        "productCode": "#CRI-28"
    },
    {
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Cricket Kit 29",
        "category": "T-Shirts",
        "productCode": "#CRI-29",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "image": "/Cricket/29_front.png",
        "gallery": [
            "/Cricket/29_back.png",
            "/Cricket/29_front.png"
        ],
        "imageBack": "/Cricket/29_back.png",
        "id": "force-cricket-29",
        "usageType": "T20"
    },
    {
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "productCode": "#CRI-30",
        "category": "T-Shirts",
        "title": "Cricket Kit 30",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-cricket-30",
        "usageType": "T20",
        "imageBack": "/Cricket/30_back.png",
        "image": "/Cricket/30_front.png",
        "gallery": [
            "/Cricket/30_back.png",
            "/Cricket/30_front.png"
        ]
    },
    {
        "image": "/Cricket/31_front.png",
        "gallery": [
            "/Cricket/31_back.png",
            "/Cricket/31_front.png"
        ],
        "usageType": "T20",
        "id": "force-cricket-31",
        "imageBack": "/Cricket/31_back.png",
        "title": "Cricket Kit 31",
        "category": "T-Shirts",
        "productCode": "#CRI-31",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports"
    },
    {
        "usageType": "T20",
        "id": "force-cricket-32",
        "imageBack": "/Cricket/32_back.png",
        "image": "/Cricket/32_front.png",
        "gallery": [
            "/Cricket/32_back.png",
            "/Cricket/32_front.png"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "title": "Cricket Kit 32",
        "category": "T-Shirts",
        "productCode": "#CRI-32",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket"
    },
    {
        "id": "force-cricket-33",
        "usageType": "T20",
        "imageBack": "/Cricket/33_back.png",
        "image": "/Cricket/33_front.png",
        "gallery": [
            "/Cricket/33_back.png",
            "/Cricket/33_front.png"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "productCode": "#CRI-33",
        "title": "Cricket Kit 33",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "title": "Cricket Kit 34",
        "category": "T-Shirts",
        "productCode": "#CRI-34",
        "imageBack": "/Cricket/34_back.png",
        "usageType": "T20",
        "id": "force-cricket-34",
        "image": "/Cricket/34_front.png",
        "gallery": [
            "/Cricket/34_back.png",
            "/Cricket/34_front.png"
        ]
    },
    {
        "image": "/Cricket/35_front.png",
        "gallery": [
            "/Cricket/35_back.png",
            "/Cricket/35_front.png"
        ],
        "imageBack": "/Cricket/35_back.png",
        "id": "force-cricket-35",
        "usageType": "T20",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#CRI-35",
        "category": "T-Shirts",
        "title": "Cricket Kit 35",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        }
    },
    {
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Cricket Kit 36",
        "productCode": "#CRI-36",
        "category": "T-Shirts",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-cricket-36",
        "usageType": "T20",
        "imageBack": "/Cricket/36_back.png",
        "gallery": [
            "/Cricket/36_back.png",
            "/Cricket/36_front.png"
        ],
        "image": "/Cricket/36_front.png"
    },
    {
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180"
        },
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Cricket Kit 37",
        "category": "T-Shirts",
        "productCode": "#CRI-37",
        "imageBack": "/Cricket/37_back.png",
        "id": "force-cricket-37",
        "usageType": "T20",
        "image": "/Cricket/37_front.png",
        "gallery": [
            "/Cricket/37_back.png",
            "/Cricket/37_front.png"
        ]
    },
    {
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "productCode": "#CRI-38",
        "title": "Cricket Kit 38",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester"
        },
        "gallery": [
            "/Cricket/38_back.png",
            "/Cricket/38_front.png"
        ],
        "image": "/Cricket/38_front.png",
        "imageBack": "/Cricket/38_back.png",
        "id": "force-cricket-38",
        "usageType": "T20"
    },
    {
        "image": "/Cricket/39_front.png",
        "gallery": [
            "/Cricket/39_back.png",
            "/Cricket/39_front.png"
        ],
        "usageType": "T20",
        "id": "force-cricket-39",
        "imageBack": "/Cricket/39_back.png",
        "productCode": "#CRI-39",
        "category": "T-Shirts",
        "title": "Cricket Kit 39",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Cricket/40_front.png",
        "gallery": [
            "/Cricket/40_back.png",
            "/Cricket/40_front.png"
        ],
        "id": "force-cricket-40",
        "usageType": "T20",
        "imageBack": "/Cricket/40_back.png",
        "productCode": "#CRI-40",
        "category": "T-Shirts",
        "title": "Cricket Kit 40",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports"
    },
    {
        "imageBack": "/Cricket/41_back.png",
        "id": "force-cricket-41",
        "usageType": "T20",
        "image": "/Cricket/41_front.png",
        "gallery": [
            "/Cricket/41_back.png",
            "/Cricket/41_front.png"
        ],
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#CRI-41",
        "category": "T-Shirts",
        "title": "Cricket Kit 41"
    },
    {
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "productCode": "#CRI-42",
        "category": "T-Shirts",
        "title": "Cricket Kit 42",
        "imageBack": "/Cricket/42_back.png",
        "usageType": "T20",
        "id": "force-cricket-42",
        "image": "/Cricket/42_front.png",
        "gallery": [
            "/Cricket/42_back.png",
            "/Cricket/42_front.png"
        ]
    },
    {
        "gallery": [
            "/Cricket/43_back.png",
            "/Cricket/43_front.png"
        ],
        "image": "/Cricket/43_front.png",
        "id": "force-cricket-43",
        "usageType": "T20",
        "imageBack": "/Cricket/43_back.png",
        "title": "Cricket Kit 43",
        "productCode": "#CRI-43",
        "category": "T-Shirts",
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "brand": "Force Sports"
    },
    {
        "imageBack": "/Cricket/44_back.png",
        "usageType": "T20",
        "id": "force-cricket-44",
        "image": "/Cricket/44_front.png",
        "gallery": [
            "/Cricket/44_back.png",
            "/Cricket/44_front.png"
        ],
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "sport": "Cricket",
        "title": "Cricket Kit 44",
        "category": "T-Shirts",
        "productCode": "#CRI-44"
    },
    {
        "brand": "Force Sports",
        "description": "Premium Cricket technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Cricket range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Cricket",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "title": "Cricket Kit 45",
        "category": "T-Shirts",
        "productCode": "#CRI-45",
        "imageBack": "/Cricket/45_back.png",
        "id": "force-cricket-45",
        "usageType": "T20",
        "image": "/Cricket/45_front.png",
        "gallery": [
            "/Cricket/45_back.png",
            "/Cricket/45_front.png"
        ]
    },
    {
        "category": "Caps",
        "productCode": "#CP 702",
        "title": "Cricket Elite White Cap",
        "sport": "Football",
        "features": [
            "Wide Glare-Reduction Brim",
            "Max UV Protection",
            "Traditional Match Design",
            "Premium Breathable Poly"
        ],
        "image": "/caps/white-cap.png",
        "id": "force-cricket-elite-white-cap",
        "longDescription": "The Cricket Elite White Cap combines traditional aesthetics with modern performance. Designed for day-long comfort under the sun, it features maximum UV protection and a wide brim to reduce glare.",
        "specs": {
            "Usage": "Test / Match Cricket",
            "Fit": "Full Coverage",
            "Material": "High-Density Breathable Poly"
        },
        "brand": "Force",
        "description": "Classic white cricket cap for professional matches and long days on the field."
    },
    {
        "brand": "Force",
        "description": "Water-resistant and windproof jacket for outdoor athletes.",
        "id": "force-element-jacket",
        "longDescription": "The Element Windbreaker is your go-to for unpredictable weather. It features a lightweight, water-resistant shell and a mesh lining for breathability. The packable design makes it easy to carry anywhere.",
        "specs": {
            "Fit": "Regular Fit",
            "Protection": "All-Weather Shield",
            "Material": "Micro-Ripstop Poly"
        },
        "sport": "Other",
        "features": [
            "Water-Resistant",
            "Windproof",
            "Packable Design",
            "Reflective Accents"
        ],
        "image": "/jacket-element.png",
        "category": "Jackets",
        "productCode": "#JK 909",
        "title": "Element Windbreaker"
    },
    {
        "productCode": "#JB-1001",
        "title": "Elite Series #01",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Cricket",
        "specs": {
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "brand": "Force",
        "description": "Professional grade high-performance cricket apparel.",
        "image": "/T-shirts/1.png",
        "usageType": "Practice",
        "id": "force-elite-001",
        "imageBack": "/T-shirts/2.png"
    },
    {
        "imageBack": "/T-shirts/4.png",
        "usageType": "Travel",
        "id": "force-elite-002",
        "image": "/T-shirts/3.png",
        "description": "Professional grade high-performance football apparel.",
        "brand": "Force",
        "specs": {
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Football",
        "title": "Elite Series #02",
        "productCode": "#JB-1002",
        "category": "T-Shirts"
    },
    {
        "image": "/T-shirts/5.png",
        "imageBack": "/T-shirts/6.png",
        "usageType": "Coaches",
        "id": "force-elite-003",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Badminton",
        "productCode": "#JB-1003",
        "title": "Elite Series #03",
        "category": "T-Shirts",
        "brand": "Force",
        "description": "Professional grade high-performance badminton apparel.",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions."
    },
    {
        "description": "Professional grade high-performance kabaddi apparel.",
        "brand": "Force",
        "specs": {
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Kabaddi",
        "category": "T-Shirts",
        "productCode": "#JB-1004",
        "title": "Elite Series #04",
        "imageBack": "/T-shirts/8.png",
        "usageType": "Officials",
        "id": "force-elite-004",
        "image": "/T-shirts/7.png"
    },
    {
        "imageBack": "/T-shirts/10.png",
        "usageType": "General",
        "id": "force-elite-005",
        "image": "/T-shirts/9.png",
        "description": "Professional grade high-performance tennis apparel.",
        "brand": "Force",
        "specs": {
            "Fit": "Athletic Fit",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Tennis",
        "title": "Elite Series #05",
        "productCode": "#JB-1005",
        "category": "T-Shirts"
    },
    {
        "description": "Professional grade high-performance pickleball apparel.",
        "brand": "Force",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM"
        },
        "sport": "Pickleball",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1006",
        "title": "Elite Series #06",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/11 back.png",
        "id": "force-elite-006",
        "usageType": "Practice",
        "image": "/T-shirts/11.png"
    },
    {
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "specs": {
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India"
        },
        "description": "Professional grade high-performance cricket apparel.",
        "brand": "Force",
        "category": "T-Shirts",
        "productCode": "#JB-1007",
        "title": "Elite Series #07",
        "sport": "Cricket",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "id": "force-elite-007",
        "usageType": "Travel",
        "imageBack": "/T-shirts/12 backed.png",
        "image": "/T-shirts/12.png"
    },
    {
        "image": "/T-shirts/13.png",
        "imageBack": "/T-shirts/13 backed.png",
        "id": "force-elite-008",
        "usageType": "Coaches",
        "sport": "Football",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "title": "Elite Series #08",
        "productCode": "#JB-1008",
        "description": "Professional grade high-performance football apparel.",
        "brand": "Force",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "specs": {
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        }
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Badminton",
        "category": "T-Shirts",
        "title": "Elite Series #09",
        "productCode": "#JB-1009",
        "description": "Professional grade high-performance badminton apparel.",
        "brand": "Force",
        "specs": {
            "Weight": "160 GSM",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "image": "/T-shirts/14.png",
        "imageBack": "/T-shirts/15.png",
        "usageType": "Officials",
        "id": "force-elite-009"
    },
    {
        "usageType": "General",
        "id": "force-elite-010",
        "imageBack": "/T-shirts/17.png",
        "image": "/T-shirts/16.png",
        "specs": {
            "Weight": "160 GSM",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "brand": "Force",
        "description": "Professional grade high-performance kabaddi apparel.",
        "title": "Elite Series #10",
        "productCode": "#JB-1010",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Kabaddi"
    },
    {
        "usageType": "Practice",
        "id": "force-elite-011",
        "imageBack": "/T-shirts/19.png",
        "image": "/T-shirts/18.png",
        "specs": {
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "brand": "Force",
        "description": "Professional grade high-performance tennis apparel.",
        "productCode": "#JB-1011",
        "title": "Elite Series #11",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Tennis"
    },
    {
        "usageType": "Travel",
        "id": "force-elite-012",
        "imageBack": "/T-shirts/21.png",
        "image": "/T-shirts/20.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "brand": "Force",
        "description": "Professional grade high-performance pickleball apparel.",
        "category": "T-Shirts",
        "productCode": "#JB-1012",
        "title": "Elite Series #12",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Pickleball"
    },
    {
        "image": "/T-shirts/22.png",
        "imageBack": "/T-shirts/23.png",
        "usageType": "Coaches",
        "id": "force-elite-013",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Cricket",
        "category": "T-Shirts",
        "productCode": "#JB-1013",
        "title": "Elite Series #13",
        "description": "Professional grade high-performance cricket apparel.",
        "brand": "Force",
        "specs": {
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions."
    },
    {
        "category": "T-Shirts",
        "title": "Elite Series #14",
        "productCode": "#JB-1014",
        "sport": "Football",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "specs": {
            "Weight": "160 GSM",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Professional grade high-performance football apparel.",
        "brand": "Force",
        "image": "/T-shirts/24.png",
        "id": "force-elite-014",
        "usageType": "Officials",
        "imageBack": "/T-shirts/25.png"
    },
    {
        "category": "T-Shirts",
        "productCode": "#JB-1015",
        "title": "Elite Series #15",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Badminton",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "brand": "Force",
        "description": "Professional grade high-performance badminton apparel.",
        "image": "/T-shirts/26.png",
        "usageType": "General",
        "id": "force-elite-015",
        "imageBack": "/T-shirts/27.png"
    },
    {
        "imageBack": "/T-shirts/29.png",
        "usageType": "Practice",
        "id": "force-elite-016",
        "image": "/T-shirts/28.png",
        "description": "Professional grade high-performance kabaddi apparel.",
        "brand": "Force",
        "specs": {
            "Fit": "Athletic Fit",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Kabaddi",
        "category": "T-Shirts",
        "title": "Elite Series #16",
        "productCode": "#JB-1016"
    },
    {
        "usageType": "Travel",
        "id": "force-elite-017",
        "imageBack": "/T-shirts/31.png",
        "image": "/T-shirts/30.png",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "brand": "Force",
        "description": "Professional grade high-performance tennis apparel.",
        "category": "T-Shirts",
        "title": "Elite Series #17",
        "productCode": "#JB-1017",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Tennis"
    },
    {
        "image": "/T-shirts/32.png",
        "imageBack": "/T-shirts/33.png",
        "usageType": "Coaches",
        "id": "force-elite-018",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Pickleball",
        "title": "Elite Series #18",
        "productCode": "#JB-1018",
        "category": "T-Shirts",
        "brand": "Force",
        "description": "Professional grade high-performance pickleball apparel.",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions."
    },
    {
        "usageType": "Officials",
        "id": "force-elite-019",
        "imageBack": "/T-shirts/35.png",
        "image": "/T-shirts/34.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India"
        },
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "description": "Professional grade high-performance cricket apparel.",
        "brand": "Force",
        "productCode": "#JB-1019",
        "title": "Elite Series #19",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "sport": "Cricket"
    },
    {
        "brand": "Force",
        "description": "Professional grade high-performance football apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "specs": {
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India"
        },
        "sport": "Football",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1020",
        "title": "Elite Series #20",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/37.png",
        "id": "force-elite-020",
        "usageType": "General",
        "image": "/T-shirts/36.png"
    },
    {
        "id": "force-elite-021",
        "usageType": "Practice",
        "imageBack": "/T-shirts/39.png",
        "image": "/T-shirts/38.png",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Fit": "Athletic Fit"
        },
        "brand": "Force",
        "description": "Professional grade high-performance badminton apparel.",
        "productCode": "#JB-1021",
        "title": "Elite Series #21",
        "category": "T-Shirts",
        "sport": "Badminton",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ]
    },
    {
        "brand": "Force",
        "description": "Professional grade high-performance kabaddi apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India",
            "Weight": "160 GSM"
        },
        "sport": "Kabaddi",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1022",
        "title": "Elite Series #22",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/41.png",
        "id": "force-elite-022",
        "usageType": "Travel",
        "image": "/T-shirts/40.png"
    },
    {
        "productCode": "#JB-1023",
        "title": "Elite Series #23",
        "category": "T-Shirts",
        "sport": "Tennis",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "specs": {
            "Fit": "Athletic Fit",
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "brand": "Force",
        "description": "Professional grade high-performance tennis apparel.",
        "image": "/T-shirts/42.png",
        "id": "force-elite-023",
        "usageType": "Coaches",
        "imageBack": "/T-shirts/43.png"
    },
    {
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "description": "Professional grade high-performance pickleball apparel.",
        "productCode": "#JB-1024",
        "usageType": "Officials",
        "sport": "Pickleball",
        "brand": "Force",
        "title": "Elite Series #24",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "id": "force-elite-024",
        "imageBack": "/T-shirts/45.png",
        "image": "/T-shirts/44.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "usageType": "General",
        "brand": "Force",
        "sport": "Cricket",
        "title": "Elite Series #25",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "description": "Professional grade high-performance cricket apparel.",
        "productCode": "#JB-1025",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        },
        "id": "force-elite-025",
        "imageBack": "/T-shirts/47.png",
        "image": "/T-shirts/46.png"
    },
    {
        "description": "Professional grade high-performance football apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "productCode": "#JB-1026",
        "usageType": "Practice",
        "brand": "Force",
        "sport": "Football",
        "title": "Elite Series #26",
        "imageBack": "/T-shirts/49.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester"
        },
        "id": "force-elite-026",
        "image": "/T-shirts/48.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "title": "Elite Series #27",
        "usageType": "Travel",
        "sport": "Badminton",
        "brand": "Force",
        "productCode": "#JB-1027",
        "description": "Professional grade high-performance badminton apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/50.png",
        "imageBack": "/T-shirts/51.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "id": "force-elite-027"
    },
    {
        "image": "/T-shirts/52.png",
        "imageBack": "/T-shirts/53.png",
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-028",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1028",
        "description": "Professional grade high-performance kabaddi apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "title": "Elite Series #28",
        "usageType": "Coaches",
        "brand": "Force",
        "sport": "Kabaddi"
    },
    {
        "description": "Professional grade high-performance tennis apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "productCode": "#JB-1029",
        "sport": "Tennis",
        "brand": "Force",
        "usageType": "Officials",
        "title": "Elite Series #29",
        "imageBack": "/T-shirts/55.png",
        "id": "force-elite-029",
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "image": "/T-shirts/54.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "imageBack": "/T-shirts/57.png",
        "specs": {
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-030",
        "image": "/T-shirts/56.png",
        "brand": "Force",
        "sport": "Pickleball",
        "usageType": "General",
        "title": "Elite Series #30",
        "description": "Professional grade high-performance pickleball apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "productCode": "#JB-1030"
    },
    {
        "title": "Elite Series #31",
        "sport": "Cricket",
        "brand": "Force",
        "usageType": "Practice",
        "productCode": "#JB-1031",
        "description": "Professional grade high-performance cricket apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/58.png",
        "imageBack": "/T-shirts/59.png",
        "id": "force-elite-031",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        }
    },
    {
        "imageBack": "/T-shirts/61.png",
        "id": "force-elite-032",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "image": "/T-shirts/60.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "description": "Professional grade high-performance football apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "productCode": "#JB-1032",
        "sport": "Football",
        "brand": "Force",
        "usageType": "Travel",
        "title": "Elite Series #32"
    },
    {
        "image": "/T-shirts/62.png",
        "imageBack": "/T-shirts/63.png",
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-033",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1033",
        "description": "Professional grade high-performance badminton apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "title": "Elite Series #33",
        "brand": "Force",
        "sport": "Badminton",
        "usageType": "Coaches"
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "imageBack": "/T-shirts/65.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester"
        },
        "id": "force-elite-034",
        "image": "/T-shirts/64.png",
        "usageType": "Officials",
        "sport": "Kabaddi",
        "brand": "Force",
        "title": "Elite Series #34",
        "description": "Professional grade high-performance kabaddi apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "productCode": "#JB-1034"
    },
    {
        "image": "/T-shirts/66.png",
        "imageBack": "/T-shirts/67.png",
        "id": "force-elite-035",
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1035",
        "description": "Professional grade high-performance tennis apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "title": "Elite Series #35",
        "usageType": "General",
        "sport": "Tennis",
        "brand": "Force"
    },
    {
        "title": "Elite Series #36",
        "usageType": "Practice",
        "sport": "Pickleball",
        "brand": "Force",
        "productCode": "#JB-1036",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "description": "Professional grade high-performance pickleball apparel.",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/68.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester"
        },
        "id": "force-elite-036",
        "imageBack": "/T-shirts/69.png"
    },
    {
        "image": "/T-shirts/70.png",
        "imageBack": "/T-shirts/71.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester"
        },
        "id": "force-elite-037",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1037",
        "description": "Professional grade high-performance cricket apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "title": "Elite Series #37",
        "usageType": "Travel",
        "brand": "Force",
        "sport": "Cricket"
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "id": "force-elite-038",
        "imageBack": "/T-shirts/73.png",
        "image": "/T-shirts/72.png",
        "brand": "Force",
        "sport": "Football",
        "usageType": "Coaches",
        "title": "Elite Series #38",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "description": "Professional grade high-performance football apparel.",
        "productCode": "#JB-1038"
    },
    {
        "productCode": "#JB-1039",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "description": "Professional grade high-performance badminton apparel.",
        "title": "Elite Series #39",
        "sport": "Badminton",
        "brand": "Force",
        "usageType": "Officials",
        "image": "/T-shirts/74.png",
        "id": "force-elite-039",
        "specs": {
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "imageBack": "/T-shirts/75.png",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ]
    },
    {
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "description": "Professional grade high-performance kabaddi apparel.",
        "productCode": "#JB-1040",
        "sport": "Kabaddi",
        "brand": "Force",
        "usageType": "General",
        "title": "Elite Series #40",
        "id": "force-elite-040",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "imageBack": "/T-shirts/77.png",
        "image": "/T-shirts/76.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "description": "Professional grade high-performance tennis apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "productCode": "#JB-1041",
        "sport": "Tennis",
        "brand": "Force",
        "usageType": "Practice",
        "title": "Elite Series #41",
        "imageBack": "/T-shirts/79.png",
        "id": "force-elite-041",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "image": "/T-shirts/78.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "productCode": "#JB-1042",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "description": "Professional grade high-performance pickleball apparel.",
        "title": "Elite Series #42",
        "brand": "Force",
        "sport": "Pickleball",
        "usageType": "Travel",
        "image": "/T-shirts/80.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        },
        "id": "force-elite-042",
        "imageBack": "/T-shirts/81.png",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ]
    },
    {
        "usageType": "Coaches",
        "sport": "Cricket",
        "brand": "Force",
        "title": "Elite Series #43",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "description": "Professional grade high-performance cricket apparel.",
        "productCode": "#JB-1043",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "id": "force-elite-043",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "imageBack": "/T-shirts/83.png",
        "image": "/T-shirts/82.png"
    },
    {
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "description": "Professional grade high-performance football apparel.",
        "productCode": "#JB-1044",
        "sport": "Football",
        "brand": "Force",
        "usageType": "Officials",
        "title": "Elite Series #44",
        "id": "force-elite-044",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        },
        "imageBack": "/T-shirts/85.png",
        "image": "/T-shirts/84.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/86.png",
        "id": "force-elite-045",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        },
        "imageBack": "/T-shirts/87.png",
        "title": "Elite Series #45",
        "usageType": "General",
        "sport": "Badminton",
        "brand": "Force",
        "productCode": "#JB-1045",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "description": "Professional grade high-performance badminton apparel."
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "imageBack": "/T-shirts/89.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Origin": "Made in India"
        },
        "id": "force-elite-046",
        "image": "/T-shirts/88.png",
        "brand": "Force",
        "sport": "Kabaddi",
        "usageType": "Practice",
        "title": "Elite Series #46",
        "description": "Professional grade high-performance kabaddi apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "productCode": "#JB-1046"
    },
    {
        "usageType": "Travel",
        "brand": "Force",
        "sport": "Tennis",
        "title": "Elite Series #47",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "description": "Professional grade high-performance tennis apparel.",
        "productCode": "#JB-1047",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "id": "force-elite-047",
        "imageBack": "/T-shirts/91.png",
        "image": "/T-shirts/90.png"
    },
    {
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/92.png",
        "id": "force-elite-048",
        "specs": {
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "imageBack": "/T-shirts/93.png",
        "title": "Elite Series #48",
        "sport": "Pickleball",
        "brand": "Force",
        "usageType": "Coaches",
        "productCode": "#JB-1048",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "description": "Professional grade high-performance pickleball apparel."
    },
    {
        "title": "Elite Series #49",
        "usageType": "Officials",
        "brand": "Force",
        "sport": "Cricket",
        "productCode": "#JB-1049",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "description": "Professional grade high-performance cricket apparel.",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/94.png",
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-049",
        "imageBack": "/T-shirts/95.png"
    },
    {
        "id": "force-elite-050",
        "specs": {
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "imageBack": "/T-shirts/97.png",
        "image": "/T-shirts/96.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "description": "Professional grade high-performance football apparel.",
        "productCode": "#JB-1050",
        "brand": "Force",
        "sport": "Football",
        "usageType": "General",
        "title": "Elite Series #50"
    },
    {
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/98.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "id": "force-elite-051",
        "imageBack": "/T-shirts/99.png",
        "title": "Elite Series #51",
        "brand": "Force",
        "sport": "Badminton",
        "usageType": "Practice",
        "productCode": "#JB-1051",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "description": "Professional grade high-performance badminton apparel."
    },
    {
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/100.png",
        "imageBack": "/T-shirts/101.png",
        "specs": {
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "id": "force-elite-052",
        "title": "Elite Series #52",
        "brand": "Force",
        "sport": "Kabaddi",
        "usageType": "Travel",
        "productCode": "#JB-1052",
        "description": "Professional grade high-performance kabaddi apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions."
    },
    {
        "title": "Elite Series #53",
        "brand": "Force",
        "sport": "Tennis",
        "usageType": "Coaches",
        "productCode": "#JB-1053",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "description": "Professional grade high-performance tennis apparel.",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "image": "/T-shirts/102.png",
        "specs": {
            "Origin": "Made in India",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-053",
        "imageBack": "/T-shirts/103.png"
    },
    {
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "description": "Professional grade high-performance pickleball apparel.",
        "productCode": "#JB-1054",
        "usageType": "Officials",
        "brand": "Force",
        "sport": "Pickleball",
        "title": "Elite Series #54",
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-054",
        "imageBack": "/T-shirts/105.png",
        "image": "/T-shirts/104.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts"
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "imageBack": "/T-shirts/107.png",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "id": "force-elite-055",
        "image": "/T-shirts/106.png",
        "sport": "Cricket",
        "brand": "Force",
        "usageType": "General",
        "title": "Elite Series #55",
        "description": "Professional grade high-performance cricket apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "productCode": "#JB-1055"
    },
    {
        "usageType": "Practice",
        "brand": "Force",
        "sport": "Football",
        "title": "Elite Series #56",
        "description": "Professional grade high-performance football apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "productCode": "#JB-1056",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "imageBack": "/T-shirts/109.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        },
        "id": "force-elite-056",
        "image": "/T-shirts/108.png"
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "imageBack": "/T-shirts/111.png",
        "id": "force-elite-057",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "image": "/T-shirts/110.png",
        "usageType": "Travel",
        "sport": "Badminton",
        "brand": "Force",
        "title": "Elite Series #57",
        "description": "Professional grade high-performance badminton apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "productCode": "#JB-1057"
    },
    {
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Weight": "160 GSM",
            "Material": "100% Performance Polyester"
        },
        "id": "force-elite-058",
        "imageBack": "/T-shirts/113.png",
        "image": "/T-shirts/112.png",
        "brand": "Force",
        "sport": "Kabaddi",
        "usageType": "Coaches",
        "title": "Elite Series #58",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "description": "Professional grade high-performance kabaddi apparel.",
        "productCode": "#JB-1058"
    },
    {
        "image": "/T-shirts/114.png",
        "id": "force-elite-059",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "imageBack": "/T-shirts/115.png",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1059",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.",
        "description": "Professional grade high-performance tennis apparel.",
        "title": "Elite Series #59",
        "usageType": "Officials",
        "sport": "Tennis",
        "brand": "Force"
    },
    {
        "image": "/T-shirts/116.png",
        "imageBack": "/T-shirts/117.png",
        "id": "force-elite-060",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "productCode": "#JB-1060",
        "description": "Professional grade high-performance pickleball apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.",
        "title": "Elite Series #60",
        "sport": "Pickleball",
        "brand": "Force",
        "usageType": "General"
    },
    {
        "specs": {
            "Origin": "Made in India",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit"
        },
        "id": "force-elite-061",
        "imageBack": "/T-shirts/119.png",
        "image": "/T-shirts/118.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.",
        "description": "Professional grade high-performance cricket apparel.",
        "productCode": "#JB-1061",
        "sport": "Cricket",
        "brand": "Force",
        "usageType": "Practice",
        "title": "Elite Series #61"
    },
    {
        "imageBack": "/T-shirts/121.png",
        "specs": {
            "Origin": "Made in India",
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM"
        },
        "id": "force-elite-062",
        "image": "/T-shirts/120.png",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "description": "Professional grade high-performance football apparel.",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.",
        "productCode": "#JB-1062",
        "usageType": "Travel",
        "brand": "Force",
        "sport": "Football",
        "title": "Elite Series #62"
    },
    {
        "sport": "Badminton",
        "brand": "Force",
        "usageType": "Coaches",
        "title": "Elite Series #63",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.",
        "description": "Professional grade high-performance badminton apparel.",
        "productCode": "#JB-1063",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ],
        "category": "T-Shirts",
        "id": "force-elite-063",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Origin": "Made in India"
        },
        "imageBack": "/T-shirts/123.png",
        "image": "/T-shirts/122.png"
    },
    {
        "productCode": "#JB-1064",
        "longDescription": "Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.",
        "description": "Professional grade high-performance kabaddi apparel.",
        "title": "Elite Series #64",
        "usageType": "Officials",
        "sport": "Kabaddi",
        "brand": "Force",
        "image": "/T-shirts/124.png",
        "specs": {
            "Material": "100% Performance Polyester",
            "Weight": "160 GSM",
            "Fit": "Athletic Fit",
            "Origin": "Made in India"
        },
        "id": "force-elite-064",
        "imageBack": "/T-shirts/125.png",
        "category": "T-Shirts",
        "features": [
            "Moisture-Wicking Fabric",
            "Ergonomic Performance Cut",
            "Reinforced Stitching",
            "Sublimated Graphic Print",
            "Breathable Side Panels"
        ]
    },
    {
        "image": "/caps/maroon-cap.png",
        "productCode": "#CP-MAROON",
        "id": "force-elite-cap-maroon",
        "specs": {
            "Material": "High-Density Poly-Twill",
            "Color": "Deep Maroon"
        },
        "longDescription": "The Deep Maroon Elite Cap provides a sophisticated team aesthetic. Built to last with high-density fabric.",
        "description": "Premium deep maroon cap with a professional structured fit.",
        "category": "Caps",
        "title": "Elite Cap - Deep Maroon",
        "features": [
            "Structured crown",
            "Durable fabric",
            "Adjustable buckle"
        ],
        "brand": "Force",
        "sport": "Volleyball"
    },
    {
        "productCode": "#CP-NAVY",
        "image": "/caps/navy-cap.png",
        "description": "Professional midnight navy cap with a premium structured fit.",
        "specs": {
            "Color": "Midnight Navy",
            "Material": "Heavy-Duty Twill"
        },
        "longDescription": "The Elite Cap in Midnight Navy is the standard for team coaches and staff. It maintains its shape and color through intense sun exposure and heavy use.",
        "id": "force-elite-cap-navy",
        "title": "Elite Cap - Midnight Navy",
        "category": "Caps",
        "features": [
            "UV resistance",
            "Structured crown",
            "Premium feel"
        ],
        "brand": "Force",
        "sport": "Kabaddi"
    },
    {
        "features": [
            "Ultra-lightweight",
            "Moisture-wicking",
            "Modern fit"
        ],
        "brand": "Force",
        "sport": "Pickleball",
        "category": "Caps",
        "title": "Elite Cap - Electric Yellow",
        "specs": {
            "Material": "Technical Mesh",
            "Color": "Electric Yellow"
        },
        "longDescription": "Stand out from the crowd with the Electric Yellow Elite Cap. Lightweight, moisture-wicking and ultra-durable.",
        "id": "force-elite-cap-yellow",
        "description": "Daring electric yellow cap for the modern athlete.",
        "image": "/caps/yellow-cap.png",
        "productCode": "#CP-YELLOW"
    },
    {
        "title": "Flex Training Shorts",
        "category": "Shorts",
        "features": [
            "Lightweight Fabric",
            "Side Slits",
            "Reinforced Stitching",
            "Elastic Waist"
        ],
        "sport": "Volleyball",
        "brand": "Force",
        "productCode": "#SH 303",
        "image": "/short-flex.png",
        "description": "Lightweight and durable training shorts for all-day comfort.",
        "id": "force-flex-shorts",
        "specs": {
            "Stretch": "Standard Flex",
            "Material": "100% Performance Poly",
            "Length": "7-inch Inseam"
        },
        "longDescription": "Engineered for variety, the Flex Training Shorts are perfect for the gym, turf, or casual wear. The reinforced stitching ensures longevity, while the side slits allow for maximum range of motion."
    },
    {
        "productCode": "#FOO-01",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 01",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "image": "/Football/1_front.png",
        "id": "force-football-01",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Football/1_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/1_back.png",
            "/Football/1_front.png"
        ]
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/2_back.png",
            "/Football/2_front.png"
        ],
        "image": "/Football/2_front.png",
        "id": "force-football-02",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Football/2_back.png",
        "title": "Football Kit 02",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "productCode": "#FOO-02",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "title": "Football Kit 03",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "productCode": "#FOO-03",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/3_back.png",
            "/Football/3_front.png"
        ],
        "image": "/Football/3_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "id": "force-football-03",
        "imageBack": "/Football/3_back.png"
    },
    {
        "productCode": "#FOO-04",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 04",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "image": "/Football/4_front.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-football-04",
        "imageBack": "/Football/4_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/4_back.png",
            "/Football/4_front.png"
        ]
    },
    {
        "productCode": "#FOO-05",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 05",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "image": "/Football/5_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-05",
        "imageBack": "/Football/5_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/5_back.png",
            "/Football/5_front.png"
        ]
    },
    {
        "gallery": [
            "/Football/6_back.png",
            "/Football/6_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "imageBack": "/Football/6_back.png",
        "id": "force-football-06",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "image": "/Football/6_front.png",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "title": "Football Kit 06",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-06"
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/7_back.png",
            "/Football/7_front.png"
        ],
        "image": "/Football/7_front.png",
        "id": "force-football-07",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Football/7_back.png",
        "title": "Football Kit 07",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "productCode": "#FOO-07",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/8_back.png",
            "/Football/8_front.png"
        ],
        "category": "T-Shirts",
        "id": "force-football-08",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Football/8_back.png",
        "image": "/Football/8_front.png",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "title": "Football Kit 08",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-08"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/9_back.png",
            "/Football/9_front.png"
        ],
        "category": "T-Shirts",
        "id": "force-football-09",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "imageBack": "/Football/9_back.png",
        "image": "/Football/9_front.png",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "title": "Football Kit 09",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-09"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/10_back.png",
            "/Football/10_front.png"
        ],
        "category": "T-Shirts",
        "id": "force-football-10",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Football/10_back.png",
        "image": "/Football/10_front.png",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "title": "Football Kit 10",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-10"
    },
    {
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "id": "force-football-11",
        "imageBack": "/Football/11_back.png",
        "image": "/Football/11_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/11_back.png",
            "/Football/11_front.png"
        ],
        "category": "T-Shirts",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-11",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "title": "Football Kit 11"
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/12_back.png",
            "/Football/12_front.png"
        ],
        "image": "/Football/12_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-12",
        "imageBack": "/Football/12_back.png",
        "title": "Football Kit 12",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "productCode": "#FOO-12",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Football/13_front.png",
        "imageBack": "/Football/13_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "id": "force-football-13",
        "category": "T-Shirts",
        "gallery": [
            "/Football/13_back.png",
            "/Football/13_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#FOO-13",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Football Kit 13",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20"
    },
    {
        "image": "/Football/14_front.png",
        "imageBack": "/Football/14_back.png",
        "id": "force-football-14",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "gallery": [
            "/Football/14_back.png",
            "/Football/14_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#FOO-14",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Football Kit 14",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports"
    },
    {
        "title": "Football Kit 15",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "productCode": "#FOO-15",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/15_back.png",
            "/Football/15_front.png"
        ],
        "image": "/Football/15_front.png",
        "id": "force-football-15",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "imageBack": "/Football/15_back.png"
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/16_back.png",
            "/Football/16_front.png"
        ],
        "image": "/Football/16_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "id": "force-football-16",
        "imageBack": "/Football/16_back.png",
        "title": "Football Kit 16",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "productCode": "#FOO-16",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Football/17_front.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "id": "force-football-17",
        "imageBack": "/Football/17_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/17_back.png",
            "/Football/17_front.png"
        ],
        "productCode": "#FOO-17",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 17",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football"
    },
    {
        "productCode": "#FOO-18",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 18",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "image": "/Football/18_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "id": "force-football-18",
        "imageBack": "/Football/18_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/18_back.png",
            "/Football/18_front.png"
        ]
    },
    {
        "title": "Football Kit 19",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "productCode": "#FOO-19",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "gallery": [
            "/Football/19_back.png",
            "/Football/19_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Football/19_front.png",
        "imageBack": "/Football/19_back.png",
        "id": "force-football-19",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        }
    },
    {
        "category": "T-Shirts",
        "gallery": [
            "/Football/20_back.png",
            "/Football/20_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Football/20_front.png",
        "imageBack": "/Football/20_back.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-football-20",
        "title": "Football Kit 20",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "productCode": "#FOO-20",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "image": "/Football/21_front.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-21",
        "imageBack": "/Football/21_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/21_back.png",
            "/Football/21_front.png"
        ],
        "productCode": "#FOO-21",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 21",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football"
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/22_back.png",
            "/Football/22_front.png"
        ],
        "image": "/Football/22_front.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "id": "force-football-22",
        "imageBack": "/Football/22_back.png",
        "title": "Football Kit 22",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "productCode": "#FOO-22",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/23_back.png",
            "/Football/23_front.png"
        ],
        "image": "/Football/23_front.png",
        "id": "force-football-23",
        "specs": {
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Football/23_back.png",
        "title": "Football Kit 23",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "productCode": "#FOO-23",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "title": "Football Kit 24",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "productCode": "#FOO-24",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/24_back.png",
            "/Football/24_front.png"
        ],
        "image": "/Football/24_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-24",
        "imageBack": "/Football/24_back.png"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/25_back.png",
            "/Football/25_front.png"
        ],
        "category": "T-Shirts",
        "id": "force-football-25",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Football/25_back.png",
        "image": "/Football/25_front.png",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "title": "Football Kit 25",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-25"
    },
    {
        "gallery": [
            "/Football/26_back.png",
            "/Football/26_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "imageBack": "/Football/26_back.png",
        "id": "force-football-26",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "image": "/Football/26_front.png",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "title": "Football Kit 26",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-26"
    },
    {
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-27",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "title": "Football Kit 27",
        "imageBack": "/Football/27_back.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-27",
        "image": "/Football/27_front.png",
        "gallery": [
            "/Football/27_back.png",
            "/Football/27_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/28_back.png",
            "/Football/28_front.png"
        ],
        "category": "T-Shirts",
        "id": "force-football-28",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "imageBack": "/Football/28_back.png",
        "image": "/Football/28_front.png",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "title": "Football Kit 28",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-28"
    },
    {
        "image": "/Football/29_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-football-29",
        "imageBack": "/Football/29_back.png",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/29_back.png",
            "/Football/29_front.png"
        ],
        "productCode": "#FOO-29",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Football Kit 29",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football"
    },
    {
        "title": "Football Kit 30",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "productCode": "#FOO-30",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/30_back.png",
            "/Football/30_front.png"
        ],
        "image": "/Football/30_front.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "id": "force-football-30",
        "imageBack": "/Football/30_back.png"
    },
    {
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "title": "Football Kit 31",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-31",
        "gallery": [
            "/Football/31_back.png",
            "/Football/31_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "imageBack": "/Football/31_back.png",
        "id": "force-football-31",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "image": "/Football/31_front.png"
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/32_back.png",
            "/Football/32_front.png"
        ],
        "image": "/Football/32_front.png",
        "id": "force-football-32",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Football/32_back.png",
        "title": "Football Kit 32",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "productCode": "#FOO-32",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "gallery": [
            "/Football/33_back.png",
            "/Football/33_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "imageBack": "/Football/33_back.png",
        "id": "force-football-33",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "image": "/Football/33_front.png",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "title": "Football Kit 33",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-33"
    },
    {
        "title": "Football Kit 34",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "productCode": "#FOO-34",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/34_back.png",
            "/Football/34_front.png"
        ],
        "image": "/Football/34_front.png",
        "id": "force-football-34",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Football/34_back.png"
    },
    {
        "title": "Football Kit 35",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "productCode": "#FOO-35",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/35_back.png",
            "/Football/35_front.png"
        ],
        "image": "/Football/35_front.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-35",
        "imageBack": "/Football/35_back.png"
    },
    {
        "imageBack": "/Football/36_back.png",
        "id": "force-football-36",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "image": "/Football/36_front.png",
        "gallery": [
            "/Football/36_back.png",
            "/Football/36_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-36",
        "sport": "Football",
        "brand": "Force Sports",
        "usageType": "T20",
        "title": "Football Kit 36"
    },
    {
        "title": "Football Kit 37",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "productCode": "#FOO-37",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/37_back.png",
            "/Football/37_front.png"
        ],
        "image": "/Football/37_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-football-37",
        "imageBack": "/Football/37_back.png"
    },
    {
        "title": "Football Kit 38",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "productCode": "#FOO-38",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "gallery": [
            "/Football/38_back.png",
            "/Football/38_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Football/38_front.png",
        "imageBack": "/Football/38_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-football-38"
    },
    {
        "productCode": "#FOO-39",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Football Kit 39",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "image": "/Football/39_front.png",
        "imageBack": "/Football/39_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "id": "force-football-39",
        "category": "T-Shirts",
        "gallery": [
            "/Football/39_back.png",
            "/Football/39_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "id": "force-football-40",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Football/40_back.png",
        "image": "/Football/40_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/40_back.png",
            "/Football/40_front.png"
        ],
        "category": "T-Shirts",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-40",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "title": "Football Kit 40"
    },
    {
        "imageBack": "/Football/41_back.png",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "id": "force-football-41",
        "image": "/Football/41_front.png",
        "gallery": [
            "/Football/41_back.png",
            "/Football/41_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-41",
        "brand": "Force Sports",
        "sport": "Football",
        "usageType": "T20",
        "title": "Football Kit 41"
    },
    {
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "title": "Football Kit 42",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#FOO-42",
        "gallery": [
            "/Football/42_back.png",
            "/Football/42_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "imageBack": "/Football/42_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "id": "force-football-42",
        "image": "/Football/42_front.png"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/43_back.png",
            "/Football/43_front.png"
        ],
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "id": "force-football-43",
        "imageBack": "/Football/43_back.png",
        "image": "/Football/43_front.png",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "title": "Football Kit 43",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#FOO-43"
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Football/44_back.png",
            "/Football/44_front.png"
        ],
        "image": "/Football/44_front.png",
        "id": "force-football-44",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Football/44_back.png",
        "title": "Football Kit 44",
        "usageType": "T20",
        "sport": "Football",
        "brand": "Force Sports",
        "productCode": "#FOO-44",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "productCode": "#FOO-45",
        "description": "Premium Football technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Football range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Football Kit 45",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Football",
        "image": "/Football/45_front.png",
        "imageBack": "/Football/45_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "id": "force-football-45",
        "category": "T-Shirts",
        "gallery": [
            "/Football/45_back.png",
            "/Football/45_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "productCode": "#FB-TR-01",
        "longDescription": "Crafted with premium cotton-rich fabric, this polo keeps the squad looking cohesive and professional during tours.",
        "description": "Elegant travel polo for football teams.",
        "title": "Pitch-Side Travel Polo",
        "sport": "Football",
        "brand": "Force",
        "usageType": "Travel",
        "image": "/T-shirts/32.png",
        "id": "force-football-travel",
        "specs": {
            "Material": "Cotton/Poly Pique",
            "Usage": "Team Travel"
        },
        "imageBack": "/T-shirts/33.png",
        "category": "T-Shirts",
        "features": [
            "Embroidered Crest Space",
            "Cohesive Design",
            "Comfort Rib"
        ]
    },
    {
        "image": "/Kabaddi/1_front.png",
        "imageBack": "/Kabaddi/1_back.png",
        "id": "force-kabaddi-01",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "gallery": [
            "/Kabaddi/1_back.png",
            "/Kabaddi/1_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#KAB-01",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Kabaddi Kit 01",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "usageType": "T20"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Kabaddi/2_back.png",
            "/Kabaddi/2_front.png"
        ],
        "category": "T-Shirts",
        "id": "force-kabaddi-02",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "imageBack": "/Kabaddi/2_back.png",
        "image": "/Kabaddi/2_front.png",
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "usageType": "T20",
        "title": "Kabaddi Kit 02",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#KAB-02"
    },
    {
        "imageBack": "/Kabaddi/3_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-kabaddi-03",
        "image": "/Kabaddi/3_front.png",
        "gallery": [
            "/Kabaddi/3_back.png",
            "/Kabaddi/3_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "productCode": "#KAB-03",
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "usageType": "T20",
        "title": "Kabaddi Kit 03"
    },
    {
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 04",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#KAB-04",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Kabaddi/4_back.png",
            "/Kabaddi/4_front.png"
        ],
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-kabaddi-04",
        "imageBack": "/Kabaddi/4_back.png",
        "image": "/Kabaddi/4_front.png"
    },
    {
        "title": "Kabaddi Kit 05",
        "usageType": "T20",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "productCode": "#KAB-05",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Kabaddi/5_back.png",
            "/Kabaddi/5_front.png"
        ],
        "image": "/Kabaddi/5_front.png",
        "id": "force-kabaddi-05",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "imageBack": "/Kabaddi/5_back.png"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Material": "Sublimated Polyester"
        },
        "id": "force-kabaddi-06",
        "imageBack": "/Kabaddi/6_back.png",
        "image": "/Kabaddi/6_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Kabaddi/6_back.png",
            "/Kabaddi/6_front.png"
        ],
        "category": "T-Shirts",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#KAB-06",
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "usageType": "T20",
        "title": "Kabaddi Kit 06"
    },
    {
        "productCode": "#KAB-07",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Kabaddi Kit 07",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "image": "/Kabaddi/7_front.png",
        "imageBack": "/Kabaddi/7_back.png",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "GSM": "180"
        },
        "id": "force-kabaddi-07",
        "category": "T-Shirts",
        "gallery": [
            "/Kabaddi/7_back.png",
            "/Kabaddi/7_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "category": "T-Shirts",
        "gallery": [
            "/Kabaddi/8_back.png",
            "/Kabaddi/8_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/8_front.png",
        "imageBack": "/Kabaddi/8_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "id": "force-kabaddi-08",
        "title": "Kabaddi Kit 08",
        "usageType": "T20",
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "productCode": "#KAB-08",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Kabaddi/9_back.png",
            "/Kabaddi/9_front.png"
        ],
        "image": "/Kabaddi/9_front.png",
        "id": "force-kabaddi-09",
        "specs": {
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms"
        },
        "imageBack": "/Kabaddi/9_back.png",
        "title": "Kabaddi Kit 09",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "usageType": "T20",
        "productCode": "#KAB-09",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "usageType": "T20",
        "image": "/Kabaddi/10_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-kabaddi-10",
        "imageBack": "/Kabaddi/10_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/10_back.png",
            "/Kabaddi/10_front.png"
        ],
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Kabaddi",
        "productCode": "#KAB-10",
        "title": "Kabaddi Kit 10"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-11",
        "imageBack": "/Kabaddi/11_back.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/11_front.png",
        "usageType": "T20",
        "productCode": "#KAB-11",
        "title": "Kabaddi Kit 11",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "gallery": [
            "/Kabaddi/11_back.png",
            "/Kabaddi/11_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/12_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-12",
        "imageBack": "/Kabaddi/12_back.png",
        "gallery": [
            "/Kabaddi/12_back.png",
            "/Kabaddi/12_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "productCode": "#KAB-12",
        "title": "Kabaddi Kit 12"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/13_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/13_back.png",
        "id": "force-kabaddi-13",
        "gallery": [
            "/Kabaddi/13_back.png",
            "/Kabaddi/13_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "category": "T-Shirts",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Kabaddi Kit 13",
        "productCode": "#KAB-13"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-14",
        "imageBack": "/Kabaddi/14_back.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/14_front.png",
        "usageType": "T20",
        "productCode": "#KAB-14",
        "title": "Kabaddi Kit 14",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "gallery": [
            "/Kabaddi/14_back.png",
            "/Kabaddi/14_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/15_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/15_back.png",
        "id": "force-kabaddi-15",
        "gallery": [
            "/Kabaddi/15_back.png",
            "/Kabaddi/15_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Kabaddi Kit 15",
        "productCode": "#KAB-15"
    },
    {
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/16_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/16_back.png",
        "id": "force-kabaddi-16",
        "gallery": [
            "/Kabaddi/16_back.png",
            "/Kabaddi/16_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 16",
        "productCode": "#KAB-16",
        "sport": "Kabaddi",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "title": "Kabaddi Kit 17",
        "productCode": "#KAB-17",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/17_back.png",
            "/Kabaddi/17_front.png"
        ],
        "imageBack": "/Kabaddi/17_back.png",
        "id": "force-kabaddi-17",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/17_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/18_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/18_back.png",
        "id": "force-kabaddi-18",
        "gallery": [
            "/Kabaddi/18_back.png",
            "/Kabaddi/18_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 18",
        "productCode": "#KAB-18",
        "sport": "Kabaddi",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "sport": "Kabaddi",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Kabaddi Kit 19",
        "productCode": "#KAB-19",
        "gallery": [
            "/Kabaddi/19_back.png",
            "/Kabaddi/19_front.png"
        ],
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/19_back.png",
        "id": "force-kabaddi-19",
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/19_front.png"
    },
    {
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/20_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/20_back.png",
        "id": "force-kabaddi-20",
        "gallery": [
            "/Kabaddi/20_back.png",
            "/Kabaddi/20_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 20",
        "productCode": "#KAB-20",
        "sport": "Kabaddi",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "sport": "Kabaddi",
        "productCode": "#KAB-21",
        "title": "Kabaddi Kit 21",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/21_back.png",
            "/Kabaddi/21_front.png"
        ],
        "id": "force-kabaddi-21",
        "imageBack": "/Kabaddi/21_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/Kabaddi/21_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 22",
        "productCode": "#KAB-22",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/22_back.png",
            "/Kabaddi/22_front.png"
        ],
        "imageBack": "/Kabaddi/22_back.png",
        "id": "force-kabaddi-22",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/Kabaddi/22_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 23",
        "productCode": "#KAB-23",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/23_back.png",
            "/Kabaddi/23_front.png"
        ],
        "imageBack": "/Kabaddi/23_back.png",
        "id": "force-kabaddi-23",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/Kabaddi/23_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/24_back.png",
            "/Kabaddi/24_front.png"
        ],
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 24",
        "productCode": "#KAB-24",
        "usageType": "T20",
        "image": "/Kabaddi/24_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Kabaddi/24_back.png",
        "id": "force-kabaddi-24",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/25_back.png",
            "/Kabaddi/25_front.png"
        ],
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "sport": "Kabaddi",
        "productCode": "#KAB-25",
        "title": "Kabaddi Kit 25",
        "usageType": "T20",
        "image": "/Kabaddi/25_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-kabaddi-25",
        "imageBack": "/Kabaddi/25_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/26_back.png",
            "/Kabaddi/26_front.png"
        ],
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "sport": "Kabaddi",
        "productCode": "#KAB-26",
        "title": "Kabaddi Kit 26",
        "usageType": "T20",
        "image": "/Kabaddi/26_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-kabaddi-26",
        "imageBack": "/Kabaddi/26_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/27_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-27",
        "imageBack": "/Kabaddi/27_back.png",
        "gallery": [
            "/Kabaddi/27_back.png",
            "/Kabaddi/27_front.png"
        ],
        "brand": "Force Sports",
        "productCode": "#KAB-27",
        "title": "Kabaddi Kit 27",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        }
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/28_back.png",
            "/Kabaddi/28_front.png"
        ],
        "productCode": "#KAB-28",
        "title": "Kabaddi Kit 28",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Kabaddi",
        "image": "/Kabaddi/28_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-kabaddi-28",
        "imageBack": "/Kabaddi/28_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "gallery": [
            "/Kabaddi/29_back.png",
            "/Kabaddi/29_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 29",
        "productCode": "#KAB-29",
        "sport": "Kabaddi",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/29_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/29_back.png",
        "id": "force-kabaddi-29"
    },
    {
        "title": "Kabaddi Kit 30",
        "productCode": "#KAB-30",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/30_back.png",
            "/Kabaddi/30_front.png"
        ],
        "imageBack": "/Kabaddi/30_back.png",
        "id": "force-kabaddi-30",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/30_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "imageBack": "/Kabaddi/31_back.png",
        "id": "force-kabaddi-31",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/Kabaddi/31_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 31",
        "productCode": "#KAB-31",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/31_back.png",
            "/Kabaddi/31_front.png"
        ]
    },
    {
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/32_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/32_back.png",
        "id": "force-kabaddi-32",
        "gallery": [
            "/Kabaddi/32_back.png",
            "/Kabaddi/32_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 32",
        "productCode": "#KAB-32",
        "sport": "Kabaddi",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "productCode": "#KAB-33",
        "title": "Kabaddi Kit 33",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/33_back.png",
            "/Kabaddi/33_front.png"
        ],
        "id": "force-kabaddi-33",
        "imageBack": "/Kabaddi/33_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/33_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "imageBack": "/Kabaddi/34_back.png",
        "id": "force-kabaddi-34",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/Kabaddi/34_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 34",
        "productCode": "#KAB-34",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/34_back.png",
            "/Kabaddi/34_front.png"
        ]
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/35_back.png",
            "/Kabaddi/35_front.png"
        ],
        "title": "Kabaddi Kit 35",
        "productCode": "#KAB-35",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "image": "/Kabaddi/35_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "imageBack": "/Kabaddi/35_back.png",
        "id": "force-kabaddi-35",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/36_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/36_back.png",
        "id": "force-kabaddi-36",
        "gallery": [
            "/Kabaddi/36_back.png",
            "/Kabaddi/36_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Kabaddi Kit 36",
        "productCode": "#KAB-36"
    },
    {
        "productCode": "#KAB-37",
        "title": "Kabaddi Kit 37",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/37_back.png",
            "/Kabaddi/37_front.png"
        ],
        "id": "force-kabaddi-37",
        "imageBack": "/Kabaddi/37_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/37_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "title": "Kabaddi Kit 38",
        "productCode": "#KAB-38",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/38_back.png",
            "/Kabaddi/38_front.png"
        ],
        "imageBack": "/Kabaddi/38_back.png",
        "id": "force-kabaddi-38",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/38_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Kabaddi",
        "productCode": "#KAB-39",
        "title": "Kabaddi Kit 39",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/39_back.png",
            "/Kabaddi/39_front.png"
        ],
        "id": "force-kabaddi-39",
        "imageBack": "/Kabaddi/39_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/Kabaddi/39_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/40_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/40_back.png",
        "id": "force-kabaddi-40",
        "gallery": [
            "/Kabaddi/40_back.png",
            "/Kabaddi/40_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Kabaddi",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Kabaddi Kit 40",
        "productCode": "#KAB-40"
    },
    {
        "gallery": [
            "/Kabaddi/41_back.png",
            "/Kabaddi/41_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 41",
        "productCode": "#KAB-41",
        "sport": "Kabaddi",
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/41_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/41_back.png",
        "id": "force-kabaddi-41"
    },
    {
        "image": "/Kabaddi/42_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-kabaddi-42",
        "imageBack": "/Kabaddi/42_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/42_back.png",
            "/Kabaddi/42_front.png"
        ],
        "productCode": "#KAB-42",
        "title": "Kabaddi Kit 42",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "sport": "Kabaddi"
    },
    {
        "title": "Kabaddi Kit 43",
        "productCode": "#KAB-43",
        "sport": "Kabaddi",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "gallery": [
            "/Kabaddi/43_back.png",
            "/Kabaddi/43_front.png"
        ],
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/43_back.png",
        "id": "force-kabaddi-43",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/43_front.png",
        "usageType": "T20"
    },
    {
        "image": "/Kabaddi/44_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-kabaddi-44",
        "imageBack": "/Kabaddi/44_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/44_back.png",
            "/Kabaddi/44_front.png"
        ],
        "productCode": "#KAB-44",
        "title": "Kabaddi Kit 44",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "sport": "Kabaddi"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-45",
        "imageBack": "/Kabaddi/45_back.png",
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/45_front.png",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "productCode": "#KAB-45",
        "title": "Kabaddi Kit 45",
        "gallery": [
            "/Kabaddi/45_back.png",
            "/Kabaddi/45_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "usageType": "T20",
        "image": "/Kabaddi/46_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-kabaddi-46",
        "imageBack": "/Kabaddi/46_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/46_back.png",
            "/Kabaddi/46_front.png"
        ],
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "sport": "Kabaddi",
        "productCode": "#KAB-46",
        "title": "Kabaddi Kit 46"
    },
    {
        "imageBack": "/Kabaddi/47_back.png",
        "id": "force-kabaddi-47",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/47_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Kabaddi Kit 47",
        "productCode": "#KAB-47",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/47_back.png",
            "/Kabaddi/47_front.png"
        ]
    },
    {
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/48_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-48",
        "imageBack": "/Kabaddi/48_back.png",
        "gallery": [
            "/Kabaddi/48_back.png",
            "/Kabaddi/48_front.png"
        ],
        "brand": "Force Sports",
        "productCode": "#KAB-48",
        "title": "Kabaddi Kit 48",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        }
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/49_back.png",
            "/Kabaddi/49_front.png"
        ],
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "title": "Kabaddi Kit 49",
        "productCode": "#KAB-49",
        "usageType": "T20",
        "image": "/Kabaddi/49_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/Kabaddi/49_back.png",
        "id": "force-kabaddi-49",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "gallery": [
            "/Kabaddi/50_back.png",
            "/Kabaddi/50_front.png"
        ],
        "brand": "Force Sports",
        "productCode": "#KAB-50",
        "title": "Kabaddi Kit 50",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/50_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-50",
        "imageBack": "/Kabaddi/50_back.png"
    },
    {
        "title": "Kabaddi Kit 51",
        "productCode": "#KAB-51",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Kabaddi",
        "brand": "Force Sports",
        "gallery": [
            "/Kabaddi/51_back.png",
            "/Kabaddi/51_front.png"
        ],
        "imageBack": "/Kabaddi/51_back.png",
        "id": "force-kabaddi-51",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/Kabaddi/51_front.png",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "gallery": [
            "/Kabaddi/52_back.png",
            "/Kabaddi/52_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 52",
        "productCode": "#KAB-52",
        "sport": "Kabaddi",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/52_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/52_back.png",
        "id": "force-kabaddi-52"
    },
    {
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "productCode": "#KAB-53",
        "title": "Kabaddi Kit 53",
        "gallery": [
            "/Kabaddi/53_back.png",
            "/Kabaddi/53_front.png"
        ],
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-53",
        "imageBack": "/Kabaddi/53_back.png",
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/53_front.png"
    },
    {
        "gallery": [
            "/Kabaddi/54_back.png",
            "/Kabaddi/54_front.png"
        ],
        "brand": "Force Sports",
        "title": "Kabaddi Kit 54",
        "productCode": "#KAB-54",
        "sport": "Kabaddi",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/54_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/Kabaddi/54_back.png",
        "id": "force-kabaddi-54"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-kabaddi-55",
        "imageBack": "/Kabaddi/55_back.png",
        "usageType": "T20",
        "longDescription": "Our Kabaddi range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/Kabaddi/55_front.png",
        "sport": "Kabaddi",
        "description": "Premium Kabaddi technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "productCode": "#KAB-55",
        "title": "Kabaddi Kit 55",
        "gallery": [
            "/Kabaddi/55_back.png",
            "/Kabaddi/55_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "features": [
            "Mat-Grip Seams",
            "Signal Visibility",
            "Breathable"
        ],
        "id": "force-kabaddi-official",
        "imageBack": "/T-shirts/37.png",
        "usageType": "Officials",
        "longDescription": "Stretchable yet durable to keep up with the fast-paced movements of kabaddi officiating.",
        "image": "/T-shirts/36.png",
        "sport": "Kabaddi",
        "description": "High-visibility officials shirt for intense Kabaddi matches.",
        "specs": {
            "Material": "Reinforced Mesh",
            "Usage": "Officiating"
        },
        "category": "T-Shirts",
        "productCode": "#KB-OF-77",
        "title": "Pro-Mat Official Shirt",
        "brand": "Force"
    },
    {
        "productCode": "#OF 202",
        "title": "Official Referee Shirt",
        "sport": "Other",
        "description": "Pro-grade officials and referee apparel.",
        "specs": {
            "Usage": "Officiating",
            "Material": "Structured Micro-Mesh"
        },
        "category": "T-Shirts",
        "brand": "Force",
        "features": [
            "Dual Pocket Setup",
            "Quick Dry",
            "Streamlined Fit",
            "Durable Stitching"
        ],
        "id": "force-official-shirt",
        "imageBack": "/T-shirts/25.png",
        "longDescription": "Designed for officials who need to stay cool and focused. Features specific pocket placements and a streamlined athletic cut.",
        "image": "/T-shirts/24.png",
        "usageType": "Officials"
    },
    {
        "image": "/T-shirts/106.png",
        "longDescription": "A core part of our Pickleball range, the India Blue #PB104 series offers timeless style with modern tech features.",
        "brand": "Force",
        "title": "Pickleball Shield Tee - India Blue",
        "productCode": "#PB104-IND",
        "imageBack": "/T-shirts/107.png",
        "specs": {
            "Series": "#PB104",
            "Material": "Performance Mesh",
            "Color": "India Blue"
        },
        "category": "T-Shirts",
        "description": "Classic India Blue performance jersey with technical graphics.",
        "id": "force-pb-104-india",
        "sport": "Pickleball",
        "features": [
            "Sublimated technical art",
            "Breathable side mesh",
            "Contoured fit",
            "Durable print"
        ]
    },
    {
        "longDescription": "Stand out on the court with the Parrot Green #PB104 jersey. Lightweight design for maximum speed and agility.",
        "image": "/T-shirts/102.png",
        "brand": "Force",
        "productCode": "#PB104-PAR",
        "title": "Pickleball Shield Tee - Parrot Green",
        "features": [
            "High-viz graphics",
            "Moisture-wicking tech",
            "Ultra-light build",
            "Sublimated finish"
        ],
        "sport": "Pickleball",
        "description": "Vibrant Parrot Green Pickelball jersey with #PB104 graphics.",
        "id": "force-pb-104-parrot",
        "imageBack": "/T-shirts/103.png",
        "specs": {
            "Series": "#PB104",
            "Material": "Technical Poly",
            "Color": "Parrot Green"
        },
        "category": "T-Shirts"
    },
    {
        "brand": "Force",
        "image": "/T-shirts/108.png",
        "longDescription": "The Peach edition of #PB104 brings a fresh aesthetic to the court without compromising on performance.",
        "description": "Sophisticated Peach Pickleball jersey with #PB104 tech art.",
        "id": "force-pb-104-peach",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/109.png",
        "specs": {
            "Series": "#PB104",
            "Color": "Peach",
            "Material": "Premium Poly"
        },
        "sport": "Pickleball",
        "features": [
            "Fresh Peach colorway",
            "Technical graphics",
            "Soft-touch fabric",
            "Quick-dry tech"
        ],
        "productCode": "#PB104-PCH",
        "title": "Pickleball Shield Tee - Peach"
    },
    {
        "longDescription": "The #PB104 series features a bold, artistic brush-stroke effect across the body, paired with clean geometric shoulder detailing.",
        "image": "/T-shirts/104.png",
        "brand": "Force",
        "title": "Pickleball Shield Tee - Royal Blue",
        "productCode": "#PB104-RYL",
        "features": [
            "Artistic Brush Pattern",
            "Geometric Shoulder Accent",
            "4-way stretch fabric",
            "Flatlock seams"
        ],
        "sport": "Pickleball",
        "specs": {
            "Series": "#PB104",
            "Material": "Performance Poly",
            "Color": "Royal Blue"
        },
        "imageBack": "/T-shirts/105.png",
        "category": "T-Shirts",
        "id": "force-pb-104-royal",
        "description": "Artistic brush-stroke design with modern geometric overlays."
    },
    {
        "brand": "Force",
        "longDescription": "The Bisleri edition of the #PB105 series combines a fresh color palette with our most advanced Pickleball-specific cut.",
        "image": "/T-shirts/124.png",
        "sport": "Pickleball",
        "features": [
            "Geometric Tech Pattern",
            "Ultra-breathable knit",
            "Reinforced stitching",
            "Vibrant mint finish"
        ],
        "specs": {
            "Fit": "Athletic",
            "Material": "Technical Dot Knit",
            "Series": "#PB105"
        },
        "imageBack": "/T-shirts/125.png",
        "category": "T-Shirts",
        "id": "force-pb-105-bisleri",
        "description": "Modern Bisleri green Pickleball jersey with geometric accents.",
        "title": "Pickleball Apex Tee - Bisleri",
        "productCode": "#PB105-BIS"
    },
    {
        "longDescription": "Built for competitive play, this Navy edition of the #PB105 series offers a professional look with technical performance features.",
        "image": "/T-shirts/122.png",
        "brand": "Force",
        "title": "Pickleball Apex Tee - Deep Navy",
        "productCode": "#PB105-NVY",
        "features": [
            "Signature #PB105 Pattern",
            "High-density sublimation",
            "Quick-dry technology",
            "Anti-odor finish"
        ],
        "sport": "Pickleball",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/123.png",
        "specs": {
            "Series": "#PB105",
            "Fit": "Performance",
            "Material": "Technical Mesh"
        },
        "id": "force-pb-105-navy",
        "description": "Professional grade Navy Pickleball jersey with tech patterns."
    },
    {
        "specs": {
            "Series": "#PB105",
            "Material": "Premium Poly-Dot",
            "Fit": "True to Size"
        },
        "imageBack": "/T-shirts/121.png",
        "category": "T-Shirts",
        "id": "force-pb-105-peacock",
        "description": "Technical Pickleball jersey in a striking Peacock & Navy pattern.",
        "features": [
            "Softy Dot Knit Fabric",
            "Vibrant sublimation",
            "Technical mesh panels",
            "Stretch-lite tech"
        ],
        "sport": "Pickleball",
        "title": "Pickleball Apex Tee - Peacock",
        "productCode": "#PB105-PEA",
        "brand": "Force",
        "image": "/T-shirts/120.png",
        "longDescription": "A premium performance jersey designed specifically for Pickleball. Features the #PB105 signature geometric overlay on the shoulders and chest."
    },
    {
        "id": "force-pb-105-sky",
        "description": "Elite performance tee with topographic geometric detailing.",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/119.png",
        "specs": {
            "Series": "#PB105",
            "Fit": "Athletic",
            "Material": "Technical Dot Knit"
        },
        "features": [
            "Softy Dot Knit Fabric",
            "Geometric chest detailing",
            "Pickleball specialized fit",
            "Pro-moisture wicking"
        ],
        "sport": "Pickleball",
        "productCode": "#PB105-SKY",
        "title": "Pickleball Apex Tee - Sky Blue",
        "brand": "Force",
        "image": "/T-shirts/118.png",
        "longDescription": "The #PB105 Series is engineered for the fast-paced nature of Pickleball. Featuring a distinctive topographic geometric pattern and crafted from premium Softy Dot Knit fabric."
    },
    {
        "title": "Pickleball Horizon Tee - India Blue",
        "productCode": "#PB-GRAD-IND",
        "sport": "Pickleball",
        "features": [
            "Deep Blue Gradient",
            "Technical Striping",
            "Pro-cool technology",
            "Stay-dry fabric"
        ],
        "specs": {
            "Style": "Gradient",
            "Fit": "Modern",
            "Material": "Max-Air Poly"
        },
        "imageBack": "/T-shirts/113.png",
        "category": "T-Shirts",
        "id": "force-pb-grad-india",
        "description": "India Blue gradient jersey with bold horizontal accents.",
        "longDescription": "High-performance Pickleball tee featuring a deep blue gradient. Engineered for maximum airflow during intense rallies.",
        "image": "/T-shirts/112.png",
        "brand": "Force"
    },
    {
        "longDescription": "Maximum visibility meets maximum performance. The Lemon Horizon jersey uses ultra-breathable technical fabric to keep you cool under pressure.",
        "image": "/T-shirts/116.png",
        "brand": "Force",
        "productCode": "#PB-GRAD-LEM",
        "title": "Pickleball Horizon Tee - Lemon",
        "sport": "Pickleball",
        "features": [
            "Electric Lemon Gradient",
            "Modern technical fit",
            "Anti-cling tech",
            "Lightweight build"
        ],
        "description": "Electric lemon and yellow gradient Pickleball jersey.",
        "id": "force-pb-grad-lemon",
        "imageBack": "/T-shirts/117.png",
        "specs": {
            "Material": "Technical Poly",
            "Fit": "Modern",
            "Style": "Gradient"
        },
        "category": "T-Shirts"
    },
    {
        "brand": "Force",
        "longDescription": "The Horizon Series uses a sophisticated multi-stage gradient process and bold horizontal stripes to create a truly modern Pickleball jersey.",
        "image": "/T-shirts/110.png",
        "sport": "Pickleball",
        "features": [
            "Horizon Stripe Design",
            "Full-body Gradient",
            "Technical mesh back",
            "Reflective detailing"
        ],
        "specs": {
            "Material": "Aero-Mesh Poly",
            "Fit": "Modern",
            "Style": "Gradient"
        },
        "imageBack": "/T-shirts/111.png",
        "category": "T-Shirts",
        "id": "force-pb-grad-parrot",
        "description": "Dynamic horizontal stripes over a deep gradient body.",
        "title": "Pickleball Horizon Tee - Parrot",
        "productCode": "#PB-GRAD-PAR"
    },
    {
        "title": "Pickleball Horizon Tee - Blaze Red",
        "productCode": "#PB-GRAD-RED",
        "category": "T-Shirts",
        "specs": {
            "Style": "Gradient",
            "Material": "Technical Poly",
            "Fit": "Modern"
        },
        "imageBack": "/T-shirts/115.png",
        "description": "Striking red and orange gradient Pickleball performance jersey.",
        "id": "force-pb-grad-red",
        "features": [
            "Blaze Red Gradient",
            "Striped chest detailing",
            "High-stretch poly",
            "Cooling knit"
        ],
        "sport": "Pickleball",
        "image": "/T-shirts/114.png",
        "longDescription": "The Blaze Red Horizon jersey is designed for the bold. High-density sublimation ensures colors stay vibrant through every match.",
        "brand": "Force"
    },
    {
        "image": "/PickleBall/1_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-pickleball-01",
        "imageBack": "/PickleBall/1_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/1_back.png",
            "/PickleBall/1_front.png"
        ],
        "productCode": "#PIC-01",
        "title": "PickleBall Kit 01",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Pickleball"
    },
    {
        "id": "force-pickleball-02",
        "imageBack": "/PickleBall/2_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/2_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "sport": "Pickleball",
        "productCode": "#PIC-02",
        "title": "PickleBall Kit 02",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/2_back.png",
            "/PickleBall/2_front.png"
        ]
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/3_back.png",
            "/PickleBall/3_front.png"
        ],
        "productCode": "#PIC-03",
        "title": "PickleBall Kit 03",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "sport": "Pickleball",
        "image": "/PickleBall/3_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-pickleball-03",
        "imageBack": "/PickleBall/3_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/4_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-04",
        "imageBack": "/PickleBall/4_back.png",
        "gallery": [
            "/PickleBall/4_back.png",
            "/PickleBall/4_front.png"
        ],
        "brand": "Force Sports",
        "productCode": "#PIC-04",
        "title": "PickleBall Kit 04",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts"
    },
    {
        "id": "force-pickleball-05",
        "imageBack": "/PickleBall/5_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/5_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Pickleball",
        "productCode": "#PIC-05",
        "title": "PickleBall Kit 05",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/5_back.png",
            "/PickleBall/5_front.png"
        ]
    },
    {
        "imageBack": "/PickleBall/6_back.png",
        "id": "force-pickleball-06",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/6_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 06",
        "productCode": "#PIC-06",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/6_back.png",
            "/PickleBall/6_front.png"
        ]
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-07",
        "imageBack": "/PickleBall/7_back.png",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/7_front.png",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "productCode": "#PIC-07",
        "title": "PickleBall Kit 07",
        "gallery": [
            "/PickleBall/7_back.png",
            "/PickleBall/7_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "image": "/PickleBall/8_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "imageBack": "/PickleBall/8_back.png",
        "id": "force-pickleball-08",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/8_back.png",
            "/PickleBall/8_front.png"
        ],
        "title": "PickleBall Kit 08",
        "productCode": "#PIC-08",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball"
    },
    {
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "productCode": "#PIC-09",
        "title": "PickleBall Kit 09",
        "gallery": [
            "/PickleBall/9_back.png",
            "/PickleBall/9_front.png"
        ],
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-09",
        "imageBack": "/PickleBall/9_back.png",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/9_front.png"
    },
    {
        "gallery": [
            "/PickleBall/10_back.png",
            "/PickleBall/10_front.png"
        ],
        "brand": "Force Sports",
        "productCode": "#PIC-10",
        "title": "PickleBall Kit 10",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/10_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-10",
        "imageBack": "/PickleBall/10_back.png"
    },
    {
        "id": "force-pickleball-11",
        "imageBack": "/PickleBall/11_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/PickleBall/11_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "productCode": "#PIC-11",
        "title": "PickleBall Kit 11",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Pickleball",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/11_back.png",
            "/PickleBall/11_front.png"
        ]
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/12_back.png",
            "/PickleBall/12_front.png"
        ],
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 12",
        "productCode": "#PIC-12",
        "usageType": "T20",
        "image": "/PickleBall/12_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/PickleBall/12_back.png",
        "id": "force-pickleball-12",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "imageBack": "/PickleBall/13_back.png",
        "id": "force-pickleball-13",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/13_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 13",
        "productCode": "#PIC-13",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/13_back.png",
            "/PickleBall/13_front.png"
        ]
    },
    {
        "gallery": [
            "/PickleBall/14_back.png",
            "/PickleBall/14_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Pickleball",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 14",
        "productCode": "#PIC-14",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/14_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/14_back.png",
        "id": "force-pickleball-14"
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/15_back.png",
            "/PickleBall/15_front.png"
        ],
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "sport": "Pickleball",
        "productCode": "#PIC-15",
        "title": "PickleBall Kit 15",
        "usageType": "T20",
        "image": "/PickleBall/15_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-pickleball-15",
        "imageBack": "/PickleBall/15_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "usageType": "T20",
        "image": "/PickleBall/16_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/PickleBall/16_back.png",
        "id": "force-pickleball-16",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/16_back.png",
            "/PickleBall/16_front.png"
        ],
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 16",
        "productCode": "#PIC-16"
    },
    {
        "gallery": [
            "/PickleBall/17_back.png",
            "/PickleBall/17_front.png"
        ],
        "brand": "Force Sports",
        "sport": "Pickleball",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 17",
        "productCode": "#PIC-17",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/17_front.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/17_back.png",
        "id": "force-pickleball-17"
    },
    {
        "productCode": "#PIC-18",
        "title": "PickleBall Kit 18",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "sport": "Pickleball",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/18_back.png",
            "/PickleBall/18_front.png"
        ],
        "id": "force-pickleball-18",
        "imageBack": "/PickleBall/18_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/PickleBall/18_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "usageType": "T20",
        "image": "/PickleBall/19_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-pickleball-19",
        "imageBack": "/PickleBall/19_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/19_back.png",
            "/PickleBall/19_front.png"
        ],
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms"
        },
        "sport": "Pickleball",
        "productCode": "#PIC-19",
        "title": "PickleBall Kit 19"
    },
    {
        "usageType": "T20",
        "image": "/PickleBall/20_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-pickleball-20",
        "imageBack": "/PickleBall/20_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/20_back.png",
            "/PickleBall/20_front.png"
        ],
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "category": "T-Shirts",
        "sport": "Pickleball",
        "productCode": "#PIC-20",
        "title": "PickleBall Kit 20"
    },
    {
        "id": "force-pickleball-21",
        "imageBack": "/PickleBall/21_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/21_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "sport": "Pickleball",
        "productCode": "#PIC-21",
        "title": "PickleBall Kit 21",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/21_back.png",
            "/PickleBall/21_front.png"
        ]
    },
    {
        "gallery": [
            "/PickleBall/22_back.png",
            "/PickleBall/22_front.png"
        ],
        "brand": "Force Sports",
        "title": "PickleBall Kit 22",
        "productCode": "#PIC-22",
        "sport": "Pickleball",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/22_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/22_back.png",
        "id": "force-pickleball-22"
    },
    {
        "id": "force-pickleball-23",
        "imageBack": "/PickleBall/23_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/PickleBall/23_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "productCode": "#PIC-23",
        "title": "PickleBall Kit 23",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "category": "T-Shirts",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "sport": "Pickleball",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/23_back.png",
            "/PickleBall/23_front.png"
        ]
    },
    {
        "image": "/PickleBall/24_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-pickleball-24",
        "imageBack": "/PickleBall/24_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/24_back.png",
            "/PickleBall/24_front.png"
        ],
        "productCode": "#PIC-24",
        "title": "PickleBall Kit 24",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "category": "T-Shirts",
        "sport": "Pickleball"
    },
    {
        "sport": "Pickleball",
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 25",
        "productCode": "#PIC-25",
        "gallery": [
            "/PickleBall/25_back.png",
            "/PickleBall/25_front.png"
        ],
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/25_back.png",
        "id": "force-pickleball-25",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/25_front.png"
    },
    {
        "image": "/PickleBall/26_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "id": "force-pickleball-26",
        "imageBack": "/PickleBall/26_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/26_back.png",
            "/PickleBall/26_front.png"
        ],
        "productCode": "#PIC-26",
        "title": "PickleBall Kit 26",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "sport": "Pickleball"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/27_back.png",
        "id": "force-pickleball-27",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/27_front.png",
        "sport": "Pickleball",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 27",
        "productCode": "#PIC-27",
        "gallery": [
            "/PickleBall/27_back.png",
            "/PickleBall/27_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "imageBack": "/PickleBall/28_back.png",
        "id": "force-pickleball-28",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/28_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 28",
        "productCode": "#PIC-28",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/28_back.png",
            "/PickleBall/28_front.png"
        ]
    },
    {
        "productCode": "#PIC-29",
        "title": "PickleBall Kit 29",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "sport": "Pickleball",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/29_back.png",
            "/PickleBall/29_front.png"
        ],
        "id": "force-pickleball-29",
        "imageBack": "/PickleBall/29_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/PickleBall/29_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "gallery": [
            "/PickleBall/30_back.png",
            "/PickleBall/30_front.png"
        ],
        "brand": "Force Sports",
        "title": "PickleBall Kit 30",
        "productCode": "#PIC-30",
        "sport": "Pickleball",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/30_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/30_back.png",
        "id": "force-pickleball-30"
    },
    {
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/31_front.png",
        "usageType": "T20",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-31",
        "imageBack": "/PickleBall/31_back.png",
        "gallery": [
            "/PickleBall/31_back.png",
            "/PickleBall/31_front.png"
        ],
        "brand": "Force Sports",
        "productCode": "#PIC-31",
        "title": "PickleBall Kit 31",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "category": "T-Shirts"
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/32_back.png",
            "/PickleBall/32_front.png"
        ],
        "category": "T-Shirts",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 32",
        "productCode": "#PIC-32",
        "usageType": "T20",
        "image": "/PickleBall/32_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "imageBack": "/PickleBall/32_back.png",
        "id": "force-pickleball-32",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-33",
        "imageBack": "/PickleBall/33_back.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/33_front.png",
        "usageType": "T20",
        "productCode": "#PIC-33",
        "title": "PickleBall Kit 33",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "gallery": [
            "/PickleBall/33_back.png",
            "/PickleBall/33_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/34_back.png",
        "id": "force-pickleball-34",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/34_front.png",
        "usageType": "T20",
        "title": "PickleBall Kit 34",
        "productCode": "#PIC-34",
        "sport": "Pickleball",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "gallery": [
            "/PickleBall/34_back.png",
            "/PickleBall/34_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "image": "/PickleBall/35_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "imageBack": "/PickleBall/35_back.png",
        "id": "force-pickleball-35",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/35_back.png",
            "/PickleBall/35_front.png"
        ],
        "title": "PickleBall Kit 35",
        "productCode": "#PIC-35",
        "category": "T-Shirts",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball"
    },
    {
        "sport": "Pickleball",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 36",
        "productCode": "#PIC-36",
        "gallery": [
            "/PickleBall/36_back.png",
            "/PickleBall/36_front.png"
        ],
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/36_back.png",
        "id": "force-pickleball-36",
        "usageType": "T20",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/36_front.png"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "imageBack": "/PickleBall/37_back.png",
        "id": "force-pickleball-37",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "image": "/PickleBall/37_front.png",
        "usageType": "T20",
        "title": "PickleBall Kit 37",
        "productCode": "#PIC-37",
        "sport": "Pickleball",
        "specs": {
            "Category": "Sports Uniforms",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "gallery": [
            "/PickleBall/37_back.png",
            "/PickleBall/37_front.png"
        ],
        "brand": "Force Sports"
    },
    {
        "id": "force-pickleball-38",
        "imageBack": "/PickleBall/38_back.png",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "image": "/PickleBall/38_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "productCode": "#PIC-38",
        "title": "PickleBall Kit 38",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms"
        },
        "category": "T-Shirts",
        "sport": "Pickleball",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/38_back.png",
            "/PickleBall/38_front.png"
        ]
    },
    {
        "imageBack": "/PickleBall/39_back.png",
        "id": "force-pickleball-39",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "usageType": "T20",
        "image": "/PickleBall/39_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "specs": {
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "GSM": "180"
        },
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "title": "PickleBall Kit 39",
        "productCode": "#PIC-39",
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/39_back.png",
            "/PickleBall/39_front.png"
        ]
    },
    {
        "brand": "Force Sports",
        "gallery": [
            "/PickleBall/40_back.png",
            "/PickleBall/40_front.png"
        ],
        "title": "PickleBall Kit 40",
        "productCode": "#PIC-40",
        "specs": {
            "Printing": "Full Sublimation",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "category": "T-Shirts",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Pickleball",
        "image": "/PickleBall/40_front.png",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "imageBack": "/PickleBall/40_back.png",
        "id": "force-pickleball-40",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 41",
        "usageType": "T20",
        "sport": "Pickleball",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-41",
        "gallery": [
            "/PickleBall/41_back.png",
            "/PickleBall/41_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/PickleBall/41_front.png",
        "imageBack": "/PickleBall/41_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "productCode": "#PIC-41"
    },
    {
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 42",
        "usageType": "T20",
        "sport": "Pickleball",
        "image": "/PickleBall/42_front.png",
        "imageBack": "/PickleBall/42_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#PIC-42",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-42",
        "gallery": [
            "/PickleBall/42_back.png",
            "/PickleBall/42_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "productCode": "#PIC-43",
        "image": "/PickleBall/43_front.png",
        "imageBack": "/PickleBall/43_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-pickleball-43",
        "gallery": [
            "/PickleBall/43_back.png",
            "/PickleBall/43_front.png"
        ],
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 43"
    },
    {
        "usageType": "T20",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 44",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/PickleBall/44_back.png",
            "/PickleBall/44_front.png"
        ],
        "id": "force-pickleball-44",
        "productCode": "#PIC-44",
        "image": "/PickleBall/44_front.png",
        "imageBack": "/PickleBall/44_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        }
    },
    {
        "productCode": "#PIC-45",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/PickleBall/45_back.png",
        "image": "/PickleBall/45_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-pickleball-45",
        "gallery": [
            "/PickleBall/45_back.png",
            "/PickleBall/45_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Pickleball",
        "usageType": "T20",
        "title": "PickleBall Kit 45",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Pickleball",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "PickleBall Kit 46",
        "productCode": "#PIC-46",
        "imageBack": "/PickleBall/46_back.png",
        "image": "/PickleBall/46_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/PickleBall/46_back.png",
            "/PickleBall/46_front.png"
        ],
        "id": "force-pickleball-46"
    },
    {
        "sport": "Pickleball",
        "usageType": "T20",
        "title": "PickleBall Kit 47",
        "description": "Premium PickleBall technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our PickleBall range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-pickleball-47",
        "gallery": [
            "/PickleBall/47_back.png",
            "/PickleBall/47_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#PIC-47",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "image": "/PickleBall/47_front.png",
        "imageBack": "/PickleBall/47_back.png"
    },
    {
        "productCode": "#CP 801",
        "specs": {
            "Material": "90% Poly, 10% Spandex",
            "Fit": "Athletic Low-Profile",
            "Usage": "Pickleball / Outdoor Sports"
        },
        "longDescription": "Engineered for the court, the Pickleball Performance Cap features advanced cooling technology and a non-glare undervisor to keep your focus on the ball. The quick-dry fabric ensures comfort during high-intensity rallies.",
        "image": "/caps/yellow-cap.png",
        "category": "Caps",
        "sport": "Tennis",
        "brand": "Force",
        "title": "Pickleball Performance Cap",
        "id": "force-pickleball-performance-cap",
        "features": [
            "Non-Glare Undervisor",
            "Cooling Tech",
            "Quick-Dry Fabric",
            "Featherlight"
        ],
        "description": "Lightweight, ultra-breathable cap designed for the speed of Pickleball."
    },
    {
        "productCode": "#CP-PLAIN-BGE",
        "specs": {
            "Material": "Performance Poly",
            "Color": "Sand Beige",
            "Branding": "None"
        },
        "image": "/caps/plain-beige-cap.png",
        "longDescription": "A versatile, unbranded beige cap that pairs well with any team gear. Traditional fit with high-quality stitching.",
        "sport": "Cricket",
        "category": "Caps",
        "brand": "Force",
        "id": "force-plain-cap-beige",
        "title": "Plain Performance Cap - Sand Beige",
        "description": "Classic sand beige cap for a clean, natural look with no branding.",
        "features": [
            "Unbranded neutral design",
            "Breathable mesh",
            "Adjustable slider",
            "Reinforced brim"
        ]
    },
    {
        "productCode": "#CP-PLAIN-BLK",
        "specs": {
            "Material": "Performance Poly",
            "Color": "Black",
            "Branding": "None"
        },
        "image": "/caps/plain-black-cap.png",
        "longDescription": "The Plain Performance Cap is designed for athletes who prefer a minimalist, unbranded aesthetic. Built with breathable performance polyester and a reinforced brim, it offers the same high quality as our branded gear without any logos.",
        "sport": "Badminton",
        "category": "Caps",
        "brand": "Force",
        "id": "force-plain-cap-black",
        "title": "Plain Performance Cap - Black",
        "description": "Elite unbranded black performance cap for a clean, minimalist look.",
        "features": [
            "No logos or branding",
            "Breathable performance fabric",
            "Adjustable slider",
            "Reinforced brim"
        ]
    },
    {
        "productCode": "#CP-PLAIN-FGRN",
        "image": "/caps/plain-forest-green-cap.png",
        "longDescription": "The Forest Green Plain Cap offers a deep, professional aesthetic. Built to last with high-density fabric and zero external logos.",
        "specs": {
            "Material": "Premium Twill",
            "Color": "Forest Green",
            "Branding": "None"
        },
        "brand": "Force",
        "sport": "Football",
        "category": "Caps",
        "description": "Professional forest green cap with a classic athletic look and no branding.",
        "features": [
            "Unbranded classic design",
            "Classic 6-panel",
            "Reinforced seams",
            "Stay-dry tech"
        ],
        "id": "force-plain-cap-forest-green",
        "title": "Plain Performance Cap - Forest Green"
    },
    {
        "productCode": "#CP-PLAIN-GRY",
        "specs": {
            "Color": "Charcoal Grey",
            "Branding": "None",
            "Material": "Poly-Elastane Blend"
        },
        "longDescription": "A minimalist charcoal grey cap for a professional sports utility look. Lightweight, durable, and completely plain.",
        "image": "/caps/plain-grey-cap.png",
        "sport": "Volleyball",
        "category": "Caps",
        "brand": "Force",
        "id": "force-plain-cap-grey",
        "title": "Plain Performance Cap - Charcoal Grey",
        "features": [
            "Unbranded technical look",
            "Lightweight build",
            "Quick-dry fabric",
            "Curved visor"
        ],
        "description": "Sleek, unbranded charcoal grey cap with a technical aesthetic."
    },
    {
        "title": "Plain Performance Cap - Deep Maroon",
        "id": "force-plain-cap-maroon",
        "features": [
            "No branding",
            "Structured crown",
            "Durable fabric",
            "Adjustable buckle"
        ],
        "description": "Premium deep maroon cap with a professional structured fit and zero logos.",
        "category": "Caps",
        "sport": "Kabaddi",
        "brand": "Force",
        "specs": {
            "Color": "Deep Maroon",
            "Branding": "None",
            "Material": "High-Density Poly-Twill"
        },
        "longDescription": "Sophisticated deep maroon aesthetic with a clean, unbranded finish. High-density fabric ensures durability and shape retention.",
        "image": "/caps/plain-maroon-cap.png",
        "productCode": "#CP-PLAIN-MRN"
    },
    {
        "brand": "Force",
        "category": "Caps",
        "sport": "Pickleball",
        "description": "Minimalist midnight navy cap with a premium structured fit and no logos.",
        "features": [
            "Unbranded clean design",
            "UV resistance",
            "Structured crown",
            "Premium feel"
        ],
        "title": "Plain Performance Cap - Midnight Navy",
        "id": "force-plain-cap-navy",
        "productCode": "#CP-PLAIN-NVY",
        "image": "/caps/plain-navy-cap.png",
        "longDescription": "A clean, unbranded midnight navy cap designed for coaching staff and players who value a professional, understated look.",
        "specs": {
            "Material": "Heavy-Duty Twill",
            "Color": "Midnight Navy",
            "Branding": "None"
        }
    },
    {
        "sport": "Tennis",
        "category": "Caps",
        "brand": "Force",
        "title": "Plain Performance Cap - Olive Green",
        "id": "force-plain-cap-olive",
        "features": [
            "Plain tactical look",
            "Matte finish",
            "Laser-fused seams",
            "Reflective detail"
        ],
        "description": "Tactical olive green cap with a minimalist, unbranded finish.",
        "productCode": "#CP-PLAIN-OLV",
        "specs": {
            "Material": "Durable Ripstop",
            "Color": "Olive Green",
            "Branding": "None"
        },
        "longDescription": "The Olive Green Plain Cap is designed for a rugged yet clean aesthetic. Featuring technical fabric and zero external logos.",
        "image": "/caps/plain-olive-cap.png"
    },
    {
        "brand": "Force",
        "sport": "Cricket",
        "category": "Caps",
        "features": [
            "Completely plain",
            "Soft-touch finish",
            "Moisture-wicking",
            "Adjustable strap"
        ],
        "description": "Deep royal purple athletic cap with a premium aesthetic and zero branding.",
        "title": "Plain Performance Cap - Royal Purple",
        "id": "force-plain-cap-purple",
        "productCode": "#CP-PLAIN-PUR",
        "longDescription": "The Royal Purple Plain Cap is designed for a unique identity. Features a soft-touch finish and excellent moisture management without logos.",
        "image": "/caps/plain-purple-cap.png",
        "specs": {
            "Material": "Technical Poly",
            "Color": "Royal Purple",
            "Branding": "None"
        }
    },
    {
        "image": "/caps/plain-red-cap.png",
        "longDescription": "The Plain Performance Cap in Crimson Red offers a high-impact color without any distracting logos or text. Perfect for customization or a clean aesthetic.",
        "specs": {
            "Color": "Crimson Red",
            "Branding": "None",
            "Material": "Performance Poly"
        },
        "productCode": "#CP-PLAIN-RED",
        "description": "Vibrant crimson red performance cap with a completely plain finish.",
        "features": [
            "Plain unbranded finish",
            "Breathable mesh",
            "Adjustable slider",
            "Reinforced brim"
        ],
        "title": "Plain Performance Cap - Crimson Red",
        "id": "force-plain-cap-red",
        "brand": "Force",
        "category": "Caps",
        "sport": "Badminton"
    },
    {
        "specs": {
            "Color": "Royal Blue",
            "Branding": "None",
            "Material": "Technical Poly"
        },
        "longDescription": "The Royal Blue Plain Cap is perfect for teams looking for a clean identity. Features a soft-touch finish and excellent moisture management.",
        "image": "/caps/plain-royal-blue-cap.png",
        "productCode": "#CP-PLAIN-RBLU",
        "title": "Plain Performance Cap - Royal Blue",
        "id": "force-plain-cap-royal-blue",
        "features": [
            "Completely plain",
            "Soft-touch finish",
            "Moisture-wicking",
            "Adjustable strap"
        ],
        "description": "Deep royal blue athletic cap with zero logos or text.",
        "category": "Caps",
        "sport": "Football",
        "brand": "Force"
    },
    {
        "specs": {
            "Branding": "None",
            "Color": "Dynamic Teal",
            "Material": "Aero-Mesh Poly"
        },
        "longDescription": "The Dynamic Teal Plain Cap uses advanced fabric tech to maximize airflow while providing a striking modern look without logos.",
        "image": "/caps/plain-teal-cap.png",
        "productCode": "#CP-PLAIN-TEL",
        "title": "Plain Performance Cap - Dynamic Teal",
        "id": "force-plain-cap-teal",
        "features": [
            "Completely plain",
            "Technical mesh",
            "Ultra-lightweight",
            "Perfect for customization"
        ],
        "description": "Modern teal athletic cap with technical mesh ventilation and no branding.",
        "sport": "Volleyball",
        "category": "Caps",
        "brand": "Force"
    },
    {
        "title": "Plain Performance Cap - Arctic White",
        "id": "force-plain-cap-white",
        "description": "Clean arctic white cap with superior cooling and zero branding.",
        "features": [
            "No branding",
            "Heat-reflective",
            "Max airflow mesh",
            "Soft touch"
        ],
        "sport": "Kabaddi",
        "category": "Caps",
        "brand": "Force",
        "specs": {
            "Branding": "None",
            "Color": "Arctic White",
            "Material": "Technical Mesh"
        },
        "image": "/caps/plain-white-cap.png",
        "longDescription": "Ideal for outdoor play in the sun, this unbranded white cap reflects heat and maintains a crisp, professional look without logos.",
        "productCode": "#CP-PLAIN-WHT"
    },
    {
        "brand": "Force",
        "sport": "Pickleball",
        "category": "Caps",
        "description": "High-visibility electric yellow cap with zero branding.",
        "features": [
            "No logos",
            "Ultra-lightweight",
            "Moisture-wicking",
            "Modern fit"
        ],
        "id": "force-plain-cap-yellow",
        "title": "Plain Performance Cap - Electric Yellow",
        "productCode": "#CP-PLAIN-YEL",
        "image": "/caps/plain-yellow-cap.png",
        "longDescription": "The Electric Yellow Plain Cap is lightweight, moisture-wicking and ultra-durable, providing a bold look with a clean, unbranded finish.",
        "specs": {
            "Material": "Technical Mesh",
            "Color": "Electric Yellow",
            "Branding": "None"
        }
    },
    {
        "brand": "Force",
        "sport": "Tennis",
        "category": "Caps",
        "description": "Elite royal blue athletic cap designed for maximum focus.",
        "features": [
            "Stay-dry headband",
            "6-panel construction",
            "Curved visor"
        ],
        "id": "force-pro-cap-blue",
        "title": "Pro Cap - Royal Blue",
        "productCode": "#CP-BLUE",
        "image": "/caps/blue-cap.png",
        "longDescription": "The Pro Cap in Royal Blue offers a professional look with top-tier athletic performance. Featuring a stay-dry inner headband and lightweight construction.",
        "specs": {
            "Material": "Micro-Fiber Poly",
            "Color": "Royal Blue"
        }
    },
    {
        "specs": {
            "Material": "Premium Twill",
            "Color": "Forest Green"
        },
        "longDescription": "The Forest Green Pro Cap offers a deep, professional aesthetic suitable for both on-field play and casual wear.",
        "image": "/caps/green-cap.png",
        "productCode": "#CP-GREEN",
        "id": "force-pro-cap-green",
        "title": "Pro Cap - Forest Green",
        "features": [
            "Classic 6-panel",
            "Reinforced seams",
            "Stay-dry tech"
        ],
        "description": "Professional forest green cap with a classic athletic look.",
        "sport": "Cricket",
        "category": "Caps",
        "brand": "Force"
    },
    {
        "sport": "Badminton",
        "category": "Caps",
        "brand": "Force",
        "id": "force-pro-cap-orange",
        "title": "Pro Cap - Blaze Orange",
        "description": "Vibrant blaze orange athletic cap for high visibility.",
        "features": [
            "High visibility",
            "Breathable knit",
            "Adjustable strap"
        ],
        "productCode": "#CP-ORANGE",
        "specs": {
            "Material": "Performance Poly",
            "Color": "Blaze Orange"
        },
        "image": "/caps/orange-cap.png",
        "longDescription": "Stay visible and focused with the Blaze Orange Pro Cap. Engineered for high-intensity training with maximum breathability."
    },
    {
        "longDescription": "The Royal Purple cap is designed for teams looking for a unique, standout identity. Features a soft-touch finish and excellent moisture management.",
        "image": "/caps/purple-cap.png",
        "specs": {
            "Color": "Royal Purple",
            "Material": "Technical Poly"
        },
        "productCode": "#CP-PURPLE",
        "features": [
            "Soft-touch finish",
            "Moisture-wicking",
            "Adjustable strap"
        ],
        "description": "Deep royal purple athletic cap with a premium aesthetic.",
        "title": "Pro Cap - Royal Purple",
        "id": "force-pro-cap-purple",
        "brand": "Force",
        "sport": "Football",
        "category": "Caps"
    },
    {
        "image": "/caps/red-cap.png",
        "longDescription": "The Pro Cap in Crimson Red is a high-impact accessory for any athlete. Built with breathable performance polyester and a reinforced brim, it stays comfortable even during peak activity.",
        "specs": {
            "Material": "Performance Poly",
            "Color": "Crimson Red"
        },
        "productCode": "#CP-RED",
        "description": "Vibrant crimson red performance cap with moisture-wicking technology.",
        "features": [
            "Breathable mesh",
            "Adjustable slider",
            "Reinforced brim"
        ],
        "title": "Pro Cap - Crimson Red",
        "id": "force-pro-cap-red",
        "brand": "Force",
        "category": "Caps",
        "sport": "Volleyball"
    },
    {
        "brand": "Force",
        "sport": "Kabaddi",
        "category": "Caps",
        "description": "Clean arctic white cap with superior heat-reflective cooling.",
        "features": [
            "Heat-reflective",
            "Max airflow mesh",
            "Soft touch"
        ],
        "id": "force-pro-cap-white",
        "title": "Pro Cap - Arctic White",
        "productCode": "#CP-WHITE",
        "image": "/caps/white-cap.png",
        "longDescription": "Ideal for outdoor play, the Arctic White cap reflects heat while the technical mesh crown allows for massive airflow to keep your head cool.",
        "specs": {
            "Material": "Technical Mesh",
            "Color": "Arctic White"
        }
    },
    {
        "longDescription": "The Pro-Flow Cap features a multi-panel construction with laser-cut ventilation for superior breathability. The moisture-wicking sweatband keeps you dry, while the adjustable strap ensures a perfect fit for any head size.",
        "image": "/cap-pro-flow.png",
        "specs": {
            "Material": "Performance Polyester Mesh",
            "Fit": "Adjustable One-Size",
            "Tech": "Aero-Vent"
        },
        "productCode": "#CP 701",
        "features": [
            "Laser-Cut Ventilation",
            "Moisture-Wicking Sweatband",
            "Adjustable Fit",
            "Durable Fabric"
        ],
        "description": "Advanced moisture-wicking sports cap for maximum performance.",
        "id": "force-pro-flow-cap",
        "title": "Pro-Flow Cap",
        "brand": "Force",
        "sport": "Pickleball",
        "category": "Caps"
    },
    {
        "specs": {
            "Material": "100% Micro-Honeycomb Polyester",
            "Fit": "Pro Athletic",
            "Durability": "Maximum Strength Rating"
        },
        "longDescription": "The Pro Performance Kit is designed to withstand the toughest conditions. Using reinforced stitching and advanced hyper-wicking materials, this kit provides durability without compromising on flexibility or breathability.",
        "imageBack": "/T-shirts/13 backed.png",
        "image": "/T-shirts/13.png",
        "productCode": "#JB 101",
        "id": "force-pro-kit",
        "title": "Pro Performance Kit",
        "features": [
            "Hyper-Wicking Technology",
            "Reinforced Stress Points",
            "Pro-Athletic Fit",
            "Made in India"
        ],
        "description": "Elite performance gear tailored for high intensity sports.",
        "sport": "Football",
        "category": "T-Shirts",
        "brand": "Force"
    },
    {
        "specs": {
            "Color": "Stealth Black",
            "Material": "Poly-Mesh Mix"
        },
        "image": "/caps/black-cap.png",
        "longDescription": "The Pro Mesh Cap features a high-density foam front and breathable mesh back. Perfect for long training sessions in the sun.",
        "productCode": "#CP-MESH-BLK",
        "title": "Pro Mesh Cap - Stealth Black",
        "id": "force-pro-mesh-black",
        "description": "Premium mesh-back cap for maximum ventilation and style.",
        "features": [
            "Mesh back",
            "Padded front",
            "Snapback closure"
        ],
        "category": "Caps",
        "sport": "Tennis",
        "brand": "Force"
    },
    {
        "specs": {
            "Material": "High-Performance Synth",
            "Color": "Electric Blue"
        },
        "image": "/caps/blue-cap.png",
        "longDescription": "Command attention on the field with the Electric Blue Pro Mesh Cap. Engineered for durability and maximum airflow.",
        "productCode": "#CP-MESH-BLU",
        "title": "Pro Mesh Cap - Electric Blue",
        "id": "force-pro-mesh-blue",
        "description": "Vibrant electric blue cap with structured front and mesh back.",
        "features": [
            "Structured crown",
            "Airflow mesh",
            "Premium stitching"
        ],
        "category": "Caps",
        "sport": "Cricket",
        "brand": "Force"
    },
    {
        "sport": "Badminton",
        "category": "Caps",
        "brand": "Force",
        "id": "force-pro-mesh-red",
        "title": "Pro Mesh Cap - Racing Red",
        "description": "Energetic racing red cap with technical mesh back panels.",
        "features": [
            "High-visibility red",
            "Ventilated back",
            "Stay-dry sweatband"
        ],
        "productCode": "#CP-MESH-RED",
        "specs": {
            "Material": "Technical Mesh",
            "Color": "Racing Red"
        },
        "image": "/caps/red-cap.png",
        "longDescription": "The Racing Red Pro Mesh Cap is built for speed and durability. High-impact color with elite-level comfort."
    },
    {
        "title": "Pro Mesh Cap - Arctic White",
        "id": "force-pro-mesh-white",
        "description": "Clean arctic white mesh cap with a crisp, professional finish.",
        "features": [
            "Reflective logo",
            "Breathable mesh",
            "Adjustable fit"
        ],
        "category": "Caps",
        "sport": "Football",
        "brand": "Force",
        "specs": {
            "Color": "Arctic White",
            "Material": "Breathable Poly"
        },
        "image": "/caps/white-cap.png",
        "longDescription": "Stay cool and look sharp with the Arctic White Pro Mesh Cap. Designed for coaches and players alike.",
        "productCode": "#CP-MESH-WHT"
    },
    {
        "brand": "Force",
        "sport": "Volleyball",
        "category": "Caps",
        "description": "Matte carbon black cap with a sleek, aerodynamic profile.",
        "features": [
            "Matte finish",
            "Laser-fused seams",
            "Reflective detail"
        ],
        "id": "force-stealth-cap-black",
        "title": "Stealth Cap - Carbon Black",
        "productCode": "#CP-BLACK",
        "image": "/caps/black-cap.png",
        "longDescription": "The Stealth Cap is for the athlete who demands a low-profile, high-performance aesthetic. Made with durable ripstop fabric and laser-fused seams.",
        "specs": {
            "Color": "Carbon Black",
            "Material": "Durable Ripstop"
        }
    },
    {
        "brand": "Force",
        "sport": "Other",
        "category": "Track Pants",
        "description": "Tapered athletic joggers designed for style and mobility.",
        "features": [
            "Zippered Pockets",
            "Tapered Fit",
            "Tech-Fleece Fabric",
            "Drawcord Waist"
        ],
        "title": "Stealth Tech Joggers",
        "id": "force-stealth-joggers",
        "productCode": "#SX 808",
        "image": "/trackpant-stealth.png",
        "longDescription": "The Stealth Tech Joggers combine a modern tapered fit with technical fabrics. Featuring zippered pockets for secure storage and an elasticated waistband with drawcord for a custom fit.",
        "specs": {
            "Material": "Polyester/Cotton Blend",
            "Fit": "Slim Tapered",
            "Pockets": "3 Secure Storage Points"
        }
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/1_back.png",
            "/Table Tennis/1_front.png"
        ],
        "id": "force-table-tennis-01",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-01",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/1_back.png",
        "image": "/Table Tennis/1_front.png",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 01",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "gallery": [
            "/Table Tennis/2_back.png",
            "/Table Tennis/2_front.png"
        ],
        "id": "force-table-tennis-02",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "image": "/Table Tennis/2_front.png",
        "imageBack": "/Table Tennis/2_back.png",
        "productCode": "#TAB-02",
        "title": "Table Tennis Kit 02",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/3_back.png",
            "/Table Tennis/3_front.png"
        ],
        "id": "force-table-tennis-03",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-03",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/3_back.png",
        "image": "/Table Tennis/3_front.png",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 03",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 04",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-04",
        "gallery": [
            "/Table Tennis/4_back.png",
            "/Table Tennis/4_front.png"
        ],
        "productCode": "#TAB-04",
        "image": "/Table Tennis/4_front.png",
        "imageBack": "/Table Tennis/4_back.png",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        }
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 05",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#TAB-05",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Table Tennis/5_back.png",
        "image": "/Table Tennis/5_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-05",
        "gallery": [
            "/Table Tennis/5_back.png",
            "/Table Tennis/5_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "productCode": "#TAB-06",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/6_back.png",
        "image": "/Table Tennis/6_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-06",
        "gallery": [
            "/Table Tennis/6_back.png",
            "/Table Tennis/6_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 06",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/7_back.png",
        "image": "/Table Tennis/7_front.png",
        "productCode": "#TAB-07",
        "gallery": [
            "/Table Tennis/7_back.png",
            "/Table Tennis/7_front.png"
        ],
        "id": "force-table-tennis-07",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Table Tennis Kit 07",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20"
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 08",
        "productCode": "#TAB-08",
        "image": "/Table Tennis/8_front.png",
        "imageBack": "/Table Tennis/8_back.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/8_back.png",
            "/Table Tennis/8_front.png"
        ],
        "id": "force-table-tennis-08"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Table Tennis/9_back.png",
        "image": "/Table Tennis/9_front.png",
        "productCode": "#TAB-09",
        "id": "force-table-tennis-09",
        "gallery": [
            "/Table Tennis/9_back.png",
            "/Table Tennis/9_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Table Tennis Kit 09",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20"
    },
    {
        "productCode": "#TAB-10",
        "imageBack": "/Table Tennis/10_back.png",
        "image": "/Table Tennis/10_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-10",
        "gallery": [
            "/Table Tennis/10_back.png",
            "/Table Tennis/10_front.png"
        ],
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 10"
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-11",
        "gallery": [
            "/Table Tennis/11_back.png",
            "/Table Tennis/11_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-11",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Table Tennis/11_back.png",
        "image": "/Table Tennis/11_front.png",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 11",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-12",
        "gallery": [
            "/Table Tennis/12_back.png",
            "/Table Tennis/12_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-12",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Table Tennis/12_back.png",
        "image": "/Table Tennis/12_front.png",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 12",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "gallery": [
            "/Table Tennis/13_back.png",
            "/Table Tennis/13_front.png"
        ],
        "id": "force-table-tennis-13",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Table Tennis/13_back.png",
        "image": "/Table Tennis/13_front.png",
        "productCode": "#TAB-13",
        "title": "Table Tennis Kit 13",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 14",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/14_back.png",
            "/Table Tennis/14_front.png"
        ],
        "id": "force-table-tennis-14",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-14",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/14_back.png",
        "image": "/Table Tennis/14_front.png"
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 15",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#TAB-15",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "image": "/Table Tennis/15_front.png",
        "imageBack": "/Table Tennis/15_back.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-15",
        "gallery": [
            "/Table Tennis/15_back.png",
            "/Table Tennis/15_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 16",
        "usageType": "T20",
        "sport": "Table Tennis",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-16",
        "gallery": [
            "/Table Tennis/16_back.png",
            "/Table Tennis/16_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Table Tennis/16_front.png",
        "imageBack": "/Table Tennis/16_back.png",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TAB-16"
    },
    {
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 17",
        "usageType": "T20",
        "sport": "Table Tennis",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/17_back.png",
            "/Table Tennis/17_front.png"
        ],
        "id": "force-table-tennis-17",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Table Tennis/17_front.png",
        "imageBack": "/Table Tennis/17_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "productCode": "#TAB-17"
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 18",
        "productCode": "#TAB-18",
        "imageBack": "/Table Tennis/18_back.png",
        "image": "/Table Tennis/18_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-18",
        "gallery": [
            "/Table Tennis/18_back.png",
            "/Table Tennis/18_front.png"
        ]
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/19_back.png",
            "/Table Tennis/19_front.png"
        ],
        "id": "force-table-tennis-19",
        "productCode": "#TAB-19",
        "imageBack": "/Table Tennis/19_back.png",
        "image": "/Table Tennis/19_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 19",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "productCode": "#TAB-20",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "image": "/Table Tennis/20_front.png",
        "imageBack": "/Table Tennis/20_back.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-20",
        "gallery": [
            "/Table Tennis/20_back.png",
            "/Table Tennis/20_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 20",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "imageBack": "/Table Tennis/21_back.png",
        "image": "/Table Tennis/21_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "productCode": "#TAB-21",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/21_back.png",
            "/Table Tennis/21_front.png"
        ],
        "id": "force-table-tennis-21",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 21",
        "usageType": "T20",
        "sport": "Table Tennis"
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/22_back.png",
            "/Table Tennis/22_front.png"
        ],
        "id": "force-table-tennis-22",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-22",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/22_back.png",
        "image": "/Table Tennis/22_front.png",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 22",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 23",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/23_back.png",
            "/Table Tennis/23_front.png"
        ],
        "id": "force-table-tennis-23",
        "productCode": "#TAB-23",
        "imageBack": "/Table Tennis/23_back.png",
        "image": "/Table Tennis/23_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        }
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 24",
        "usageType": "T20",
        "sport": "Table Tennis",
        "imageBack": "/Table Tennis/24_back.png",
        "image": "/Table Tennis/24_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "productCode": "#TAB-24",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-24",
        "gallery": [
            "/Table Tennis/24_back.png",
            "/Table Tennis/24_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 25",
        "productCode": "#TAB-25",
        "imageBack": "/Table Tennis/25_back.png",
        "image": "/Table Tennis/25_front.png",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-25",
        "gallery": [
            "/Table Tennis/25_back.png",
            "/Table Tennis/25_front.png"
        ]
    },
    {
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 26",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-26",
        "gallery": [
            "/Table Tennis/26_back.png",
            "/Table Tennis/26_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-26",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "image": "/Table Tennis/26_front.png",
        "imageBack": "/Table Tennis/26_back.png"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "image": "/Table Tennis/27_front.png",
        "imageBack": "/Table Tennis/27_back.png",
        "productCode": "#TAB-27",
        "gallery": [
            "/Table Tennis/27_back.png",
            "/Table Tennis/27_front.png"
        ],
        "id": "force-table-tennis-27",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Table Tennis Kit 27",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20"
    },
    {
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 28",
        "usageType": "T20",
        "sport": "Table Tennis",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-28",
        "gallery": [
            "/Table Tennis/28_back.png",
            "/Table Tennis/28_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "imageBack": "/Table Tennis/28_back.png",
        "image": "/Table Tennis/28_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TAB-28"
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/29_back.png",
            "/Table Tennis/29_front.png"
        ],
        "id": "force-table-tennis-29",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-29",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Table Tennis/29_back.png",
        "image": "/Table Tennis/29_front.png",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 29",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 30",
        "productCode": "#TAB-30",
        "image": "/Table Tennis/30_front.png",
        "imageBack": "/Table Tennis/30_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/30_back.png",
            "/Table Tennis/30_front.png"
        ],
        "id": "force-table-tennis-30"
    },
    {
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 31",
        "usageType": "T20",
        "sport": "Table Tennis",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-31",
        "gallery": [
            "/Table Tennis/31_back.png",
            "/Table Tennis/31_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Table Tennis/31_front.png",
        "imageBack": "/Table Tennis/31_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TAB-31"
    },
    {
        "title": "Table Tennis Kit 32",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "gallery": [
            "/Table Tennis/32_back.png",
            "/Table Tennis/32_front.png"
        ],
        "id": "force-table-tennis-32",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "imageBack": "/Table Tennis/32_back.png",
        "image": "/Table Tennis/32_front.png",
        "productCode": "#TAB-32"
    },
    {
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "image": "/Table Tennis/33_front.png",
        "imageBack": "/Table Tennis/33_back.png",
        "productCode": "#TAB-33",
        "id": "force-table-tennis-33",
        "gallery": [
            "/Table Tennis/33_back.png",
            "/Table Tennis/33_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Table Tennis Kit 33",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20"
    },
    {
        "productCode": "#TAB-34",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Table Tennis/34_back.png",
        "image": "/Table Tennis/34_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-table-tennis-34",
        "gallery": [
            "/Table Tennis/34_back.png",
            "/Table Tennis/34_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 34",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/35_back.png",
            "/Table Tennis/35_front.png"
        ],
        "id": "force-table-tennis-35",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "imageBack": "/Table Tennis/35_back.png",
        "image": "/Table Tennis/35_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "productCode": "#TAB-35",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 35",
        "usageType": "T20",
        "sport": "Table Tennis",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 36",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/36_back.png",
            "/Table Tennis/36_front.png"
        ],
        "id": "force-table-tennis-36",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TAB-36",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Table Tennis/36_back.png",
        "image": "/Table Tennis/36_front.png"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-37",
        "gallery": [
            "/Table Tennis/37_back.png",
            "/Table Tennis/37_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Table Tennis/37_front.png",
        "imageBack": "/Table Tennis/37_back.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TAB-37",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 37",
        "usageType": "T20",
        "sport": "Table Tennis",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "productCode": "#TAB-38",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/38_back.png",
        "image": "/Table Tennis/38_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/38_back.png",
            "/Table Tennis/38_front.png"
        ],
        "id": "force-table-tennis-38",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 38",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 39",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-39",
        "gallery": [
            "/Table Tennis/39_back.png",
            "/Table Tennis/39_front.png"
        ],
        "productCode": "#TAB-39",
        "imageBack": "/Table Tennis/39_back.png",
        "image": "/Table Tennis/39_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        }
    },
    {
        "productCode": "#TAB-40",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "image": "/Table Tennis/40_front.png",
        "imageBack": "/Table Tennis/40_back.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Table Tennis/40_back.png",
            "/Table Tennis/40_front.png"
        ],
        "id": "force-table-tennis-40",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "title": "Table Tennis Kit 40",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 41",
        "usageType": "T20",
        "sport": "Table Tennis",
        "imageBack": "/Table Tennis/41_back.png",
        "image": "/Table Tennis/41_front.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TAB-41",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/41_back.png",
            "/Table Tennis/41_front.png"
        ],
        "id": "force-table-tennis-41",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "image": "/Table Tennis/42_front.png",
        "imageBack": "/Table Tennis/42_back.png",
        "productCode": "#TAB-42",
        "gallery": [
            "/Table Tennis/42_back.png",
            "/Table Tennis/42_front.png"
        ],
        "id": "force-table-tennis-42",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Table Tennis Kit 42",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20"
    },
    {
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 43",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-table-tennis-43",
        "gallery": [
            "/Table Tennis/43_back.png",
            "/Table Tennis/43_front.png"
        ],
        "productCode": "#TAB-43",
        "image": "/Table Tennis/43_front.png",
        "imageBack": "/Table Tennis/43_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        }
    },
    {
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Table Tennis",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Table Tennis Kit 44",
        "productCode": "#TAB-44",
        "imageBack": "/Table Tennis/44_back.png",
        "image": "/Table Tennis/44_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Table Tennis/44_back.png",
            "/Table Tennis/44_front.png"
        ],
        "id": "force-table-tennis-44"
    },
    {
        "title": "Table Tennis Kit 45",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "gallery": [
            "/Table Tennis/45_back.png",
            "/Table Tennis/45_front.png"
        ],
        "id": "force-table-tennis-45",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/45_back.png",
        "image": "/Table Tennis/45_front.png",
        "productCode": "#TAB-45"
    },
    {
        "title": "Table Tennis Kit 46",
        "description": "Premium Table Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Table Tennis",
        "usageType": "T20",
        "longDescription": "Our Table Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "id": "force-table-tennis-46",
        "gallery": [
            "/Table Tennis/46_back.png",
            "/Table Tennis/46_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Table Tennis/46_back.png",
        "image": "/Table Tennis/46_front.png",
        "productCode": "#TAB-46"
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 01",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#TEN-01",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Tennis/1_back.png",
        "image": "/Tennis/1_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-tennis-01",
        "gallery": [
            "/Tennis/1_back.png",
            "/Tennis/1_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 02",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Tennis/2_back.png",
            "/Tennis/2_front.png"
        ],
        "id": "force-tennis-02",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-02",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Tennis/2_back.png",
        "image": "/Tennis/2_front.png"
    },
    {
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "image": "/Tennis/3_front.png",
        "imageBack": "/Tennis/3_back.png",
        "productCode": "#TEN-03",
        "id": "force-tennis-03",
        "gallery": [
            "/Tennis/3_back.png",
            "/Tennis/3_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 03",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Tennis",
        "usageType": "T20"
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Tennis",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 04",
        "productCode": "#TEN-04",
        "image": "/Tennis/4_front.png",
        "imageBack": "/Tennis/4_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-04",
        "gallery": [
            "/Tennis/4_back.png",
            "/Tennis/4_front.png"
        ]
    },
    {
        "imageBack": "/Tennis/5_back.png",
        "image": "/Tennis/5_front.png",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TEN-05",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-05",
        "gallery": [
            "/Tennis/5_back.png",
            "/Tennis/5_front.png"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 05",
        "usageType": "T20",
        "sport": "Tennis"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Tennis/6_back.png",
            "/Tennis/6_front.png"
        ],
        "id": "force-tennis-06",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "imageBack": "/Tennis/6_back.png",
        "image": "/Tennis/6_front.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "productCode": "#TEN-06",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 06",
        "usageType": "T20",
        "sport": "Tennis",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 07",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Tennis",
        "usageType": "T20",
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "image": "/Tennis/7_front.png",
        "imageBack": "/Tennis/7_back.png",
        "productCode": "#TEN-07",
        "id": "force-tennis-07",
        "gallery": [
            "/Tennis/7_back.png",
            "/Tennis/7_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports"
    },
    {
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 08",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Tennis/8_back.png",
            "/Tennis/8_front.png"
        ],
        "id": "force-tennis-08",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-08",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Tennis/8_back.png",
        "image": "/Tennis/8_front.png"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-09",
        "gallery": [
            "/Tennis/9_back.png",
            "/Tennis/9_front.png"
        ],
        "productCode": "#TEN-09",
        "image": "/Tennis/9_front.png",
        "imageBack": "/Tennis/9_back.png",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "usageType": "T20",
        "sport": "Tennis",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 09",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "id": "force-tennis-10",
        "gallery": [
            "/Tennis/10_back.png",
            "/Tennis/10_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "image": "/Tennis/10_front.png",
        "imageBack": "/Tennis/10_back.png",
        "productCode": "#TEN-10",
        "title": "Tennis Kit 10",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Tennis",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Tennis/11_back.png",
            "/Tennis/11_front.png"
        ],
        "id": "force-tennis-11",
        "brand": "Force Sports",
        "category": "T-Shirts",
        "image": "/Tennis/11_front.png",
        "imageBack": "/Tennis/11_back.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TEN-11",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 11",
        "usageType": "T20",
        "sport": "Tennis",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 12",
        "usageType": "T20",
        "sport": "Tennis",
        "image": "/Tennis/12_front.png",
        "imageBack": "/Tennis/12_back.png",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "productCode": "#TEN-12",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "gallery": [
            "/Tennis/12_back.png",
            "/Tennis/12_front.png"
        ],
        "id": "force-tennis-12",
        "brand": "Force Sports",
        "category": "T-Shirts"
    },
    {
        "brand": "Force Sports",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-13",
        "gallery": [
            "/Tennis/13_back.png",
            "/Tennis/13_front.png"
        ],
        "productCode": "#TEN-13",
        "image": "/Tennis/13_front.png",
        "imageBack": "/Tennis/13_back.png",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "usageType": "T20",
        "sport": "Tennis",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 13",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 14",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-tennis-14",
        "gallery": [
            "/Tennis/14_back.png",
            "/Tennis/14_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-14",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Tennis/14_back.png",
        "image": "/Tennis/14_front.png"
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Tennis/15_back.png",
            "/Tennis/15_front.png"
        ],
        "id": "force-tennis-15",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-15",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester"
        },
        "imageBack": "/Tennis/15_back.png",
        "image": "/Tennis/15_front.png",
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 15",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 16",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-tennis-16",
        "gallery": [
            "/Tennis/16_back.png",
            "/Tennis/16_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-16",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "image": "/Tennis/16_front.png",
        "imageBack": "/Tennis/16_back.png"
    },
    {
        "specs": {
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "image": "/Tennis/17_front.png",
        "imageBack": "/Tennis/17_back.png",
        "productCode": "#TEN-17",
        "gallery": [
            "/Tennis/17_back.png",
            "/Tennis/17_front.png"
        ],
        "id": "force-tennis-17",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "brand": "Force Sports",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 17",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "sport": "Tennis",
        "usageType": "T20"
    },
    {
        "category": "T-Shirts",
        "brand": "Force Sports",
        "id": "force-tennis-18",
        "gallery": [
            "/Tennis/18_back.png",
            "/Tennis/18_front.png"
        ],
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-18",
        "specs": {
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "imageBack": "/Tennis/18_back.png",
        "image": "/Tennis/18_front.png",
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 18",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "productCode": "#TEN-19",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation"
        },
        "imageBack": "/Tennis/19_back.png",
        "image": "/Tennis/19_front.png",
        "category": "T-Shirts",
        "brand": "Force Sports",
        "gallery": [
            "/Tennis/19_back.png",
            "/Tennis/19_front.png"
        ],
        "id": "force-tennis-19",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Tennis",
        "usageType": "T20",
        "title": "Tennis Kit 19",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-20",
        "id": "force-tennis-20",
        "imageBack": "/Tennis/20_back.png",
        "gallery": [
            "/Tennis/20_back.png",
            "/Tennis/20_front.png"
        ],
        "image": "/Tennis/20_front.png",
        "category": "T-Shirts",
        "sport": "Tennis",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 20"
    },
    {
        "category": "T-Shirts",
        "sport": "Tennis",
        "image": "/Tennis/21_front.png",
        "gallery": [
            "/Tennis/21_back.png",
            "/Tennis/21_front.png"
        ],
        "imageBack": "/Tennis/21_back.png",
        "title": "Tennis Kit 21",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-tennis-21",
        "productCode": "#TEN-21",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports"
    },
    {
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#TEN-22",
        "id": "force-tennis-22",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 22",
        "imageBack": "/Tennis/22_back.png",
        "gallery": [
            "/Tennis/22_back.png",
            "/Tennis/22_front.png"
        ],
        "image": "/Tennis/22_front.png",
        "sport": "Tennis",
        "category": "T-Shirts"
    },
    {
        "image": "/Tennis/23_front.png",
        "gallery": [
            "/Tennis/23_back.png",
            "/Tennis/23_front.png"
        ],
        "imageBack": "/Tennis/23_back.png",
        "category": "T-Shirts",
        "sport": "Tennis",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 23",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-23",
        "productCode": "#TEN-23"
    },
    {
        "gallery": [
            "/Tennis/24_back.png",
            "/Tennis/24_front.png"
        ],
        "imageBack": "/Tennis/24_back.png",
        "image": "/Tennis/24_front.png",
        "sport": "Tennis",
        "category": "T-Shirts",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 24",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#TEN-24",
        "id": "force-tennis-24"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-tennis-25",
        "productCode": "#TEN-25",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 25",
        "image": "/Tennis/25_front.png",
        "imageBack": "/Tennis/25_back.png",
        "gallery": [
            "/Tennis/25_back.png",
            "/Tennis/25_front.png"
        ],
        "sport": "Tennis",
        "category": "T-Shirts"
    },
    {
        "title": "Tennis Kit 26",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Tennis",
        "imageBack": "/Tennis/26_back.png",
        "gallery": [
            "/Tennis/26_back.png",
            "/Tennis/26_front.png"
        ],
        "image": "/Tennis/26_front.png",
        "productCode": "#TEN-26",
        "id": "force-tennis-26",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 27",
        "imageBack": "/Tennis/27_back.png",
        "gallery": [
            "/Tennis/27_back.png",
            "/Tennis/27_front.png"
        ],
        "image": "/Tennis/27_front.png",
        "sport": "Tennis",
        "category": "T-Shirts",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#TEN-27",
        "id": "force-tennis-27",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        }
    },
    {
        "productCode": "#TEN-28",
        "id": "force-tennis-28",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 28",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Tennis",
        "category": "T-Shirts",
        "imageBack": "/Tennis/28_back.png",
        "gallery": [
            "/Tennis/28_back.png",
            "/Tennis/28_front.png"
        ],
        "image": "/Tennis/28_front.png"
    },
    {
        "productCode": "#TEN-29",
        "id": "force-tennis-29",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 29",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "category": "T-Shirts",
        "sport": "Tennis",
        "gallery": [
            "/Tennis/29_back.png",
            "/Tennis/29_front.png"
        ],
        "imageBack": "/Tennis/29_back.png",
        "image": "/Tennis/29_front.png"
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 30",
        "image": "/Tennis/30_front.png",
        "imageBack": "/Tennis/30_back.png",
        "gallery": [
            "/Tennis/30_back.png",
            "/Tennis/30_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Tennis",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-tennis-30",
        "productCode": "#TEN-30",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        }
    },
    {
        "title": "Tennis Kit 31",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "category": "T-Shirts",
        "sport": "Tennis",
        "image": "/Tennis/31_front.png",
        "gallery": [
            "/Tennis/31_back.png",
            "/Tennis/31_front.png"
        ],
        "imageBack": "/Tennis/31_back.png",
        "id": "force-tennis-31",
        "productCode": "#TEN-31",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "title": "Tennis Kit 32",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Tennis",
        "imageBack": "/Tennis/32_back.png",
        "gallery": [
            "/Tennis/32_back.png",
            "/Tennis/32_front.png"
        ],
        "image": "/Tennis/32_front.png",
        "productCode": "#TEN-32",
        "id": "force-tennis-32",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Tennis/33_front.png",
        "imageBack": "/Tennis/33_back.png",
        "gallery": [
            "/Tennis/33_back.png",
            "/Tennis/33_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Tennis",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 33",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-33",
        "productCode": "#TEN-33"
    },
    {
        "image": "/Tennis/34_front.png",
        "imageBack": "/Tennis/34_back.png",
        "gallery": [
            "/Tennis/34_back.png",
            "/Tennis/34_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Tennis",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 34",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-tennis-34",
        "productCode": "#TEN-34"
    },
    {
        "sport": "Tennis",
        "category": "T-Shirts",
        "image": "/Tennis/35_front.png",
        "imageBack": "/Tennis/35_back.png",
        "gallery": [
            "/Tennis/35_back.png",
            "/Tennis/35_front.png"
        ],
        "title": "Tennis Kit 35",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-tennis-35",
        "productCode": "#TEN-35",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "productCode": "#TEN-36",
        "id": "force-tennis-36",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 36",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "category": "T-Shirts",
        "sport": "Tennis",
        "imageBack": "/Tennis/36_back.png",
        "gallery": [
            "/Tennis/36_back.png",
            "/Tennis/36_front.png"
        ],
        "image": "/Tennis/36_front.png"
    },
    {
        "productCode": "#TEN-37",
        "id": "force-tennis-37",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 37",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Tennis",
        "imageBack": "/Tennis/37_back.png",
        "gallery": [
            "/Tennis/37_back.png",
            "/Tennis/37_front.png"
        ],
        "image": "/Tennis/37_front.png"
    },
    {
        "sport": "Tennis",
        "category": "T-Shirts",
        "imageBack": "/Tennis/38_back.png",
        "gallery": [
            "/Tennis/38_back.png",
            "/Tennis/38_front.png"
        ],
        "image": "/Tennis/38_front.png",
        "title": "Tennis Kit 38",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#TEN-38",
        "id": "force-tennis-38",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports"
    },
    {
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 39",
        "imageBack": "/Tennis/39_back.png",
        "gallery": [
            "/Tennis/39_back.png",
            "/Tennis/39_front.png"
        ],
        "image": "/Tennis/39_front.png",
        "category": "T-Shirts",
        "sport": "Tennis",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#TEN-39",
        "id": "force-tennis-39",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        }
    },
    {
        "productCode": "#TEN-40",
        "id": "force-tennis-40",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 40",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Tennis",
        "category": "T-Shirts",
        "imageBack": "/Tennis/40_back.png",
        "gallery": [
            "/Tennis/40_back.png",
            "/Tennis/40_front.png"
        ],
        "image": "/Tennis/40_front.png"
    },
    {
        "imageBack": "/Tennis/41_back.png",
        "gallery": [
            "/Tennis/41_back.png",
            "/Tennis/41_front.png"
        ],
        "image": "/Tennis/41_front.png",
        "category": "T-Shirts",
        "sport": "Tennis",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 41",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#TEN-41",
        "id": "force-tennis-41"
    },
    {
        "id": "force-tennis-42",
        "productCode": "#TEN-42",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Tennis Kit 42",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Tennis",
        "image": "/Tennis/42_front.png",
        "gallery": [
            "/Tennis/42_back.png",
            "/Tennis/42_front.png"
        ],
        "imageBack": "/Tennis/42_back.png"
    },
    {
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-tennis-43",
        "productCode": "#TEN-43",
        "image": "/Tennis/43_front.png",
        "imageBack": "/Tennis/43_back.png",
        "gallery": [
            "/Tennis/43_back.png",
            "/Tennis/43_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Tennis",
        "usageType": "T20",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Tennis Kit 43"
    },
    {
        "image": "/Tennis/44_front.png",
        "gallery": [
            "/Tennis/44_back.png",
            "/Tennis/44_front.png"
        ],
        "imageBack": "/Tennis/44_back.png",
        "category": "T-Shirts",
        "sport": "Tennis",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 44",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-tennis-44",
        "productCode": "#TEN-44"
    },
    {
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-tennis-45",
        "productCode": "#TEN-45",
        "image": "/Tennis/45_front.png",
        "imageBack": "/Tennis/45_back.png",
        "gallery": [
            "/Tennis/45_back.png",
            "/Tennis/45_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Tennis",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 45"
    },
    {
        "image": "/Tennis/46_front.png",
        "imageBack": "/Tennis/46_back.png",
        "gallery": [
            "/Tennis/46_back.png",
            "/Tennis/46_front.png"
        ],
        "sport": "Tennis",
        "category": "T-Shirts",
        "longDescription": "Our Tennis range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Tennis Kit 46",
        "description": "Premium Tennis technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-tennis-46",
        "productCode": "#TEN-46"
    },
    {
        "brand": "Force",
        "longDescription": "The Tennis Court Pro Cap is built for champions. With a curved brim and structured front panels, it maintains its shape even after heavy use. The integrated sweatband pulls moisture away from the brow to keep your vision clear.",
        "features": [
            "Structured Profile",
            "Moisture-Wicking Brow Band",
            "Breathable Mesh Panels",
            "UV Protection"
        ],
        "productCode": "#CP 901",
        "title": "Tennis Court Pro Cap",
        "id": "force-tennis-court-pro-cap",
        "description": "Professional-grade tennis cap with superior moisture management.",
        "image": "/caps/blue-cap.png",
        "category": "Caps",
        "specs": {
            "Protection": "UPF 50+",
            "Fit": "Structured Classic",
            "Material": "Performance Twill"
        },
        "sport": "Kabaddi"
    },
    {
        "longDescription": "The #TN 5111 is a pinnacle of activewear engineering. Featuring our proprietary \"Softy\" fabric type, this polo is crafted with an interlock knit that provides unparalleled comfort while allowing completely free movement. Integrated moisture-wicking technology ensures you stay dry and sweat-free even during the most intense athletic sessions.",
        "usageType": "T20",
        "title": "T20 Pro Polo",
        "image": "/T-shirts/11.png",
        "imageBack": "/T-shirts/11 back.png",
        "category": "T-Shirts",
        "sport": "Cricket",
        "features": [
            "Proprietary \"Softy\" Fabric Type",
            "Interlock Knit for Free Movement",
            "Moisture Wicking Technology",
            "Reinforced Contrast Collar",
            "Athletic Regular Fit",
            "Machine Washable / Easy Care"
        ],
        "brand": "Force",
        "sizeCharts": {
            "trackpant": {
                "values": [
                    {
                        "size": "Medium",
                        "waist": "30-32",
                        "length": "39"
                    },
                    {
                        "size": "Large",
                        "waist": "32-34",
                        "length": "40"
                    },
                    {
                        "length": "41",
                        "waist": "34-36",
                        "size": "Extra Large"
                    },
                    {
                        "size": "2X Large",
                        "waist": "36-38",
                        "length": "42"
                    }
                ],
                "label": "Track Pant Sizes (In Inches)"
            },
            "tshirt": {
                "values": [
                    {
                        "chest": "38",
                        "length": "27",
                        "size": "Small"
                    },
                    {
                        "size": "Medium",
                        "length": "28",
                        "chest": "40"
                    },
                    {
                        "size": "Large",
                        "length": "29",
                        "chest": "42"
                    },
                    {
                        "chest": "44",
                        "length": "30",
                        "size": "Extra Large"
                    },
                    {
                        "chest": "46",
                        "length": "31",
                        "size": "2X Large"
                    }
                ],
                "label": "T-Shirt Sizes (In Inches)"
            }
        },
        "id": "force-tn-5111",
        "productCode": "#TN 5111",
        "description": "Elite \"Softy\" fabric polo available in 8 vibrant dual-tone colors.",
        "specs": {
            "Material": "100% High-Grade Polyester",
            "Origin": "Proudly Made in India",
            "Usage": "Multipurpose Athletic / Lifestyle",
            "Fabric Tech": "Interlock Knit / Softy",
            "Fit": "Regular Athletic Fit"
        }
    },
    {
        "usageType": "Practice",
        "longDescription": "The #TN 5112 \"Speed-Stream\" series combines aggressive aesthetic lines with our signature performance. The specialized gradient-stripe pattern is sublimated using high-definition tech that won't crack or fade. Like the 5111, it utilizes our interlock \"Softy\" fabric for maximum comfort and moisture management.",
        "title": "Training Practice Tee",
        "image": "/T-shirts/12.png",
        "imageBack": "/T-shirts/12 backed.png",
        "category": "T-Shirts",
        "sport": "Cricket",
        "brand": "Force",
        "features": [
            "High-Definition \"Speed-Stream\" Sublimation",
            "Proprietary \"Softy\" Fabric Type",
            "Interlock Knit for Free Movement",
            "Moisture Wicking Technology",
            "Athletic Regular Fit",
            "Made in India"
        ],
        "sizeCharts": {
            "trackpant": {
                "values": [
                    {
                        "size": "Medium",
                        "length": "39",
                        "waist": "30-32"
                    },
                    {
                        "size": "Large",
                        "waist": "32-34",
                        "length": "40"
                    },
                    {
                        "size": "Extra Large",
                        "waist": "34-36",
                        "length": "41"
                    },
                    {
                        "size": "2X Large",
                        "length": "42",
                        "waist": "36-38"
                    }
                ],
                "label": "Track Pant Sizes (In Inches)"
            },
            "tshirt": {
                "values": [
                    {
                        "size": "Small",
                        "chest": "38",
                        "length": "27"
                    },
                    {
                        "chest": "40",
                        "length": "28",
                        "size": "Medium"
                    },
                    {
                        "size": "Large",
                        "chest": "42",
                        "length": "29"
                    },
                    {
                        "length": "30",
                        "chest": "44",
                        "size": "Extra Large"
                    },
                    {
                        "size": "2X Large",
                        "length": "31",
                        "chest": "46"
                    }
                ],
                "label": "T-Shirt Sizes (In Inches)"
            }
        },
        "id": "force-tn-5112",
        "productCode": "#TN 5112",
        "description": "Dynamic \"Speed-Stream\" design in premium Softy fabric.",
        "specs": {
            "Material": "100% High-Grade Polyester",
            "Origin": "Proudly Made in India",
            "Design": "Linear Streamline Gradient",
            "Fit": "Regular Athletic Fit",
            "Fabric Tech": "Interlock Knit / Softy"
        }
    },
    {
        "productCode": "#TR 900",
        "id": "force-travel-polo",
        "features": [
            "Wrinkle-Resistant",
            "Soft Touch Fabric",
            "Breathable",
            "Staff Standard Fit"
        ],
        "brand": "Force",
        "specs": {
            "Usage": "Travel / Casual",
            "Material": "Cotton/Poly Blend"
        },
        "description": "Premium travel apparel for teams and staff.",
        "title": "Elite Travel Team Polo",
        "longDescription": "The Elite Travel Team Polo is designed for comfort during transit. Made with breathable, wrinkle-resistant fabric to keep you looking sharp from the airport to the hotel.",
        "usageType": "Travel",
        "category": "T-Shirts",
        "sport": "Other",
        "imageBack": "/T-shirts/6.png",
        "image": "/T-shirts/5.png"
    },
    {
        "description": "Sleek charcoal grey cap with a minimalist technical aesthetic.",
        "image": "/caps/grey-cap.png",
        "sport": "Pickleball",
        "specs": {
            "Color": "Charcoal Grey",
            "Material": "Poly-Elastane Blend"
        },
        "category": "Caps",
        "features": [
            "Minimalist aesthetic",
            "Lightweight build",
            "Quick-dry fabric"
        ],
        "longDescription": "Focused performance meets minimalist design. The Charcoal Vanguard cap is lightweight and exceptionally durable.",
        "brand": "Force",
        "productCode": "#CP-VANG-CHR",
        "id": "force-vanguard-cap-charcoal",
        "title": "Vanguard Cap - Charcoal Grey"
    },
    {
        "brand": "Force",
        "features": [
            "Low profile",
            "Tactical design",
            "Moisture-wicking"
        ],
        "longDescription": "The Vanguard series represents the cutting edge of sports headwear. Low-profile design with high-performance fabric.",
        "productCode": "#CP-VANG-NVY",
        "title": "Vanguard Cap - Navy Elite",
        "id": "force-vanguard-cap-navy",
        "description": "Low-profile navy cap with a tactical sports design.",
        "image": "/caps/navy-cap.png",
        "category": "Caps",
        "sport": "Tennis",
        "specs": {
            "Color": "Navy Blue",
            "Material": "Ripstop Poly"
        }
    },
    {
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-01",
        "productCode": "#VOL-01",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/1_front.png",
        "gallery": [
            "/Volleyball/1_back.png",
            "/Volleyball/1_front.png"
        ],
        "imageBack": "/Volleyball/1_back.png",
        "title": "Volleyball Kit 01",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 02",
        "imageBack": "/Volleyball/2_back.png",
        "gallery": [
            "/Volleyball/2_back.png",
            "/Volleyball/2_front.png"
        ],
        "image": "/Volleyball/2_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-02",
        "id": "force-volleyball-02",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        }
    },
    {
        "title": "Volleyball Kit 03",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "imageBack": "/Volleyball/3_back.png",
        "gallery": [
            "/Volleyball/3_back.png",
            "/Volleyball/3_front.png"
        ],
        "image": "/Volleyball/3_front.png",
        "productCode": "#VOL-03",
        "id": "force-volleyball-03",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-04",
        "productCode": "#VOL-04",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/4_front.png",
        "imageBack": "/Volleyball/4_back.png",
        "gallery": [
            "/Volleyball/4_back.png",
            "/Volleyball/4_front.png"
        ],
        "title": "Volleyball Kit 04",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "sport": "Volleyball",
        "category": "T-Shirts",
        "imageBack": "/Volleyball/5_back.png",
        "gallery": [
            "/Volleyball/5_back.png",
            "/Volleyball/5_front.png"
        ],
        "image": "/Volleyball/5_front.png",
        "title": "Volleyball Kit 05",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#VOL-05",
        "id": "force-volleyball-05",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "title": "Volleyball Kit 06",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "gallery": [
            "/Volleyball/6_back.png",
            "/Volleyball/6_front.png"
        ],
        "imageBack": "/Volleyball/6_back.png",
        "image": "/Volleyball/6_front.png",
        "productCode": "#VOL-06",
        "id": "force-volleyball-06",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "title": "Volleyball Kit 07",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "gallery": [
            "/Volleyball/7_back.png",
            "/Volleyball/7_front.png"
        ],
        "imageBack": "/Volleyball/7_back.png",
        "image": "/Volleyball/7_front.png",
        "productCode": "#VOL-07",
        "id": "force-volleyball-07",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-08",
        "productCode": "#VOL-08",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180"
        },
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 08",
        "image": "/Volleyball/8_front.png",
        "gallery": [
            "/Volleyball/8_back.png",
            "/Volleyball/8_front.png"
        ],
        "imageBack": "/Volleyball/8_back.png",
        "category": "T-Shirts",
        "sport": "Volleyball"
    },
    {
        "gallery": [
            "/Volleyball/9_back.png",
            "/Volleyball/9_front.png"
        ],
        "imageBack": "/Volleyball/9_back.png",
        "image": "/Volleyball/9_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 09",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-09",
        "id": "force-volleyball-09"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-volleyball-10",
        "productCode": "#VOL-10",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 10",
        "image": "/Volleyball/10_front.png",
        "gallery": [
            "/Volleyball/10_back.png",
            "/Volleyball/10_front.png"
        ],
        "imageBack": "/Volleyball/10_back.png",
        "category": "T-Shirts",
        "sport": "Volleyball"
    },
    {
        "title": "Volleyball Kit 11",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "imageBack": "/Volleyball/11_back.png",
        "gallery": [
            "/Volleyball/11_back.png",
            "/Volleyball/11_front.png"
        ],
        "image": "/Volleyball/11_front.png",
        "productCode": "#VOL-11",
        "id": "force-volleyball-11",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "gallery": [
            "/Volleyball/12_back.png",
            "/Volleyball/12_front.png"
        ],
        "imageBack": "/Volleyball/12_back.png",
        "image": "/Volleyball/12_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 12",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-12",
        "id": "force-volleyball-12"
    },
    {
        "title": "Volleyball Kit 13",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "imageBack": "/Volleyball/13_back.png",
        "gallery": [
            "/Volleyball/13_back.png",
            "/Volleyball/13_front.png"
        ],
        "image": "/Volleyball/13_front.png",
        "productCode": "#VOL-13",
        "id": "force-volleyball-13",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "image": "/Volleyball/14_front.png",
        "imageBack": "/Volleyball/14_back.png",
        "gallery": [
            "/Volleyball/14_back.png",
            "/Volleyball/14_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Volleyball",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 14",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-14",
        "productCode": "#VOL-14"
    },
    {
        "image": "/Volleyball/15_front.png",
        "imageBack": "/Volleyball/15_back.png",
        "gallery": [
            "/Volleyball/15_back.png",
            "/Volleyball/15_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Volleyball",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 15",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-volleyball-15",
        "productCode": "#VOL-15"
    },
    {
        "productCode": "#VOL-16",
        "id": "force-volleyball-16",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Volleyball Kit 16",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "imageBack": "/Volleyball/16_back.png",
        "gallery": [
            "/Volleyball/16_back.png",
            "/Volleyball/16_front.png"
        ],
        "image": "/Volleyball/16_front.png"
    },
    {
        "title": "Volleyball Kit 17",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/17_front.png",
        "imageBack": "/Volleyball/17_back.png",
        "gallery": [
            "/Volleyball/17_back.png",
            "/Volleyball/17_front.png"
        ],
        "id": "force-volleyball-17",
        "productCode": "#VOL-17",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "id": "force-volleyball-18",
        "productCode": "#VOL-18",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Volleyball Kit 18",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/18_front.png",
        "imageBack": "/Volleyball/18_back.png",
        "gallery": [
            "/Volleyball/18_back.png",
            "/Volleyball/18_front.png"
        ]
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#VOL-19",
        "id": "force-volleyball-19",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 19",
        "imageBack": "/Volleyball/19_back.png",
        "gallery": [
            "/Volleyball/19_back.png",
            "/Volleyball/19_front.png"
        ],
        "image": "/Volleyball/19_front.png",
        "sport": "Volleyball",
        "category": "T-Shirts"
    },
    {
        "image": "/Volleyball/20_front.png",
        "imageBack": "/Volleyball/20_back.png",
        "gallery": [
            "/Volleyball/20_back.png",
            "/Volleyball/20_front.png"
        ],
        "sport": "Volleyball",
        "category": "T-Shirts",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 20",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-20",
        "productCode": "#VOL-20"
    },
    {
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-21",
        "productCode": "#VOL-21",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "image": "/Volleyball/21_front.png",
        "imageBack": "/Volleyball/21_back.png",
        "gallery": [
            "/Volleyball/21_back.png",
            "/Volleyball/21_front.png"
        ],
        "title": "Volleyball Kit 21",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "title": "Volleyball Kit 22",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "gallery": [
            "/Volleyball/22_back.png",
            "/Volleyball/22_front.png"
        ],
        "imageBack": "/Volleyball/22_back.png",
        "image": "/Volleyball/22_front.png",
        "productCode": "#VOL-22",
        "id": "force-volleyball-22",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#VOL-23",
        "id": "force-volleyball-23",
        "imageBack": "/Volleyball/23_back.png",
        "gallery": [
            "/Volleyball/23_back.png",
            "/Volleyball/23_front.png"
        ],
        "image": "/Volleyball/23_front.png",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 23"
    },
    {
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-volleyball-24",
        "productCode": "#VOL-24",
        "image": "/Volleyball/24_front.png",
        "imageBack": "/Volleyball/24_back.png",
        "gallery": [
            "/Volleyball/24_back.png",
            "/Volleyball/24_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Volleyball",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 24"
    },
    {
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-25",
        "id": "force-volleyball-25",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 25",
        "gallery": [
            "/Volleyball/25_back.png",
            "/Volleyball/25_front.png"
        ],
        "imageBack": "/Volleyball/25_back.png",
        "image": "/Volleyball/25_front.png",
        "sport": "Volleyball",
        "category": "T-Shirts"
    },
    {
        "imageBack": "/Volleyball/26_back.png",
        "gallery": [
            "/Volleyball/26_back.png",
            "/Volleyball/26_front.png"
        ],
        "image": "/Volleyball/26_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 26",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-26",
        "id": "force-volleyball-26"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 27",
        "image": "/Volleyball/27_front.png",
        "imageBack": "/Volleyball/27_back.png",
        "gallery": [
            "/Volleyball/27_back.png",
            "/Volleyball/27_front.png"
        ],
        "category": "T-Shirts",
        "sport": "Volleyball",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-27",
        "productCode": "#VOL-27",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        }
    },
    {
        "title": "Volleyball Kit 28",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "imageBack": "/Volleyball/28_back.png",
        "gallery": [
            "/Volleyball/28_back.png",
            "/Volleyball/28_front.png"
        ],
        "image": "/Volleyball/28_front.png",
        "productCode": "#VOL-28",
        "id": "force-volleyball-28",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "id": "force-volleyball-29",
        "productCode": "#VOL-29",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 29",
        "image": "/Volleyball/29_front.png",
        "gallery": [
            "/Volleyball/29_back.png",
            "/Volleyball/29_front.png"
        ],
        "imageBack": "/Volleyball/29_back.png",
        "category": "T-Shirts",
        "sport": "Volleyball"
    },
    {
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#VOL-30",
        "id": "force-volleyball-30",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 30",
        "imageBack": "/Volleyball/30_back.png",
        "gallery": [
            "/Volleyball/30_back.png",
            "/Volleyball/30_front.png"
        ],
        "image": "/Volleyball/30_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball"
    },
    {
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-31",
        "productCode": "#VOL-31",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/31_front.png",
        "imageBack": "/Volleyball/31_back.png",
        "gallery": [
            "/Volleyball/31_back.png",
            "/Volleyball/31_front.png"
        ],
        "title": "Volleyball Kit 31",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/32_front.png",
        "imageBack": "/Volleyball/32_back.png",
        "gallery": [
            "/Volleyball/32_back.png",
            "/Volleyball/32_front.png"
        ],
        "title": "Volleyball Kit 32",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-32",
        "productCode": "#VOL-32",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ]
    },
    {
        "title": "Volleyball Kit 33",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "imageBack": "/Volleyball/33_back.png",
        "gallery": [
            "/Volleyball/33_back.png",
            "/Volleyball/33_front.png"
        ],
        "image": "/Volleyball/33_front.png",
        "productCode": "#VOL-33",
        "id": "force-volleyball-33",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "specs": {
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability."
    },
    {
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-34",
        "id": "force-volleyball-34",
        "imageBack": "/Volleyball/34_back.png",
        "gallery": [
            "/Volleyball/34_back.png",
            "/Volleyball/34_front.png"
        ],
        "image": "/Volleyball/34_front.png",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 34"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 35",
        "image": "/Volleyball/35_front.png",
        "gallery": [
            "/Volleyball/35_back.png",
            "/Volleyball/35_front.png"
        ],
        "imageBack": "/Volleyball/35_back.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-35",
        "productCode": "#VOL-35",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Fit": "Athletic Fit",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester"
        }
    },
    {
        "category": "T-Shirts",
        "sport": "Volleyball",
        "imageBack": "/Volleyball/36_back.png",
        "gallery": [
            "/Volleyball/36_back.png",
            "/Volleyball/36_front.png"
        ],
        "image": "/Volleyball/36_front.png",
        "title": "Volleyball Kit 36",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#VOL-36",
        "id": "force-volleyball-36",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports"
    },
    {
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 37",
        "image": "/Volleyball/37_front.png",
        "gallery": [
            "/Volleyball/37_back.png",
            "/Volleyball/37_front.png"
        ],
        "imageBack": "/Volleyball/37_back.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-37",
        "productCode": "#VOL-37",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        }
    },
    {
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/38_front.png",
        "gallery": [
            "/Volleyball/38_back.png",
            "/Volleyball/38_front.png"
        ],
        "imageBack": "/Volleyball/38_back.png",
        "title": "Volleyball Kit 38",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-38",
        "productCode": "#VOL-38",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-39",
        "productCode": "#VOL-39",
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "category": "T-Shirts",
        "sport": "Volleyball",
        "image": "/Volleyball/39_front.png",
        "gallery": [
            "/Volleyball/39_back.png",
            "/Volleyball/39_front.png"
        ],
        "imageBack": "/Volleyball/39_back.png",
        "title": "Volleyball Kit 39",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court."
    },
    {
        "specs": {
            "Fit": "Athletic Fit",
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#VOL-40",
        "id": "force-volleyball-40",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "gallery": [
            "/Volleyball/40_back.png",
            "/Volleyball/40_front.png"
        ],
        "imageBack": "/Volleyball/40_back.png",
        "image": "/Volleyball/40_front.png",
        "title": "Volleyball Kit 40",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "productCode": "#VOL-41",
        "id": "force-volleyball-41",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "gallery": [
            "/Volleyball/41_back.png",
            "/Volleyball/41_front.png"
        ],
        "imageBack": "/Volleyball/41_back.png",
        "image": "/Volleyball/41_front.png",
        "title": "Volleyball Kit 41",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "id": "force-volleyball-42",
        "productCode": "#VOL-42",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 42",
        "image": "/Volleyball/42_front.png",
        "imageBack": "/Volleyball/42_back.png",
        "gallery": [
            "/Volleyball/42_back.png",
            "/Volleyball/42_front.png"
        ],
        "sport": "Volleyball",
        "category": "T-Shirts"
    },
    {
        "productCode": "#VOL-43",
        "id": "force-volleyball-43",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "specs": {
            "Printing": "Full Sublimation",
            "Material": "Sublimated Polyester",
            "GSM": "180",
            "Category": "Sports Uniforms",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "title": "Volleyball Kit 43",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "imageBack": "/Volleyball/43_back.png",
        "gallery": [
            "/Volleyball/43_back.png",
            "/Volleyball/43_front.png"
        ],
        "image": "/Volleyball/43_front.png"
    },
    {
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "id": "force-volleyball-44",
        "productCode": "#VOL-44",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "sport": "Volleyball",
        "category": "T-Shirts",
        "image": "/Volleyball/44_front.png",
        "imageBack": "/Volleyball/44_back.png",
        "gallery": [
            "/Volleyball/44_back.png",
            "/Volleyball/44_front.png"
        ],
        "title": "Volleyball Kit 44",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20"
    },
    {
        "gallery": [
            "/Volleyball/45_back.png",
            "/Volleyball/45_front.png"
        ],
        "imageBack": "/Volleyball/45_back.png",
        "image": "/Volleyball/45_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "usageType": "T20",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "title": "Volleyball Kit 45",
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "brand": "Force Sports",
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "productCode": "#VOL-45",
        "id": "force-volleyball-45"
    },
    {
        "description": "Premium Volleyball technical sports uniform kit featuring modern design patterns. Engineered for maximum breathability.",
        "specs": {
            "Category": "Sports Uniforms",
            "GSM": "180",
            "Material": "Sublimated Polyester",
            "Printing": "Full Sublimation",
            "Fit": "Athletic Fit"
        },
        "features": [
            "100% Custom Sublimation Printing",
            "Moisture-Wicking Performance Fabric",
            "Durable Flatlock Stitching",
            "Unlimited sponsor logos & player names"
        ],
        "brand": "Force Sports",
        "productCode": "#VOL-46",
        "id": "force-volleyball-46",
        "imageBack": "/Volleyball/46_back.png",
        "gallery": [
            "/Volleyball/46_back.png",
            "/Volleyball/46_front.png"
        ],
        "image": "/Volleyball/46_front.png",
        "category": "T-Shirts",
        "sport": "Volleyball",
        "longDescription": "Our Volleyball range offers high-definition technical sports uniforms with custom sublimation options. Engineered with wicking fabrics for peak performance and durability on the field/court.",
        "usageType": "T20",
        "title": "Volleyball Kit 46"
    },
    {
        "sport": "Volleyball",
        "category": "T-Shirts",
        "imageBack": "/T-shirts/35.png",
        "image": "/T-shirts/34.png",
        "title": "Spike-Master Coach Tee",
        "longDescription": "Designed with a high collar for sun protection and a relaxed fit for long hours of court-side instruction.",
        "usageType": "Coaches",
        "specs": {
            "Usage": "Coaching",
            "Material": "Micro-Honeycomb Poly"
        },
        "description": "Breathable coach apparel for the volleyball court.",
        "productCode": "#VB-CH-99",
        "id": "force-volleyball-coach",
        "features": [
            "Sun Protection",
            "Relaxed Cut",
            "Stain Resistant"
        ],
        "brand": "Force"
    }
];
