import { AddIconSvg } from '@/components/icons/AddIconSvg'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>

      <Link href={"upload"} className="p-[12.79px] bg-[#F45309] rounded-[7.11px] justify-center items-center gap-[7.11px] inline-flex overflow-hidden cursor-pointer text-white text-xs font-bold font-['Raleway'] leading-[13.05px] tracking-tight">

        <AddIconSvg className='fill-white' />
        New Offer
      </Link>
    </div>
  )
}

export default page