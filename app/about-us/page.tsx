import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Check from '@/public/images/check.svg'
import CircleCheck from '@/public/images/circle_check.svg'
import LeadershipCamps from '@/public/images/leadership_camps.svg'
import MeetOurTeam1 from '@/public/images/meet_our_team.png'
import NatureCamps from '@/public/images/nature_camps.svg'
import OurStory1 from '@/public/images/our_story_1.jpg'
import OurStory2 from '@/public/images/our_story_2.jpg'
import OurStory3 from '@/public/images/our_story_3.png'
import SafetyExpertise1 from '@/public/images/safety_expertise_1.png'
import SubjectCamps from '@/public/images/subject_camps.svg'
import WhyChooseUs from '@/public/images/why_chosse_us.jpg'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E] pt-16 md:pt-20">
          ABOUT US
        </Heading>

<Paragraph>
This website serves as a premier platform specializing in <b>Creativity, Activity and Service volunteer trips</b> for international school students worldwide.
<br/><br/>
Given on the spirit of established leaders in student travel, our platform is dedicated to helping young individuals put their values into action and facilitate profound youth changes.
</Paragraph>
        </Container>

        {/* <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      MEET OUR TEAM
        </Heading>

<div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-3 gap-5 md:gap-y-6 md:gap-x-10 mx-[-20px] px-5 md:mx-0 md:px-0">
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
  <div key={index} className="relative group rounded-[20px] min-w-[70vw] md:min-w-full">
    <Image src={item.img} alt={item.title} />

<div className="hidden group-hover:block group/profile overflow-hidden bg-[#FFFFFF99] absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 shadow-[-4px_-4px_20px_0px_rgba(233,232,232,0.60)_inset] rounded-[20px] border-2 border-[#FFFFFF66]">
  <div className="relative z-0 p-2.5 md:px-5">
  <div className="absolute inset-0 backdrop-blur-md group-hover/profile:bg-white z-[-1]" />

    <div className="text-[18px] font-[900] text-[#00712D] mb-2.5 md:mb-5">{item.title}</div>

    <div className="text-[12px] md:text-[18px] font-[700] text-[#00712D]">{item.subTitle}</div>

    <p className="text-[12px] md:text-[16px] font-[500] text-[#00712D]">{item.description}</p>
</div>
    </div>
  </div>
))}
</div>

<div className="mt-4 md:mt-10 flex justify-center">
<Button>
Meet All Our member
            </Button>
            </div>
        </Container> */}

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      OUR STORY
        </Heading>

{[{
  img: OurStory1,
  description: `<b>Experience</b> groundbreaking adventure volunteer trips with Youth Ambassadors. <b>Ignite students' potential</b> to make a tangible difference in remote regions.`,
}, {
  img: OurStory2,
  description: `Our mission: <b>empowering</b> young people to truly engage with the world. <b>Connect</b> deeply with diverse cultures and <b>unlock</b> your potential for global impact.`,
}, {
  img: OurStory3,
  description: `We're expanding across <b>Asia countries</b>, equipping students to create meaningful, <b>positive change</b> in communities worldwide.`,
}].map((item, index) => (
<div key={index} className={`flex flex-col items-center gap-2.5 md:gap-6 mb-8 md:mb-10 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
  <Image src={item.img} className="object-cover max-h-[152px] md:max-h-[290px] rounded-[10px] overflow-hidden flex-1" layout="responsive" alt={item.description} />

<div className="flex-1">
  <Paragraph className="!text-left md:!text-center">
    <p dangerouslySetInnerHTML={{ __html: item.description }} />
    </Paragraph>
  </div>
</div>
))}
        </Container>

        <Container className="relative bg-[url('../public/images/our_mission_cover.jpg')] z-0">
      <Heading color="text-white">
     OUR MISSION
        </Heading>

        <div className="absolute inset-0 bg-[#00712D] opacity-50 z-[-1]" />

<div className="absolute inset-0 bg-[#000] opacity-50 z-[-1]" />

        <Paragraph className="text-white">
        To be the leading initiative in Southeast Asia for inspiring and empowering a new generation of international students through unique and impactful educational travel programs.
        </Paragraph>
        </Container>

        {/* OUR CORE VALUE */}
        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      OUR CORE VALUE
        </Heading>

        <Paragraph className="mb-6 md:mb-10">
        We are dedicated to cultivating programs built upon foundational principles.
        </Paragraph>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7 gap-y-5">
    {[
      {title: 'Develop Global Leadership', description: 'Fostering understanding of cultures'},
      {title: 'Explore Potential',  description: 'Inspiring growth beyond comfort zones'},
      {title: 'Instill A Growth Mindset',  description: 'Promoting resilience, adaptability'},
      {title: 'Enhance Self-Efficacy',  description: 'Building confidence in their ability'},
      {title: 'Impactful Values',  description: 'To self and community'},
      {title: 'Cultivate Connective Experiences',  description: 'Forging a vibrant community'},
    ].map((item, index) => (
      <div key={index} className="flex items-center gap-3 md:gap-6 border border-[#00712D] px-5 md:px-10 py-1.5 md:py-3 rounded-[10px] md:rounded-[20px] bg-white">

          <Image className="max-w-6 md:max-w-12 aspect-square rounded-full" src={CircleCheck} layout="responsive" alt={item.title} />

        <div className="text-left text-[#00712D] flex-1">
          <div className="text-[14px] md:text-[24px] font-[900] mb-1 md:mb-2.5">{item.title}</div>

          <div className="text-[12px] md:text-[18px] font-[600]">{item.description}</div>
        </div>
      </div>
    ))}
  </div>
</Container>

{/* WHAT WE DO */}
<Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">WHAT WE DO</Heading>

      <Paragraph className="mb-4 md:mb-10">
    We provide student travel programs to cultivate personal growth, leadership, and social impact, empowering students through a wide range of initiatives.
  </Paragraph>

  <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-5">
    {[
      {title: 'NATURE CAMPS', img: NatureCamps},
      {title:'SUBJECT CAMPS', img: SubjectCamps},
      {title:'LEADERSHIP CAMPS', img: LeadershipCamps},
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center flex-1">
        <div className="mb-3.5 border-2 md:border-4 rounded-full border-[#00712D] aspect-square p-3 md:p-4 w-[74px] md:w-[108px]">
          <Image src={item.img} alt={item.title} layout="responsive" />
        </div>

        <div className="flex justify-center items-center bg-[#00712D] w-full text-center text-white py-4 px-8 md:py-6 rounded-full font-[900] text-[16px] md:text-[24px]">
          {item.title}
          </div>
      </div>
    ))}
  </div>
</Container>

{/* WHY CHOOSE US */}
<Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">WHY CHOOSE US</Heading>

<div className="flex flex-col-reverse md:flex-row items-center gap-2.5 md:gap-6 mb-10 last:mb-0">
<div className="flex-1">
  <ul className="font-[700] text-[14px] md:text-[20px] text-[#00712D]">
    {[
      'Global Impact: Significant service hours for global initiatives, local projects, and scholarships.',
      'Sustainable Partnerships: Meaningful community collaborations upholding sustainable development and ethical tourism.',
      'Worldwide Conservation: Active environmental conservation efforts spanning multiple continents.'
    ].map((item, index) => (
      <li key={index} className="flex items-center mb-5 md:mb-6 last:mb-0 gap-2">
    <Image src={Check} alt="check" width={16} height={16} /> {item}
    </li>
    ))}
  </ul>
  </div>

  <Image className="object-cover max-h-[290px] rounded-[10px] md:rounded-[20px] overflow-hidden flex-1" src={WhyChooseUs} alt="why-choose-us" />
</div>
</Container>

{/* SAFETY & EXPERTISE */}
<Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">SAFETY & EXPERTISE</Heading>

      <div className="flex flex-col-reverse md:flex-row items-center gap-2.5 md:gap-6 mb-10 last:mb-0">
<div className="flex-1">
  <ul className="font-[700] text-[14px] md:text-[20px] text-[#00712D]">
    {[
      'Rigorous pre-travel risk assessments to proactively identify and mitigate potential hazards.',
      'Annual safety certifications to ensure continuous staff preparedness and operational proficiency.',     
      'Round-the-clock, reliable on-the-ground support in every destination.',     
      'Strict adherence to international health guidelines, upholding recognized global safety standards.',      
      'Comprehensive insurance coverage ensures your complete peace of mind during all our programs.' 
    ].map((item, index) => (
  <li key={index} className="flex items-center mb-5 md:mb-6 last:mb-0 gap-2">
    <Image src={Check} alt="check" width={16} height={16} /> {item}
    </li>
    ))}
  </ul>

  <div className="mt-5 md:mt-20 flex justify-center md:justify-start">
  <Button>
  Find Programs
            </Button>
            </div>
  </div>

  <div className="relative w-full flex-1">
  <Image src={SafetyExpertise1} className="object-cover rounded-[10px] md:rounded-[20px] overflow-hidden" layout="responsive" alt="why-choose-us" />

  {/* <Image src={SafetyExpertise2} className="absolute object-cover rounded-[20px] overflow-hidden" layout="responsive" alt="why-choose-us" /> */}
</div>

</div>
</Container>
    </main>
  )
}
