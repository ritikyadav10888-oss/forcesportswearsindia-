export interface LocationData {
    id: string;
    name: string;
    type: 'city' | 'country' | 'state';
    region: 'India' | 'International';
}

export const TARGET_LOCATIONS: LocationData[] = [
    // Major Indian Cities
    { id: 'mumbai', name: 'Mumbai', type: 'city', region: 'India' },
    { id: 'delhi', name: 'Delhi', type: 'city', region: 'India' },
    { id: 'bangalore', name: 'Bangalore', type: 'city', region: 'India' },
    { id: 'pune', name: 'Pune', type: 'city', region: 'India' },
    { id: 'hyderabad', name: 'Hyderabad', type: 'city', region: 'India' },
    { id: 'chennai', name: 'Chennai', type: 'city', region: 'India' },
    { id: 'ahmedabad', name: 'Ahmedabad', type: 'city', region: 'India' },
    { id: 'kolkata', name: 'Kolkata', type: 'city', region: 'India' },
    { id: 'surat', name: 'Surat', type: 'city', region: 'India' },
    { id: 'jaipur', name: 'Jaipur', type: 'city', region: 'India' },
    { id: 'lucknow', name: 'Lucknow', type: 'city', region: 'India' },
    { id: 'kanpur', name: 'Kanpur', type: 'city', region: 'India' },
    { id: 'nagpur', name: 'Nagpur', type: 'city', region: 'India' },
    { id: 'indore', name: 'Indore', type: 'city', region: 'India' },
    { id: 'bhopal', name: 'Bhopal', type: 'city', region: 'India' },
    { id: 'patna', name: 'Patna', type: 'city', region: 'India' },
    { id: 'vadodara', name: 'Vadodara', type: 'city', region: 'India' },
    { id: 'ludhiana', name: 'Ludhiana', type: 'city', region: 'India' },

    // Indian States
    { id: 'maharashtra', name: 'Maharashtra', type: 'state', region: 'India' },
    { id: 'gujarat', name: 'Gujarat', type: 'state', region: 'India' },
    { id: 'karnataka', name: 'Karnataka', type: 'state', region: 'India' },
    { id: 'tamil-nadu', name: 'Tamil Nadu', type: 'state', region: 'India' },
    { id: 'kerala', name: 'Kerala', type: 'state', region: 'India' },
    { id: 'rajasthan', name: 'Rajasthan', type: 'state', region: 'India' },
    
    // International Countries
    { id: 'usa', name: 'USA', type: 'country', region: 'International' },
    { id: 'uk', name: 'UK', type: 'country', region: 'International' },
    { id: 'uae', name: 'UAE', type: 'country', region: 'International' },
    { id: 'australia', name: 'Australia', type: 'country', region: 'International' },
    { id: 'canada', name: 'Canada', type: 'country', region: 'International' },
    { id: 'germany', name: 'Germany', type: 'country', region: 'International' },
    { id: 'singapore', name: 'Singapore', type: 'country', region: 'International' },
    { id: 'sri-lanka', name: 'Sri Lanka', type: 'country', region: 'International' },
    { id: 'south-africa', name: 'South Africa', type: 'country', region: 'International' },
    { id: 'saudi-arabia', name: 'Saudi Arabia', type: 'country', region: 'International' },
    { id: 'qatar', name: 'Qatar', type: 'country', region: 'International' },
    { id: 'oman', name: 'Oman', type: 'country', region: 'International' },
    { id: 'kuwait', name: 'Kuwait', type: 'country', region: 'International' },
    { id: 'bahrain', name: 'Bahrain', type: 'country', region: 'International' },
    
    // High-Demand Custom T-Shirt Markets
    { id: 'france', name: 'France', type: 'country', region: 'International' },
    { id: 'italy', name: 'Italy', type: 'country', region: 'International' },
    { id: 'spain', name: 'Spain', type: 'country', region: 'International' },
    { id: 'netherlands', name: 'Netherlands', type: 'country', region: 'International' },
    { id: 'sweden', name: 'Sweden', type: 'country', region: 'International' },
    { id: 'new-zealand', name: 'New Zealand', type: 'country', region: 'International' },
    { id: 'japan', name: 'Japan', type: 'country', region: 'International' },
    { id: 'mexico', name: 'Mexico', type: 'country', region: 'International' },
    { id: 'brazil', name: 'Brazil', type: 'country', region: 'International' },

    // Major International Cities
    { id: 'dubai', name: 'Dubai', type: 'city', region: 'International' },
    { id: 'london', name: 'London', type: 'city', region: 'International' },
    { id: 'new-york', name: 'New York', type: 'city', region: 'International' },
    { id: 'sydney', name: 'Sydney', type: 'city', region: 'International' },
    { id: 'melbourne', name: 'Melbourne', type: 'city', region: 'International' },
    { id: 'toronto', name: 'Toronto', type: 'city', region: 'International' },
    { id: 'riyadh', name: 'Riyadh', type: 'city', region: 'International' },
    { id: 'doha', name: 'Doha', type: 'city', region: 'International' },
    { id: 'muscat', name: 'Muscat', type: 'city', region: 'International' }
];

export function getLocationById(id: string): LocationData | undefined {
    return TARGET_LOCATIONS.find(loc => loc.id === id);
}
