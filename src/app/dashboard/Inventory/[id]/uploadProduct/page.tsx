import NewProduct from '@/components/DialogComponent/NewProduct'
import { AddIconSvg } from '@/components/icons/AddIconSvg'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center'>

      <NewProduct />

    </div>
  )
}

export default page