"use client";
import React, { useEffect, useState } from "react";

import ProductsList from "../components/ProductsList";
import LoadingProducts from "../components/LoadingProducts";
import { getProduct, getProducts } from "@/services/products.service";
import ProductDetails from "./components/ProductDetails";
import { IProduct } from "@/types/products";
import LoadingPage from "./components/LoadingPage";
import ErrorMessage from "@/components/ErrorMessage";

const ProductPage = ({ params: { id } }: { params: { id: number } }) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingOthers, setLoadingOthers] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await getProduct(id);

        setProduct(response);

        setLoading(false);

        const categoriesIds = response.categories.map(
          (category) => category.id
        );

        const filters =
          categoriesIds.length > 0
            ? { categories: [categoriesIds[categoriesIds.length - 1]] }
            : undefined;

        setProducts(
          (await getProducts(filters, 0, 4)).filter(
            (item) => item.id !== response.id
          )
        );
        setLoadingOthers(false);
      } catch (error) {
        setError(true);
      }
    };
    get();
  }, []);

  if (error) return <ErrorMessage />;

  if (loading) return <LoadingPage />;

  return (
    <div className="p-4 max-w-6xl">
      <ProductDetails product={product} />

      <hr className="my-6" />

      <h3 className="sm:p-4 text-2xl font-medium text-secondary">
        Recommended products
      </h3>

      {loadingOthers ? (
        <LoadingProducts length={6} />
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
};

export default ProductPage;
