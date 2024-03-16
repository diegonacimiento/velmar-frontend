import React from "react";
import axios from "axios";
import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";

const getProducts = async (
  limit?: number,
  category?: string
): Promise<Product[]> => {

  if (category) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
    );
    return response.data;
  }

  const response = await axios.get(
    `https://fakestoreapi.com/products?limit=${limit}`
  );
  return response.data;
};

interface AllProductsProps {
  limit?: number;
  category?: string;
  currentProductId?: number; 
}

const AllProducts: React.FC<AllProductsProps> = async ({ limit, category, currentProductId }) => {
  const response = await getProducts(limit, category);

  const products = response.filter((product) => product.id !== currentProductId);

  return (
    <div className="flex justify-center gap-7 p-2 sm:p-4 w-full flex-wrap">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="max-w-88 w-full"
        >
          <ProductCard product={product} isAll={true} />
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;
