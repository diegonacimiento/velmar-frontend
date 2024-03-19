import Search from "@/app/products/components/Search";
import { getProducts } from "@/utils/functions-share";
import React, { Suspense } from "react";
import LoadingProducts from "../../components/LoadingProducts";
import ProductsList from "../../components/ProductsList";
import Paginator from "../../components/Paginator";
import Products from "../../components/Products";

const page = async ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  return (
    <Products
      params={{ currentPage: 1, category: categoryId }}
      url={`/products/category/${categoryId}/page`}
    />
  );
};

export default page;
