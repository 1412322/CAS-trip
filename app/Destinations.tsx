'use client'

import PopularPrograms2 from '@/public/images/popular_programs_2.webp'
import PopularPrograms3 from '@/public/images/popular_programs_3.webp'
import PopularPrograms4 from '@/public/images/popular_programs_4.webp'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const programs = [
  {
    title: 'WILDERNESS SKILLS CAMP, JANDA BAIK',
    subTitle: '3D2N | Ages 11-17 | RM850 estimate',
    description:
      'Embark on an unforgettable 3-day learning essential survival skills sharpening your collaborative edge',
    img: PopularPrograms2,
  },
  {
    title: 'ECO CONSERVATION CAMP, PENYABONG',
    subTitle: '3D2N | Ages 10-16 | RM790 estimate',
    description:
      'Get hands-on with campcraft. Learn to build shelters, dive into conservation and create idea for conservation',
    img: PopularPrograms3,
  },
  {
    title: 'JUNGLE EXPEDITION CAMP, JANDA BAIK',
    subTitle: '3D2N | Ages 10-16 | RM840 estimate',
    description:
      "Trekking up Sungai Chemperoh, riding horse and outdoor cooking. Experience nature's create lasting memories with us",
    img: PopularPrograms4,
  },
  {
    title: 'ECO CONSERVATION CAMP, PENYABONG',
    subTitle: '3D2N | Ages 10-16 | RM790 estimate',
    description:
      'Get hands-on with campcraft. Learn to build shelters, dive into conservation and create idea for conservation',
    img: PopularPrograms3,
  },
]

export default function Destinations() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <Swiper
    slidesPerView={isMobile ? 1.4 : 2.8}
    spaceBetween={isMobile ? 20 : 82}
    autoplay={{
      delay: 2000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    }}
    loop
    modules={[Autoplay, Pagination]}
    pagination={{ clickable: true }}
  >
      {programs.map((item, index) => (
           <SwiperSlide key={index}>
             <div className="ml-[20px] md:ml-[100px] group w-full flex-none md:max-w-[400px]">
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
        </SwiperSlide>
      ))} 
  </Swiper>
  )
}
