import React from "react";
import Link from "next/link";

import ProductCard from "@/app/products/components/ProductCard";
import { IProduct } from "@/types/products";

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="flex justify-center gap-7 p-2 sm:p-4 w-full flex-wrap">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="max-w-88 w-full"
        >
          <ProductCard product={product} isAll={true} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
