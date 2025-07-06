import Image from 'next/image'
import MeetOurTeam1 from '@/public/images/meet_our_team.png'
import OurStory1 from '@/public/images/our_story_1.jpg'
import OurStory2 from '@/public/images/our_story_2.jpg'
import OurStory3 from '@/public/images/our_story_3.png'
import Container from '@/components/Layout/Container'
import CircleCheck from '@/public/images/circle_check.svg'
import SubjectCamps from '@/public/images/subject_camps.svg'
import NatureCamps from '@/public/images/nature_camps.svg'
import LeadershipCamps from '@/public/images/leadership_camps.svg'
import WhyChooseUs from '@/public/images/why_chosse_us.jpg'
import Check from '@/public/images/check.svg'
import SafetyExpertise1 from '@/public/images/safety_expertise_1.png'
import SafetyExpertise2 from '@/public/images/safety_expertise_2.png'

export default function AboutUs() {
  return (
    <main>
      {/* ABOUT US */}
      <Container background="bg-[#ECFAE5]" className="pb-0">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">
          ABOUT US
        </h2>

<p className="text-[#00712D] text-center text-[18px] font-[600]">
This website serves as a premier platform specializing in <b>Educational</b>, <b>Cultural</b>, and <b>Adventure</b> volunteer trips for international school students worldwide.

Given on the spirit of established leaders in student travel, our platform is dedicated to helping young individuals put their <b>values into action</b> and facilitate profound youth changes.

Through programs, students can <b>build real-world skills</b> and discover a deeper sense of purpose, transforming their journeys into <b>impactful contributions and learning experiences</b>.
</p>
        </Container>

        <Container background="bg-[#ECFAE5]" className="pb-0">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">
      MEET OUR TEAM
        </h2>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-10">
{[{
img: MeetOurTeam1,
title: 'Alisa Hester',
subTitle: 'Founder & CEO',
description: 'Former co-founder of opendoor varible Early staff Spotify and Clearbit',
},{
  img: MeetOurTeam1,
  title: 'Alisa Hester',
  subTitle: 'Founder & CEO',
  description: 'Former co-founder of opendoor varible Early staff Spotify and Clearbit',
  },{
    img: MeetOurTeam1,
    title: 'Alisa Hester',
    subTitle: 'Founder & CEO',
    description: 'Former co-founder of opendoor varible Early staff Spotify and Clearbit',
    },{
      img: MeetOurTeam1,
      title: 'Alisa Hester',
      subTitle: 'Founder & CEO',
      description: 'Former co-founder of opendoor varible Early staff Spotify and Clearbit',
      },{
        img: MeetOurTeam1,
        title: 'Alisa Hester',
        subTitle: 'Founder & CEO',
        description: 'Former co-founder of opendoor varible Early staff Spotify and Clearbit',
        },{
          img: MeetOurTeam1,
          title: 'Alisa Hester',
          subTitle: 'Founder & CEO',
          description: 'Former co-founder of opendoor varible Early staff Spotify and Clearbit',
          }].map((item, index) => (
  <div key={index} className="relative">
    <Image src={item.img} alt={item.title} />
  </div>
))}
</div>

<div className="mt-10 flex justify-center">
<button className="text-white px-8 py-4 rounded-xl bg-[#FFA726] text-[20px] font-[600]">
Meet All Our member
            </button>
            </div>
        </Container>

        <Container background="bg-[#ECFAE5]">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">
      OUR STORY
        </h2>

{[{
  img: OurStory1,
  description: 'We began its pioneering work in adventure volunteer trips. The inaugural expedition saw a small cohort of students from a renowned international school venture into the remote area.\nThese early pioneers navigated rugged terrain in specialized vehicles, embarking on month-long, self-sufficient journeys where they lived off the land and exchanged goods with indigenous communities for essential provisions. This was truly a groundbreaking form of experiential education.',
}, {
  img: OurStory2,
  description: 'The spirit of these transformative voyages endures to this day. For over three decades, we has empowered young people to actively engage with the world and connect deeply with its diverse cultures.',
}, {
  img: OurStory3,
  description: 'Now operating across more than 25 countries, with a dedicated team of over 40 full-time staff and hundreds of seasonal field leaders, our approach has evolved. Our fundamental purpose remains steadfast: equipping students to foster meaningful, positive change in communities globally.',
}].map((item, index) => (
<div key={index} className={`flex flex-col items-center gap-6 mb-10 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
  <Image src={item.img} className="object-cover max-h-[290px] rounded-[20px] overflow-hidden flex-1" layout="responsive" alt={item.description} />

  <p className="font-[600] text-[18px] text-[#00712D] flex-1">{item.description}</p>
</div>
))}
        </Container>

        <Container background="bg-[url('../public/images/our_mission_cover.jpg')]">
      <h2 className="text-[32px] font-[800] text-center text-white mb-8">
     OUR MISSION
        </h2>

        <p className="font-[600] text-[18px] text-white text-center">
        To be the leading initiative in Southeast Asia for inspiring and empowering a new generation of international students through unique and impactful educational travel programs. We envision creating a vibrant programs where diverse perspectives converge, a deep appreciation for the region's rich heritage and dynamic future is cultivated.
        </p>
        </Container>

        {/* OUR CORE VALUE */}
        <Container background="bg-[#ECFAE5]" className="pb-0">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">
      OUR CORE VALUE
        </h2>

        <p className="font-[600] text-[18px] text-[#00712D] text-center mb-20">
        We are dedicated to cultivating programs built upon foundational principles designed to empower every international student
        </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7 gap-y-5">
    {[
      {title: 'Develop Global Leadership', description: 'Fostering understanding of cultures'},
      {title: 'Explore Potential',  description: 'Encouraging them to step beyond comfort zones'},
      {title: 'Instill A Growth Mindset',  description: 'Promoting resilience, adaptability'},
      {title: 'Enhance Self-Efficacy',  description: 'Building confidence in their ability'},
      {title: 'Impactful Values',  description: 'To self and community'},
      {title: 'Cultivate Connective Experiences',  description: 'Forging a vibrant community'},
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-6 border border-[#00712D] md:px-10 p-3 rounded-[20px] bg-white">

          <Image className="max-w-12 max-h-12 rounded-full" src={CircleCheck} layout="responsive" alt={item.title} />

        <div className="text-left text-[#00712D] flex-1">
          <div className="text-[24px] font-[900] mb-2.5">{item.title}</div>

          <div className="text-[18px] font-[600]">{item.description}</div>
        </div>
      </div>
    ))}
  </div>
</Container>

{/* WHAT WE DO */}
<Container background="bg-[#ECFAE5]" className="pb-0">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">WHAT WE DO</h2>

      <p className="font-[600] text-[18px] text-[#00712D] text-center mb-20">
    We provide student travel programs to cultivate personal growth, leadership, and social impact, empowering students through a wide range of initiatives.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5">
    {[
      {title: 'NATURE CAMPS', img: NatureCamps},
      {title:'SUBJECT CAMPS', img: SubjectCamps},
      {title:'LEADERSHIP CAMPS', img: LeadershipCamps},
      {title:'LEADERSHIP CAMPS', img: LeadershipCamps},
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="mb-3.5 border-4 rounded-full border-[#00712D] aspect-square p-4 w-[108px]">
          <Image src={item.img} alt={item.title} layout="responsive" />
        </div>

        <div className="flex justify-center items-center bg-[#00712D] text-white py-6 w-full rounded-full font-[900] text-[24px]">{item.title}</div>
      </div>
    ))}
  </div>
</Container>

{/* WHY CHOOSE US */}
<Container background="bg-[#ECFAE5]" className="pb-0">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">WHY CHOOSE US</h2>

<div className="flex flex-col-reverse md:flex-row items-center gap-6 mb-10 last:mb-0">
<div className="flex-1">
  <p className="font-[600] text-[18px] text-[#00712D] mb-6">Our commitment extends beyond typical student travel, focusing on generating sustainable, positive change in the communities we engage with:</p>

  <ul className="font-[700] text-[20px] text-[#00712D]">
    {['Significant contributions in service hours to global initiatives and substantial funding directed towards local projects and scholarships.', ' Community partnerships that uphold principles of sustainable development and ethical tourism.', 'Environmental conservation efforts reaching across various continents.'].map((item, index) => (
      <li key={index} className="flex items-center mb-6 last:mb-0 gap-2">
    <Image src={Check} alt="check" width={16} height={16} /> {item}
    </li>
    ))}
  </ul>
  </div>

  <Image className="object-cover max-h-[290px] rounded-[20px] overflow-hidden flex-1" src={WhyChooseUs} alt="why-choose-us" />
</div>
</Container>

{/* SAFETY & EXPERTISE */}
<Container background="bg-[#ECFAE5]">
      <h2 className="text-[32px] font-[800] text-center text-[#22C55E] mb-8">SAFETY & EXPERTISE</h2>

<div className="flex flex-col-reverse md:flex-row items-center gap-6 mb-10 last:mb-0">
<div className="flex-1">
  <p className="font-[600] text-[18px] text-[#00712D] mb-6">Student well-being and safety are paramount to our operations. Under the guidance of our experienced medical leadership, we implement industry-leading safety protocols, encompassing:</p>

  <ul className="font-[700] text-[20px] text-[#00712D]">
    {['Rigorous pre-travel risk assessments to proactively identify and mitigate potential hazards.',
'Annual safety certifications to ensure continuous staff preparedness and proficiency.',
'Round-the-clock, on-the-ground support in every destination.',
'Strict adherence to international health guidelines, upholding global safety standards.',
'Comprehensive insurance coverage for complete peace of mind during all programs.'].map((item, index) => (
      <li key={index} className="flex items-center mb-6 last:mb-0 gap-2">
    <Image src={Check} alt="check" width={16} height={16} /> {item}
    </li>
    ))}
  </ul>

  <button className="text-white px-8 py-4 rounded-xl bg-[#FFA726] text-[20px] font-[600]">
  Find Programs
            </button>
  </div>

  <div className="relative w-full flex-1">
  <Image src={SafetyExpertise1} className="object-cover rounded-[20px] overflow-hidden" layout="responsive" alt="why-choose-us" />

  <Image src={SafetyExpertise2} className="absolute object-cover rounded-[20px] overflow-hidden" layout="responsive" alt="why-choose-us" />
</div>

</div>
</Container>
    </main>
  )
}
