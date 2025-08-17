import Image from 'next/image'
import Carousel from '../components/Carousel'
import Star from '@/public/images/star.svg'
import WhereWeTravel1 from '@/public/images/where_we_travel_1.webp'
import WhereWeTravel2 from '@/public/images/where_we_travel_2.webp'
import WhereWeTravel3 from '@/public/images/where_we_travel_3.webp'
import WhereWeTravel4 from '@/public/images/where_we_travel_4.webp'
import WhereWeTravel5 from '@/public/images/where_we_travel_5.webp'
import WeWillHandleTripForYou1 from '@/public/images/we_will_handle_your_trip_for_you_1.png'
import WeWillHandleTripForYou2 from '@/public/images/we_will_handle_your_trip_for_you_2.png'
import WeWillHandleTripForYou3 from '@/public/images/we_will_handle_your_trip_for_you_3.png'
import WeWillHandleTripForYou4 from '@/public/images/we_will_handle_your_trip_for_you_4.png'
import ByPrograms from '@/public/images/by_programs.svg'
import ByDestination from '@/public/images/by_destination.svg'
import LeadershipCamp from '@/public/images/leadership_camp.svg'
import SubjectCamp from '@/public/images/subject_camp.svg'
import NatureCamp from '@/public/images/nature_camp.svg'
import PopularPrograms1 from '@/public/images/popular_programs_1.webp'
import PopularPrograms2 from '@/public/images/popular_programs_2.webp'
import PopularPrograms3 from '@/public/images/popular_programs_3.webp'
import PopularPrograms4 from '@/public/images/popular_programs_4.webp'
import MarcusLim from '@/public/images/marcus_lim.png'
import Container from '@/components/Layout/Container'
import Sologan from '@/public/images/sologan.svg'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import Link from 'next/link'
import Paragraph from '@/components/Paragraph'

const programs = [
  {
    title: 'JUNGLE EXPEDITION CAMP, JANDA BAIK',
    subTitle: '4D3N | Ages 14 & above | RM1090 estimate',
    description:
      'The trip packs survival campcraft, independent foraging, ending with community service',
    img: PopularPrograms1,
  },
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
]

export default function Home() {
  return (
    <main>
              {/* Hero Section */}
              <div className="relative h-[50vh] md:h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/mobile_cover.webp')] md:bg-[url('../public/images/cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute px-5 md:px-[100px] z-1 flex flex-col items-center justify-center h-full w-full">
            <Image src={Sologan} layout="responsive" alt="reativity-activity-service" />

            <h2 className="text-[16px] md:text-[35px] font-[800] mt-3 mb-[77px] text-white text-center">
              CONNECT CULTURES, CREATE CHANGE
            </h2>

            <Button path="/our-programs">
              Explore Our Programs
            </Button>
          </div>
        </div>

      {/* OUR PROGRAMS */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">OUR PROGRAMS</Heading>

        <div className="text-[14px] md:text-[32px] font-[900] grid grid-cols-1 gap-4 md:gap-6 text-white md:max-w-[600px] m-auto">
        {[
            {
              img: NatureCamp,
              title: 'Nature Camps',
              url: '/camps/nature'
            },
            {
              img: LeadershipCamp,
              title: 'Leadership Camps',
              url: '/camps/leadership'
            },
            {
              img: SubjectCamp,
              title: 'Subject Camps',
              url: '/camps/subject'
            },
          ].map((item, index) => (
          <Link key={index} className="relative h-11 md:h-[105px] flex items-center justify-center gap-3 rounded-full bg-[#00712D]" href={item.url}>
            <div className="absolute start-0 flex p-2 md:p-5 items-center justify-center w-11 md:w-[105px] h-full border-2 border-white rounded-full">
                <Image src={item.img} layout="responsive" alt={item.title} />
            </div>
            
            {item.title}
          </Link>
          ))}
        </div>
        </Container>

      {/* Popular Programs - Carousel */}
      <Container className="bg-[#00712D] !px-0">
      <Heading color="text-white">POPULAR PROGRAMS</Heading>

        <Carousel list={programs} />

        <div className="mt-10 flex justify-center">
          <Button>
            View All 10+ Programs
          </Button>
        </div>
      </Container>

      {/* CHOOSE YOUR FAVORITE PROGRAM */}

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">
          CHOOSE YOUR FAVORITE PROGRAM
        </Heading>

        <div className="flex flex-row justify-center md:gap-24 gap-10">
        {[
            {
              img: ByPrograms,
              title: 'By Programs',
            },
            {
              img: ByDestination,
              title: 'By Destinations',
            },
          ].map((item, index) => (
            <div key={index} className="w-full max-w-[390px] bg-white border-2 border-[#00712D] rounded-[10px] flex-1">
              <div className="w-full h-full hover:opacity-30 flex flex-col items-center py-4 md:py-10 text-center cursor-pointer transition">
                  <Image className="max-w-14 md:max-w-[120px] aspect-square" src={item.img} alt="By Programs" layout="responsive" />

                <label className="font-[700] text-[14px] md:text-[24px] text-[#00712D] mt-5">{item.title}</label>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* WE'LL HANDLE YOUR TRIP FOR YOU */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">
          WE'LL HANDLE YOUR TRIP FOR YOU
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-10 lg:gap-x-6">
          {[
            {
              title: 'Flight Booking',
              img: WeWillHandleTripForYou1,
              description: 'Assist with securing the most convenient and cost-effective flight options for participants, managing itineraries, and providing timely updates on flight statuses',
            },
            {
              title: 'Tours & Activities',
              img: WeWillHandleTripForYou2,
              description: 'Engaging tours and activities that complement the main program, offering cultural immersion, local exploration trips and deeply memorable leisure experience',
            },
            {
              title: 'Airport Transfers',
              img: WeWillHandleTripForYou3,
              description: 'Arrange reliable transportation from the airport to the accommodation to ensure a comfortable and stress-free arrival and smooth departure experience for all attendees',
            },
            {
              title: 'Hotel Bookings',
              img: WeWillHandleTripForYou4,
              description: "Discover unique local stays that prioritize both comfort and safety. Immerse in authentic cultural experiences, knowing quality and well-being are assured at every curated venue.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 md:gap-6 flex-col md:flex-row">
                <Image src={item.img} alt={item.title} layout="responsive" className="flex-1 w-full aspect-square rounded-[10px] object-cover" />

              <div className="text-left flex-1">
                <h3 className="text-[18px] md:text-[24px] font-[900] mb-1.5 md:mb-6 text-[#00712D]">{item.title}</h3>

                <Paragraph className="!text-left">{item.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
        </Container>

      {/* WHERE WE TRAVEL */}
      <Container className="bg-[#00712D]">
      <Heading color="text-white">WHERE WE TRAVEL</Heading>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-2.5 md:gap-6 font-[900] text-[18px] md:text-[30px]">
        <div className="md:order-2 rounded-lg overflow-hidden relative w-full h-[40vw] md:h-[calc(40vw)]">
              <Image src={WhereWeTravel3} alt="Travel 3" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center whitespace-break-spaces">{`VIETNAM\nSAPA`}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5 md:gap-6">
            <div className="rounded-lg overflow-hidden relative w-full h-[35vw] md:h-full">
              <Image src={WhereWeTravel1} alt="Travel 1" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-center">THAILAND</h2>
            </div>

            <div className="rounded-lg overflow-hidden relative w-full h-[35vw] md:h-full">
              <Image src={WhereWeTravel2} alt="Travel 2" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center whitespace-break-spaces">{`VIETNAM\nHOIAN`}</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5 md:gap-6">
            <div className="rounded-lg overflow-hidden relative w-full h-[35vw] md:h-full">
              <Image src={WhereWeTravel4} alt="Travel 4" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center whitespace-break-spaces">{`VIETNAM\nDANANG`}</h2>
            </div>

            <div className="rounded-lg overflow-hidden relative w-full h-[35vw] md:h-full">
              <Image src={WhereWeTravel5} alt="Travel 5" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">CHINA</h2>
            </div>
          </div>
        </div>
        </Container>

      {/* OUR FAVORITE TRAVELERS */}
        <Container className="bg-[url('../public/images/our_favorite_travelers_cover.png')]">
        <Heading color="text-[#22C55E]">
          OUR FAVORITE TRAVELERS
        </Heading>

        <div className="flex space-x-4 md:space-x-6 overflow-x-scroll no-scrollbar mx-[-20px] px-[20px] md:mx-[-100px] md:px-[100px]">
          {[
            {
              name: 'Marcus Lim\n(Singapore)',
              text: 'The trip offered an unparalleled real-world extension to our curriculum, providing students with deep insights into sustainable development and community engagement that simply cannot be replicated in a classroom setting.',
              img: MarcusLim,
            },
            {
              name: 'Amir Hassan\n(Malaysia)',
              text: "We observed significant growth in our students' soft skills, including leadership, intercultural communication, and problem-solving abilities. Their initiative and perseverance, especially during project work, were truly impressive.",
              img: MarcusLim,
            },
            {
              name: 'Wijaya\n(Indonesia)',
              text: 'The Trip is a life-changing experience. Getting to work directly with the local community and seeing the impact of my efforts was incredibly rewarding. I learned so much about myself and the world.',
              img: MarcusLim,
            },
            {
              name: 'Kai\n(Singapore)',
              text: 'This trip was truly a transformative learning journey beyond classroom. Immersing myself in new cultures and academic disciplines, broadens my global perspective and understands culture.',
              img: MarcusLim,
            },
            {
              name: 'Miya\n(Thailand)',
              text: `The trip perfectly blended exciting adventures with crucial environmental conservation efforts. I deeply understand the interconnectedness of ecosystems, which is something you can't fully grasp from a textbook.`,
              img: MarcusLim,
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-white p-3.5 md:px-7 md:py-9 gap-4 md:gap-6 flex-1 min-w-[calc(100vw/1.7)] md:min-w-[calc(100vw/3.8)]">
              <p className="text-[12px] md:text-[22px] text-[#00712D] font-[600]">{item.text}</p>

              <div className="flex items-center gap-2.5 md:gap-5">
                <div className="relative w-[44px] min-w-[44px] h-[44px] md:min-w-[84px] md:h-[84px] rounded-full">
                  <Image src={item.img} alt={item.name} className="absolute" layout="fill" />
</div>

                <div className="flex-1">
                  <label className="whitespace-break-spaces font-[900] text-[14px] md:text-[24px] text-[#00712D] mb-[5px]">{item.name}</label>

                  <div className="grid grid-cols-5 gap-1.5 md:gap-2.5">
                    <Image src={Star} alt='star' className="w-full min-w-5 max-w-10 aspect-square" />

                    <Image src={Star} alt='star' className="w-full min-w-5 max-w-10 aspect-square" />

                    <Image src={Star} alt='star' className="w-full min-w-5 max-w-10 aspect-square" />

                    <Image src={Star} alt='star' className="w-full min-w-5 max-w-10 aspect-square" />

                    <Image src={Star} alt='star' className="w-full min-w-5 max-w-10 aspect-square" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Container>

        <Container className="bg-[#ECFAE5]">
          <div className="flex flex-col md:flex-row gap-x-16 gap-y-2.5">
            <div className="flex-1">
        <Heading color="text-[#00712D] !text-left">
      GET LATEST & UPDATES TRIP PROGRAMS
        </Heading>

        <Paragraph className="!text-left">
Curious how we can elevate student hiring and empower your team? Join our demo to explore the future of seamless recruitment.
</Paragraph>
</div>

<div className="space-y-2.5 flex-auto w-full md:w-64">
  <input className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full bg-[#00712D1A] border-none placeholder:text-[#00712D80]" placeholder="Name"></input>

  <input className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full bg-[#00712D1A] border-none placeholder:text-[#00712D80]" placeholder="Email" type="email"></input>

  <input className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full bg-[#00712D1A] border-none placeholder:text-[#00712D80]" placeholder="Inquiries"></input>
  </div>
  </div>
  
        <div className="mt-3.5 md:mt-10 flex justify-center">
        <Button path="/contact-us">Subscribe</Button>
        </div>
</Container>
    </main>
  )
}
