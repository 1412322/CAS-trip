'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ArrowLeft from '@/public/images/arrow_left.svg'
import ArrowRight from '@/public/images/arrow_right.svg'

interface GalleryProps {
images: { src: StaticImageData; title: string; subTitle: string }[]
}

export default function Gallery({ images }: GalleryProps) {
  const [current, setCurrent] = useState(2); // center at start

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const getPositionClass = (index: number) => {
    const diff = index - current;
    if (diff === 0) return 'z-30 scale-100';
    if (diff === -1 || diff === images.length - 1) return 'z-20 -translate-x-[70%] scale-75 brightness-[0.5]';
    if (diff === -2 || diff === images.length - 2) return 'z-10 -translate-x-[100%] scale-50 brightness-[0.25]';
    if (diff === 1 || diff === -(images.length - 1)) return 'z-20 translate-x-[70%] scale-75 brightness-[0.5]';
    if (diff === 2 || diff === -(images.length - 2)) return 'z-10 translate-x-[100%] scale-50 brightness-[0.5]';
    return 'hidden';
  };

  return (
    <div className="relative w-full h-[145px] md:h-[532px] overflow-hidden">
      <div className="relative flex items-center justify-center h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-[390px] h-full transition-all duration-500 rounded-[20px] overflow-hidden text-white flex flex-col items-center justify-center text-center text-[32px] font-[900] ${getPositionClass(index)} fill-black`}
          >
            <Image src={img.src} alt={img.title} layout="fill" objectFit="cover" />
            
            <div className="z-10 relative">
              {img.title && <h3>{img.title}</h3>}

              {img.subTitle && <h3>{img.subTitle}</h3>}
            </div>

            {/* <div className="absolute inset-0 fill-[#00000080] z-0" /> */}

            <div className="absolute inset-0 flex items-center justify-between px-5 z-40" style={{ display: index - current === 0 ?"flex" : "none"}}>
        <Image className="aspect-square max-w-[50px] cursor-pointer" src={ArrowLeft} layout="responsive" alt="arrow-left-icon" onClick={prevSlide} />

        <Image className="aspect-square max-w-[50px] cursor-pointer" src={ArrowRight} layout="responsive" alt="arrow-left-icon" onClick={nextSlide} />
      </div>
          </div>
        ))}
      </div>
    </div>
  );
}
