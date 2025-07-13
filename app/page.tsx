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
import Container from '@/components/Layout/Container'
import Sologan from '@/public/images/sologan.svg'
import Heading from '@/components/Heading'
import Button from '@/components/Button'

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
              <div className="relative h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="top-[10%] absolute px-3 md:px-0 z-1 flex flex-col items-center justify-center h-full w-full">
            <Image src={Sologan} height={113} alt="reativity-activity-service" />

            <h2 className="text-[35px] font-[800] mt-3 mb-[77px] text-white text-center">
              CONNECT CULTURES, CREATE CHANGE
            </h2>

            <Button>
              Explore Our Programs
            </Button>
          </div>
        </div>

      {/* OUR PROGRAMS */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">OUR PROGRAMS</Heading>

        <div className="text-[32px] font-[900] grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-7 text-white">
        {[
            {
              img: NatureCamp,
              title: 'By Programs',
            },
            {
              img: LeadershipCamp,
              title: 'Leadership Camps',
            },
            {
              img: SubjectCamp,
              title: 'Subject Camps',
            },
            {
              img: undefined,
              title: '//////',
            },
          ].map((item, index) => (
          <button key={index} className="relative h-[105px] flex items-center justify-center gap-3 rounded-full bg-[#00712D]">
            <div className="absolute start-0 flex p-5 items-center justify-center w-[105px] h-full border-2 border-white rounded-full">
                <Image src={item.img} layout="responsive" alt={item.title} />
            </div>
            
            {item.title}
          </button>
          ))}
        </div>
        </Container>

      {/* Popular Programs - Carousel */}
      <section className="bg-[#00712D]">
      <div className="py-20">
      <Heading color="text-white">POPULAR PROGRAMS</Heading>

        <Carousel list={programs} />

        <div className="mt-10 flex justify-center">
          <Button>
            View All 10+ Programs
          </Button>
        </div>
        </div>
      </section>

      {/* CHOOSE YOUR FAVORITE PROGRAM */}

      <Container className="bg-[#ECFAE5] pb-0">
        <Heading color="text-[#22C55E]">
          CHOOSE YOUR FAVORITE PROGRAM
        </Heading>

        <div className="flex md:flex-row flex-col justify-center md:gap-24 gap-6">
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
            <div key={index} className="w-full max-w-[390px] bg-white border-2 border-[#00712D] rounded-[15px]">
              <div className="w-full h-fill hover:opacity-30 flex flex-col items-center p-10 text-center cursor-pointer transition">
                  <Image className="max-w-[120px] aspect-square" src={item.img} alt="By Programs" layout="responsive" />

                <label className="font-[700] text-[24px] text-[#00712D] mt-6">{item.title}</label>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
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
              description: "Handle reservations at selected hotels, prioritizing safety, comfort, and proximity to program venues or key attractions, tailored to the group's needs",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-6 flex-col md:flex-row">
                <Image src={item.img} alt={item.title} layout="responsive" className="flex-1 max-w-[290px] w-full aspect-square rounded-[20px] object-cover" />

              <div className="md:text-left text-center flex-1">
                <h3 className="text-[24px] font-[900] mb-[25px] text-[#00712D]">{item.title}</h3>

                <p className="text-[18px] font-[600] text-[#00712D]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </Container>

      {/* WHERE WE TRAVEL */}
      <Container className="bg-[#00712D]">
      <Heading color="text-white">WHERE WE TRAVEL</Heading>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-lg overflow-hidden relative w-full h-[50vw] md:h-full">
              <Image src={WhereWeTravel1} alt="Travel 1" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[900] text-[30px] text-white text-center">THAILAND</h2>
            </div>

            <div className="rounded-lg overflow-hidden relative w-full  h-[50vw] md:h-full">
              <Image src={WhereWeTravel2} alt="Travel 2" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[900] text-[30px] text-white text-center whitespace-break-spaces">{`VIETNAM\nHOIAN`}</h2>
            </div>
          </div>
         
            <div className="rounded-lg overflow-hidden relative w-full h-[100vw] md:h-[calc(40vw)]">
              <Image src={WhereWeTravel3} alt="Travel 3" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[900] text-[30px] text-white text-center whitespace-break-spaces">{`VIETNAM\nSAPA`}</h2>
            </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-lg overflow-hidden relative w-full h-[50vw] md:h-full">
              <Image src={WhereWeTravel4} alt="Travel 4" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[900] text-[30px] text-white text-center whitespace-break-spaces">{`VIETNAM\nDANANG`}</h2>
            </div>

            <div className="rounded-lg overflow-hidden relative w-full h-[50vw] md:h-full">
              <Image src={WhereWeTravel5} alt="Travel 5" layout="fill" className="object-cover" />

              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[900] text-[30px] text-white text-center">CHINA</h2>
            </div>
          </div>
        </div>
        </Container>

      {/* OUR FAVORITE TRAVELERS */}
        <Container className="bg-[url('../public/images/our_favorite_travelers_cover.png')]">
        <Heading color="text-[#22C55E]">
          OUR FAVORITE TRAVELERS
        </Heading>

        <div className="flex space-x-8 overflow-x-scroll no-scrollbar">
          {[
            {
              name: 'Marcus Lim\n(Singapore)',
              text: 'The trip offered an unparalleled real-world extension to our curriculum, providing students with deep insights into sustainable development and community engagement that simply cannot be replicated in a classroom setting.',
              img: '/traveler1.jpg',
            },
            {
              name: 'Amir Hassan\n(Malaysia)',
              text: "We observed significant growth in our students' soft skills, including leadership, intercultural communication, and problem-solving abilities. Their initiative and perseverance, especially during project work, were truly impressive.",
              img: '/traveler2.jpg',
            },
            {
              name: 'Wijaya\n(Indonesia)',
              text: 'The Trip is a life-changing experience. Getting to work directly with the local community and seeing the impact of my efforts was incredibly rewarding. I learned so much about myself and the world.',
              img: '/traveler3.jpg',
            },
            {
              name: 'Kai\n(Singapore)',
              text: 'This trip was truly a transformative learning journey beyond classroom. Immersing myself in new cultures and academic disciplines, broadens my global perspective and understands culture.',
              img: '/traveler3.jpg',
            },
            {
              name: 'Miya\n(Thailand)',
              text: `The trip perfectly blended exciting adventures with crucial environmental conservation efforts. I deeply understand the interconnectedness of ecosystems, which is something you can't fully grasp from a textbook.`,
              img: '/traveler3.jpg',
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-white py-10 px-6 min-w-[397px]">
              <p className="mb-6 text-[22px] text-[#00712D] font-[600]">{item.text}</p>

              <div className="flex items-center gap-5">
                <div className="min-w-16 min-h-16 md:min-w-[84px] md:min-h-[84px] relative rounded-full overflow-hidden border-4 border-[#00712D]">
                  <Image src={item.img} alt={item.name} layout="fill" className="object-cover" />
                </div>

                <div>
                  <label className="font-[900] text-[24px] text-[#00712D] mb-[5px]">{item.name}</label>

                  <div className="flex space-x-2.5">
                    <Image src={Star} alt='star' className="max-w-10 aspect-square" layout="responsive" />

                    <Image src={Star} alt='star' className="max-w-10 aspect-square" layout="responsive" />

                    <Image src={Star} alt='star' className="max-w-10 aspect-square" layout="responsive" />

                    <Image src={Star} alt='star' className="max-w-10 aspect-square" layout="responsive" />

                    <Image src={Star} alt='star' className="max-w-10 aspect-square" layout="responsive" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Container>
    </main>
  )
}
