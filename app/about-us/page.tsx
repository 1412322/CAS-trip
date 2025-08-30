import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Check from '@/public/images/check.svg'
import CircleCheck from '@/public/images/circle_check.svg'
import LeadershipCamps from '@/public/images/leadership_camps.svg'
import NatureCamps from '@/public/images/nature_camps.svg'
import OurStory1 from '@/public/images/our_story_1.jpg'
import OurStory2 from '@/public/images/our_story_2.jpg'
import OurStory3 from '@/public/images/our_story_3.png'
import SafetyExpertise1 from '@/public/images/safety_expertise_1.webp'
import SafetyExpertise2 from '@/public/images/safety_expertise_2.webp'
import SubjectCamps from '@/public/images/subject_camps.svg'
import WhyChooseUs from '@/public/images/why_chosse_us.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E] pt-16 md:pt-20">ABOUT US</Heading>

        <Paragraph className="md:max-w-4xl m-auto">
          This website serves as a premier platform specializing in{' '}
          <b>Creativity, Activity and Service volunteer trips</b> for international school students
          worldwide.
          <br />
          <br />
          Given on the spirit of established leaders in student travel, our platform is dedicated to
          helping young individuals put their values into action and facilitate profound youth
          changes.
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
        <Heading color="text-[#22C55E]">OUR STORY</Heading>

        {[
          {
            img: OurStory1,
            description: `<b>Experience</b> groundbreaking adventure volunteer trips with Youth Ambassadors. <b>Ignite students' potential</b> to make a tangible difference in remote regions.`,
          },
          {
            img: OurStory2,
            description: `Our mission: <b>empowering</b> young people to truly engage with the world. <b>Connect</b> deeply with diverse cultures and <b>unlock</b> your potential for global impact.`,
          },
          {
            img: OurStory3,
            description: `We're expanding across <b>Asia countries</b>, equipping students to create meaningful, <b>positive change</b> in communities worldwide.`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col items-center gap-2.5 last:mb-0 md:mb-10 md:gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            <Image
              src={item.img}
              className="w-full h-auto max-h-[152px] flex-1 overflow-hidden rounded-[10px] object-cover md:max-h-[290px]"
              alt={item.description}
            />

            <div className="flex-1">
              <p className="text-left text-[14px] font-[600] text-[#00712D] md:text-[18px]" dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          </div>
        ))}
      </Container>

      <Container className="relative z-0 bg-[url('../public/images/our_mission_cover.jpg')]">
        <Heading color="text-white">OUR MISSION</Heading>

        <div className="absolute inset-0 z-[-1] bg-[#00712D] opacity-50" />

        <div className="absolute inset-0 z-[-1] bg-[#000] opacity-50" />

        <Paragraph className="text-white md:max-w-4xl m-auto">
          To be the leading initiative in Southeast Asia for inspiring and empowering a new
          generation of international students through unique and impactful educational travel
          programs.
        </Paragraph>
      </Container>

      {/* OUR CORE VALUE */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">OUR CORE VALUE</Heading>

        <Paragraph className="mb-2.5 md:mb-10">
          We are dedicated to cultivating programs built upon foundational principles.
        </Paragraph>

        <div className="grid grid-cols-1 gap-4 gap-x-7 gap-y-5 lg:grid-cols-2">
          {[
            {
              title: 'Develop Global Leadership',
              description: 'Fostering understanding of cultures',
            },
            { title: 'Explore Potential', description: 'Inspiring growth beyond comfort zones' },
            {
              title: 'Instill A Growth Mindset',
              description: 'Promoting resilience, adaptability',
            },
            { title: 'Enhance Self-Efficacy', description: 'Building confidence in their ability' },
            { title: 'Impactful Values', description: 'To self and community' },
            {
              title: 'Cultivate Connective Experiences',
              description: 'Forging a vibrant community',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-[10px] border border-[#00712D] bg-white pl-5 py-1.5 md:gap-6 md:rounded-[20px] md:pl-10 md:py-3"
            >
              <Image
                className="w-full h-auto aspect-square max-w-6 rounded-full md:max-w-12"
                src={CircleCheck}
                alt={item.title}
              />

              <div className="flex-1 text-left text-[#00712D]">
                <div className="mb-1 text-[14px] font-[900] md:text-[24px]">
                  {item.title}
                </div>

                <div className="text-[12px] font-[600] md:text-[18px]">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* WHAT WE DO */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">WHAT WE DO</Heading>

        <Paragraph className="mb-4 md:mb-10">
        We cultivate personal growth, leadership, and social impact, empowering students skills through:
        </Paragraph>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row md:items-start md:gap-5 md:max-w-4xl m-auto">
          {[
            { title: 'NATURE CAMPS', img: NatureCamps, path: '/camps/nature' },
            { title: 'SUBJECT CAMPS', img: SubjectCamps, path: '/camps/subject' },
            { title: 'LEADERSHIP CAMPS', img: LeadershipCamps, path: '/camps/leadership' },
          ].map((item, index) => (
            <Link key={index} href={item.path} className="flex flex-1 flex-col items-center w-full">
              <div className="mb-3.5 aspect-square w-[74px] rounded-full border-2 border-[#00712D] p-3 md:w-[108px] md:border-4 md:p-4">
                <Image src={item.img} alt={item.title} className="h-auto w-full" />
              </div>

              <div className="flex w-full max-w-[200px] md:max-w-full items-center justify-center rounded-full bg-[#00712D] px-2 py-4 text-center text-[16px] font-[900] text-white md:py-6 md:text-[24px]">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {/* WHY CHOOSE US */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">WHY CHOOSE US</Heading>

        <div className="mb-10 flex flex-col-reverse items-center gap-2.5 last:mb-0 md:flex-row md:gap-6">
          <div className="flex-1">
            <ul className="text-[14px] font-[700] text-[#00712D] md:text-[20px]">
              {[
                'Global Impact: Significant service hours for global initiatives, local projects, and scholarships.',
                'Sustainable Partnerships: Meaningful community collaborations upholding sustainable development and ethical tourism.',
                'Worldwide Conservation: Active environmental conservation efforts spanning multiple continents.',
              ].map((item, index) => (
                <li key={index} className="mb-5 flex items-center gap-2 last:mb-0 md:mb-6">
                  <Image src={Check} alt="check" width={16} height={16} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <Image
            className="max-h-[290px] flex-1 overflow-hidden rounded-[10px] object-cover md:rounded-[20px]"
            src={WhyChooseUs}
            alt="why-choose-us"
          />
        </div>
      </Container>

      {/* SAFETY & EXPERTISE */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">SAFETY & EXPERTISE</Heading>

        <div className="mb-10 flex flex-col-reverse items-center gap-2.5 last:mb-0 md:flex-row md:gap-6">
          <div className="flex-1">
            <ul className="text-[14px] font-[700] text-[#00712D] md:text-[20px]">
              {[
                'Rigorous pre-travel risk assessments to proactively identify and mitigate potential hazards.',
                'Annual safety certifications to ensure continuous staff preparedness and operational proficiency.',
                'Round-the-clock, reliable on-the-ground support in every destination.',
                'Strict adherence to international health guidelines, upholding recognized global safety standards.',
                'Comprehensive insurance coverage ensures your complete peace of mind during all our programs.',
              ].map((item, index) => (
                <li key={index} className="mb-5 flex items-center gap-2 last:mb-0 md:mb-6">
                  <Image src={Check} alt="check" width={16} height={16} /> {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex justify-center md:mt-20 md:justify-start">
              <Button path="/our-programs">Explore our programs</Button>
            </div>
          </div>

          <div className="relative w-full flex-1 pb-10 md:pb-20 pl-20">
          <Image className="w-auto h-[270px] md:h-[560px] rounded-[5px] md:rounded-[20px] object-cover" src={SafetyExpertise1} alt="" />

          <Image className="w-2/3 h-[156px] md:h-[324px] rounded-[5px] md:rounded-[20px] absolute bottom-0 left-0 object-cover shadow-[0.964px_-0.964px_1.446px_0_#FFF]" src={SafetyExpertise2} alt="" />
        </div>
        </div>
      </Container>
    </main>
  )
}
