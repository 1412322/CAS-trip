import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";

const programs = [
  {
    title: "Jungle Expedition Camp, Janda Baik",
    subTitle: "4D3N | Ages 14 & above | RM1090 estimate",
    description:
      "The trip packs survival campcraft, independent foraging, ending with community service",
    img: "/program_1.jpg",
  },
  {
    title: "Wilderness Skills Camp, Janda Baik",
    subTitle: "3D2N | Ages 11-17 | RM850 estimate",
    description:
      "Embark on an unforgettable 3-day learning essential survival skills sharpening your collaborative edge",
    img: "/program_2.jpg",
  },
  {
    title: "Eco Conservation Camp, Penyabong",
    subTitle: "3D2N | Ages 10-16 | RM790 estimate",
    description:
      "Get hands-on with campcraft. Learn to build shelters, dive into conservation and create idea for conservation",
    img: "/program_3.jpg",
  },
  {
    title: "Jungle Expedition Camp, Janda Baik",
    subTitle: "3D2N | Ages 10-16 | RM840 estimate",
    description:
      "Trekking up Sungai Chemperoh, riding horse and outdoor cooking. Experience nature's create lasting memories with us",
    img: "/program_4.jpg",
  },
  {
    title: "Leadership & Service Camp",
    subTitle: "3D2N | Ages 12-17 | RM890 estimate",
    description:
      "Boost your leadership mindset through simulations, bonding challenges and service work",
    img: "/program_5.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20 py-4 px-8 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2 font-bold text-lg">
          <Image src="/logo.png" alt="CAS Trips Logo" width={40} height={40} />
          <span>CAS TRIPS</span>
        </div>
        <nav className="space-x-6 font-medium hidden md:block">
          <Link href="#" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            About Us
          </Link>
          <Link href="#" className="hover:underline">
            Programs
          </Link>
          <Link href="#" className="hover:underline">
            Sustainability
          </Link>
          <Link href="#" className="hover:underline">
            Support
          </Link>
          <Link href="#" className="hover:underline">
            Resources
          </Link>
          <button className="bg-orange-400 px-3 py-1 rounded hover:bg-orange-500">
            Contact Us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            Creativity – Activity – Service
          </h1>
          <h2 className="text-2xl font-bold mb-6">
            CONNECT CULTURES, CREATE CHANGE
          </h2>
          <button className="bg-orange-400 text-white px-6 py-3 rounded font-semibold hover:bg-orange-500">
            Explore Our Programs
          </button>
        </div>
      </div>

      {/* OUR PROGRAMS */}
      <section className="bg-[#E9F4E5] py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-10">
          OUR PROGRAMS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-green-700 text-white text-lg font-semibold">
            <span className="inline-block w-6 h-6 bg-white rounded-full" />{" "}
            Nature Camps
          </button>
          <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-green-700 text-white text-lg font-semibold">
            <span className="inline-block w-6 h-6 bg-white rounded-full" />{" "}
            Leadership Camps
          </button>
          <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-green-700 text-white text-lg font-semibold">
            <span className="inline-block w-6 h-6 bg-white rounded-full" />{" "}
            Subject Camps
          </button>
          <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-green-700 text-white text-lg font-semibold">
            <span className="inline-block w-6 h-6 bg-white rounded-full" />{" "}
            Other Camps
          </button>
        </div>
      </section>

      {/* Popular Programs - Carousel */}
      <section className="bg-green-800 text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          POPULAR PROGRAMS
        </h2>
        <Carousel list={programs} />
        <div className="mt-10 flex justify-center">
          <button className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-500">
            View All 10+ Programs
          </button>
        </div>
      </section>

      {/* CHOOSE YOUR FAVORITE PROGRAM */}
      <section className="bg-[#E9F4E5] text-green-800 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          CHOOSE YOUR FAVORITE PROGRAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="border-2 border-green-700 rounded-lg flex flex-col items-center py-8 px-6 text-center">
            <Image
              src="/icon_programs.png"
              alt="By Programs"
              width={60}
              height={60}
            />
            <p className="mt-4 text-lg font-semibold">By Programs</p>
          </div>
          <div className="border-2 border-green-700 rounded-lg flex flex-col items-center py-8 px-6 text-center">
            <Image
              src="/icon_destinations.png"
              alt="By Destinations"
              width={60}
              height={60}
            />
            <p className="mt-4 text-lg font-semibold">By Destinations</p>
          </div>
        </div>
      </section>

      {/* WE'LL HANDLE YOUR TRIP FOR YOU */}
      <section className="bg-[#E9F4E5] text-green-900 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          WE'LL HANDLE YOUR TRIP FOR YOU
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Flight Booking",
              img: "/flight.jpg",
              desc: "Assist with securing the most convenient and cost-effective flight options for participants, managing itineraries, and providing timely updates on flight statuses",
            },
            {
              title: "Tours & Activities",
              img: "/tours.jpg",
              desc: "Engaging tours and activities that complement the main program, offering cultural immersion, local exploration trips and deeply memorable leisure experience",
            },
            {
              title: "Airport Transfers",
              img: "/airport.jpg",
              desc: "Arrange reliable transportation from the airport to the accommodation to ensure a comfortable and stress-free arrival and smooth departure experience for all attendees",
            },
            {
              title: "Hotel Bookings",
              img: "/hotel.jpg",
              desc: "Handle reservations at selected hotels, prioritizing safety, comfort, and proximity to program venues or key attractions, tailored to the group's needs",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div
                className="relative"
                style={{
                  width: 291,
                  height: 291,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-800 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHERE WE TRAVEL */}
      <section className="bg-green-800 py-16 px-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          WHERE WE TRAVEL
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden relative w-64 h-40">
              <Image
                src="/travel_1.jpg"
                alt="Travel 1"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden relative w-64 h-40">
              <Image
                src="/travel_3.jpg"
                alt="Travel 3"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden relative w-64 h-84 md:mt-10">
              <Image
                src="/travel_2.jpg"
                alt="Travel 2"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden relative w-64 h-40">
              <Image
                src="/travel_4.jpg"
                alt="Travel 4"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden relative w-64 h-40">
              <Image
                src="/travel_5.jpg"
                alt="Travel 5"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR FAVORITE TRAVELERS */}
      <section
        className="bg-cover bg-center py-20 px-6 text-white"
        style={{ backgroundImage: 'url("/bg_travelers.jpg")' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-300 mb-14">
          OUR FAVORITE TRAVELERS
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Juan Gonzales",
              text: "The trip offered an unparalleled real-world extension to our curriculum, providing students with deep insights into sustainable development and community engagement that simply cannot be replicated in a classroom setting",
              img: "/traveler1.jpg",
            },
            {
              name: "Kelly Cuambot",
              text: "We observed significant growth in our students' soft skills, including leadership, intercultural communication, and problem-solving abilities. Their initiative and perseverance, especially during project work, were truly impressive",
              img: "/traveler2.jpg",
            },
            {
              name: "Jasmine Bautista",
              text: "The Trip is a life-changing experience. Getting to work directly with the local community and seeing the impact of my efforts was incredibly rewarding. I learned so much about myself and the world",
              img: "/traveler3.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white p-6"
            >
              <p className="mb-6 text-[22px] text-[#00712D] font-[600]">
                {item.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="min-w-[84px] min-h-[84px] relative rounded-full overflow-hidden border-4 border-[#00712D]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-[900] text-[24px] text-[#00712D]">
                    {item.name}
                  </p>
                  <div className="text-[#FFA726] text-[40px]">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
