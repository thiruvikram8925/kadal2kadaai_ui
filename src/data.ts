/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, FeaturedCategory, Testimonial, Fisherman } from './types';

export const FEATURED_CATEGORIES: FeaturedCategory[] = [
  {
    id: 'fish',
    name: 'Fresh Fish',
    tamilName: '',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&auto=format&fit=crop&q=80',
    count: 10
  },
  {
    id: 'prawns',
    name: 'Prawns',
    tamilName: '',
    image: 'https://images.unsplash.com/photo-1559737113-b6a352d7e94b?w=600&auto=format&fit=crop&q=80',
    count: 0
  },
  {
    id: 'crab',
    name: 'Crab',
    tamilName: '',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&auto=format&fit=crop&q=80',
    count: 0
  },
  {
    id: 'lobster',
    name: 'Lobster',
    tamilName: '',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80',
    count: 0
  }
];

export const FISHERMEN: Fisherman[] = [
  {
    name: 'Murugan K.',
    location: 'Rameswaram coastal area',
    partnerSince: '2021',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    avatarColor: 'bg-emerald-600'
  },
  {
    name: 'Anthony Xavier',
    location: 'Tuticorin harbor',
    partnerSince: '2020',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=200&auto=format&fit=crop&q=80',
    avatarColor: 'bg-cyan-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Meenakshi Sundaram',
    city: 'Valasaravakkam',
    quote: 'The fish was very fresh! It had no bad smell and tasted great. We made a nice fish fry.',
    rating: 5,
    avatarColor: 'bg-indigo-600'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    city: 'Adyar',
    quote: 'Very good prawns and crabs. Sourcing is clean and ice packing holds it nicely for hours.',
    rating: 4,
    avatarColor: 'bg-rose-600'
  },
  {
    id: '3',
    name: 'Anjali Sharma',
    city: 'Nungambakkam',
    quote: 'Sankara fish curry was top level. Authentic taste and very neatly cleaned slices.',
    rating: 5,
    avatarColor: 'bg-emerald-600'
  },
  {
    id: '4',
    name: 'Dr. Ramesh Babu',
    city: 'Anna Nagar',
    quote: 'Being a doctor, I always look for chemical-free food. This seafood is absolutely formalin-free.',
    rating: 5,
    avatarColor: 'bg-amber-600'
  },
  {
    id: '5',
    name: 'Priya Dharshini',
    city: 'Velachery',
    quote: 'The prawns were so sweet and soft. Delivery was delayed by 10 minutes but quality was amazing.',
    rating: 4,
    avatarColor: 'bg-teal-600'
  },
  {
    id: '6',
    name: 'Karthik Raja',
    city: 'Mylapore',
    quote: 'No messy kitchen work at all. Raw fish was perfectly descaled and ready to throw in the kadaai.',
    rating: 5,
    avatarColor: 'bg-sky-600'
  },
  {
    id: '7',
    name: 'Chef Edwin',
    city: 'ECR Chennai',
    quote: 'Consistent sizing, fresh red gills, and firm meat texture. Satisfies my high kitchen standards.',
    rating: 5,
    avatarColor: 'bg-violet-600'
  },
  {
    id: '8',
    name: 'Suresh Kumar',
    city: 'Tambaram',
    quote: 'Very nice packing. They use cold insulation boxes so the fish stays super chilled until delivery.',
    rating: 4,
    avatarColor: 'bg-pink-600'
  },
  {
    id: '9',
    name: 'Aruna Devi',
    city: 'T. Nagar',
    quote: 'My kids loved the fish fingers made from the fillet. Extremely soft texture and healthy too.',
    rating: 5,
    avatarColor: 'bg-fuchsia-600'
  },
  {
    id: '10',
    name: 'Ganesh Moorthy',
    city: 'Besant Nagar',
    quote: 'Direct boat-to-home feel. Cleanest seafood in Chennai. Will definitely order every Sunday.',
    rating: 5,
    avatarColor: 'bg-orange-600'
  },
  {
    id: '11',
    name: 'Revathi Sridhar',
    city: 'Chromepet',
    quote: 'Usually online fish has some sour odor, but this was crystal clean. Made a high-quality lunch!',
    rating: 5,
    avatarColor: 'bg-cyan-600'
  },
  {
    id: '12',
    name: 'Vikram Seth',
    city: 'Porur',
    quote: 'Great taste and very secure packing. Price is slightly premium but totally justified by freshness.',
    rating: 4,
    avatarColor: 'bg-lime-600'
  },
  {
    id: '13',
    name: 'Lakshmi Narayanan',
    city: 'Thiruvanmiyur',
    quote: 'The Squid rings were beautifully cleaned and cooked soft. No rubbery taste. Fantastic work!',
    rating: 5,
    avatarColor: 'bg-purple-600'
  },
  {
    id: '14',
    name: 'Saravanan P.',
    city: 'Royapettah',
    quote: 'Best cut of Vanjaram steaks ever. Perfect thickness of slices and zero blood clutter left inside.',
    rating: 5,
    avatarColor: 'bg-blue-600'
  }
];

export const DEFAULT_SPECS = {
  'Storage Temp': '0°C to 4°C (Chilled)',
  'Recommended For': 'Curry, Shallow Fry, Deep Fry',
  'Shelf Life': '48 Hours from catch',
  'No Added Preservatives': '100% Chemical-Free & Preservative-Free',
  'Cleaned %': 'Approx. 15-20% weight loss after cleaning & descaling'
};

export const DEFAULT_CERTS = [
  'FSSAI Certified handling',
  '100% Chemical Clean Free (No Formalin)',
  'Cold Chain Maintained 0-4°C',
  'Direct Sourcing Verified'
];

export const PRODUCTS: Product[] = [
  {
    "id": "asal_koduva_sea_bass_500g_slice_cut_500rs",
    "name": "Koduva Fish",
    "localName": "Seabass",
    "description": "Fresh silver-scaled Seabass sourced from pristine coastal waters. Rich in Omega-3 and perfect for curry or deep fry.",
    "category": "fish",
    "price": 500,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/asal-koduva-sea-bass-500g-slice-cut-500rs.jpg"
    ],
    "rating": 4.9,
    "reviewCount": 94,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "baby_shark_500g_cubes_cut_250rs",
    "name": "Sura Fish (Baby Shark)",
    "localName": "Baby Shark",
    "description": "Highly prized baby shark (milk shark) popular across South India. Extremely tender and essential for classic Sura Puttu.",
    "category": "fish",
    "price": 250,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Curry Cut (Cubes)",
      "Boneless Cubes"
    ],
    "images": [
      "/fish/baby-shark-500g-cubes-cut-250rs.jpg"
    ],
    "rating": 4.9,
    "reviewCount": 35,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "basa_fish_pangasius_500g_slice_cut_200rs",
    "name": "Basa Fish",
    "localName": "Basa",
    "description": "Freshwater Basa fish fillets. White, tender, and mild-flavored meat with zero bones. Perfect for pan frying or baking.",
    "category": "fish",
    "price": 200,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/basa-fish-pangasius-500g-slice-cut-200rs.jpg"
    ],
    "rating": 4.9,
    "reviewCount": 76,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "cutla_fish_500g_slice_cut_160rs",
    "name": "Cutla Fish",
    "localName": "Cutla",
    "description": "Fresh country river/lake Carp. Firm texture, sweet flavor, ideal for authentic village style fish gravies.",
    "category": "fish",
    "price": 160,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/cutla-fish-500g-slice-cut-160rs.jpg"
    ],
    "rating": 4.6,
    "reviewCount": 20,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "jilebi_tilapia_500g_slice_cut_175rs",
    "name": "Tilapia Fish",
    "localName": "Tilapia",
    "description": "Extremely popular fresh Tilapia. Highly economical, mild-flavored, and beautifully versatile for pan frying.",
    "category": "fish",
    "price": 175,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/jilebi-tilapia-500g-slice-cut-175rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 51,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "kadal_viral_cobia_fish_500g_slice_cut_cubes_410rs",
    "name": "Kadal Viral (Cobia)",
    "localName": "Cobia",
    "description": "Premium ocean-caught Cobia fish. Meaty steak cuts with a single center bone. Tastes identical to Seer fish.",
    "category": "fish",
    "price": 410,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/kadal-viral-cobia-fish-500g-slice-cut-cubes-410rs.jpg"
    ],
    "rating": 4.8,
    "reviewCount": 95,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "kadama_squid_500g_ring_cut_350rs",
    "name": "Squid (Kanava)",
    "localName": "Squid",
    "description": "Plump ocean squid with white firm meat. Meticulously cleaned, hollowed, and ready for crispy calamari rings.",
    "category": "fish",
    "price": 350,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/fish/kadama-squid-500g-ring-cut-350rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 71,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "kalavan_grouper_fish_500g_slice_boneless_fillets_500rs",
    "name": "Kalavan Fish",
    "localName": "Grouper",
    "description": "Fleshy reef rock cod / grouper. Offers a thick, succulent white-meat texture with extremely low bone count.",
    "category": "fish",
    "price": 500,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/kalavan-grouper-fish-500g-slice-boneless-fillets-500rs.jpg"
    ],
    "rating": 4.9,
    "reviewCount": 40,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "kannadi_parai_diamond_travely_500g_slice_cubes_with_head_515rs",
    "name": "Trevally (Parai)",
    "localName": "Trevally",
    "description": "High quality firm silver trevally. Excellent structural body that retains spice-pastes beautifully for frying.",
    "category": "fish",
    "price": 515,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/kannadi-parai-diamond-travely-500g-slice-cubes-with-head-515rs.jpg"
    ],
    "rating": 4.6,
    "reviewCount": 31,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "karapodi_silver_belly_fish_500g_slice_cut_300rs",
    "name": "Silver Belly (Karapodi)",
    "localName": "Silver Belly",
    "description": "Traditional small-sized harbor Silver Belly fish. Loved for cooking down slowly with bone-softness in country style tangy stews.",
    "category": "fish",
    "price": 300,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/karapodi-silver-belly-fish-500g-slice-cut-300rs.jpg"
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "karimeen_pearl_spot_500g_whole_fish_head_on_slice_cut_350rs",
    "name": "Karimeen (Pearl Spot)",
    "localName": "Pearl Spot",
    "description": "Exquisite freshwater Pearl Spot (Karimeen). Sourced from backwaters. Perfect for traditional Kerala style fish fry in banana leaves.",
    "category": "fish",
    "price": 350,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/karimeen-pearl-spot-500g-whole-fish-head-on-slice-cut-350rs.jpg"
    ],
    "rating": 4.8,
    "reviewCount": 86,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "manja_parai_yellow_trevally_500g_slice_cut_450rs",
    "name": "Trevally (Parai)",
    "localName": "Trevally",
    "description": "High quality firm silver trevally. Excellent structural body that retains spice-pastes beautifully for frying.",
    "category": "fish",
    "price": 450,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/manja-parai-yellow-trevally-500g-slice-cut-450rs.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 51,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "matthi_sardine_fish_500g_head_on_whole_fish_250rs",
    "name": "Matthi Fish",
    "localName": "Sardine",
    "description": "Fresh country estuarine oil sardines. Supercharged with Omega-3 and vitamins. Best cooked in tangy claypot gravy.",
    "category": "fish",
    "price": 250,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/fish/matthi-sardine-fish-500g-head-on-whole-fish-250rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 41,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "nakkumeen_halibut_fish_500g_slice_cut_400rs",
    "name": "Halibut (Nakkumeen)",
    "localName": "Halibut",
    "description": "Flatfish Halibut caught off reef shores. Extremely soft flesh with no small bones. Excellent choice for children.",
    "category": "fish",
    "price": 400,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/nakkumeen-halibut-fish-500g-slice-cut-400rs.jpg"
    ],
    "rating": 5,
    "reviewCount": 20,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "nethili_anchovy_500g_headless_275rs",
    "name": "Nethili Anchovy",
    "localName": "Anchovy",
    "description": "Tiny, fresh headless silver anchovies. Sweet profile, crisp fry specialist. Precleaned and ready to cook.",
    "category": "fish",
    "price": 275,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/fish/nethili-anchovy-500g-headless-275rs.jpg"
    ],
    "rating": 4.6,
    "reviewCount": 24,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "pal_sura_milk_shark_500g_cubes_cut_550rs",
    "name": "Sura Fish (Milk Shark)",
    "localName": "Milk Shark",
    "description": "Highly prized baby shark (milk shark) popular across South India. Extremely tender and essential for classic Sura Puttu.",
    "category": "fish",
    "price": 550,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Curry Cut (Cubes)",
      "Boneless Cubes"
    ],
    "images": [
      "/fish/pal-sura-milk-shark-500g-cubes-cut-550rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 83,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "parai_trevally_fish_500g_slice_cut_450rs",
    "name": "Trevally (Parai)",
    "localName": "Trevally",
    "description": "High quality firm silver trevally. Excellent structural body that retains spice-pastes beautifully for frying.",
    "category": "fish",
    "price": 450,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/parai-trevally-fish-500g-slice-cut-450rs.jpg"
    ],
    "rating": 4.6,
    "reviewCount": 13,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "parla_mahi_mahi_fish_500g_boneless_fillets_cubes_500rs",
    "name": "Mahi Mahi (Parla)",
    "localName": "Mahi Mahi",
    "description": "Ocean Dolphin-fish (Mahi Mahi) fillets. Firm, lean meat, perfect for continental bakes or tandoori grills.",
    "category": "fish",
    "price": 500,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Curry Cut (Cubes)",
      "Boneless Cubes"
    ],
    "images": [
      "/fish/parla-mahi-mahi-fish-500g-boneless-fillets-cubes-500rs.jpg"
    ],
    "rating": 4.9,
    "reviewCount": 92,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "red_snapper_fish_500g_slice_cubes_cut_400rs",
    "name": "Red Snapper (Sankara)",
    "localName": "Red Snapper",
    "description": "Prized deep-sea Red Snapper (Sankara). Rosy pink skin, succulent white meat. Perfect for traditional fish curries.",
    "category": "fish",
    "price": 400,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/red-snapper-fish-500g-slice-cubes-cut-400rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 39,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "sankara_fish_1_2kg_head_on_slice_cut_300rs",
    "name": "Red Snapper (Sankara)",
    "localName": "Red Snapper",
    "description": "Prized deep-sea Red Snapper (Sankara). Rosy pink skin, succulent white meat. Perfect for traditional fish curries.",
    "category": "fish",
    "price": 300,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/sankara-fish-1-2kg-head-on-slice-cut-300rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 23,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "seer_fish_vanjiram_head_only_450rs",
    "name": "Vanjiram Seer Fish",
    "localName": "Seer Fish",
    "description": "Ultra-premium Seer Fish (Vanjiram) caught off the coast of Rameswaram. Firm texture, rich taste, and sliced to perfection.",
    "category": "fish",
    "price": 450,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/fish/seer-fish-vanjiram-head-only-450rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 50,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "sheela_barracuda_500g_slice_cut_400rs",
    "name": "Sheela Barracuda",
    "localName": "Sheela Barracuda",
    "description": "Freshly caught coastal seafood premium quality.",
    "category": "fish",
    "price": 400,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/sheela-barracuda-500g-slice-cut-400rs.jpg"
    ],
    "rating": 4.6,
    "reviewCount": 80,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "soorai_tuna_fish_500g_cubes_cut_500rs",
    "name": "Soorai Tuna Fish",
    "localName": "Soorai Tuna Fish",
    "description": "Freshly caught coastal seafood premium quality.",
    "category": "fish",
    "price": 500,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Curry Cut (Cubes)",
      "Boneless Cubes"
    ],
    "images": [
      "/fish/soorai-tuna-fish-500g-cubes-cut-500rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 71,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "thengai_parai_trevally_fish_500g_slice_cut_450rs",
    "name": "Trevally (Parai)",
    "localName": "Trevally",
    "description": "High quality firm silver trevally. Excellent structural body that retains spice-pastes beautifully for frying.",
    "category": "fish",
    "price": 450,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/thengai-parai-trevally-fish-500g-slice-cut-450rs.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 42,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "Vanjiram_Seer_Fish___500g___Slice_Cut_Cubes____1300",
    "name": "Vanjiram Seer Fish",
    "localName": "Seer Fish",
    "description": "Ultra-premium Seer Fish (Vanjiram) caught off the coast of Rameswaram. Firm texture, rich taste, and sliced to perfection.",
    "category": "fish",
    "price": 1300,
    "unit": "500g",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/Vanjiram Seer Fish – 500g – Slice Cut Cubes – ₹1300.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 51,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "vanjiram_seer_fish_500g_slice_cut_cubes_1300rs",
    "name": "Vanjiram Seer Fish",
    "localName": "Seer Fish",
    "description": "Ultra-premium Seer Fish (Vanjiram) caught off the coast of Rameswaram. Firm texture, rich taste, and sliced to perfection.",
    "category": "fish",
    "price": 1300,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/vanjiram-seer-fish-500g-slice-cut-cubes-1300rs.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 38,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "vavval_black_pomfret_fish_500g_slice_cut_500rs",
    "name": "Pomfret (Vavval)",
    "localName": "Pomfret",
    "description": "Premium flatfish Pomfret. Delicate white meat with a mild, buttery taste. Essential item for fish fry lovers.",
    "category": "fish",
    "price": 500,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/vavval-black-pomfret-fish-500g-slice-cut-500rs.jpg"
    ],
    "rating": 4.4,
    "reviewCount": 88,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "vellai_vavval_chinese_pomfret_500g_800rs",
    "name": "Pomfret (Vavval)",
    "localName": "Pomfret",
    "description": "Premium flatfish Pomfret. Delicate white meat with a mild, buttery taste. Essential item for fish fry lovers.",
    "category": "fish",
    "price": 800,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/fish/vellai-vavval-chinese-pomfret-500g-800rs.jpg"
    ],
    "rating": 4.6,
    "reviewCount": 86,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "villai_meen_emperor_fish_500g_slice_cut_450rs",
    "name": "Emperor Fish (Villai)",
    "localName": "Emperor Fish",
    "description": "Ocean Emperor fish caught in rocky shore lines. Meaty white cuts, excellent structure for frying.",
    "category": "fish",
    "price": 450,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/villai-meen-emperor-fish-500g-slice-cut-450rs.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 35,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "white_snapper_korrukkai_fish_500g_slice_cut_400rs",
    "name": "White Snapper",
    "localName": "White Snapper",
    "description": "Delicious coastal White Snapper. Lean, sweet meat, ideal for pan-searing and fish head curries.",
    "category": "fish",
    "price": 400,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/white-snapper-korrukkai-fish-500g-slice-cut-400rs.jpg"
    ],
    "rating": 5,
    "reviewCount": 71,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "yeri_vavval_roopchand_500g_slice_cut_175rs",
    "name": "Pomfret (Vavval)",
    "localName": "Pomfret",
    "description": "Premium flatfish Pomfret. Delicate white meat with a mild, buttery taste. Essential item for fish fry lovers.",
    "category": "fish",
    "price": 175,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Fish Steaks",
      "Pristine Fillets"
    ],
    "images": [
      "/fish/yeri-vavval-roopchand-500g-slice-cut-175rs.jpg"
    ],
    "rating": 5,
    "reviewCount": 40,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "blue_crab_big_500g_550rs",
    "name": "Premium Blue Crab",
    "localName": "Blue Crab",
    "description": "Succulent and premium blue crabs with a high-yield meat density. Prized for their sweet flavor.",
    "category": "crab",
    "price": 550,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Live",
      "Cleaned Shell-on"
    ],
    "images": [
      "/crab/blue-crab-big-500g-550rs.jpg"
    ],
    "rating": 4.4,
    "reviewCount": 90,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "crab_three_spot_500g_300rs",
    "name": "Three-Spot Crab",
    "localName": "Three-Spot Crab",
    "description": "Fresh three-spot sea crabs caught daily. Sweet meat profile, ideal for traditional spicy crab soups.",
    "category": "crab",
    "price": 300,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Live",
      "Cleaned Shell-on"
    ],
    "images": [
      "/crab/crab-three-spot-500g-300rs.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 87,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "mud_crab_green_live_crab_1kg_2000rs",
    "name": "Live Green Mud Crab",
    "localName": "Green Mud Crab",
    "description": "Extremely sweet, fleshy green mud crabs sourced live from estuary mangroves. Perfect for authentic crab masala.",
    "category": "crab",
    "price": 2000,
    "unit": "1kg",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "1kg": 1,
      "2kg": 1.95
    },
    "processingOptions": [
      "Whole Live",
      "Cleaned Shell-on"
    ],
    "images": [
      "/crab/mud-crab-green-live-crab-1kg-2000rs.jpg"
    ],
    "rating": 5,
    "reviewCount": 28,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "fresh_water_prawns_500g_60_80_counts_350rs",
    "name": "Freshwater Prawns",
    "localName": "Freshwater Prawns",
    "description": "Sweet freshwater prawns with soft, juicy tails. Sourced daily from local river catchments.",
    "category": "prawns",
    "price": 350,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": true,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/prawn/fresh-water-prawns-500g-60-80-counts-350rs.jpg"
    ],
    "rating": 4.5,
    "reviewCount": 82,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "lobsters_1kg_2000rs",
    "name": "Jumbo Sea Lobster",
    "localName": "Spiny Lobster",
    "description": "Premium whole spiny lobster. Prized for its sweet tail meat. Meticulously packed live on ice.",
    "category": "lobster",
    "price": 2000,
    "unit": "1kg",
    "isFreshToday": false,
    "isBestSeller": false,
    "availableWeights": [
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "1kg": 1,
      "2kg": 1.95
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/prawn/lobsters-1kg-2000rs.jpg"
    ],
    "rating": 4.4,
    "reviewCount": 82,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "sea_white_prawns_10_15_counts_500g_850rs",
    "name": "Sea White Prawns",
    "localName": "Sea White Prawns",
    "description": "Fresh caught sea white prawns. Extremely sweet, tender, and ideal for standard home prawn curries.",
    "category": "prawns",
    "price": 850,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/prawn/sea-white-prawns-10-15-counts-500g-850rs.jpg"
    ],
    "rating": 4.7,
    "reviewCount": 21,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "sea_white_prawns_500g_60_80_counts_300rs",
    "name": "Sea White Prawns",
    "localName": "Sea White Prawns",
    "description": "Fresh caught sea white prawns. Extremely sweet, tender, and ideal for standard home prawn curries.",
    "category": "prawns",
    "price": 300,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/prawn/sea-white-prawns-500g-60-80-counts-300rs.jpg"
    ],
    "rating": 4.8,
    "reviewCount": 53,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "tiger_prawns_10_15_counts_500g_850rs",
    "name": "Jumbo Tiger Prawns",
    "localName": "Tiger Prawns Large",
    "description": "Spectacular, extra-large tiger prawns with prominent stripes. Crunchy texture, sweet juicy meat.",
    "category": "prawns",
    "price": 850,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/prawn/tiger-prawns-10-15-counts-500g-850rs.jpg"
    ],
    "rating": 4.4,
    "reviewCount": 57,
    "catchLocation": "Rameswaram coastal area",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[1],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  },
  {
    "id": "tiger_prawns_500g_30_counts_600rs",
    "name": "Jumbo Tiger Prawns",
    "localName": "Tiger Prawns Large",
    "description": "Spectacular, extra-large tiger prawns with prominent stripes. Crunchy texture, sweet juicy meat.",
    "category": "prawns",
    "price": 600,
    "unit": "500g",
    "isFreshToday": true,
    "isBestSeller": false,
    "availableWeights": [
      "500g",
      "1kg",
      "2kg"
    ],
    "weightMultipliers": {
      "500g": 1,
      "1kg": 1.9,
      "2kg": 3.7
    },
    "processingOptions": [
      "Whole Cleaned",
      "Curry Cut"
    ],
    "images": [
      "/prawn/tiger-prawns-500g-30-counts-600rs.jpg"
    ],
    "rating": 4.8,
    "reviewCount": 33,
    "catchLocation": "Tuticorin Harbor",
    "catchDate": "Today early dawn",
    "availability": "In Stock",
    "fisherman": FISHERMEN[0],
    "certifications": DEFAULT_CERTS,
    "specifications": DEFAULT_SPECS
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: 'Direct From Fishermen',
    desc: 'No middleman markups. Sourced directly on coastlines supporting local fishermen families with fair wages.'
  },
  {
    id: 2,
    title: 'Fresh Every Morning',
    desc: 'Brought directly from harbors to kitchens within hours, chilled to perfection. Absolutely never frozen.'
  },
  {
    id: 3,
    title: 'Quality Inspected',
    desc: 'FSSAI cert-standards. Meticulous check gates ensuring chemical-free, formaldehyde-free safe seafood.'
  }
];

export const MARKETPLACE_MODULES = [
  {
    id: 'fishing',
    title: 'Traditional Coastal Sourcing',
    subtitle: 'Harvesting Authenticity',
    heroImage: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800&auto=format&fit=crop&q=80',
    desc: 'We support over 500+ local fishermen. Sourced sustainably using traditional catamarans and small sea-boats ensuring zero marine network harm.',
    benefits: [
      'Empowers traditional coastal fishing networks directly',
      'Harvested early dawn across South Indian tide corridors (Pamban, Tuticorin)',
      '100% sustainable shoreline gill nets or hand-line casting'
    ],
    cta: 'Explore Fishermen Partners'
  },
  {
    id: 'trade',
    title: 'Fair Sea Trade Platform',
    subtitle: 'Transparent Pricing Mechanics',
    heroImage: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&auto=format&fit=crop&q=80',
    desc: 'A seamless bridge offering coastal daily catch catalogs directly to urban households. Direct trade bypasses heavy fish markets and storage centers.',
    benefits: [
      'Guarantees fair, premium margins to traditional catch owners',
      'True day-to-day market rates displayed with zero opaque padding',
      'Daily updated fish rosters based on early harbor auctions'
    ],
    cta: 'Explore Daily Trade Tariffs'
  },
  {
    id: 'processing',
    title: 'Hygienic Custom Processing',
    subtitle: 'Crafted Culinary Preparation',
    heroImage: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=80',
    desc: 'Your seafood prepared exactly how you like it. Done inside sterile dust-free environments by highly qualified, mask-and-gloved seafood butchers.',
    benefits: [
      'Strictly descaled, gutted, and deep washed in purified saline',
      'Expertly sliced into pristine Steaks, curry cuts or bone-free fillets',
      'Zero freshwater hydration during cutting to preserve native ocean ocean-salts'
    ],
    cta: 'Explore Processing Methods'
  },
  {
    id: 'inspection',
    title: 'Dual Gate Quality Auditing',
    subtitle: 'Zero Chemical Commitment',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
    desc: 'Rigorous tests are placed behind every tray. We run random audits for formaldehyde, heavy metal trace values, and bacterial index checks daily.',
    benefits: [
      '100% formalin-free & chemical-free assurance certificates',
      'Thermal monitoring keeping trays strictly between 0-4 degrees Celsius',
      'Sealed in high barrier double laminate sterile thermal sheets'
    ],
    cta: 'Explore Safety Audit Logs'
  }
];
