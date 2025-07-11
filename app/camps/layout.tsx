import Button from '@/components/Button'
import Gallery from '@/components/Gallery'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import DiscoverOurEstablishedDestinations1 from '@/public/images/discover_our_established_destinations_1.webp'
import DiscoverOurEstablishedDestinations2 from '@/public/images/discover_our_established_destinations_2.webp'
import DiscoverOurEstablishedDestinations3 from '@/public/images/discover_our_established_destinations_3.webp'
import DiscoverOurEstablishedDestinations4 from '@/public/images/discover_our_established_destinations_4.webp'
import DiscoverOurEstablishedDestinations5 from '@/public/images/discover_our_established_destinations_5.webp'


const images = [
  { src: DiscoverOurEstablishedDestinations1, title: 'VIETNAM', subTitle: 'SAPA' },
  { src: DiscoverOurEstablishedDestinations2, title: 'THAILAND', subTitle: '' },
  { src: DiscoverOurEstablishedDestinations3, title: 'VIETNAM', subTitle: 'HOIAN' },
  { src: DiscoverOurEstablishedDestinations4, title: 'VIETNAM', subTitle: 'DANANG' },
  { src: DiscoverOurEstablishedDestinations5, title: 'CHINA', subTitle: '' },
];

export default function CampsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>

        {children}

        <Container className="bg-[#00712D]">
      <Heading color="text-[#22C55E]">
      Discover our established destinations
        </Heading>

        <Gallery images={images} />
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Contact us to find out how Our Volunteer Programs can help your students achieve their learning outcomes during a school trip abroad!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Contact Us</Button>
        </div>
</Container>
    </>
  )
}
