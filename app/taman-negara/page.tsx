import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Sologan from '@/public/images/taman_negara_sologan.svg'
import Highlights1 from '@/public/images/highlights_1.webp'
import Highlights2 from '@/public/images/highlights_2.webp'
import Highlights3 from '@/public/images/highlights_3.webp'
import EnrollmentDeadline from '@/public/images/enrollment_deadline.svg'
import Ages from '@/public/images/ages.svg'
import Cost from '@/public/images/cost.svg'
import Duration from '@/public/images/duration.svg'
import ProgramTypes from '@/public/images/program_types.svg'
import Impact from '@/public/images/impact.svg'
import Image from 'next/image'
import Carret from '@/public/images/carret.svg'
import Itinerary1 from '@/public/images/itinerary_1.webp'

export default function TamanNegara() {
  return (
    <main>
              {/* Hero Section */}
              <div className="relative h-[50vh] md:h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/mobile_cover.webp')] md:bg-[url('../public/images/taman_negara_cover.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute px-5 md:px-[100px] z-1 flex flex-col items-center justify-center h-full w-full">
            <Image src={Sologan} layout="responsive" alt="reativity-activity-service" />

            <h2 className="text-[16px] md:text-[35px] font-[800] mt-3 mb-[77px] text-white text-center">
            22 OCTOBER – 26 OCTOBER 2025
            </h2>

            <Button>
            Sign Up Now
            </Button>
          </div>
        </div>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">LET'S TAKE A LOOK OUR JOURNEY</Heading>

        <div className="mt-10 flex justify-center">
          <Button>
          Watch more our trips
          </Button>
        </div>
      </Container>

      <Container className="relative bg-[url('../public/images/wilderness_expedition_cover.webp')] z-0">
      <Heading color="text-white">
      ASEAN ADVENTURE: WILDERNESS EXPEDITION
        </Heading>

        <div className="absolute inset-0 bg-[#00712D] opacity-50 z-[-1]" />

<div className="absolute inset-0 bg-[#000] opacity-50 z-[-1]" />

        <Paragraph className="text-white">
        Embark on a unique 7-day journey that seamlessly blends urban exploration, thrilling nature adventures, and authentic cultural immersion across Singapore and Malaysia. This program is designed for students seeking a dynamic experience that goes beyond the ordinary.

Kick off in the vibrant city-state of Singapore, exploring its iconic landmarks. Then, transition to the lush natural beauty of Malaysia, delving into the serene landscapes of Janda Baik and the ancient wonders of Taman Negara.

Engage in hands-on farm experiences, exciting outdoor challenges, and meaningful cultural exchanges. It's a perfect blend of learning, adventure, and personal growth.
        </Paragraph>

        <div className="mt-10 flex justify-center">
          <Button>
          Download Trip Itinerary
          </Button>
        </div>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      HIGHLIGHTS
        </Heading>

<ul className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[{
  img: Highlights1,
  title: 'City-state of Singapore',
}, {
  img: Highlights2,
  title: 'Taman Negara Immersion',
}, {
  img: Highlights3,
  title: 'Outdoor challenges',
}].map((item, index) => (
<li key={index} className="flex flex-col items-center">
<div className="flex items-center justify-center rounded-full w-full h-full"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt="" /></div>

<h3 className="font-[900] text-[14px] md:text-[24px] text-[#00712D] mt-10">{item.title}</h3>
</li>
))}
</ul>
        </Container>

        <Container className="bg-[#00712D]">
      <Heading color="text-white">
      TRIP OVERVIEW
        </Heading>

<ul className="grid grid-cols-3 md:grid-cols-6">
        {[{
  img: EnrollmentDeadline,
  title: 'Enrollment Deadline',
  description: 'July 25th 2025',
}, {
  img: Cost,
  title: 'Cost',
  description: 'Price',
}, {
  img: Ages,
  title: 'Ages',
  description: 'Senior: Ages 19 - 22\nJunior: Ages 14 - 18',
},
{
  img: Duration,
  title: 'Duration',
  description: '7 days',
},{
  img: ProgramTypes,
  title: 'Program Types',
  description: '7 days',
}, {
  img: Impact,
  title: 'Impact',
  description: 'Deepen knowledge\nSharpen soft skills',
}].map((item, index) => (
<li key={index} className="flex flex-col justify-start items-center space-y-2.5">
<div className="flex items-center justify-center rounded-full w-[88px] h-[88px]"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt="" /></div>

<div className="text-center text-[18px] font-[900] text-white">{item.title}</div>

<div className="text-center text-[18px] font-[600] text-white break-spaces">{item.description}</div>
</li>
))}
</ul>
        </Container>

        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      OUTCOMES
        </Heading>

<div className="grid grid-cols-1 md:grid-cols-2 rounded-t-[10px] border border-[#00712D] overflow-hidden">
{[{
  title: 'Community Impact',
  contents: [
  {title: 'Cultural Exchanges',
  description: 'Students directly engaging with the traditions, customs activities and daily lives of communities in Singapore and Malaysia.',
  },
  {title: 'Mutual Understanding',
  description: 'Through meaningful and cultural immersion, the program builds relationship between students and local populations in Singapore and Malaysia.',
  },
  {title: 'Local Engagement',
  description: 'Students experience hands-on farm to interact with local practices and livelihoods, potentially strengthening community ties and cultural preservation efforts in a supportive manner.',
  },
]
}, {
  title: 'Self-Impact on Students',
  contents: [
  {title: 'Personal Growth',
  description: 'Fostering adaptability, resilience, and a sense of adventure by pushing beyond ordinary experiences.',
  },
  {title: 'Expand Insights',
  description: 'Gain real-world insights through urban exploration, thrilling nature adventures, and active engagement with diverse environments.',
  },
  {title: 'Skill Development',
  description: 'Students improve soft skills, such as problem-solving, adaptability, communication, collaboration, critical thinking through experiencing outdoor challenges.',
  },
]
}].map((item, index) => (
<div key={index} className="flex flex-col items-center flex-1 last:border-l last:border-[#00712D]">
<div className="w-full text-white text-[32px] font-[800] text-center flex items-center justify-center bg-[#00712D] h-[76px]">{item.title}</div>

<ul className="py-8 px-10 text-[#00712D] flex-1">
  {item.contents.map((content, index) => (
<li key={index} className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">{content.title}</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">{content.description}</Paragraph>
</li>
  ))}
</ul>
</div>
))}
</div>
        </Container>

        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
  <input id="accommodation" className="peer/accommodation hidden" type="radio" name="status" defaultChecked />

  <input id="itinerary" className="peer/itinerary hidden" type="radio" name="status" />

  <input id="general_note" className="peer/general_note hidden" type="radio" name="status" />

  <input id="faq" className="peer/faq hidden" type="radio" name="status" />

{/* <div className="mb-10 flex justify-center"> */}
<label className="inline-block w-[140px]" />

  <label htmlFor="accommodation" className="cursor-pointer w-fit inline py-1.5 px-2.5 items-center justify-center text-[32px] font-[800] text-center rounded-[10px] text-[#22C55E80] peer-checked/accommodation:text-white peer-checked/accommodation:bg-[#00712D]">
    ACCOMMODATION
    </label>
 
  <label htmlFor="itinerary" className="cursor-pointer w-fit inline py-1.5 px-2.5 items-center justify-center text-[32px] font-[800] text-center rounded-[10px] text-[#22C55E80] peer-checked/itinerary:text-white peer-checked/itinerary:bg-[#00712D]">
    ITINERARY
    </label>

    <label htmlFor="general_note" className="cursor-pointer w-fit inline py-1.5 px-2.5 items-center justify-center text-[32px] font-[800] text-center rounded-[10px] text-[#22C55E80] peer-checked/general_note:text-white peer-checked/general_note:bg-[#00712D]">
    GENERAL NOTE
    </label>

    <label htmlFor="faq" className="cursor-pointer w-fit inline py-1.5 px-2.5 items-center justify-center text-[32px] font-[800] text-center rounded-[10px] text-[#22C55E80] peer-checked/faq:text-white peer-checked/faq:bg-[#00712D]">
    FAQ
    </label>

    <label className="inline-block w-[140px]" />
{/* </div> */}

<div className="hidden peer-checked/accommodation:block border-b border-b-[#00712D]">
<Container className="bg-[#ECFAE5] pt-10 md:pt-10">
        <Paragraph className="mb-10 !text-left">
        During your journey with us, you'll experience a thoughtfully curated selection of accommodations, designed to provide comfort, safety, and unique insights into your surroundings.
        </Paragraph>

        <div className="text-[24px] font-[900] text-[#00712D] mb-1.5">
        Janda Baik Stay
        </div>

        <Paragraph className="mb-10 !text-left">
        Enjoy a comfortable and immersive stay at a well-situated resort in the Janda Baik area for the majority of your program. This provides a serene base amidst nature, offering a relaxing environment after your adventurous days. Specific details regarding rooming and facilities will be provided upon confirmation.
        </Paragraph>

        <div className="text-[24px] font-[900] text-[#00712D] mb-1.5">
        Immersive Community Experience
        </div>

        <Paragraph className="mb-10 !text-left">
        <ul className="list-disc list-inside">
<li>Discover the National University of Singapore and travel to Janda Baik.</li>

<li>Experience a Goat Farm (feeding/milking) and an Organic Fitrah Farm.</li>

<li>Participate in the GEMS Olympic challenges and embark on a thrilling Raft Building & Mission on the water.</li>

<li>Travel to Taman Negara, enjoy a scenic Boat Ride to Lata Berkoh.</li>

<li>Experience Rapid Shooting, visit a Batek Tribe village, hike to Teresek Hill and enjoy a Canopy Walk.</li>

<li>Departure to Kuala Lumpur.</li>
        </ul>
        </Paragraph>

        <div className="text-[24px] font-[900] text-[#00712D] mb-1.5">
        Comfortable Departure
        </div>

        <Paragraph className="mb-10 !text-left list-inside">The program culminates with students returning to Kuala Lumpur or Singapore.</Paragraph>
        </Container>
        </div>

        <div className="hidden peer-checked/itinerary:block border-b border-b-[#00712D]">
        <Container className="bg-[#ECFAE5] pt-10 md:pt-10">
        {[{
  imgs: [Itinerary1, Itinerary1],
  title: 'Singapore Arrival & Welcome',
  descriptions: [`Check in to accommodation and get acquainted with your fellow. Brief orientation of the trip program and key highlights.`],
}, {
  imgs: [Itinerary1, Itinerary1],
  title: 'Singapore Exploration & Journey to Janda Baik',
  descriptions: [`Discover the National University of Singapore and the stunning Gardens by the Bay before traveling to Janda Baik and checking into your resort.Discover the National University of Singapore and the stunning Gardens by the Bay before traveling to Janda Baik and checking into your resort.`],
}, {
  imgs: [Itinerary1, Itinerary1],
  title: 'Farm Life & River Trekking',
  descriptions: [`Experience a Goat Farm and an Organic Fitrah Farm, followed by an exhilarating Sg Benus River Trekking adventure.`],
}].map((item, index) => (
<div key={index} className={`flex flex-col items-start gap-5 md:gap-6 mb-5 md:mb-10 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
 <div className="flex gap-2.5 md:gap-6 flex-1 w-full">
   {item.imgs.map((img, index) => (
    <Image key={index} src={img} className="w-full rounded-[10px] aspect-square overflow-hidden" layout="responsive" alt="" />
   ))}
 </div>
  
  <div className={`flex-1 ${index % 2 !== 0 ? 'text-right' : 'text-left'} text-[#00712D]`}>
    {item.title && <div className="text-[18px] md:text-[24px] font-[900] md:mb-6">{item.title}</div>}

<ul className={`${item.descriptions.length > 1 ? 'list-disc ml-4' : ''}`}>
{item.descriptions.map((description, descriptionIndex) => (
  <li key={descriptionIndex} className={`${item.descriptions.length > 1 ? 'md:mb-6 last:mb-0' : ''}`}>
    <p className="font-[600] text-[14px] md:text-[18px]" dangerouslySetInnerHTML={{ __html: description }} />
  </li>
))}
  </ul>
  </div>
</div>
))}
          </Container></div>

        <div className="hidden peer-checked/general_note:block border-b border-b-[#00712D]">
        <Container className="bg-[#ECFAE5] pt-10 md:pt-10">
          <Paragraph className="mb-8">Here is a detailed packing list for your time in across Singapore and Malaysia. Packing the right gear is the first step to an incredible travel experience.</Paragraph>
 
      <Heading color="text-[#22C55E]">
      WHAT YOU NEED TO BRING
        </Heading>

        <Paragraph>
        <ul className="py-8 px-10 text-[#00712D] flex-1">
<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Backpack</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
    <ul className="list-inside list-disc">
<li>Bring versatile, lightweight, and quick-drying clothes and school uniform.</li>

<li>Long, loose-fitting shorts/skirts for daily activities and service projects; T-shirts with sleeves, lightweight hoodie are good.</li>

<li>Comfortable crocs, walking shoes for outdoor activities.</li>
    </ul>
  </Paragraph>
</li>

<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Essential Documents</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
    <ul className="list-inside list-disc">
<li>{`Passport (with validity > 6 months) and a photocopy of passport.`}</li>

<li>Visa documentation.</li>

<li>Our emergency contacts list.</li>

<li>Money (you’ll be responsible for carrying).</li>
    </ul>
  </Paragraph>
</li>

<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Personal Daypack</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
    <ul className="list-inside list-disc">
<li>Reusable water bottle, sunglasses, hat for sun protection.</li>

<li>Personal medication.</li>

<li>Mobile phone, portable charger, camera.</li>

<li>Extra paperwork for service hours credit (if needed).</li>
    </ul>
  </Paragraph>
</li>
</ul>
        </Paragraph>
        </Container>
        </div>

        <div className="hidden peer-checked/faq:block border-b border-b-[#00712D]">
        <Container className="bg-[#ECFAE5] pt-10 md:pt-10">
      <Heading color="text-[#22C55E]">
      WHAT YOU NEED TO BRING
        </Heading>

        <Paragraph>
        <ul className="py-8 px-10 text-[#00712D] flex-1">
<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Accommodation</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Hotels: Students will be staying at a hotel where they can expect to stay two students per room with en suite bathrooms with toilets and hot water.
  </Paragraph>
</li>

<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Activities</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Students will engage directly in
    <ul className="list-inside list-disc">
<li>Urban Exploration: Discover iconic landmarks and academic sites in Singapore.</li>

<li>Rural Engagement: Participate in unique farm experiences (goat, organic farming) and cultural exchanges with local communities like the Batek Tribe.</li>

<li>Nature Adventures: Embark on thrilling river treks, raft building missions, jungle hikes, and wildlife encounters within the lush landscapes of Janda Baik and Taman Negara.</li>

<li>Team Challenges: Engage in fun and challenging team-building activities like the GEMS Olympic. Our goal is to provide a comprehensive experience that combines learning, adventure, and cultural immersion.</li>
    </ul>
  </Paragraph>
</li>

<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Health and Safety</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Ensuring the safety of your teen as they travel with us is a top priority.
    <ul className="list-inside list-disc">
<li>Please review our Sustainability.</li>

<li>Trained Local Teams.</li>

<li>Safety Briefings for all adventure activities (trekking, rafting, rapid shooting).</li>

<li>Medical Recommendations and any necessary medication for the region. A basic first-aid kit is also recommended for personal use.</li>

<li>Emergency Support 24/7 in-country emergency support, and clear emergency protocols are in place for all situations.</li>

<li>Travel Insurance covering medical emergencies, evacuation, and activity-related incidents is mandatory for all participants.</li>

<li>Cultural Sensitivity to ensure a safe and respectful interaction with communities.</li>
    </ul>
  </Paragraph>
</li>

<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Insurance</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Our Protection Plan helps protect our participants, their belongings, and their travel investment in those unforeseen circumstances that may arise during travel.
  </Paragraph>
</li>
</ul>
        </Paragraph>
        </Container>
        </div>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Contact us to find out how Our Volunteer Programs can help your students achieve their learning outcomes during a school trip abroad!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Contact Us</Button>
        </div>
</Container>
    </main>
  )
}
