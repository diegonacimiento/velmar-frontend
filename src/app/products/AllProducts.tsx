import React from "react";
import axios from "axios";
import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const AllProducts = async () => {
  const products = await getProducts();

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
