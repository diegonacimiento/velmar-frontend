import React from 'react'

import UpdateProduct from '../update/components/UpdateProduct'
import { getCategories } from '@/services/categories.service'
import { getBrands } from '@/services/brands.service';
import Form from './components/Form';

const page = async () => {
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <div>
      <Form />
    </div>
  )
}

export default page