import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IProduct } from "@/types/products";

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  return (
    <div className="flex justify-center gap-8 p-4 w-full flex-wrap">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="max-w-88 w-full"
        >
          <div
            id="card-product"
            className="shadow-lg rounded-lg overflow-hidden text-secondary active:scale-105 duration-500"
          >
            <Image
              src={product.images[0].urls[0]}
              alt={product.name}
              height={960}
              width={1170}
            />
            <h2 className="p-2 text-lg font-bold text-ellipsis overflow-hidden">
              {product.name}
            </h2>
            <h2 className="p-2 text-sm font-semibold">$ {product.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
