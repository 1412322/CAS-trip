'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Carousel({ list }: { list: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    animationRef.current = setInterval(scroll, 25)
    return () => {
      animationRef.current && clearInterval(animationRef.current)
    }
  }, [])

  const handleMouseEnter = () => {
    animationRef.current && clearInterval(animationRef.current)
  }

  const handleMouseLeave = () => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    animationRef.current = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }, 25)
  }

  return (
    <div
      ref={scrollRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex space-x-5 md:space-x-20 overflow-x-scroll no-scrollbar"
    >
      {list.map((item, index) => (
        <div
          key={index}
          className="flex-none w-full max-w-[240px] md:max-w-[398px] group"
        >
          <div className="relative h-[300px] md:h-[507px] rounded-[10px] w-full overflow-hidden mb-5">
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="text-left md:text-center text-white">
              <h3 className="text-[18px] font-[900] mb-2.5 md:mb-6">{item.title}</h3>

              <p className="text-[16px] md:text-[18px] font-[700] mb-2.5">{item.subTitle}</p>

              <p className="text-[14px] md:text-[16px] font-[500]">{item.description}</p>
            </div>
        </div>
      ))}
    </div>
  )
}
