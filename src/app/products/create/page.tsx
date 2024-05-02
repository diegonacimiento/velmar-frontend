import React from 'react'

import UpdateProduct from '../update/components/UpdateProduct'
import { getCategories } from '@/services/categories.service'
import { getBrands } from '@/services/brands.service';

const page = async () => {
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <div>
     <h1>Create Product</h1>
     {/* <UpdateProduct brands={brands} categories={categories} product={[]} /> */}
    </div>
  )
}

export default page