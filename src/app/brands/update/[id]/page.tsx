"use client";
import React, { useEffect, useState } from "react";

import Form from "../../components/Form";
import { getBrand } from "@/services/brands.service";
import { IBrand } from "@/types/brands";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingBrandCU from "../../components/LoadingBrandCU";

const UpdateBrandPage = ({ params: { id } }: { params: { id: string } }) => {
  const [brand, setBrand] = useState({} as IBrand);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
        setBrand(await getBrand(id));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    get();
  }, []);

  if (error) return <ErrorMessage />;

  if (loading) return <LoadingBrandCU />;

  return <Form brand={brand} />;
};

export default UpdateBrandPage;
