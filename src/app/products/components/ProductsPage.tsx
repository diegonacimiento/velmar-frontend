"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { MdErrorOutline } from "react-icons/md";

import MoreProducts from "./MoreProducts";
import ProductsList from "./ProductsList";
import useVelmarContext from "@/hooks/useVelmarContext";
import { IProduct } from "@/types/products";
import Filters from "./Filters";

interface IProductsPage {
  products: { value: IProduct[]; error: string };
}

const ProductsPage: React.FC<IProductsPage> = ({ products }) => {
  const { roleUser } = useVelmarContext();

  const router = useRouter();

  const [allProducts, setAllProducts] = useState([...products.value]);

  const handleSelectedSort = (event: ChangeEvent<HTMLSelectElement>) => {
    handleSortBy(event.target.value);
  };

  const handleSortBy = (order: string) => {
    if (order) {
      setAllProducts(
        allProducts.slice().sort((a, b) => {
          if (order === "higher") {
            return Number(b.price) - Number(a.price);
          } else {
            return Number(a.price) - Number(b.price);
          }
        })
      );
    } else {
      setAllProducts([...products.value]);
    }
  };

  const goCreateProduct = () => {
    router.push("/products/create");
  };

  return (
    <div className="flex flex-col p-4">
      <Filters handleSelectedSort={handleSelectedSort} />

      {roleUser === "salesperson" && (
        <button
          type="button"
          title="Create product"
          onClick={goCreateProduct}
          className="block p-4 m-4 self-center w-max rounded-md text-body bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 "
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
