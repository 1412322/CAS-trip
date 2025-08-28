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
      { name: 'HA NOI', img: '/images/programs/ha-noi.webp', path: '/taman-negara' },
      { name: 'HA GIANG', img: '/images/programs/ha-giang.webp', path: '/taman-negara' },
      { name: 'SAPA', img: '/images/programs/sapa.webp', path: '/taman-negara' },
      { name: 'HO CHI MINH', img: '/images/programs/ho-chi-minh.webp', path: '/taman-negara' },
      { name: 'NHA TRANG', img: '/images/programs/nha-trang.webp', path: '/taman-negara' },
      { name: 'PHU QUOC', img: '/images/programs/phu-quoc.webp', path: '/taman-negara' },
      { name: 'DA NANG', img: '/images/programs/da-nang.webp', path: '/taman-negara' },
      { name: 'HOI AN', img: '/images/programs/hoi-an.webp', path: '/taman-negara' },
      { name: 'HUE', img: '/images/programs/hue.webp', path: '/taman-negara' },
      { name: 'BEN TRE', img: '/images/programs/ben-tre.webp', path: '/taman-negara' },
      { name: 'TRA VINH', img: '/images/programs/tra-vinh.webp', path: '/taman-negara' },
      { name: 'VINH LONG', img: '/images/programs/vinh-long.webp', path: '/taman-negara' },
      { name: 'MAI CHAU', img: '/images/programs/mai-chau.webp', path: '/taman-negara' },
      { name: 'HOA BINH', img: '/images/programs/hoa-binh.webp', path: '/taman-negara' },
      { name: 'DA LAT', img: '/images/programs/da-lat.webp', path: '/taman-negara' },
      { name: 'NAM CAT TIEN', img: '/images/programs/nam-cat-tien.webp', path: '/taman-negara' },
      { name: 'CU CHI', img: '/images/programs/cu-chi.webp', path: '/taman-negara' },
      { name: 'MADAGUI', img: '/images/programs/madagui.webp', path: '/taman-negara' },
    ],
  },
  {
    country: 'AISA - MALAYSIA',
    places: [
      { name: 'PENANG', img: '/images/programs/penang.webp', path: '/taman-negara' },
      { name: 'KUANTAN', img: '/images/programs/kuantan.webp', path: '/taman-negara' },
      { name: 'SARAWAK', img: '/images/programs/sarawak.webp', path: '/taman-negara' },
      { name: 'TAMAN NEGARA', img: '/images/programs/taman-negara.webp', path: '/taman-negara' },
      { name: 'GOPENG ADVENTURE', img: '/images/programs/gopeng-adventure.webp', path: '/taman-negara' },
      { name: 'KUALA LUMPUR', img: '/images/programs/kuala-lumpur.webp', path: '/taman-negara' },
      { name: 'CAMERON', img: '/images/programs/cameron.webp', path: '/taman-negara' },
      { name: 'LANGKAWI', img: '/images/programs/langkawi.webp', path: '/taman-negara' },
      { name: 'SABAH', img: '/images/programs/sabah.webp', path: '/taman-negara' },
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

        <Paragraph className="block md:hidden">{'Uncover amazing places\nwe take you to worldwide.'}</Paragraph>

        <Paragraph className="hidden md:block">{'Uncover amazing places we take you to worldwide.'}</Paragraph>

        <div>
          {destinations.map((section) => (
            <div key={section.country} className="mt-10 md:mt-20">
              <h2 className="flex h-[30px] items-center justify-center bg-[#00712D] text-center text-[20px] font-[800] text-white md:h-[80px] md:text-[32px]">
                {section.country}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {section.places.map((place) => (
                  <Link key={place.name} href={place.path} className="border border-[#00712D] relative h-[100px] cursor-pointer md:h-[252px]">
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
        <h2 className='hidden lg:block text-center text-[20px] font-[800] md:text-[32px] text-white whitespace-break-spaces'>
        {'PLANS CAN CHANGE — THAT’S WHY OUR POLICY IS\nDESIGNED TO GIVE YOU SECURITY AND CONFIDENCE.'}
    </h2>

    <h2 className='lg:hidden text-center text-[20px] font-[800] md:text-[32px] text-white whitespace-break-spaces'>
        {'PLANS CAN CHANGE\nTHAT’S WHY OUR POLICY IS\nDESIGNED TO GIVE YOU\nSECURITY AND CONFIDENCE.'}
    </h2>

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
