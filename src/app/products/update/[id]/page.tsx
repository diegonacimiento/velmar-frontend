"use client";
import React, { useEffect, useState } from "react";

import { getProduct } from "@/services/products.service";
import { getCategories } from "@/services/categories.service";
import { getBrands } from "@/services/brands.service";
import Form from "../../form/Form";
import { IProduct } from "@/types/products";
import { ICategory } from "@/types/categories";
import { IBrand } from "@/types/brands";
import LoadingUpdateProduct from "../../components/LoadingProductCU";
import ErrorMessage from "@/components/ErrorMessage";

const ProductUpdatePage = ({ params: { id } }: { params: { id: number } }) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);
  const [brands, setBrands] = useState<IBrand[]>([] as IBrand[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
        setProduct(await getProduct(id));
        setCategories(await getCategories());
        setBrands(await getBrands());
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    get();
  }, []);

  if (error) return <ErrorMessage />;

  if (loading) return <LoadingUpdateProduct />;

  return <Form product={product} categories={categories} brands={brands} />;
};

export default ProductUpdatePage;
