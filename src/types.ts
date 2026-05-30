/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Fisherman {
  name: string;
  location: string;
  partnerSince: string;
  rating: number;
  image: string;
  avatarColor: string;
}

export interface Product {
  id: string;
  name: string;
  localName: string;
  description: string;
  category: string;
  price: number; // base price for the default weight (usually 500g or 1kg)
  unit: string; // e.g., "500g", "1kg"
  isFreshToday: boolean;
  isBestSeller: boolean;
  availableWeights: string[]; // ["250g", "500g", "1kg", "2kg"]
  weightMultipliers: { [weight: string]: number }; // weight value multiplier, e.g. "250g": 0.5, "500g": 1.0, "1kg": 1.9
  processingOptions: string[]; // ["Whole", "Cleaned", "Fillet", "Steaks"]
  images: string[];
  rating: number;
  reviewCount: number;
  catchLocation: string;
  catchDate: string;
  availability: 'In Stock' | 'Limited' | 'Out of Stock';
  fisherman: Fisherman;
  certifications: string[];
  specifications: { [key: string]: string };
}

export interface CartItem {
  id: string; // unique combination of product.id + selectedWeight + selectedProcessing
  product: Product;
  quantity: number;
  selectedWeight: string;
  selectedProcessing: string;
  pricePerUnit: number; // price at selected weight
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
  image?: string;
  avatarColor: string;
}

export interface FeaturedCategory {
  id: string;
  name: string;
  tamilName: string;
  image: string;
  count: number;
}
