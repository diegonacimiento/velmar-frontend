export interface Product {
  id: number;

  name: string;

  description: string;

  price: number;

  images: ImageProduct[];

  brand: any;

  categories: any;

  creationAt: string;

  updatedAt: string;

  deletedAt: string;
}

export interface ImageProduct {
  color: string;
  urls: string[];
}
