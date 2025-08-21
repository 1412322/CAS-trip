'use client'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Carret from '@/public/images/carret.svg'
import Itinerary1 from '@/public/images/itinerary_1.webp'
import Image from 'next/image'
import { useState } from 'react'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <>
        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
<div className="flex items-center justify-center">
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

<div className={`${activeTab === 1 ? 'block' : 'hidden'} border-b border-b-[#00712D]`}>
<Container className="bg-[#ECFAE5] !p-2.5 md:pt-10">
        <div className="text-[18px] md:text-[24px] font-[900] text-[#00712D] mb-1.5">
        Janda Baik Stay
        </div>

        <Paragraph className="mb-10 !text-left">
        Enjoy a comfortable and immersive stay at a well-situated resort in the Janda Baik area for the majority of your program. This provides a serene base amidst nature, offering a relaxing environment after your adventurous days. Specific details regarding rooming and facilities will be provided upon confirmation.
        </Paragraph>

        <div className="text-[18px] md:text-[24px] font-[900] text-[#00712D] mb-1.5">
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
        </Container>
        </div>

        <div className={`${activeTab === 2 ? 'block' : 'hidden'} border-b border-b-[#00712D]`}>
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

          <div className={`${activeTab === 3 ? 'block' : 'hidden'} border-b border-b-[#00712D]`}>
        <Container className="bg-[#ECFAE5] !p-2.5 pt-10 md:pt-10">
      <Heading color="text-[#22C55E]">
      WHAT YOU NEED TO BRING
        </Heading>

        <ul className="p-5 md:py-8 md:px-10 text-[#00712D] flex-1">
<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[18px] md:text-[24px] font-[900] mb-1.5">Backpack</div>
  </div>

  <Paragraph className="mb-10 !text-left">
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

  <div className="text-[18px] md:text-[24px] font-[900] mb-1.5">Essential Documents</div>
  </div>

  <Paragraph className="mb-10 !text-left">
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

  <div className="text-[18px] md:text-[24px] font-[900] mb-1.5">Personal Daypack</div>
  </div>

  <Paragraph className="mb-10 !text-left">
    <ul className="list-inside list-disc">
<li>Reusable water bottle, sunglasses, hat for sun protection.</li>

<li>Personal medication.</li>

<li>Mobile phone, portable charger, camera.</li>

<li>Extra paperwork for service hours credit (if needed).</li>
    </ul>
  </Paragraph>
</li>
</ul>
        </Container>
        </div>

        <div className={`${activeTab === 4 ? 'block' : 'hidden'} border-b border-b-[#00712D]`}>
        <Container className="bg-[#ECFAE5] !p-2.5 pt-10 md:pt-10">
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
  Students will engage directly in diverse experiences:
    <ul className="list-inside list-disc">
<li><b>Urban & Rural Exploration:</b> Discover Singapore's landmarks and participate in unique farm experiences and cultural exchanges.</li>

<li><b>Nature Adventures:</b> Embark on thrilling river treks, raft building, jungle hikes, and wildlife encounters in Malaysia's Janda Baik and Taman Negara.</li>

<li><b>Team Challenges:</b> Engage in fun, challenging team-building activities.</li>

<li><b>Our goal</b> is a comprehensive experience combining learning, adventure, and cultural immersion.</li>
    </ul>
  </Paragraph>
</li>

<li className="mb-10 last:mb-0">
  <div className="flex items-center gap-2.5">
  <Image src={Carret} alt="" width={20} />

  <div className="text-[24px] font-[900] mb-1.5">Health and Safety</div>
  </div>

  <Paragraph className="ml-[30px] mb-1.5 !text-left">
  Ensuring your teen's safety is paramount. We maintain this through:
    <ul className="list-inside list-disc">
<li><b>Trained Local Teams</b> and comprehensive Safety Briefings for all activities.</li>

<li><b>Medical Recommendations</b> and a basic first-aid kit, with <b>24/7 in-country</b>. <b>Emergency Support</b> and clear protocols.</li>

<li><b>Mandatory Travel Insurance</b> covering medical emergencies, evacuation, and activity-related incidents.</li>

<li>Emphasis on <b>Cultural Sensitivity</b> for respectful community interactions.</li>
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
        </Container>
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
