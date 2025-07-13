'use client'

import ArrowDown from '@/public/images/arrow_down.svg'
import Image from 'next/image'
import { useState } from 'react'

interface AccordionProps {
title: string
description: React.ReactNode
}

export default function Accordion({ title, description}: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (     
     <div className="mb-10 last:mb-0">
     <div className={`text-[18px] font-[800] text-white h-14 px-8 flex items-center justify-between bg-[#00712D] cursor-pointer ${isActive ? "rounded-t-[10px]" : "rounded-[10px]"}`}  onClick={() => setIsActive(!isActive)}>
       {title}

       <Image className={isActive ? 'rotate-180' : ''} src={ArrowDown} width={24} height={24} alt="arrow-down-icon" />
     </div>

     {isActive && (<div className="text-[18px] font-[600] text-[#00712D] py-10 px-8 bg-white rounded-b-[10px] shadow-[3px_3px_2px_0px_rgba(0,113,45,0.30)]">
     {description}
     </div>)}
     </div>
  )
}
