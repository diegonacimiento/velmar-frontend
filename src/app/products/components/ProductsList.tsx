"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdErrorOutline } from "react-icons/md";

import { IProduct } from "@/types/products";
import { getProducts } from "@/services/products.service";
import Loading from "@/components/Loading";
import { LIMIT } from "@/utils/constants";

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  const [allProducts, setAllProducts] = useState([...products]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [noProducts, setNoProducts] = useState<boolean>(
    products.length < LIMIT
  );

  const handleMoreProducts = async () => {
    try {
      setLoading(true);
      const newProducts = await getProducts(allProducts.length);
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

  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-8 p-4 w-full flex-wrap">
        {allProducts.map((product) => (
          <Link
            key={product.id}
            href={"/products/" + product.id}
            className="max-w-88 w-full"
          >
            <div className="shadow-lg rounded-lg overflow-hidden text-secondary hover:scale-105 duration-500">
              <Image
                src={product.images[0].urls[0]}
                alt={product.name}
                height={960}
                width={1170}
              />
              <h2 className="p-2 text-lg font-bold">{product.name}</h2>
              <h2 className="p-2 text-sm font-semibold">$ {product.price}</h2>
            </div>
          </Link>
        ))}
      </div>
      {loading ? (
        <div className="p-8">
          <Loading />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ProductsList;
