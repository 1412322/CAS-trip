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
      className="flex space-x-6 overflow-x-scroll no-scrollbar py-10"
    >
      {list.map((item, index) => (
        <div
          key={index}
          className="flex-none w-full max-w-[398px] group"
        >
          <div className="relative h-[507px] rounded-xl w-full overflow-hidden mb-5">
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="text-center text-white">
              <h3 className="text-[18px] font-[900] mb-[25px]">{item.title}</h3>

              <p className="text-[18px] font-[700] mb-2.5">{item.subTitle}</p>

              <p className="text-[16px] font-[500]">{item.description}</p>
            </div>
        </div>
      ))}
    </div>
  )
}
