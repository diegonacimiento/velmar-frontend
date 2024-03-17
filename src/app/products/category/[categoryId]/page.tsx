import Search from '@/components/Search';
import { getProducts } from '@/utils/functions-share'
import React, { Suspense } from 'react'
import LoadingProducts from '../../LoadingProducts';
import ProductsList from '../../ProductsList';
import Paginator from '../../Paginator';
import Products from '../../Products';

const page = async ({ params: { categoryId } }: { params: { categoryId: string } }) => {
 console.log(categoryId);

  // const products = await getProducts(0, 7, categoryId);

  return (
   <Products params={{ number: 1, category: categoryId }} />
 );
}

export default page