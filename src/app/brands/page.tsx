"use client";
import React, { useEffect, useState } from "react";

import { getBrands } from "@/services/brands.service";
import BrandsList from "./components/BrandsList";
import { IBrand } from "@/types/brands";
import LoadingBrands from "./components/LoadingBrands";
import ErrorMessage from "@/components/ErrorMessage";

const BrandsPage = () => {
  const [brands, setBrands] = useState([] as IBrand[]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      try {
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

  if (loading) return <LoadingBrands />;

  return <BrandsList brands={brands} />;
};

export default BrandsPage;
