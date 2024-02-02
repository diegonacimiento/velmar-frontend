import React from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Product } from "@/types/products";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="flex justify-center gap-7 p-4 w-full max-w-2k flex-wrap m-auto">
      {products.map((product) => (
        <Link key={product.id} href={"/products/" + product.id}>
          <ProductCard product={product} isAll={true} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
