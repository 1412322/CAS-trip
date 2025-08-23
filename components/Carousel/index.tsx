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
      className="no-scrollbar flex space-x-5 overflow-x-scroll md:space-x-20"
    >
      {list.map((item, index) => (
        <div key={index} className="group w-full max-w-[240px] flex-none md:max-w-[398px]">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[10px] md:h-[507px]">
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="text-left text-white md:text-center">
            {item.title && <h3 className="mt-5 mb-2.5 text-[18px] font-[900] md:mb-6">{item.title}</h3>}

            {item.subTitle && <p className="mb-2.5 text-[16px] font-[700] md:text-[18px]">{item.subTitle}</p>}

            {item.description && <p className="text-[14px] font-[500] md:text-[16px]">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
