'use client'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Carret from '@/public/images/carret.svg'
import Itinerary1 from '@/public/images/taman-negara/itinerary_1.webp'
import Itinerary2 from '@/public/images/taman-negara/itinerary_2.webp'
import Itinerary3 from '@/public/images/taman-negara/itinerary_3.webp'
import Itinerary4 from '@/public/images/taman-negara/itinerary_4.webp'
import Itinerary5 from '@/public/images/taman-negara/itinerary_5.webp'
import Itinerary6 from '@/public/images/taman-negara/itinerary_6.webp'
import Itinerary7 from '@/public/images/taman-negara/itinerary_7.webp'
import Itinerary8 from '@/public/images/taman-negara/itinerary_8.webp'
import Itinerary9 from '@/public/images/taman-negara/itinerary_9.webp'
import Itinerary10 from '@/public/images/taman-negara/itinerary_10.webp'
import Itinerary11 from '@/public/images/taman-negara/itinerary_11.webp'
import Itinerary12 from '@/public/images/taman-negara/itinerary_12.webp'
import WhiteCarret from '@/public/images/white_carret.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <>
        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
<div className="flex items-center justify-center mb-2.5 md:mb-10">
  <div onClick={() => setActiveTab(1)} className={`cursor-pointer w-fit inline py-0.5 md:py-1.5 px-1.5 md:px-2.5 items-center justify-center text-[10px] md:text-[32px] font-[800] text-center rounded-[4px] md:rounded-[10px] text-[#22C55E80] ${activeTab === 1 ? 'text-white bg-[#00712D]' : ''}`}>
    ACCOMMODATION
    </div>
 
    <div onClick={() => setActiveTab(2)} className={`cursor-pointer w-fit inline py-0.5 md:py-1.5 px-1.5 md:px-2.5 items-center justify-center text-[10px] md:text-[32px] font-[800] text-center rounded-[4px] md:rounded-[10px] text-[#22C55E80] ${activeTab === 2 ? 'text-white bg-[#00712D]' : ''}`}>
    ITINERARY
    </div>

    <div onClick={() => setActiveTab(3)} className={`cursor-pointer w-fit inline py-0.5 md:py-1.5 px-1.5 md:px-2.5 items-center justify-center text-[10px] md:text-[32px] font-[800] text-center rounded-[4px] md:rounded-[10px] text-[#22C55E80] ${activeTab === 3 ? 'text-white bg-[#00712D]' : ''}`}>
    GENERAL NOTE
    </div>

    <div onClick={() => setActiveTab(4)} className={`cursor-pointer w-fit inline py-0.5 md:py-1.5 px-1.5 md:px-2.5 items-center justify-center text-[10px] md:text-[32px] font-[800] text-center rounded-[4px] md:rounded-[10px] text-[#22C55E80] ${activeTab === 4 ? 'text-white bg-[#00712D]' : ''}`}>
    FAQ
    </div>
</div>

<div className={`${activeTab === 1 ? 'block' : 'hidden'} border-b border-b-[#00712D] pb-10`}>
        <div className="text-[18px] md:text-[24px] font-[900] text-[#00712D] mb-1.5">
        Janda Baik Stay
        </div>

        <Paragraph className="mb-10 !text-left">
        Enjoy a comfortable and immersive stay at a well-situated resort in the Janda Baik area for the majority of your program. This provides a serene base amidst nature, offering a relaxing environment after your adventurous days. Specific details regarding rooming and facilities will be provided upon confirmation.
        </Paragraph>

        <div className="text-[18px] md:text-[24px] font-[900] text-[#00712D] mb-1.5">
        Immersive Community Experience
        </div>

        <div className="text-left text-[14px] font-[600] text-[#00712D] md:text-[18px]">
        <ul className="list-disc list-inside">
<li>Discover the National University of Singapore and travel to Janda Baik.</li>

<li>Experience a Goat Farm (feeding/milking) and an Organic Fitrah Farm.</li>

<li>Participate in the GEMS Olympic challenges and embark on a thrilling Raft Building & Mission on the water.</li>

<li>Travel to Taman Negara, enjoy a scenic Boat Ride to Lata Berkoh.</li>

<li>Experience Rapid Shooting, visit a Batek Tribe village, hike to Teresek Hill and enjoy a Canopy Walk.</li>

<li>Departure to Kuala Lumpur.</li>
        </ul>
        </div>
        </div>

        <div className={`${activeTab === 2 ? 'block' : 'hidden'} border-b border-b-[#00712D] pb-10`}>
     
        {[{
  imgs: [Itinerary1, Itinerary2],
  title: 'Singapore Arrival & Welcome',
  descriptions: ['Check in and meet your group, followed by a trip orientation and key highlights overview.'],
}, {
  imgs: [Itinerary3, Itinerary4],
  title: 'Singapore Exploration\n& Journey to Janda Baik',
  descriptions: [`Explore NUS and Gardens by the Bay, then travel to Janda Baik for resort check-in.`],
}, {
  imgs: [Itinerary5, Itinerary6],
  title: 'Farm Life & River Trekking',
  descriptions: ['Visit a Goat Farm and Organic Fitrah Farm, then enjoy an exhilarating Sg Benus River trek.'],
}, {
  imgs: [Itinerary7],
  title: 'Team Challenges & Rafting',
  descriptions: ['Join the GEMS Olympic challenges, then take on a thrilling Raft Building water mission.'],
}, {
  imgs: [Itinerary8],
  title: 'Taman Negara Immersion',
  descriptions: ['Head to Taman Negara for a scenic boat ride to Lata Berkoh and a visit to the Fish Sanctuary.'],
}, {
  imgs: [Itinerary9, Itinerary10],
  title: 'Culture & Canopy Walks',
  descriptions: ['Enjoy Rapid Shooting, visit a Batek Tribe village, then hike Teresek Hill and explore the Canopy Walk.'],
}, {
  imgs: [Itinerary11, Itinerary12],
  title: 'Departure',
  descriptions: ['Head back to KL or Singapore to begin your journey home with lasting memories.'],
}].map((item, index) => (
<div key={index} className={`relative flex items-start gap-5 md:gap-12 pb-10 md:pb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
 <div className="flex gap-2.5 md:gap-6 flex-1 w-full">
   {item.imgs.map((img, index) => (
     <div className={`w-3/4 bg-white p-1.5 md:p-5 shadow-[3.526px_3.526px_3.526px_0_rgba(0,0,0,0.50)] ${index === 1 ? "rotate-12 translate-x-[-50%]" : ''}`}>
    <Image key={index} src={img} className={`${item.imgs.length === 1 ? '' : 'aspect-square'} overflow-hidden object-cover`} alt="" />
    </div>
   ))}
 </div>
  
  <div>
  <div className="absolute left-[calc(50%-1px)] md:left-[calc(50%-2px)] w-[2px] md:w-[4px] bg-[#00712D] h-full" />

  <div className="absolute h-2 md:h-5 w-2 md:w-5 rounded-full bg-[#00712D] left-[calc(50%-4px)] md:left-[calc(50%-10px)]" />
</div>

  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'} text-[#00712D]`}>
  <div className='md:mb-6 mb-1 relative z-[1] font-[800] text-[12px] md:text-[32px] text-white'>
  <div className={`w-full h-full absolute z-[-1] bg-[url('../public/images/small_tag.svg')] bg-contain bg-no-repeat ${index % 2 === 0 ? '' : 'rotate-180'}`} />

<label className="mx-4 md:mx-6">DAY {index + 1}</label>
</div>

    {item.title && <div className="text-[12px] md:text-[24px] font-[900] md:mb-2.5">{item.title}</div>}

<ul className={`${item.descriptions.length > 1 ? 'list-disc ml-4' : ''}`}>
{item.descriptions.map((description, descriptionIndex) => (
  <li key={descriptionIndex} className={`${item.descriptions.length > 1 ? 'md:mb-6 last:mb-0' : ''}`}>
    <p className="font-[600] text-[12px] md:text-[18px]" dangerouslySetInnerHTML={{ __html: description }} />
  </li>
))}
  </ul>
  </div>
</div>
))}</div>

          <div className={`${activeTab === 3 ? 'block' : 'hidden'} border-b border-b-[#00712D] pb-10`}>
      <Heading color="text-[#22C55E]">
      WHAT YOU NEED TO BRING
        </Heading>

        <ul className="text-[#00712D] space-y-2.5 md:space-y-10">
<li>
  <div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Backpack</div>
  </div>

  <div className="text-[12px] md:text-[18px] font-[600]">
    <ul className="list-inside list-disc">
<li>Bring versatile, lightweight, and quick-drying clothes and school uniform.</li>

<li>Long, loose-fitting shorts/skirts for daily activities and service projects; T-shirts with sleeves, lightweight hoodie are good.</li>

<li>Comfortable crocs, walking shoes for outdoor activities.</li>
    </ul>
  </div>
</li>

<li>
  <div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Essential Documents</div>
  </div>

  <div className="text-[12px] md:text-[18px] font-[600]">
    <ul className="list-inside list-disc">
<li>{`Passport (with validity > 6 months) and a photocopy of passport.`}</li>

<li>Visa documentation.</li>

<li>Our emergency contacts list.</li>

<li>Money (you’ll be responsible for carrying).</li>
    </ul>
  </div>
</li>

<li>
  <div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Personal Daypack</div>
  </div>

  <div className="text-[12px] md:text-[18px] font-[600]">
    <ul className="list-inside list-disc">
<li>Reusable water bottle, sunglasses, hat for sun protection.</li>

<li>Personal medication.</li>

<li>Mobile phone, portable charger, camera.</li>

<li>Extra paperwork for service hours credit (if needed).</li>
    </ul>
  </div>
</li>
</ul>

<div className="bg-[#76B588] rounded-[10px] p-4 md:py-8 md:px-28 mt-10">
<Heading color="text-white">
WHAT'S INCLUDED
        </Heading>

<div className="space-y-2.5 md:space-y-5">
        <div className="flex items-center gap-2.5">
  <Image src={WhiteCarret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[600] text-white">Adventure Leader for the entire trip.</div>
  </div>

  <div className="flex items-center gap-2.5">
  <Image src={WhiteCarret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[600] text-white">All meals for the entire trip.</div>
  </div>

  <div className="flex items-center gap-2.5">
  <Image src={WhiteCarret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[600] text-white">All transportation costs, including airport pick-up and drop-off.</div>
  </div>

  <div className="flex items-center gap-2.5">
  <Image src={WhiteCarret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[600] text-white">All activities listed in the itinerary.</div>
  </div>

  <div className="flex items-center gap-2.5">
  <Image src={WhiteCarret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[600] text-white">24-hour emergency contact support during the trip.</div>
  </div>

  <div className="flex items-center gap-2.5">
  <Image src={WhiteCarret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[600] text-white">Detailed pre-departure summary & briefing.</div>
  </div>
  </div>
</div>
        </div>

        <div className={`${activeTab === 4 ? 'block' : 'hidden'} border-b border-b-[#00712D] pb-10`}>
        <ul className="text-[#00712D] space-y-2.5 md:space-y-10">
<li>
<div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Accommodation</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Hotels: Students will be staying at a hotel where they can expect to stay two students per room with en suite bathrooms with toilets and hot water.
  </Paragraph>
</li>

<li>
<div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Activities</div>
  </div>

  <div className="ml-[30px] mb-1.5 text-left text-[14px] font-[600] text-[#00712D] md:text-[18px]">
  Students will engage directly in diverse experiences:
    <ul className="list-inside list-disc">
<li><b>Urban & Rural Exploration:</b> Discover Singapore's landmarks and participate in unique farm experiences and cultural exchanges.</li>

<li><b>Nature Adventures:</b> Embark on thrilling river treks, raft building, jungle hikes, and wildlife encounters in Malaysia's Janda Baik and Taman Negara.</li>

<li><b>Team Challenges:</b> Engage in fun, challenging team-building activities.</li>

<li><b>Our goal</b> is a comprehensive experience combining learning, adventure, and cultural immersion.</li>
    </ul>
  </div>
</li>

<li>
<div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Health and Safety</div>
  </div>

  <div className="ml-[30px] mb-1.5 text-left text-[14px] font-[600] text-[#00712D] md:text-[18px]">
  Ensuring your teen's safety is paramount. We maintain this through:
    <ul className="list-inside list-disc">
<li><b>Trained Local Teams</b> and comprehensive Safety Briefings for all activities.</li>

<li><b>Medical Recommendations</b> and a basic first-aid kit, with <b>24/7 in-country</b>. <b>Emergency Support</b> and clear protocols.</li>

<li><b>Mandatory Travel Insurance</b> covering medical emergencies, evacuation, and activity-related incidents.</li>

<li>Emphasis on <b>Cultural Sensitivity</b> for respectful community interactions.</li>
    </ul>
  </div>
</li>

<li>
<div className="flex items-center gap-2.5 mb-1.5">
  <Image src={Carret} className="w-2 md:w-5 h-2 md:h-5" alt="" />

  <div className="text-[14px] md:text-[24px] font-[900]">Insurance</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Our Protection Plan helps protect our participants, their belongings, and their travel investment in those unforeseen circumstances that may arise during travel.
  </Paragraph>
</li>
</ul>
        </div>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Contact us to find out how Our Volunteer Programs can help your students achieve their learning outcomes during a school trip abroad!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button path="/contact-us">Contact Us</Button>
        </div>
</Container>
</>
  )
}
