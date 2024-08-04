"use client";
import React, { useEffect, useState } from "react";

import Form from "../form/Form";
import { getCategories } from "@/services/categories.service";
import { getBrands } from "@/services/brands.service";
import { ICategory } from "@/types/categories";
import { IBrand } from "@/types/brands";
import LoadingCreateProduct from "../components/LoadingProductCU";
import ErrorMessage from "@/components/ErrorMessage";

const CreateProductPage = () => {
  const [categories, setCategories] = useState([] as ICategory[]);
  const [brands, setBrands] = useState([] as IBrand[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
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

  if (loading) return <LoadingCreateProduct />;

  return <Form brands={brands} categories={categories} />;
};

export default CreateProductPage;
