'use client'

import ArrowDown from '@/public/images/arrow_down.svg'
import Image from 'next/image'
import { useState } from 'react'
import Paragraph from '../Paragraph'

interface AccordionProps {
title: string
description: React.ReactNode
}

export default function Accordion({ title, description}: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (     
     <div className="mb-2.5 md:mb-10 last:mb-0">
     <div className={`text-[14px] md:text-[18px] font-[800] text-white h-14 px-2.5 md:px-8 flex items-center justify-between bg-[#00712D] cursor-pointer ${isActive ? "rounded-t-[10px]" : "rounded-[10px]"}`}  onClick={() => setIsActive(!isActive)}>
       {title}

<div className="relative w-4 md:w-6 aspect-square">
       <Image className={isActive ? 'rotate-180' : ''} src={ArrowDown} layout="fill" alt="arrow-down-icon" />
       </div>
     </div>

     {isActive && (<div className="py-4 px-2.5 md:py-10 md:px-8 bg-white rounded-b-[10px] shadow-[3px_3px_2px_0px_rgba(0,113,45,0.30)]">
     <Paragraph className="!text-left">{description}</Paragraph>
     </div>)}
     </div>
  )
}
