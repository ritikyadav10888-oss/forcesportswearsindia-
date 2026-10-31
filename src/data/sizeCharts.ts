// Garment size charts (inches) and fit guide, shared by the product pages and the ISPO showroom.
// Tolerance of ±0.5 inch applies to all manufactured garments.
export type SizeRow = { label: string; chest?: string; length?: string; waist?: string };

export const TSHIRT_SIZES: SizeRow[] = [
    { label: 'SMALL', chest: '38', length: '27' },
    { label: 'MEDIUM', chest: '40', length: '28' },
    { label: 'LARGE', chest: '42', length: '29' },
    { label: 'EXTRA LARGE', chest: '44', length: '30' },
    { label: '2X LARGE', chest: '46', length: '31' },
    { label: '3X LARGE', chest: '48', length: '32' },
    { label: '4X LARGE', chest: '50', length: '33' },
    { label: '5X LARGE', chest: '52', length: '34' },
    { label: '6X LARGE', chest: '54', length: '35' },
];

export const KIDS_SIZES: SizeRow[] = [
    { label: '1 TO 2 YEARS', chest: '22' },
    { label: '3 TO 4 YEARS', chest: '24' },
    { label: '5 TO 6 YEARS', chest: '26' },
    { label: '7 TO 8 YEARS', chest: '28' },
    { label: '9 TO 10 YEARS', chest: '30' },
    { label: '11 TO 12 YEARS', chest: '32' },
    { label: '13 TO 14 YEARS', chest: '34' },
    { label: '15 TO 16 YEARS', chest: '36' },
];

/** one size smaller than men's: women's SMALL measures like a men's size below SMALL, and so on */
export const WOMEN_SIZES: SizeRow[] = [
    { label: 'SMALL', chest: '36', length: '26' },
    { label: 'MEDIUM', chest: '38', length: '27' },
    { label: 'LARGE', chest: '40', length: '28' },
    { label: 'EXTRA LARGE', chest: '42', length: '29' },
    { label: '2X LARGE', chest: '44', length: '30' },
    { label: '3X LARGE', chest: '46', length: '31' },
    { label: '4X LARGE', chest: '48', length: '32' },
    { label: '5X LARGE', chest: '50', length: '33' },
    { label: '6X LARGE', chest: '52', length: '34' },
];

export const TRACK_PANT_SIZES: SizeRow[] = [
    { label: 'MEDIUM', waist: '30-32', length: '39' },
    { label: 'LARGE', waist: '32-34', length: '40' },
    { label: 'EXTRA LARGE', waist: '34-36', length: '41' },
    { label: '2X LARGE', waist: '36-38', length: '42' },
];

export const SHORT_PANT_SIZES: SizeRow[] = [
    { label: 'MEDIUM', waist: '30-32', length: '20' },
    { label: 'LARGE', waist: '32-34', length: '21' },
    { label: 'EXTRA LARGE', waist: '34-36', length: '22' },
    { label: '2X LARGE', waist: '36-38', length: '23' },
];

export const FIT_GUIDE = [
    { name: 'Slim Fit', text: 'Tapered body and slightly shorter sleeves for a modern, athletic silhouette.' },
    { name: 'Regular Fit', text: 'Traditional straight cut. Comfortable across the chest and shoulders for everyday use.' },
    { name: 'Relaxed Fit', text: 'Extra room throughout the body and sleeves for maximum ease of movement.' },
];

/** T-shirt chart and short size range per audience, for the showroom */
export const TSHIRT_BY_FIT = {
    Men: { rows: TSHIRT_SIZES, range: 'S – 6XL', title: "Men's T-shirt sizes" },
    Women: { rows: WOMEN_SIZES, range: 'S – 6XL', title: "Women's T-shirt sizes" },
    Kids: { rows: KIDS_SIZES, range: '1 – 16 yrs', title: 'Kids T-shirt sizes' },
} as const;
