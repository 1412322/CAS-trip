'use client'

import Partner1 from '@/public/images/partners/partner_1.svg'
import Partner2 from '@/public/images/partners/partner_2.svg'
import Partner3 from '@/public/images/partners/partner_3.svg'
import Partner4 from '@/public/images/partners/partner_4.svg'
import Partner5 from '@/public/images/partners/partner_5.svg'
import Partner6 from '@/public/images/partners/partner_6.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const partners = [
  {img: Partner1},
  {img: Partner2},
  {img: Partner3},
  {img: Partner4},
  {img: Partner5},
  {img: Partner6},
]

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="mr-[-20px] md:mr-[-100px]">
    <Swiper
    slidesPerView={isMobile ? 1.5 : 2.3}
    autoplay={{
      delay: 2000,
      disableOnInteraction: true,
    }}
    loop={true}
    modules={[Autoplay]}
  >
      {partners.map((item, index) => (
           <SwiperSlide key={index}>
             <div className="h-32 md:h-56 lg:h-56">
              <Image
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />
            </div>
        </SwiperSlide>
      ))} 
  </Swiper>
  </div>
  )
}
