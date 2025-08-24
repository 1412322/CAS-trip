'use client'

import ArrowLeft from '@/public/images/arrow_left_2.svg'
import ArrowRight from '@/public/images/arrow_right_2.svg'
import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'

interface SliderProps {
  articles: { title: string; img: StaticImageData }[]
}

export default function Slider({ articles }: SliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div
        ref={scrollRef}
        className="no-scrollbar mx-[-20px] flex gap-3 overflow-x-auto px-5 md:mx-[-100px] md:gap-7 md:px-[100px]"
      >
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[150px] overflow-hidden rounded-[10px] md:min-w-[340px] md:rounded-[20px]"
          >
            <div className="relative h-[156px] md:h-[356px] group">
              <Image src={item.img} alt={item.title} fill className="object-cover" />

<div className="absolute hidden group-hover:flex inset-0 items-center justify-center bg-[#00000080]">
              <div className="text-[14px] md:text-[24px] font-[700] text-[#00712D] cursor-pointer bg-white rounded-full p-2">Read More</div>
              </div>
            </div>

            <div className="flex h-14 items-center justify-center whitespace-break-spaces bg-[#00712D] p-4 text-center text-[8px] font-[900] text-white md:h-32 md:text-[18px]">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-end gap-4 md:justify-center">
        <Image
          className="aspect-square max-w-6 cursor-pointer md:max-w-[50px]"
          src={ArrowLeft}
          layout="responsive"
          alt="arrow-left-icon"
          onClick={() => scroll('left')}
        />

        <Image
          className="aspect-square max-w-6 cursor-pointer md:max-w-[50px]"
          src={ArrowRight}
          layout="responsive"
          alt="arrow-left-icon"
          onClick={() => scroll('right')}
        />
      </div>
    </div>
  )
}
