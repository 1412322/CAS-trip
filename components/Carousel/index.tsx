"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Carousel({ list }: { list: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    animationRef.current = setInterval(scroll, 25);
    return () => animationRef.current && clearInterval(animationRef.current);
  }, []);

  const handleMouseEnter = () => {
    animationRef.current && clearInterval(animationRef.current);
  };

  const handleMouseLeave = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    animationRef.current = setInterval(() => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 25);
  };

  return (
    <div
      ref={scrollRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex space-x-6 overflow-x-scroll no-scrollbar py-8"
    >
      {list.map((item, idx) => (
        <div
          key={idx}
          className="flex-none w-80 rounded-2xl overflow-hidden relative group shadow-xl"
        >
          <div className="relative h-[450px] w-full overflow-hidden">
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 text-center text-white">
              <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
              <p className="text-sm font-semibold mt-1">{item.subTitle}</p>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
