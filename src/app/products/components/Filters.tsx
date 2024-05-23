"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineError } from "react-icons/md";

import Loading from "@/components/Loading";
import { getBrands } from "@/services/brands.service";
import { getCategories } from "@/services/categories.service";
import { IBrand } from "@/types/brands";
import { ICategory } from "@/types/categories";
import { parseParamsToURL } from "@/utils/functions-share";
import { CgOptions } from "react-icons/cg";

const Filters = ({
  handleSelectedSort,
}: {
  handleSelectedSort: (event: ChangeEvent<HTMLSelectElement>) => void;
}) => {
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
  const [openFilters, setOpenFilters] = useState<boolean>(false);

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

  // Functions
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

  const handleCleanFilters = () => {
    router.push("/products");
  };

  const toggleFilters = () => {
    setOpenFilters((prev) => !prev);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex self-center gap-4 sm:gap-8 justify-center pb-4 w-full max-w-650">
        <button
          id="bt-filters"
          type="button"
          onClick={toggleFilters}
          className="flex justify-center items-center gap-1 border border-secondary p-2 rounded-md w-full max-w-32 bg-secondary self-center font-medium text-body active:scale-105 duration-150"
        >
          <CgOptions />
          Filters
        </button>

        <select
          onChange={handleSelectedSort}
          className="border border-gray-300 p-2 rounded-md w-full max-w-32 text-sm text-secondary bg-primary focus:outline-none focus:border-secondary"
        >
          <option value="">Sort by</option>
          <option value="lower">Lower price</option>
          <option value="higher">Higher price</option>
        </select>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={
          openFilters
            ? "flex flex-col self-center gap-2 px-2 py-4 sm:p-4 mb-4 rounded-md w-full max-w-520 bg-primary bg-opacity-30 text-secondary"
            : "hidden"
        }
      >
        <div>
          <h3 className="font-semibold">Brands</h3>
          <div className="flex flex-wrap">
            {brands.map((brand) => (
              <label key={brand.id} className="m-2">
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
        </div>

        <div>
          <h3 className="font-semibold">Categories</h3>
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <label key={category.id} className="m-2">
                <input
                  name="categories"
                  type="checkbox"
                  value={category.id}
                  defaultChecked={categoriesParam.includes(
                    category.id.toString()
                  )}
                />{" "}
                {category.name}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold">Ranges prices</h3>
          <div className="flex gap-2">
            <input
              name="min-price"
              type="number"
              defaultValue={minPriceParam || undefined}
              placeholder="Minimal price"
              className="border border-gray-300 p-2 my-2 w-full rounded-md text-sm text-secondary bg-primary focus:outline-none focus:border-secondary"
            />
            <input
              name="max-price"
              type="number"
              defaultValue={maxPriceParam || undefined}
              placeholder="Maximum price"
              className="border border-gray-300 p-2 my-2 w-full rounded-md text-sm text-secondary bg-primary focus:outline-none focus:border-secondary"
            />
          </div>
          <p className="flex items-center gap-1 min-h-5 text-sm sm:text-base text-red-600">
            {errorPriceRange && (
              <>
                <MdOutlineError />
                {errorPriceRange}
              </>
            )}
          </p>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            type="button"
            title="Clean filters"
            onClick={handleCleanFilters}
            className="border border-primary p-2.5 h-full w-full max-w-36 rounded-lg text-sm text-secondary font-medium bg-primary active:bg-body active:text-secondary duration-150 bt-clean-filters"
          >
            Clean filters
          </button>
          <button
            type="submit"
            title="Apply filters"
            className="border border-secondary p-2.5 h-full w-full max-w-36 rounded-lg text-sm text-primary font-medium bg-secondary active:bg-body active:text-secondary duration-150 bt-apply-filters"
          >
            Apply filters
          </button>
        </div>
      </form>
    </>
  );
};

export default Filters;
