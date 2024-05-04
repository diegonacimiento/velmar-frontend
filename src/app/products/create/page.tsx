import React from 'react'

import Form from './components/Form';
import { getCategories } from '@/services/categories.service'
import { getBrands } from '@/services/brands.service';

const page = async () => {
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <div>
      <Form brands={brands} categories={categories} />
    </div>
  )
}

export default page