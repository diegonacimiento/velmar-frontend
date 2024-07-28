import React from "react";
import Link from "next/link";

import Carousel from "@/components/Carousel";
import Collection from "@/app/home/Collection";
import {
  rogersDescription,
  romanoffDescription,
  shoesDescription,
} from "@/utils/home-page-data";
import ProductsList from "../products/components/ProductsList";
import Welcome from "./Welcome";
import {
  collectionImage,
  collectionImage2,
  collectionImage3,
} from "./utils/links";
import { newArrivals, productsMen, productsWomen } from "./utils/collections";

const Home = async () => {
  return (
    <div className="flex flex-col w-full leading-8">
      <Welcome />

      <section className="flex flex-col w-full max-w-2k px-4 py-24 m-auto">
        <Collection
          imageUrl={collectionImage}
          imageTitle="Female model"
          smallTitle="Women"
          bigTitle="Romanoff collection"
          description={romanoffDescription}
          category={6}
        />

        <Collection
          imageUrl={collectionImage2}
          imageTitle="Male model"
          smallTitle="Men"
          bigTitle="Rogers collection"
          description={rogersDescription}
          category={7}
        />
      </section>

      <section className="justify-around bg-primary bg-opacity-30">
        <h2 className="text-3xl font-semibold pt-24 px-12 text-center text-secondary md:px-24">
          Exclusive collections
        </h2>
        <div className="flex flex-col md:flex-row max-w-2k m-auto">
          <div className="w-full">
            <div className="max-w-1k m-auto md:ml-auto px-1 sm:px-6 pb-12 pt-24 md:py-24">
              <h3 className="text-2xl text-center sm:text-3xl mb-6 font-medium text-secondary">
                Men collection
              </h3>
              <Carousel products={productsMen} />
            </div>
          </div>

          <div className="w-full">
            <div className="max-w-1k m-auto md:mr-auto px-1 sm:px-6 py-12 md:py-24">
              <h3 className="text-2xl text-center sm:text-3xl mb-6 font-medium text-secondary">
                Women collection
              </h3>
              <Carousel products={productsWomen} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-24">
        <h2 className="text-3xl font-semibold text-center text-secondary">
          New Arrivals
        </h2>

        <div className="flex flex-wrap justify-center gap-7 px-4 py-24 max-w-2k">
          <ProductsList products={newArrivals} />
        </div>

        <Link href="/products">
          <button
            type="button"
            title="See all products"
            className="p-4 h-16 w-max bg-primary text-secondary hover:bg-secondary hover:text-primary hover:scale-105 duration-150"
          >
            See all products
          </button>
        </Link>
      </section>

      <section className="flex w-full max-w-2k px-4 py-24 mb-24 m-auto bg-primary bg-opacity-35">
        <Collection
          imageUrl={collectionImage3}
          smallTitle="About us"
          bigTitle="Materials designed for comfort and sustainability"
          description={shoesDescription}
          imageTitle="Shoes"
          category={3}
        />
      </section>
    </div>
  );
};

export default Home;
