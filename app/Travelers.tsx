'use client'

import Star from '@/public/images/star.svg'
import Traveler2 from '@/public/images/travelers/amir_hassan.png'
import Traveler4 from '@/public/images/travelers/kai_truong.png'
import Traveler1 from '@/public/images/travelers/marcus_lim.png'
import Traveler5 from '@/public/images/travelers/miya_matte.png'
import Traveler3 from '@/public/images/travelers/wijaya.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const travelers = [
  {
    name: 'Marcus Lim\n(Singapore)',
    text: 'The trip offered an unparalleled real-world extension to our curriculum, providing students with deep insights into sustainable development and community engagement that simply cannot be replicated in a classroom setting.',
    img: Traveler1,
  },
  {
    name: 'Amir Hassan\n(Malaysia)',
    text: "We observed significant growth in our students' soft skills, including leadership, intercultural communication, and problem-solving abilities. Their initiative and perseverance, especially during project work, were truly impressive.",
    img: Traveler2,
  },
  {
    name: 'Wijaya\n(Indonesia)',
    text: 'The Trip is a life-changing experience. Getting to work directly with the local community and seeing the impact of my efforts was incredibly rewarding. I learned so much about myself and the world.',
    img: Traveler3,
  },
  {
    name: 'Kai Truong\n(Singapore)',
    text: 'This trip was truly a transformative learning journey beyond classroom. Immersing myself in new cultures and academic disciplines, broadens my global perspective and understands culture.',
    img: Traveler4,
  },
  {
    name: 'Miya Matte\n(Thailand)',
    text: `The trip perfectly blended exciting adventures with crucial environmental conservation efforts. I deeply understand the interconnectedness of ecosystems, which is something you can't fully grasp from a textbook.`,
    img: Traveler5,
  },
]

export default function Travelers() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="ml-[100px]">
    <Swiper
    slidesPerView={isMobile ? 1.5 : 3.2}
  >
      {travelers.map((item, index) => (
           <SwiperSlide key={index}>
             <div className="h-full w-full pl-[15px] md:pl-[25px]">
              <div className="h-full w-full flex flex-col justify-between gap-4 bg-white p-3.5 md:gap-6 md:px-7 md:py-9">
              <p className="text-[12px] font-[600] text-[#00712D] md:text-[22px]">{item.text}</p>

              <div className="flex items-center gap-2.5 md:gap-5">
                <div className="relative h-[44px] w-[44px] min-w-[44px] rounded-full md:h-[84px] md:min-w-[84px]">
                  <Image src={item.img} alt={item.name} className="absolute" layout="fill" />
                </div>

                <div className="flex-1">
                  <label className="mb-[5px] whitespace-break-spaces text-[14px] font-[900] text-[#00712D] md:text-[24px]">
                    {item.name}
                  </label>

                  <div className="grid grid-cols-5 gap-1.5 md:gap-2.5">
                    <Image
                      src={Star}
                      alt="star"
                      className="aspect-square w-full min-w-5 max-w-10"
                    />

                    <Image
                      src={Star}
                      alt="star"
                      className="aspect-square w-full min-w-5 max-w-10"
                    />

                    <Image
                      src={Star}
                      alt="star"
                      className="aspect-square w-full min-w-5 max-w-10"
                    />

                    <Image
                      src={Star}
                      alt="star"
                      className="aspect-square w-full min-w-5 max-w-10"
                    />

                    <Image
                      src={Star}
                      alt="star"
                      className="aspect-square w-full min-w-5 max-w-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
        </SwiperSlide>
      ))} 
  </Swiper>
  </div>
  )
}
