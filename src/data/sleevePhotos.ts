// Side (sleeve) photos for the Customize studio, keyed by the product or gallery image
// they belong to. Files live in public/design-studio/sleeves/ (1000x1120 webp).
// "left" is the shirt facing left (its left side), "right" is the shirt facing right.
export const SLEEVE_PHOTOS: Record<string, { left: string; right: string }> = {
    '/New folder/ppt 1/peach.png': {
        left: '/design-studio/sleeves/halftone-peach-left.webp',
        right: '/design-studio/sleeves/halftone-peach-right.webp',
    },
};
