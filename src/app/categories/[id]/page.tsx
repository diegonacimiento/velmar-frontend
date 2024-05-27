import React from "react";
import Image from "next/image";

import { getCategory } from "@/services/categories.service";
import ProductsList from "@/app/products/components/ProductsList";

const page = async ({ params: { id } }: { params: { id: number } }) => {
  const category = await getCategory(id);

  return (
    <div className="flex flex-col">
      <figure className="max-w-96">
        <Image
          src={category.image}
          alt={category.image}
          height={1170}
          width={960}
          className="h-full w-full"
        />
      </figure>
      <h2 className="text-xl font-semibold">{category.name}</h2>
      
    </div>
  );
};

export default page;
