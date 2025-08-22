import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import WhereWeTravel2 from '@/public/images/where_we_travel_2.webp'
import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    country: 'AISA - VIETNAM',
    places: [
      { name: 'HA NOI', img: WhereWeTravel2, path: '/taman-negara' },
      { name: 'HA GIANG', img: '/images/vietnam/ha-giang.jpg', path: '/taman-negara' },
      { name: 'SAPA', img: '/images/vietnam/sapa.jpg', path: '/taman-negara' },
      { name: 'HO CHI MINH', img: '/images/vietnam/ho-chi-minh.jpg', path: '/taman-negara' },
      { name: 'NHA TRANG', img: '/images/vietnam/nha-trang.jpg', path: '/taman-negara' },
      { name: 'PHU QUOC', img: '/images/vietnam/phu-quoc.jpg', path: '/taman-negara' },
      { name: 'DA NANG', img: '/images/vietnam/da-nang.jpg', path: '/taman-negara' },
      { name: 'HOI AN', img: '/images/vietnam/hoi-an.jpg', path: '/taman-negara' },
      { name: 'HUE', img: '/images/vietnam/hue.jpg', path: '/taman-negara' },
      { name: 'BEN TRE', img: '/images/vietnam/ben-tre.jpg', path: '/taman-negara' },
      { name: 'TRA VINH', img: '/images/vietnam/tra-vinh.jpg', path: '/taman-negara' },
      { name: 'VINH LONG', img: '/images/vietnam/vinh-long.jpg', path: '/taman-negara' },
      { name: 'MAI CHAU', img: '/images/vietnam/mai-chau.jpg', path: '/taman-negara' },
      { name: 'HOA BINH', img: '/images/vietnam/hoa-binh.jpg', path: '/taman-negara' },
      { name: 'DA LAT', img: '/images/vietnam/da-lat.jpg', path: '/taman-negara' },
      { name: 'NAM CAT TIEN', img: '/images/vietnam/nam-cat-tien.jpg', path: '/taman-negara' },
      { name: 'CU CHI', img: '/images/vietnam/cu-chi.jpg', path: '/taman-negara' },
      { name: 'MADAGUI', img: '/images/vietnam/madagui.jpg', path: '/taman-negara' },
    ],
  },
  {
    country: 'AISA - MALAYSIA',
    places: [
      { name: 'PENANG', img: '/images/malaysia/penang.jpg', path: '/taman-negara' },
      { name: 'KUANTAN', img: '/images/malaysia/kuantan.jpg', path: '/taman-negara' },
      { name: 'SARAWAK', img: '/images/malaysia/sarawak.jpg', path: '/taman-negara' },
      { name: 'TAMAN NEGARA', img: '/images/malaysia/taman-negara.jpg', path: '/taman-negara' },
      { name: 'GOPENG ADVENTURE', img: '/images/malaysia/gopeng.jpg', path: '/taman-negara' },
      { name: 'KUALA LUMPUR', img: '/images/malaysia/kuala-lumpur.jpg', path: '/taman-negara' },
      { name: 'CAMERON', img: '/images/malaysia/cameron.jpg', path: '/taman-negara' },
      { name: 'LANGKAWI', img: '/images/malaysia/langkawi.jpg', path: '/taman-negara' },
      { name: 'SABAH', img: '/images/malaysia/sabah.jpg', path: '/taman-negara' },
    ],
  },
]

export default function OurPrograms() {
  return (
    <main>
      {/* TOP DESTINATIONS FOR STUDENT TRAVEL EXPERIENCES */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E] pt-16 md:pt-20">
          TOP DESTINATIONS FOR STUDENT TRAVEL EXPERIENCES
        </Heading>

        <Paragraph>Uncover amazing places we take you to worldwide.</Paragraph>

        <div>
          {destinations.map((section) => (
            <div key={section.country} className="mt-10 md:mt-20">
              <h2 className="flex h-[30px] items-center justify-center bg-[#00712D] text-center text-[20px] font-[800] text-white md:h-[80px] md:text-[32px]">
                {section.country}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {section.places.map((place) => (
                  <Link key={place.name} href={place.path} className="relative h-[100px] cursor-pointer md:h-[252px]">
                    <Image src={place.img} alt={place.name} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <span className="text-center text-[30px] font-[800] text-white md:text-[50px]">
                        {place.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="relative z-0 bg-[url('../public/images/our_mission_cover.jpg')]">
        <Heading color="text-white">
          PLANS CAN CHANGE — THAT’S WHY OUR POLICY IS DESIGNED TO GIVE YOU SECURITY AND CONFIDENCE.
        </Heading>

        <div className="absolute inset-0 z-[-1] bg-[#00712D] opacity-50" />

        <div className="absolute inset-0 z-[-1] bg-[#000] opacity-50" />
      </Container>

      <Container className="bg-[#ECFAE5]">
        <div className="mt-10 flex justify-center">
          <Button path="/contact-us">Contact Us</Button>
        </div>
      </Container>
    </main>
  )
}
