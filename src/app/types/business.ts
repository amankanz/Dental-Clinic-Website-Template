export interface Business {
  slug: string;
  name: string;
  about?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  services?: string[];
  reviews?: {
    author: string;
    rating: number;
    text: string;
  }[];
}
