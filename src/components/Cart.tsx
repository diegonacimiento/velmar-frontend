"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { MdOutlineShoppingCart } from 'react-icons/md';



const Cart = () => {
 const path = usePathname();
  return (
   <Link href="/cart">
   <button
     className={
       "relative flex items-center text-xl p-4 rd:pr-0 after:content-['12'] after:absolute after:flex after:items-center after:justify-center after:top-1 after:left-0.5 after:rounded-full after:h-4 after:w-4 after:text-xxs after:bg-letter after:text-primary hover:text-secondary hover:after:bg-secondary duration-150 after:duration-150 " +
       (path.includes("/cart")
         ? "text-secondary after:bg-secondary"
         : "")
     }
     type="button"
   >
     <MdOutlineShoppingCart />
   </button>
 </Link>
  )
}

export default Cart