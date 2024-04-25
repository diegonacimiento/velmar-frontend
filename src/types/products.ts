export interface Product {
  id: number;

  name: string;

  description: string;

  price: number;

  images: ImageProduct[];

  brand: string;

  categories: { id: number; name: string; image: string }[];

  creationAt: string;

  updatedAt: string;

  deletedAt: string;
}

export interface ImageProduct {
  color: string;
  urls: string[];
}
