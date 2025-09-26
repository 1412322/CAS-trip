import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import ByDestination from '@/public/images/by_destination.svg'
import ByPrograms from '@/public/images/by_programs.svg'
import LeadershipCamp from '@/public/images/leadership_camp.svg'
import NatureCamp from '@/public/images/nature_camp.svg'
import Sologan from '@/public/images/sologan.svg'
import SubjectCamp from '@/public/images/subject_camp.svg'
import WeWillHandleTripForYou1 from '@/public/images/we_will_handle_your_trip_for_you_1.webp'
import WeWillHandleTripForYou2 from '@/public/images/we_will_handle_your_trip_for_you_2.webp'
import WeWillHandleTripForYou3 from '@/public/images/we_will_handle_your_trip_for_you_3.webp'
import WeWillHandleTripForYou4 from '@/public/images/we_will_handle_your_trip_for_you_4.webp'
import WhereWeTravel1 from '@/public/images/where_we_travel_1.webp'
import WhereWeTravel2 from '@/public/images/where_we_travel_2.webp'
import WhereWeTravel3 from '@/public/images/where_we_travel_3.webp'
import WhereWeTravel4 from '@/public/images/where_we_travel_4.webp'
import WhereWeTravel5 from '@/public/images/where_we_travel_5.webp'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import Destinations from './Destinations'
import Partners from './Partners'
import Travelers from './Travelers'

export default function Home() {
  return null
  // return (
  //   <main>
  //     {/* Hero Section */}
  //     <div className="relative h-[50vh] bg-[url('../public/images/mobile_cover.webp')] bg-cover bg-center bg-no-repeat md:h-screen md:max-h-[655px] md:bg-[url('../public/images/cover.png')]">
  //       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  //       <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center px-5 md:px-[100px]">
  //         <Image src={Sologan} layout="responsive" alt="reativity-activity-service" />

  //         <h2 className="mb-[77px] mt-3 text-center text-[16px] font-[800] text-white md:text-[35px]">
  //           CONNECT CULTURES, CREATE CHANGE
  //         </h2>

  //         <Button path="/our-programs">Explore Our Programs</Button>
  //       </div>
  //     </div>

  //     {/* OUR PROGRAMS */}
  //     <Container className="bg-[#ECFAE5]">
  //       <Heading color="text-[#22C55E]">OUR PROGRAMS</Heading>

  //       <div className="m-auto grid grid-cols-1 gap-4 text-[14px] font-[900] text-white max-w-64 md:max-w-2xl md:gap-6 md:text-[32px]">
  //         {[
  //           {
  //             img: NatureCamp,
  //             title: 'NATURE CAMPS',
  //             url: '/camps/nature',
  //           },
  //           {
  //             img: SubjectCamp,
  //             title: 'SUBJECT CAMPS',
  //             url: '/camps/subject',
  //           },
  //           {
  //             img: LeadershipCamp,
  //             title: 'LEADERSHIP CAMPS',
  //             url: '/camps/leadership',
  //           },
  //         ].map((item, index) => (
  //           <Link
  //             key={index}
  //             className="relative flex h-11 items-center justify-center gap-3 rounded-full bg-[#00712D] md:h-28"
  //             href={item.url}
  //           >
  //             <div className="absolute start-0 flex h-full w-11 items-center justify-center rounded-full border-2 border-white p-2 md:w-28 md:p-5">
  //               <Image src={item.img} layout="responsive" alt={item.title} />
  //             </div>

  //             <div className="ml-11 md:ml-28">{item.title}</div>
  //           </Link>
  //         ))}
  //       </div>
  //     </Container>

  //     {/* Popular Programs - Carousel */}
  //     <Container className="bg-[#00712D] !px-0">
  //       <Heading color="text-white">POPULAR DESTINATIONS</Heading>

  //       <Destinations />

  //       <div className="mt-5 md:mt-10 flex justify-center">
  //         <Button path="/our-programs">View All 10+ Programs</Button>
  //       </div>
  //     </Container>

  //     {/* CHOOSE YOUR FAVORITE PROGRAM */}

  //     <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
  //       <Heading color="text-[#22C55E] whitespace-break-spaces md:whitespace-normal">{`CHOOSE YOUR\nFAVORITE PROGRAM`}</Heading>

  //       <div className="flex flex-row justify-center gap-5 md:gap-24">
  //         {[
  //           {
  //             img: ByPrograms,
  //             title: 'By Programs',
  //             path: '/camps/nature',
  //           },
  //           {
  //             img: ByDestination,
  //             title: 'By Destinations',
  //             path: '/our-programs',
  //           },
  //         ].map((item, index) => (
  //           <Link
  //             key={index}
  //             href={item.path}
  //             className="w-full max-w-[390px] flex-1 rounded-[10px] border md:border-2 border-[#00712D] bg-white"
  //           >
  //             <div className="flex h-full w-full cursor-pointer flex-col items-center py-4 text-center transition hover:opacity-30 md:py-10">
  //               <Image
  //                 className="aspect-square max-w-14 md:max-w-[120px]"
  //                 src={item.img}
  //                 alt="By Programs"
  //                 layout="responsive"
  //               />

  //               <label className="mt-4 text-[14px] font-[700] text-[#00712D] md:text-[24px]">{item.title}</label>
  //             </div>
  //           </Link>
  //         ))}
  //       </div>
  //     </Container>

  //     {/* WE'LL HANDLE YOUR TRIP FOR YOU */}
  //     <Container className="bg-[#ECFAE5]">
  //       <Heading color="text-[#22C55E] whitespace-break-spaces md:whitespace-normal">{`WE'LL HANDLE\nYOUR TRIP`}</Heading>

  //       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10">
  //         {[
  //           {
  //             title: 'Flight Booking',
  //             img: WeWillHandleTripForYou1,
  //             description:
  //               'Assist with securing the most convenient and cost-effective flight options for participants, managing itineraries, and providing timely updates on flight statuses.',
  //           },
  //           {
  //             title: 'Tours & Activities',
  //             img: WeWillHandleTripForYou2,
  //             description:
  //               'Engaging tours and activities that complement the main program, offering cultural immersion, local exploration trips and deeply memorable leisure experience.',
  //           },
  //           {
  //             title: 'Airport Transfers',
  //             img: WeWillHandleTripForYou3,
  //             description:
  //               'Arrange reliable transportation from the airport to the accommodation to ensure a comfortable and stress-free arrival and  smooth departure experience for all attendees.',
  //           },
  //           {
  //             title: 'Hotel Bookings',
  //             img: WeWillHandleTripForYou4,
  //             description:
  //               'Discover unique local stays that prioritize both comfort and safety. Immerse in authentic cultural experiences, knowing quality and well-being are assured at every curated venue.',
  //           },
  //         ].map((item, index) => (
  //           <div key={index} className="flex flex-col items-center gap-2.5 md:flex-row md:gap-6">
  //             <div className="flex-1 w-full">
  //               <Image src={item.img} alt={item.title} className="aspect-square w-full rounded-[10px] object-cover" />
  //             </div>

  //             <div className="flex-1 text-left">
  //               <h3 className="mb-1.5 text-[18px] font-[900] text-[#00712D] md:mb-6 md:text-[24px]">{item.title}</h3>

  //               <Paragraph className="!text-left">{item.description}</Paragraph>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </Container>

  //     {/* WHERE WE TRAVEL */}
  //     <Container className="bg-[#00712D]">
  //       <Heading color="text-white">WHERE WE TRAVEL</Heading>

  //       <div className="grid grid-cols-1 gap-2.5 text-[18px] font-[900] md:grid-cols-3 lg:gap-8 lg:text-[30px]">
  //         <div className="order-1 md:order-0 grid grid-cols-2 gap-2.5 md:grid-cols-1 lg:gap-8">
  //           <div className="relative h-[35vw] w-full overflow-hidden rounded-[10px] lg:rounded-[20px] md:h-full">
  //             <Image src={WhereWeTravel1} alt="Travel 1" layout="fill" className="object-cover" />

  //             <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white">
  //               THAILAND
  //             </h2>
  //           </div>

  //           <div className="relative h-[35vw] w-full overflow-hidden rounded-[10px] lg:rounded-[20px] md:h-full">
  //             <Image src={WhereWeTravel2} alt="Travel 2" layout="fill" className="object-cover" />

  //             <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-break-spaces text-center text-white">{`VIETNAM\nHOI AN`}</h2>
  //           </div>
  //         </div>

  //         <div className="order-0 md:order-1 relative h-[40vw] w-full overflow-hidden rounded-[10px] lg:rounded-[20px] md:h-[calc(40vw)]">
  //           <Image src={WhereWeTravel3} alt="Travel 3" layout="fill" className="object-cover" />

  //           <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-break-spaces text-center text-white">{`VIETNAM\nSAPA`}</h2>
  //         </div>

  //         <div className="order-2 grid grid-cols-2 gap-2.5 md:grid-cols-1 lg:gap-8">
  //           <div className="relative h-[35vw] w-full overflow-hidden rounded-[10px] lg:rounded-[20px] md:h-full">
  //             <Image src={WhereWeTravel4} alt="Travel 4" layout="fill" className="object-cover" />

  //             <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-break-spaces text-center text-white">{`VIETNAM\nDA NANG`}</h2>
  //           </div>

  //           <div className="relative h-[35vw] w-full overflow-hidden rounded-[10px] lg:rounded-[20px] md:h-full">
  //             <Image src={WhereWeTravel5} alt="Travel 5" layout="fill" className="object-cover" />

  //             <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white">
  //               CHINA
  //             </h2>
  //           </div>
  //         </div>
  //       </div>
  //     </Container>

  //     <Container className="bg-[#ECFAE5] !px-0 !pb-0">
  //       <Heading color="text-[#22C55E]">OUR PARTNERS</Heading>

  //       <Partners />
  //     </Container>

  //     {/* OUR FAVORITE TRAVELERS */}
  //     <Container className="bg-[url('../public/images/our_favorite_travelers_cover.png')]">
  //       <Heading color="text-white">OUR FAVORITE TRAVELERS</Heading>

  //       <Travelers />
  //     </Container>

  //     <Container className="bg-[#ECFAE5]">
  //       <div className="flex flex-col gap-x-16 gap-y-2.5 lg:flex-row">
  //         <div className="flex-1">
  //           <Heading color="text-[#00712D] !text-left">LATEST TRIP UPDATES</Heading>

  //           <Paragraph className="!text-left">
  //             Subscribe here to receive comprehensive updates on all current and upcoming Our CAS Trips.
  //           </Paragraph>
  //         </div>

  //         <div className="w-full flex-auto space-y-2.5 lg:w-64">
  //           <input
  //             className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-none border-[#00712D] bg-[#00712D1A] p-2.5 text-[12px] font-[600] text-[#00712D] placeholder:text-[#00712D80] md:h-16 md:p-5 md:text-[24px]"
  //             placeholder="Name"
  //           ></input>

  //           <input
  //             className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-none border-[#00712D] bg-[#00712D1A] p-2.5 text-[12px] font-[600] text-[#00712D] placeholder:text-[#00712D80] md:h-16 md:p-5 md:text-[24px]"
  //             placeholder="Email"
  //             type="email"
  //           ></input>

  //           <input
  //             className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-none border-[#00712D] bg-[#00712D1A] p-2.5 text-[12px] font-[600] text-[#00712D] placeholder:text-[#00712D80] md:h-16 md:p-5 md:text-[24px]"
  //             placeholder="Inquiries"
  //           ></input>
  //         </div>
  //       </div>

  //       <div className="mt-3.5 flex justify-center md:mt-10">
  //         <Button path="/">Subscribe</Button>
  //       </div>
  //     </Container>
  //   </main>
  // )
}
