import React, { Dispatch, SetStateAction, useState } from "react";

import { IProductFields } from "@/types/products";
import { IBrand } from "@/types/brands";
import { formStyles } from "../../../styles/FormStyles";
import { setField } from "../utils/validate-form";
import { MdOutlineDelete } from "react-icons/md";

interface IBrandProps {
  brand: IProductFields["brand"];
  setFields: Dispatch<SetStateAction<IProductFields>>;
  allBrands: IBrand[];
}

const Brand: React.FC<IBrandProps> = ({ brand, setFields, allBrands }) => {
  const [noBrands, setNoBrands] = useState<boolean>(false);

  const handleSelectBrand = (id: string) => {
    const brand = allBrands.find((brand) => brand.id === Number(id));

    if (brand) {
      setField("brand", brand, setFields);
    }
  };

  const handleAddBrand = () => {
    if (allBrands.length > 0) {
      setField("brand", allBrands[0], setFields);
    } else {
      setNoBrands(true);
    }
  };

  const handleDeleteBrand = () => {
    setField("brand", null, setFields);
  };

  return (
    <div className={formStyles.container}>
      <label className={formStyles.label}>Brand</label>

      {brand.value && (
        <div className={formStyles.containerSelect}>
          <select
            name="brands"
            defaultValue={brand.value.id}
            onChange={(event) => handleSelectBrand(event.target.value)}
            className={formStyles.select}
          >
            {allBrands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            title="Delete brand"
            onClick={handleDeleteBrand}
            className={formStyles.buttonDelete}
          >
            <MdOutlineDelete />
          </button>
        </div>
      )}

      {!brand.value && (
        <button
          type="button"
          title="Add brand"
          onClick={handleAddBrand}
          className={formStyles.buttonPrimary}
        >
          Add brand
        </button>
      )}

      {noBrands && <p className="text-center text-xs text-red-600">No brands available</p>}
    </div>
  );
};

export default Brand;
