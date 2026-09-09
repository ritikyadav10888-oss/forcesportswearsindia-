export const UniformCategories = ['School /colleges', 'Corporate staff', 'Fast Food floor staff', 'Industrial', 'Quick Delivery services'] as const;

export interface UniformProduct {
    id: string;
    title: string;
    category: typeof UniformCategories[number];
    subcategory?: 'T-shirt' | 'Trackpant' | 'Shorts' | 'Caps' | 'Shirt' | 'Blazer' | 'Trouser' | 'Apron' | 'Safety Gear' | 'Jacket';
    description: string;
    longDescription?: string;
    image: string;
    imageBack?: string;
    gallery?: string[];
    features: string[];
    specs: Record<string, string>;
    customization: string[];
    sizeCharts?: Record<string, { label: string; values: Record<string, string>[] }>;
}

export const UNIFORMS: UniformProduct[] = [
    {
        "id": "school-colleges-image-copy-2-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 2.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 2.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-3-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 3.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 3.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-4-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 4.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 4.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-5-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 5.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 5.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-6-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 6.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 6.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-7-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 7.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 7.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-8-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy 8.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy 8.png"
        ]
    },
    {
        "id": "school-colleges-image-copy-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image copy.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image copy.png"
        ]
    },
    {
        "id": "school-colleges-image-png",
        "title": "School Premium Trackpant",
        "category": "School /colleges",
        "subcategory": "Trackpant",
        "description": "Premium trackpant designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School Premium Trackpant features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/image.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/image.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-shorts-black-1781781238872-png",
        "title": "School School Uniform Shorts Black 1781781238872",
        "category": "School /colleges",
        "subcategory": "Shorts",
        "description": "Premium shorts designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Shorts Black 1781781238872 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_shorts_black_1781781238872.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_shorts_black_1781781238872.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-shorts-default-1781781225312-png",
        "title": "School School Uniform Shorts Default 1781781225312",
        "category": "School /colleges",
        "subcategory": "Shorts",
        "description": "Premium shorts designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Shorts Default 1781781225312 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_shorts_default_1781781225312.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_shorts_default_1781781225312.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-shorts-green-1781781251012-png",
        "title": "School School Uniform Shorts Green 1781781251012",
        "category": "School /colleges",
        "subcategory": "Shorts",
        "description": "Premium shorts designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Shorts Green 1781781251012 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_shorts_green_1781781251012.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_shorts_green_1781781251012.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-shorts-grey-1781781262382-png",
        "title": "School School Uniform Shorts Grey 1781781262382",
        "category": "School /colleges",
        "subcategory": "Shorts",
        "description": "Premium shorts designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Shorts Grey 1781781262382 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_shorts_grey_1781781262382.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_shorts_grey_1781781262382.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-1781780870372-png",
        "title": "School School Uniform Tshirt 1781780870372",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt 1781780870372 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_1781780870372.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_1781780870372.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-black-1781781069751-png",
        "title": "School School Uniform Tshirt Black 1781781069751",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Black 1781781069751 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_black_1781781069751.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_black_1781781069751.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-green-1781781012390-png",
        "title": "School School Uniform Tshirt Green 1781781012390",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Green 1781781012390 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_green_1781781012390.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_green_1781781012390.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-grey-1781781046054-png",
        "title": "School School Uniform Tshirt Grey 1781781046054",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Grey 1781781046054 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_grey_1781781046054.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_grey_1781781046054.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-lightblue-1781781081549-png",
        "title": "School School Uniform Tshirt Lightblue 1781781081549",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Lightblue 1781781081549 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_lightblue_1781781081549.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_lightblue_1781781081549.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-maroon-1781781001344-png",
        "title": "School School Uniform Tshirt Maroon 1781781001344",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Maroon 1781781001344 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_maroon_1781781001344.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_maroon_1781781001344.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-navy-1781780990100-png",
        "title": "School School Uniform Tshirt Navy 1781780990100",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Navy 1781780990100 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_navy_1781780990100.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_navy_1781780990100.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-orange-1781781102848-png",
        "title": "School School Uniform Tshirt Orange 1781781102848",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Orange 1781781102848 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_orange_1781781102848.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_orange_1781781102848.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-purple-1781781091043-png",
        "title": "School School Uniform Tshirt Purple 1781781091043",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Purple 1781781091043 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_purple_1781781091043.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_purple_1781781091043.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-red-1781781033648-png",
        "title": "School School Uniform Tshirt Red 1781781033648",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Red 1781781033648 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_red_1781781033648.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_red_1781781033648.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-royal-1781781023051-png",
        "title": "School School Uniform Tshirt Royal 1781781023051",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Royal 1781781023051 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_royal_1781781023051.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_royal_1781781023051.png"
        ]
    },
    {
        "id": "school-colleges-school-uniform-tshirt-yellow-1781781057603-png",
        "title": "School School Uniform Tshirt Yellow 1781781057603",
        "category": "School /colleges",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for School /colleges. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our School /colleges uniform range offers high-quality apparel tailored for your industry. This School School Uniform Tshirt Yellow 1781781057603 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/school uniforms/school_uniform_tshirt_yellow_1781781057603.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/school uniforms/school_uniform_tshirt_yellow_1781781057603.png"
        ]
    },
    {
        "id": "corporate-staff-image-copy-2-png",
        "title": "Corporate Premium Uniform",
        "category": "Corporate staff",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Corporate staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Corporate staff uniform range offers high-quality apparel tailored for your industry. This Corporate Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/corporate staff/image copy 2.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/corporate staff/image copy 2.png"
        ]
    },
    {
        "id": "corporate-staff-image-copy-3-png",
        "title": "Corporate Premium Uniform",
        "category": "Corporate staff",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Corporate staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Corporate staff uniform range offers high-quality apparel tailored for your industry. This Corporate Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/corporate staff/image copy 3.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/corporate staff/image copy 3.png"
        ]
    },
    {
        "id": "corporate-staff-image-copy-4-png",
        "title": "Corporate Premium Uniform",
        "category": "Corporate staff",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Corporate staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Corporate staff uniform range offers high-quality apparel tailored for your industry. This Corporate Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/corporate staff/image copy 4.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/corporate staff/image copy 4.png"
        ]
    },
    {
        "id": "corporate-staff-image-copy-png",
        "title": "Corporate Premium Uniform",
        "category": "Corporate staff",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Corporate staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Corporate staff uniform range offers high-quality apparel tailored for your industry. This Corporate Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/corporate staff/image copy.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/corporate staff/image copy.png"
        ]
    },
    {
        "id": "corporate-staff-image-png",
        "title": "Corporate Premium Uniform",
        "category": "Corporate staff",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Corporate staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Corporate staff uniform range offers high-quality apparel tailored for your industry. This Corporate Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/corporate staff/image.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/corporate staff/image.png"
        ]
    },
    {
        "id": "fast-food-floor-staff-fast-food-staff-cap-mockup-1-png",
        "title": "Fast Fast Food Staff Cap Mockup 1",
        "category": "Fast Food floor staff",
        "subcategory": "Caps",
        "description": "Premium caps designed for Fast Food floor staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Fast Food floor staff uniform range offers high-quality apparel tailored for your industry. This Fast Fast Food Staff Cap Mockup 1 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_1.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_1.png"
        ]
    },
    {
        "id": "fast-food-floor-staff-fast-food-staff-cap-mockup-3-png",
        "title": "Fast Fast Food Staff Cap Mockup 3",
        "category": "Fast Food floor staff",
        "subcategory": "Caps",
        "description": "Premium caps designed for Fast Food floor staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Fast Food floor staff uniform range offers high-quality apparel tailored for your industry. This Fast Fast Food Staff Cap Mockup 3 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_3.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_3.png"
        ]
    },
    {
        "id": "fast-food-floor-staff-fast-food-staff-cap-mockup-4-png",
        "title": "Fast Fast Food Staff Cap Mockup 4",
        "category": "Fast Food floor staff",
        "subcategory": "Caps",
        "description": "Premium caps designed for Fast Food floor staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Fast Food floor staff uniform range offers high-quality apparel tailored for your industry. This Fast Fast Food Staff Cap Mockup 4 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_4.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_4.png"
        ]
    },
    {
        "id": "fast-food-floor-staff-fast-food-staff-cap-mockup-5-png",
        "title": "Fast Fast Food Staff Cap Mockup 5",
        "category": "Fast Food floor staff",
        "subcategory": "Caps",
        "description": "Premium caps designed for Fast Food floor staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Fast Food floor staff uniform range offers high-quality apparel tailored for your industry. This Fast Fast Food Staff Cap Mockup 5 features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_5.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/FAST FOOD FLOOR STAFF/fast_food_staff_cap_mockup_5.png"
        ]
    },
    {
        "id": "fast-food-floor-staff-fast-food-uniform-mockup-png",
        "title": "Fast Fast Food Uniform Mockup",
        "category": "Fast Food floor staff",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Fast Food floor staff. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Fast Food floor staff uniform range offers high-quality apparel tailored for your industry. This Fast Fast Food Uniform Mockup features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/FAST FOOD FLOOR STAFF/fast_food_uniform_mockup.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/FAST FOOD FLOOR STAFF/fast_food_uniform_mockup.png"
        ]
    },
    {
        "id": "industrial-industrial-cap-black-png",
        "title": "Industrial Cap Black",
        "category": "Industrial",
        "subcategory": "Caps",
        "description": "Premium caps designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Cap Black features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_cap_black.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_cap_black.png"
        ]
    },
    {
        "id": "industrial-industrial-cap-grey-png",
        "title": "Industrial Cap Grey",
        "category": "Industrial",
        "subcategory": "Caps",
        "description": "Premium caps designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Cap Grey features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_cap_grey.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_cap_grey.png"
        ]
    },
    {
        "id": "industrial-industrial-cap-navy-png",
        "title": "Industrial Cap Navy",
        "category": "Industrial",
        "subcategory": "Caps",
        "description": "Premium caps designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Cap Navy features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_cap_navy.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_cap_navy.png"
        ]
    },
    {
        "id": "industrial-industrial-cap-orange-png",
        "title": "Industrial Cap Orange",
        "category": "Industrial",
        "subcategory": "Caps",
        "description": "Premium caps designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Cap Orange features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_cap_orange.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_cap_orange.png"
        ]
    },
    {
        "id": "industrial-industrial-cap-yellow-png",
        "title": "Industrial Cap Yellow",
        "category": "Industrial",
        "subcategory": "Caps",
        "description": "Premium caps designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Cap Yellow features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_cap_yellow.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_cap_yellow.png"
        ]
    },
    {
        "id": "industrial-industrial-tshirt-black-png",
        "title": "Industrial Tshirt Black",
        "category": "Industrial",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Tshirt Black features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_tshirt_black.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_tshirt_black.png"
        ]
    },
    {
        "id": "industrial-industrial-tshirt-grey-png",
        "title": "Industrial Tshirt Grey",
        "category": "Industrial",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Tshirt Grey features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_tshirt_grey.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_tshirt_grey.png"
        ]
    },
    {
        "id": "industrial-industrial-tshirt-navy-png",
        "title": "Industrial Tshirt Navy",
        "category": "Industrial",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Tshirt Navy features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_tshirt_navy.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_tshirt_navy.png"
        ]
    },
    {
        "id": "industrial-industrial-tshirt-orange-png",
        "title": "Industrial Tshirt Orange",
        "category": "Industrial",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Tshirt Orange features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_tshirt_orange.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_tshirt_orange.png"
        ]
    },
    {
        "id": "industrial-industrial-tshirt-yellow-png",
        "title": "Industrial Tshirt Yellow",
        "category": "Industrial",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Industrial. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Industrial uniform range offers high-quality apparel tailored for your industry. This Industrial Tshirt Yellow features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/Industrial/industrial_tshirt_yellow.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/Industrial/industrial_tshirt_yellow.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-10-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 10.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 10.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-11-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 11.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 11.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-2-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 2.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 2.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-3-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 3.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 3.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-4-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 4.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 4.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-5-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 5.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 5.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-6-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 6.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 6.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-7-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 7.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 7.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-8-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 8.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 8.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-9-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy 9.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy 9.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-copy-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image copy.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image copy.png"
        ]
    },
    {
        "id": "quick-delivery-services-image-png",
        "title": "Quick Premium Uniform",
        "category": "Quick Delivery services",
        "subcategory": "T-shirt",
        "description": "Premium t-shirt designed for Quick Delivery services. Engineered for durability, comfort, and professional appearance.",
        "longDescription": "Our Quick Delivery services uniform range offers high-quality apparel tailored for your industry. This Quick Premium Uniform features advanced fabric technology for all-day comfort.",
        "image": "/uniforms/quick delivery services/image.png",
        "features": [
            "Premium Durable Fabric",
            "Professional Fit & Finish",
            "Comfortable for Long Shifts",
            "Fade & Shrink Resistant"
        ],
        "specs": {
            "Material": "Industry-grade Poly-Cotton Blend",
            "Fit": "Regular/Comfort Fit",
            "WashCare": "Machine Washable"
        },
        "customization": [
            "Company Logo Embroidery",
            "Custom Name Printing",
            "Color Matching"
        ],
        "gallery": [
            "/uniforms/quick delivery services/image.png"
        ]
    }
];
