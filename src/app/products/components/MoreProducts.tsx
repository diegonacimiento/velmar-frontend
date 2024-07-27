"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

import { LIMIT } from "@/utils/constants";
import Loading from "@/components/Loading";
import { IProduct } from "@/types/products";
import { getProducts } from "@/services/products.service";

interface IMoreProductsProps {
  allProducts: IProduct[];
  setAllProducts: Dispatch<SetStateAction<IProduct[]>>;
  params?: any;
}

const MoreProducts: React.FC<IMoreProductsProps> = ({
  allProducts,
  setAllProducts,
  params,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [noProducts, setNoProducts] = useState<boolean>(
    allProducts.length < LIMIT
  );

  const handleMoreProducts = async () => {
    try {
      setLoading(true);
      const newProducts = await getProducts(params, allProducts.length);
      if (newProducts.length < LIMIT) {
        setNoProducts(true);
      }
      setAllProducts((prev) => [...prev, ...newProducts]);
    } catch (error) {
      console.error(error);
      setError("An error occurred, please try again");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <p className="flex justify-center items-center gap-1 text-red-600">
        {error && (
          <>
            <MdErrorOutline /> {error}
          </>
        )}
      </p>
      <button
        type="button"
        title="More products"
        disabled={noProducts}
        onClick={handleMoreProducts}
        className={
          "block p-4 m-4 self-center w-max text-primary bg-secondary hover:bg-primary hover:text-secondary hover:scale-105 duration-150 " +
          (noProducts && "hidden")
        }
      >
        More products
      </button>
    </>
  );
};

export default MoreProducts;
