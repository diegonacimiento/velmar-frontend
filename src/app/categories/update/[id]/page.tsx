"use client";
import React, { useEffect, useState } from "react";

import { getCategory } from "@/services/categories.service";
import Form from "@/app/categories/components/Form";
import { ICategory } from "@/types/categories";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingCategoryCU from "../../components/LoadingCategoryCU";

const BrandUpdatePage = ({ params: { id } }: { params: { id: string } }) => {
  const [category, setCategory] = useState({} as ICategory);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
        setCategory(await getCategory(id));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    get();
  }, []);

  if (error) return <ErrorMessage />;

  if (loading) return <LoadingCategoryCU />;

  return <Form category={category} />;
};

export default BrandUpdatePage;
