import React, { Dispatch, SetStateAction, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

import { Brand } from "@/types/brands";

interface BrandInputProps {
  brands: Brand[];
  selectedBrand: Brand | null;
  setSelectedBrand: Dispatch<SetStateAction<Brand | null>>;
}

const BrandInput: React.FC<BrandInputProps> = ({
  brands,
  selectedBrand,
  setSelectedBrand,
}) => {

  const handleAddBrand = () => {
    setSelectedBrand(brands[0]);
  };

  const handleRemoveBrand = () => {
    setSelectedBrand(null);
  };

  const handleSelectBrand = (brandId: string) => {
    const brand = brands.find((brand) => brand.id === Number(brandId));
    if (brand) {
      setSelectedBrand(brand);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="px-1 text-sm font-light">Brand</label>
      {selectedBrand ? (
        <div className="flex items-center gap-2 w-full">
          {/* Select brand */}
          <select
            className="px-1.5 py-2 border border-secondary rounded-lg w-full focus:outline-0"
            value={selectedBrand.id}
            onChange={(e) => handleSelectBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          {/* Button remove brand */}
          <button
            title="Remove brand"
            type="button"
            className="flex justify-center items-center h-8 w-8 rounded-full text-xl hover:bg-primary"
            onClick={handleRemoveBrand}
          >
            <MdOutlineDelete />
          </button>
        </div>
      ) : (
        <button
          title="Add brand"
          type="button"
          className="border border-secondary p-2 mx-auto my-1 rounded-lg w-max hover:bg-primary"
          onClick={handleAddBrand}
        >
          Add brand
        </button>
      )}
    </div>
  );
};

export default BrandInput;
