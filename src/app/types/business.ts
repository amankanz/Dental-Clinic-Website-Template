// export interface Business {
//   slug: string;
//   name: string;
//   about?: string;
//   phone?: string;
//   whatsapp?: string;
//   email?: string;
//   address?: string;
//   services?: string[];
//   reviews?: {
//     author: string;
//     rating: number;
//     text: string;
//   }[];
// }

// src/app/types/business.ts
export interface Business {
  id: string;
  slug: string;
  name: string;
  category: string;
  city: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  rating?: number;
  review_count?: number;
  preview?: string;
  reviews?: {
    author: string;
    rating: number;
    text: string;
  }[];
  location?: {
    maps_url?: string;
  };
}

