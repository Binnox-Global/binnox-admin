import { AddIconSvg } from '@/components/icons/AddIconSvg'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>

      <Link href={"./updatePrice/updatePrice"} className="p-[12.79px] bg-black rounded-[7.11px] justify-center items-center gap-[7.11px] inline-flex overflow-hidden cursor-pointer text-white text-xs font-bold font-['Raleway'] leading-[13.05px] tracking-tight">

        <AddIconSvg className='fill-white' />
        New Price Update
      </Link>
    </div>
  )
}

export default page