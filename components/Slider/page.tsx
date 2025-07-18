'use client';

import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import ArrowLeft from '@/public/images/arrow_left_2.svg'
import ArrowRight from '@/public/images/arrow_right_2.svg'

interface SliderProps {
    articles: { title: string, img: StaticImageData }[]
}

export default function Slider({ articles}: SliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
      <div>
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto no-scrollbar"
        >
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[340px] rounded-[20px] overflow-hidden"
            >
              <div className="h-[356px] relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#00712D] text-white text-[18px] p-4 text-center font-[900] h-32 flex items-center justify-center whitespace-break-spaces">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-6">
  <Image className="aspect-square max-w-[50px] cursor-pointer" src={ArrowLeft} layout="responsive" alt="arrow-left-icon"             onClick={() => scroll('left')}/>
    
<Image className="aspect-square max-w-[50px] cursor-pointer" src={ArrowRight} layout="responsive" alt="arrow-left-icon"    onClick={() => scroll('right')}/>
        </div>
      </div>
  );
}
