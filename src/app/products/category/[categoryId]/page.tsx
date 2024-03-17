import Search from '@/components/Search';
import { getProducts } from '@/utils/functions-share'
import React, { Suspense } from 'react'
import LoadingProducts from '../../LoadingProducts';
import ProductsList from '../../ProductsList';
import Paginator from '../../Paginator';

const page = async ({ params: { categoryId } }: { params: { categoryId: string } }) => {
 console.log(categoryId);

  const products = await getProducts(0, 7, categoryId);

  return (
   <div className="py-6 w-full max-w-2k">
     <div className="p-3 m-auto w-11/12 max-w-650">
       <Search />
     </div>

     <div className="p-4">
       <Suspense fallback={<LoadingProducts length={6} />}>
         <ProductsList products={products} />
       </Suspense>
     </div>

     <Paginator page={1} />
   </div>
 );
}

export default page