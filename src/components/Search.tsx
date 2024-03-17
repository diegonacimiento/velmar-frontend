"use client"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const Search = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");
  const [optionSelected, setOptionSelected] = useState<string>("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptionSelected(event.target.value)
    router.push(`/products/category/${event.target.value}`)
  }

  return (
    <form>
      <div className="flex flex-col-reverse sm:flex-row">
        <select
          className="-sm:w-30 -sm:py-2.5 -sm:my-2 -sm:rounded-md flex-shrink-0 z-10 inline-flex items-center px-2 text-sm font-medium text-center bg-secondary border border-gray-300 rounded-s-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-gray-100 duration-150"
          title="Select category"
          onChange={handleChangeOption}
        >
          <option value="">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
        </select>

        <div className="relative w-full">
          <input
            type="search"
            className="block p-2.5 w-full z-20 text-sm bg-primary rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 -sm:rounded-md -sm:border-2 -sm:border-gray-300"
            placeholder="Search product"
            required
            title="Search product"
            value={value}
            onChange={handleChangeInput}
          />
          <button
            type="submit"
            title="Search"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-secondary rounded-e-lg border border-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 duration-150"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
