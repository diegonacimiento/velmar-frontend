import Link from "next/link";
import Image from "next/image";

import Carousel from "@/components/Carousel";
import Collection from "@/components/Collection";
import ProductCard from "@/app/products/components/ProductCard";
import {
  getCollections,
  rogersDescription,
  romanoffDescription,
  shoesDescription,
} from "@/utils/home-page-data";
import ProductsList from "./products/components/ProductsList";

const Home: React.FC = async () => {
  const { men, women, newArrivals } = await getCollections();

  return (
    <div className="flex flex-col w-full leading-8">
      <section className="w-full py-64 relative">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col px-6 py-6 sm:py-16 gap-3 bg-slate-300 bg-opacity-60 rounded-2xl m-2">
            <h3 className="font-medium sm:text-3xl text-2xl">
              Welcome to Velmar!
            </h3>
            <h1 className="font-semibold sm:text-6xl text-3xl max-w-2k">
              Find your style with just one click!
            </h1>
          </div>
          <Image
            className="absolute top-0 -z-10 w-full h-full object-cover"
            width={600}
            height={470}
            src="https://img.freepik.com/foto-gratis/tienda-ropa-maniqui_23-2148929527.jpg?w=1480&t=st=1707862887~exp=1707863487~hmac=c2f893edd212327bb61b03ec3fb88438b349726100ecd2c4bdd03bed7f7c921a"
            alt="Shop"
          />
        </div>
      </section>

      <section className="flex flex-col w-full max-w-2k px-4 py-24 m-auto">
        <Collection
          imageUrl="https://img.freepik.com/foto-gratis/joven-mujer-bonita-morena-posando-fondo-marmol-beige-vistiendo-pantalones-cortos-lino-beige-bolso-lujo-cuero-caramelo-camisa-blanca-accesorios-dorados-traje-estilo-callejero_291049-1753.jpg?w=740&t=st=1707862631~exp=1707863231~hmac=498656d049b58f8df21e4ca25aca5a8e2b60463b2d37f26d5c7d8f1a64a3d5bb"
          imageTitle="Female model"
          smallTitle="Women"
          bigTitle="Romanoff collection"
          description={romanoffDescription}
        />

        <Collection
          imageUrl="https://img.freepik.com/foto-gratis/joven-elegante-mirando-ventana_23-2147862575.jpg?w=740&t=st=1707861998~exp=1707862598~hmac=1c13fff5cdad249569a0588fae0bf82aa2b56050a0eeff50be1c787a3fe6732f"
          imageTitle="Male model"
          smallTitle="Men"
          bigTitle="Rogers collection"
          description={rogersDescription}
        />
      </section>

      <section className="justify-around bg-primary bg-opacity-30">
        <h2 className="text-3xl font-semibold pt-24 px-12 text-center md:px-24">
          Exclusive collections
        </h2>
        <div className="flex flex-col md:flex-row max-w-2k m-auto">
          <div className="w-full">
            <div className="max-w-1k m-auto md:ml-auto px-6 pb-12 pt-24 md:py-24">
              <h3 className="text-2xl text-center sm:text-3xl mb-6 font-medium">
                Men collection
              </h3>
              <Carousel products={men} />
            </div>
          </div>

          <div className="w-full">
            <div className="max-w-1k m-auto md:mr-auto px-6 py-12 md:py-24">
              <h3 className="text-2xl text-center sm:text-3xl mb-6 font-medium">
                Women collection
              </h3>
              <Carousel products={women} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-24">
        <h2 className="text-3xl font-semibold text-center">New Arrivals</h2>

        <div className="flex flex-wrap justify-center gap-7 px-4 py-24 max-w-2k">
          <ProductsList products={newArrivals} />
        </div>

        <button
          type="button"
          title="See all products"
          className="p-4 h-16 w-max bg-primary text-secondary hover:bg-secondary hover:text-primary hover:scale-105 duration-150"
        >
          See all products
        </button>
      </section>

      <section className="flex w-full max-w-2k px-4 py-24 mb-24 m-auto bg-primary bg-opacity-35">
        <Collection
          imageUrl="https://img.freepik.com/foto-gratis/modelo-zapatillas-altas-blancas-pie-silla_53876-97148.jpg?w=740&t=st=1708018980~exp=1708019580~hmac=57ff238a1d7cdf476a2075fc266b423945073b07194bd149100c7f2fdec8df6f"
          smallTitle="About us"
          bigTitle="Materials designed for comfort and sustainability"
          description={shoesDescription}
          imageTitle="Shoes"
        />
      </section>
    </div>
  );
};

export default Home;
