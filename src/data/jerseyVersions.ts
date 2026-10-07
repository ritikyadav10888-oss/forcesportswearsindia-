// The two ways every jersey design is offered in the sport-wise catalogue (/catalog/sports and the PDF).
// Edit the wording here; tools/catalog-pdf/build_catalog_pdf.py reads the same text from catalog-data.json.
export type JerseyVersionId = 'official' | 'fan';

export const JERSEY_VERSIONS: Record<JerseyVersionId, { label: string; tagline: string; points: string[] }> = {
    official: {
        label: 'Official jersey',
        tagline: 'Match kit worn on the field by your players.',
        points: [
            'Performance sublimated fabric, moisture-wicking',
            'Team crest and sponsor logos',
            "Each player's name and number from your team roster",
        ],
    },
    fan: {
        label: 'Fan jersey',
        tagline: 'The same design for supporters, fan clubs and events.',
        points: [
            'Same colours and design as the official kit',
            'Name and number optional',
            'Ordered in bulk across all sizes',
        ],
    },
};

/** Sport tabs in display order; "Multi-sport" collects 3D Innovations and general training tees. */
export const CATALOG_SPORTS = [
    'Cricket', 'Football', 'Badminton', 'Kabaddi', 'Volleyball', 'Pickleball', 'Tennis', 'Table Tennis', 'Multi-sport',
] as const;
export type CatalogSport = (typeof CATALOG_SPORTS)[number];

export const PDF_CATALOG_URL = '/catalog/force-sports-catalog.pdf';
