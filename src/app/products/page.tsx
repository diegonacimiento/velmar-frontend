import React from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Product } from "@/types/products";
import Search from "@/components/Search";

const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="w-full">
      <div className="m-auto p-3 w-11/12 max-w-650"><Search /></div>
      <div className="flex justify-center gap-7 p-4 w-full flex-wrap">
        {products.map((product) => (
          <Link key={product.id} href={"/products/" + product.id}>
            <ProductCard product={product} isAll={true} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
