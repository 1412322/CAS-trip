import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import WhereWeTravel2 from '@/public/images/where_we_travel_2.webp'
import Image from 'next/image'

const destinations = [
  {
    country: "AISA - VIETNAM",
    places: [
      { name: "HA NOI", img: WhereWeTravel2 },
      { name: "HA GIANG", img: "/images/vietnam/ha-giang.jpg" },
      { name: "SAPA", img: "/images/vietnam/sapa.jpg" },
      { name: "HO CHI MINH", img: "/images/vietnam/ho-chi-minh.jpg" },
      { name: "NHA TRANG", img: "/images/vietnam/nha-trang.jpg" },
      { name: "PHU QUOC", img: "/images/vietnam/phu-quoc.jpg" },
      { name: "DA NANG", img: "/images/vietnam/da-nang.jpg" },
      { name: "HOI AN", img: "/images/vietnam/hoi-an.jpg" },
      { name: "HUE", img: "/images/vietnam/hue.jpg" },
      { name: "BEN TRE", img: "/images/vietnam/ben-tre.jpg" },
      { name: "TRA VINH", img: "/images/vietnam/tra-vinh.jpg" },
      { name: "VINH LONG", img: "/images/vietnam/vinh-long.jpg" },
      { name: "MAI CHAU", img: "/images/vietnam/mai-chau.jpg" },
      { name: "HOA BINH", img: "/images/vietnam/hoa-binh.jpg" },
      { name: "DA LAT", img: "/images/vietnam/da-lat.jpg" },
      { name: "NAM CAT TIEN", img: "/images/vietnam/nam-cat-tien.jpg" },
      { name: "CU CHI", img: "/images/vietnam/cu-chi.jpg" },
      { name: "MADAGUI", img: "/images/vietnam/madagui.jpg" },
    ],
  },
  {
    country: "AISA - MALAYSIA",
    places: [
      { name: "PENANG", img: "/images/malaysia/penang.jpg" },
      { name: "KUANTAN", img: "/images/malaysia/kuantan.jpg" },
      { name: "SARAWAK", img: "/images/malaysia/sarawak.jpg" },
      { name: "TAMAN NEGARA", img: "/images/malaysia/taman-negara.jpg" },
      { name: "GOPENG ADVENTURE", img: "/images/malaysia/gopeng.jpg" },
      { name: "KUALA LUMPUR", img: "/images/malaysia/kuala-lumpur.jpg" },
      { name: "CAMERON", img: "/images/malaysia/cameron.jpg" },
      { name: "LANGKAWI", img: "/images/malaysia/langkawi.jpg" },
      { name: "SABAH", img: "/images/malaysia/sabah.jpg" },
    ],
  },
];

export default function OurPrograms() {
  return (
    <main>
      {/* TOP DESTINATIONS FOR STUDENT TRAVEL EXPERIENCES */}
      <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E] pt-16 md:pt-20">
      TOP DESTINATIONS FOR STUDENT TRAVEL EXPERIENCES
        </Heading>

<Paragraph>
Uncover amazing places we take you to worldwide.
</Paragraph>

<div>
      {destinations.map((section) => (
        <div key={section.country} className="mt-10 md:mt-20">
          <h2 className="bg-[#00712D] text-white text-center font-[800] h-[30px] md:h-[80px] flex items-center justify-center text-[20px] md:text-[32px]">
            {section.country}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {section.places.map((place) => (
              <div
                key={place.name}
                className="relative h-[100px] md:h-[252px] cursor-pointer"
              >
                <Image
                  src={place.img}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white font-[800] text-[30px] md:text-[50px] text-center">
                    {place.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
        </Container>

        <Container className="relative bg-[url('../public/images/our_mission_cover.jpg')] z-0">
      <Heading color="text-white">
      PLANS CAN CHANGE — THAT’S WHY OUR POLICY IS DESIGNED TO GIVE YOU SECURITY AND CONFIDENCE.
        </Heading>

        <div className="absolute inset-0 bg-[#00712D] opacity-50 z-[-1]" />

<div className="absolute inset-0 bg-[#000] opacity-50 z-[-1]" />
        </Container>

        <Container className="bg-[#ECFAE5]">
        <div className="mt-10 flex justify-center">
        <Button path="/contact-us">Contact Us</Button>
        </div>
</Container>
    </main>
  )
}
