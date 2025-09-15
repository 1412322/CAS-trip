import Button from '@/components/Button'
import Gallery from '@/components/Gallery'
import Container from '@/components/Layout/Container'
import DiscoverOurEstablishedDestinations1 from '@/public/images/where_we_travel_1.webp'
import DiscoverOurEstablishedDestinations2 from '@/public/images/where_we_travel_2.webp'
import DiscoverOurEstablishedDestinations3 from '@/public/images/where_we_travel_3.webp'
import DiscoverOurEstablishedDestinations4 from '@/public/images/where_we_travel_4.webp'
import DiscoverOurEstablishedDestinations5 from '@/public/images/where_we_travel_5.webp'

const images = [
  { src: DiscoverOurEstablishedDestinations3, title: 'VIETNAM', subTitle: 'SAPA' },
  { src: DiscoverOurEstablishedDestinations1, title: 'THAILAND', subTitle: '' },
  { src: DiscoverOurEstablishedDestinations2, title: 'VIETNAM', subTitle: 'HOI AN' },
  { src: DiscoverOurEstablishedDestinations4, title: 'VIETNAM', subTitle: 'DA NANG' },
  { src: DiscoverOurEstablishedDestinations5, title: 'CHINA', subTitle: '' },
]

export default function CampsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Container className="bg-[#00712D]">
        <h2 className="flex flex-col lg:flex-row justify-center md:gap-2 text-center text-[20px] font-[800] md:text-[32px] text-white mb-3 md:mb-8">
          DISCOVER OUR<div className="text-[#FFA726]">ESTABLISHED DESTINATIONS</div>
        </h2>

        <Gallery images={images} />

        <div className="mt-5 md:mt-10 flex justify-center">
          <Button path="/our-programs">View More Our Programs</Button>
        </div>
      </Container>

      <Container className="bg-[#ECFAE5]">
        <p className="text-[10px] md:text-[32px] font-[800] text-center text-[#00712D]">
          Contact us to find out how Our Volunteer Programs can help your students achieve their learning outcomes
          during a school trip abroad!
        </p>

        <div className="mt-5 md:mt-10 flex justify-center">
          <Button path="/contact-us">Contact Us</Button>
        </div>
      </Container>
    </>
  )
}
