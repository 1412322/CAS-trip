'use client'

import ArrowLeft from '@/public/images/arrow_left.svg'
import ArrowRight from '@/public/images/arrow_right.svg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

interface GalleryProps {
  images: { src: StaticImageData; title: string; subTitle: string }[]
}

export default function Gallery({ images }: GalleryProps) {
  const [current, setCurrent] = useState(2) // center at start

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const getPositionClass = (index: number) => {
    const diff = index - current
    if (diff === 0)
      return {
        container: 'z-30 scale-100',
        image: '',
      }
    if (diff === -1 || diff === images.length - 1)
      return {
        container: 'z-20 -translate-x-[30%] lg:-translate-x-[70%] scale-75',
        image: 'brightness-[0.5]',
      }
    if (diff === -2 || diff === images.length - 2)
      return {
        container: 'z-10 -translate-x-[50%] lg:-translate-x-[120%] scale-[0.55]',
        image: 'brightness-[0.25]',
      }
    if (diff === 1 || diff === -(images.length - 1))
      return {
        container: 'z-20 translate-x-[30%] lg:translate-x-[70%] scale-75',
        image: 'brightness-[0.5]',
      }
    if (diff === 2 || diff === -(images.length - 2))
      return {
        container: 'z-10 translate-x-[50%] lg:translate-x-[120%] scale-[0.55]',
        image: 'brightness-[0.25]',
      }
    return {
      container: 'hidden',
      image: '',
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    trackMouse: true, // also works with mouse
  })

  return (
    <div className="relative overflow-hidden h-[300px] lg:h-[532px] w-full">
      <div {...handlers} className="relative flex h-full items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute flex h-full w-[219px] lg:w-[390px] flex-col items-center justify-center overflow-hidden rounded-[5px] lg:rounded-[20px] text-white transition-all duration-500 ${
              getPositionClass(index).container
            }`}
          >
            <Image
              className={`${getPositionClass(index).image} cursor-pointer`}
              src={img.src}
              alt={img.title}
              layout="fill"
              objectFit="cover"
              onClick={() => setCurrent(index)}
            />

            <div className="relative z-10 text-center font-[900] text-[20px] lg:text-[32px]">
              {img.title && <h3>{img.title}</h3>}

              {img.subTitle && <h3>{img.subTitle}</h3>}
            </div>

            {/* <div className="absolute inset-0 fill-[#00000080] z-0" /> */}

            <div
              className="absolute inset-0 z-40 flex items-center justify-between px-1 lg:px-5"
              style={{ display: index - current === 0 ? 'flex' : 'none' }}
            >
              <Image
                className="aspect-square max-w-[24px] lg:max-w-[50px] cursor-pointer"
                src={ArrowLeft}
                layout="responsive"
                alt="arrow-left-icon"
                onClick={prevSlide}
              />

              <Image
                className="aspect-square max-w-[24px] lg:max-w-[50px] cursor-pointer"
                src={ArrowRight}
                layout="responsive"
                alt="arrow-left-icon"
                onClick={nextSlide}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
