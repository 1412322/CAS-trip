'use client'

import ArrowDown from '@/public/images/arrow_down.svg'
import Image from 'next/image'
import { useState } from 'react'
import Paragraph from '../Paragraph'

interface AccordionProps {
  title: string
  description: React.ReactNode
}

export default function Accordion({ title, description }: AccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className="mb-2.5 last:mb-0 md:mb-10">
      <div
        className={`flex h-14 cursor-pointer items-center justify-between bg-[#00712D] px-2.5 text-[14px] font-[800] text-white md:px-8 md:text-[18px] ${isActive ? 'rounded-t-[10px]' : 'rounded-[10px]'}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex-1">{title}</div>

        <div className="relative aspect-square w-4 md:w-6">
          <Image
            className={isActive ? 'rotate-180' : ''}
            src={ArrowDown}
            layout="fill"
            alt="arrow-down-icon"
          />
        </div>
      </div>

      {isActive && (
        <div className="rounded-b-[10px] bg-white px-2.5 py-4 shadow-[3px_3px_2px_0px_rgba(0,113,45,0.30)] md:px-8 md:py-10 lg:pr-80">
          <Paragraph className="!text-left">{description}</Paragraph>
        </div>
      )}
    </div>
  )
}
