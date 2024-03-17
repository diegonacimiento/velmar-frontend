import Search from '@/components/Search'
import React from 'react'
import LoadingProducts from '../../LoadingProducts'
import Paginator from '../../Paginator'

const loading = () => {
  return (
   <div className="py-6 w-full max-w-2k">
   <div className="p-3 m-auto w-11/12 max-w-650">
     <Search />
   </div>

   <div className="p-4">
     <LoadingProducts length={6} />
   </div>

   <Paginator page={1} />
 </div>
  )
}

export default loading