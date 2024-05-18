"use client";
import useVelmarContext from "@/hooks/useVelmarContext";
import { IProduct } from "@/types/products";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MoreProducts from "./MoreProducts";
import ProductsList from "./ProductsList";

interface IProductsPage {
  products: IProduct[];
}

const ProductsPage: React.FC<IProductsPage> = ({ products }) => {
  const { roleUser } = useVelmarContext();

  const router = useRouter();

  const [allProducts, setAllProducts] = useState([...products]);

  const goCreateProduct = () => {
    router.push("/products/create");
  };

  return (
    <div className="flex flex-col p-4">
      {roleUser === "salesperson" && (
        <button
          type="button"
          title="Create product"
          onClick={goCreateProduct}
          className="block p-4 m-4 self-center w-max text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
        >
          Create product
        </button>
      )}

      <ProductsList products={allProducts} />

      {/* Button more products */}
      <MoreProducts allProducts={allProducts} setAllProducts={setAllProducts} />
    </div>
  );
};

export default ProductsPage;
