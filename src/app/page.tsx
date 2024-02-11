import Carousel from "@/components/Carousel";
import Collection from "@/components/Collection";
import { Product } from "@/types/products";
import axios from "axios";
import Image from "next/image";

const getCollection = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Home: React.FC = async () => {
  const summerCollection = await getCollection();

  const products = [];

  for (let index = 0; index < 5; index++) {
    products.push(summerCollection[index]);
  }

  return (
    <div className="flex flex-col max-w-2k w-full">
      <section className="w-full py-32 relative">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col p-4 gap-3 bg-slate-300 bg-opacity-60 rounded-2xl m-2">
            <h3 className="font-medium sm:text-3xl text-2xl">
              Welcome to Velmar!
            </h3>
            <h1 className="font-semibold sm:text-6xl text-3xl max-w-650">
              Find your style with just one click!
            </h1>
          </div>
          <Image
            className="absolute top-0 -z-10 w-full h-full object-cover"
            width={600}
            height={470}
            src="https://img.freepik.com/foto-gratis/resumen-desenfoque-defocused-centro-comercial_1203-9548.jpg?w=1480&t=st=1707577513~exp=1707578113~hmac=7de2fa784e38e34673df0e0b9267db6e520f70bf8de0e8231e8ea554bb93c7d0"
            alt="tienda"
          />
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-2xl sm:text-4xl my-4">Summer collection</h2>

        <Carousel products={products} />
      </section>
    </div>
  );
};

export default Home;
