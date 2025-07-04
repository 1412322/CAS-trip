import Image from 'next/image'
import Carousel from '../components/Carousel'
import WhereWeTravel1 from '@/public/images/where_we_travel_1.png'
import WhereWeTravel2 from '@/public/images/where_we_travel_2.png'
import WhereWeTravel3 from '@/public/images/where_we_travel_3.png'
import WhereWeTravel4 from '@/public/images/where_we_travel_4.png'
import WhereWeTravel5 from '@/public/images/where_we_travel_5.png'
import WeWillHandleTripForYou1 from '@/public/images/we_will_handle_your_trip_for_you_1.png'
import WeWillHandleTripForYou2 from '@/public/images/we_will_handle_your_trip_for_you_2.png'
import WeWillHandleTripForYou3 from '@/public/images/we_will_handle_your_trip_for_you_3.png'
import WeWillHandleTripForYou4 from '@/public/images/we_will_handle_your_trip_for_you_4.png'
import ByPrograms from '@/public/images/by_programs.svg'
import ByDestination from '@/public/images/by_destination.svg'
import LeadershipCamp from '@/public/images/leadership_camp.svg'
import SubjectCamp from '@/public/images/subject_camp.svg'
import NatureCamp from '@/public/images/nature_camp.svg'
import PopularProgram from '@/public/images/popular_program.jpg'
import Container from '@/components/Layout/Container'
import Sologan from '@/public/images/sologan.svg'

const programs = [
  {
    title: 'Jungle Expedition Camp, Janda Baik',
    subTitle: '4D3N | Ages 14 & above | RM1090 estimate',
    description:
      'The trip packs survival campcraft, independent foraging, ending with community service',
    img: PopularProgram,
  },
  {
    title: 'Wilderness Skills Camp, Janda Baik',
    subTitle: '3D2N | Ages 11-17 | RM850 estimate',
    description:
      'Embark on an unforgettable 3-day learning essential survival skills sharpening your collaborative edge',
    img: PopularProgram,
  },
  {
    title: 'Eco Conservation Camp, Penyabong',
    subTitle: '3D2N | Ages 10-16 | RM790 estimate',
    description:
      'Get hands-on with campcraft. Learn to build shelters, dive into conservation and create idea for conservation',
    img: PopularProgram,
  },
  {
    title: 'Jungle Expedition Camp, Janda Baik',
    subTitle: '3D2N | Ages 10-16 | RM840 estimate',
    description:
      "Trekking up Sungai Chemperoh, riding horse and outdoor cooking. Experience nature's create lasting memories with us",
    img: PopularProgram,
  },
  {
    title: 'Leadership & Service Camp',
    subTitle: '3D2N | Ages 12-17 | RM890 estimate',
    description:
      'Boost your leadership mindset through simulations, bonding challenges and service work',
    img: PopularProgram,
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

            <button className="text-white px-8 py-4 rounded-xl bg-[#FFA726] text-[20px] font-[600]">
              Explore Our Programs
            </button>
          </div>
        </div>

      {/* OUR PROGRAMS */}
      <Container background="bg-[#ECFAE5]">
        <h2 className="text-center text-[32px] font-[800] text-[#22C55E] mb-8">OUR PROGRAMS</h2>

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
              <div className="relative w-full h-full">
                <Image src={item.img} layout="fill" alt={item.title} />
              </div>
            </div>
            
            {item.title}
          </button>
          ))}
        </div>
        </Container>

      {/* Popular Programs - Carousel */}
      <section className="bg-[#00712D]">
      <div className="py-20">
      <h2 className="font-[800] text-[32px] text-center mb-[32px] text-white">POPULAR PROGRAMS</h2>

        <Carousel list={programs} />

        <div className="mt-10 flex justify-center">
          <button className="text-white px-8 py-4 rounded-xl bg-[#FFA726] text-[20px] font-[600]">
            View All 10+ Programs
          </button>
        </div>
        </div>
      </section>

      {/* CHOOSE YOUR FAVORITE PROGRAM */}

      <Container background="bg-[#ECFAE5]" className="pb-0">
        <h2 className="text-[32px] font-[800] text-[#22C55E] text-center mb-8">
          CHOOSE YOUR FAVORITE PROGRAM
        </h2>

        <div className="flex sm:flex-row flex-col justify-center sm:gap-24 gap-6">
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
                <div className="relative max-w-[120px] w-full aspect-square">
                  <Image src={item.img} alt="By Programs" layout="fill" />
                </div>

                <label className="font-[700] text-[24px] text-[#00712D] mt-6">{item.title}</label>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* WE'LL HANDLE YOUR TRIP FOR YOU */}
      <Container background="bg-[#ECFAE5]">
        <h2 className="text-[32px] font-[800] text-[#22C55E] text-center mb-8">
          WE'LL HANDLE YOUR TRIP FOR YOU
        </h2>

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
            <div key={index} className="flex items-center gap-6 flex-col sm:flex-row">
              <div className="relative min-w-[290px] w-full aspect-square rounded-xl">
                <Image src={item.img} alt={item.title} layout="fill" className="object-cover" />
              </div>

              <div className="sm:text-left text-center">
                <h3 className="text-[24px] font-[900] mb-[25px] text-[#00712D]">{item.title}</h3>

                <p className="text-[18px] font-[600] text-[#00712D]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </Container>

      {/* WHERE WE TRAVEL */}
      <Container background="bg-[#00712D]">
        <h2 className="font-[800] text-[32px] text-center mb-[32px] text-white">WHERE WE TRAVEL</h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-lg overflow-hidden relative w-full h-[50vw] md:h-full">
              <Image src={WhereWeTravel1} alt="Travel 1" layout="fill" className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden relative w-full  h-[50vw] md:h-full">
              <Image src={WhereWeTravel2} alt="Travel 2" layout="fill" className="object-cover" />
            </div>
          </div>
         
            <div className="rounded-lg overflow-hidden relative w-full h-[100vw] md:h-[calc(40vw)]">
              <Image src={WhereWeTravel3} alt="Travel 3" layout="fill" className="object-cover" />
            </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="rounded-lg overflow-hidden relative w-full h-[50vw] md:h-full">
              <Image src={WhereWeTravel4} alt="Travel 4" layout="fill" className="object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden relative w-full h-[50vw] md:h-full">
              <Image src={WhereWeTravel5} alt="Travel 5" layout="fill" className="object-cover" />
            </div>
          </div>
        </div>
        </Container>

      {/* OUR FAVORITE TRAVELERS */}
        <Container background="bg-[url('../public/images/our_favorite_travelers_cover.png')]">
        <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-[72px]">
          OUR FAVORITE TRAVELERS
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Juan Gonzales',
              text: 'The trip offered an unparalleled real-world extension to our curriculum, providing students with deep insights into sustainable development and community engagement that simply cannot be replicated in a classroom setting',
              img: '/traveler1.jpg',
            },
            {
              name: 'Kelly Cuambot',
              text: "We observed significant growth in our students' soft skills, including leadership, intercultural communication, and problem-solving abilities. Their initiative and perseverance, especially during project work, were truly impressive",
              img: '/traveler2.jpg',
            },
            {
              name: 'Jasmine Bautista',
              text: 'The Trip is a life-changing experience. Getting to work directly with the local community and seeing the impact of my efforts was incredibly rewarding. I learned so much about myself and the world',
              img: '/traveler3.jpg',
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-white py-10 px-6">
              <p className="mb-6 text-[22px] text-[#00712D] font-[600]">{item.text}</p>

              <div className="flex items-center gap-5">
                <div className="min-w-16 min-h-16 md:min-w-[84px] md:min-h-[84px] relative rounded-full overflow-hidden border-4 border-[#00712D]">
                  <Image src={item.img} alt={item.name} layout="fill" className="object-cover" />
                </div>

                <div>
                  <label className="font-[900] text-[24px] text-[#00712D] mb-[5px]">{item.name}</label>

                  <div className="flex space-x-2.5">
                    <div className="text-[#FFA726] md:text-[40px] md:leading-10 text-[32px] leading-8">
                      ★
                    </div>
                    <div className="text-[#FFA726] md:text-[40px] md:leading-10 text-[32px] leading-8">
                      ★
                    </div>
                    <div className="text-[#FFA726] md:text-[40px] md:leading-10 text-[32px] leading-8">
                      ★
                    </div>
                    <div className="text-[#FFA726] md:text-[40px] md:leading-10 text-[32px] leading-8">
                      ★
                    </div>
                    <div className="text-[#FFA726] md:text-[40px] md:leading-10 text-[32px] leading-8">
                      ★
                    </div>
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
