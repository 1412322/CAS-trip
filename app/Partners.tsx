'use client'

import Partner1 from '@/public/images/partners/partner_1.svg'
import Partner2 from '@/public/images/partners/partner_2.svg'
import Partner3 from '@/public/images/partners/partner_3.svg'
import Partner4 from '@/public/images/partners/partner_4.svg'
import Partner5 from '@/public/images/partners/partner_5.svg'
import Partner6 from '@/public/images/partners/partner_6.svg'
import Image from 'next/image'
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
  return (
    <div className="mr-[-20px] md:mr-[-100px]">
    <Swiper
    slidesPerView={2.5}
    spaceBetween={24}
    autoplay={{
      delay: 2000,
      disableOnInteraction: true,
    }}
    loop={true}
    modules={[Autoplay]}
  >
      {partners.map((item, index) => (
           <SwiperSlide key={index}>
      <Image
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />
        </SwiperSlide>
      ))} 
  </Swiper>
  </div>
  )
}
