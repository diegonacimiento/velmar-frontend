"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import MoreProducts from "./MoreProducts";
import ProductsList from "./ProductsList";
import useVelmarContext from "@/hooks/useVelmarContext";
import { IProduct } from "@/types/products";
import Filters from "./Filters";
import { MdErrorOutline } from "react-icons/md";

interface IProductsPage {
  products: { value: IProduct[]; error: string };
}

const ProductsPage: React.FC<IProductsPage> = ({ products }) => {
  const { roleUser } = useVelmarContext();

  const router = useRouter();

  const [allProducts, setAllProducts] = useState([...products.value]);

  const goCreateProduct = () => {
    router.push("/products/create");
  };

  return (
    <div className="flex flex-col p-4">
      <Filters />

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

      <p className="flex gap-1 justify-center items-center text-red-600 font-semibold">
        {products.error && (
          <>
            <MdErrorOutline /> {products.error}
          </>
        )}
      </p>

      {/* Button more products */}
      <MoreProducts allProducts={allProducts} setAllProducts={setAllProducts} />
    </div>
  );
};

export default ProductsPage;
