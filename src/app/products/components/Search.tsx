"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

interface ISearch {
  name?: string;
}

const Search: React.FC<ISearch> = ({ name }) => {
  const router = useRouter();

  const [value, setValue] = useState<string>(name || "");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleDeleteSearch = () => {
    if (value) {
      setValue("");
      router.push(`/products`);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`/products?name=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col-reverse sm:flex-row p-4 max-w-650 m-auto">
        <div className="flex w-full">
          <div className="relative flex w-full">
            <input
              type="search"
              className="border border-gray-300 p-2.5 w-full rounded-s-md text-sm text-secondary bg-primary focus:outline-none focus:border-secondary"
              placeholder="Search product"
              required
              title="Search product"
              value={value}
              onChange={handleChangeInput}
            />
            <button
              type="button"
              title="Delete search"
              onClick={handleDeleteSearch}
              className="absolute right-0 p-2 flex self-center text-secondary text-xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <button
            id="bt-search-prod"
            type="submit"
            title="Search"
            className="border border-secondary p-4 h-full rounded-e-lg text-sm text-primary font-medium bg-secondary  active:bg-primary active:text-secondary duration-150"
          >
            <IoSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
