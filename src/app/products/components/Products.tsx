"use client";
import React, { useEffect, useState } from "react";

import { getProducts } from "@/services/products.service";
import { IProduct } from "@/types/products";
import ProductsPage from "./ProductsPage";
import LoadingPage from "./LoadingPage";
import Search from "./Search";

const Products = ({ params }: { params: any }) => {
  const [products, setProducts] = useState<{
    value: IProduct[];
    error: string;
  }>({ value: [], error: "" });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await getProducts(params);
        setProducts({ value: [...response], error: "" });
        if (response.length === 0 && Object.values(params).length > 0) {
          setProducts((prev) => ({
            ...prev,
            error: "There are no products for your search",
          }));
        }
      } catch (error) {
        setProducts({ value: [], error: "There was an error, try again" });
      } finally {
        setLoading(false);
      }
    };
    get();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center w-full">
        <LoadingPage />
      </div>
    );

  return (
    <>
      <Search name={params.name} />
      <ProductsPage products={products} params={params} />;
    </>
  );
};

export default Products;
