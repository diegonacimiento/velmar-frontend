"use client";
import React, { useEffect, useState } from "react";

import { getCategories } from "@/services/categories.service";
import CategoriesList from "./components/CategoriesList";
import { ICategory } from "@/types/categories";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingCategories from "./components/LoadingCategories";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([] as ICategory[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
        setCategories(await getCategories());
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    get();
  }, []);

  if (error) return <ErrorMessage />;

  if (loading) return <LoadingCategories />;

  return <CategoriesList categories={categories} />;
};

export default CategoriesPage;
