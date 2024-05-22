"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineError } from "react-icons/md";

import Loading from "@/components/Loading";
import { getBrands } from "@/services/brands.service";
import { getCategories } from "@/services/categories.service";
import { IBrand } from "@/types/brands";
import { ICategory } from "@/types/categories";
import { parseParamsToURL } from "@/utils/functions-share";

const Filters = () => {
  // Hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useRef<HTMLFormElement>(null);

  // Params
  const name = searchParams.get("name");
  const brandsParam = searchParams.getAll("brands");
  const categoriesParam = searchParams.getAll("categories");
  const minPriceParam = searchParams.get("minPrice");
  const maxPriceParam = searchParams.get("maxPrice");

  // States
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorPriceRange, setErrorPriceRange] = useState<string>("");

  // useEffects
  useEffect(() => {
    const get = async () => {
      const brands = await getBrands();
      const categories = await getCategories();
      setBrands(brands);
      setCategories(categories);
      setLoading(false);
    };
    get();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current) {
      const formFields = new FormData(form.current);

      const brands = formFields.getAll("brands");
      const categories = formFields.getAll("categories");
      const minPrice = formFields.get("min-price");
      const maxPrice = formFields.get("max-price");

      if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
        setErrorPriceRange("The minimum price must be lower");
        return;
      }

      const url = parseParamsToURL({
        name,
        brands,
        categories,
        minPrice,
        maxPrice,
      });

      router.push(`/products/${url}`);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="grid place-content-center"
    >
      <div className="p-4">
        <h3>Brands</h3>
        {brands.map((brand, index) => (
          <label key={brand.id}>
            <input
              name="brands"
              type="checkbox"
              value={brand.id}
              defaultChecked={brandsParam.includes(brand.id.toString())}
            />{" "}
            {brand.name}
          </label>
        ))}
      </div>

      <div className="p-4">
        <h3>Categories</h3>
        {categories.map((category) => (
          <label key={category.id}>
            <input
              name="categories"
              type="checkbox"
              value={category.id}
              defaultChecked={categoriesParam.includes(category.id.toString())}
            />{" "}
            {category.name}
          </label>
        ))}
      </div>

      <div>
        <h3>Ranges prices</h3>
        <input
          name="min-price"
          type="number"
          defaultValue={minPriceParam || undefined}
        />
        <input
          name="max-price"
          type="number"
          defaultValue={maxPriceParam || undefined}
        />
        <p className="flex items-center gap-1 mb-4 min-h-5 text-sm sm:text-base text-red-600">
          {errorPriceRange && (
            <>
              <MdOutlineError />
              {errorPriceRange}
            </>
          )}
        </p>
      </div>

      <button type="submit">Apply filters</button>
    </form>
  );
};

export default Filters;
