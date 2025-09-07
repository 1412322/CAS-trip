'use client'

import Partner1 from '@/public/images/partners/partner_1.svg'
import Partner2 from '@/public/images/partners/partner_2.svg'
import Partner3 from '@/public/images/partners/partner_3.svg'
import Partner4 from '@/public/images/partners/partner_4.svg'
import Partner5 from '@/public/images/partners/partner_5.svg'
import Partner6 from '@/public/images/partners/partner_6.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee"
import 'swiper/css'

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
    <Marquee pauseOnHover speed={40}>
      {partners.map((item, index) => (
             <div key={index} className="relative w-[60vw] md:w-[30vw] h-48 md:h-64">
              <Image
              src={item.img}
              alt=""
              fill
              className="object-cover"
            />
            </div>
      ))} 
  </Marquee>
  )
}
