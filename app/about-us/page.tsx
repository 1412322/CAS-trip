import Image from 'next/image'
import MeetOurTeam1 from '@/public/images/meet_our_team.png'
import OurStory1 from '@/public/images/our_story_1.jpg'
import OurStory2 from '@/public/images/our_story_2.jpg'
import OurStory3 from '@/public/images/our_story_3.png'
import Container from '@/components/Layout/Container'

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
  <div key="index" className="relative">
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

<div>
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
<div className={`flex items-center gap-6 mb-10 last:mb-0 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
  <div className="relative w-full h-[290px] rounded-[20px] overflow-hidden flex-1">
  <Image src={item.img} className="object-cover" layout="fill" alt={item.description} />
</div>

  <p className="font-[600] text-[18px] text-[#00712D] flex-1">{item.description}</p>
</div>
))}
</div>
        </Container>

        <Container background="bg-[url('../public/images/our_mission_cover.jpg')]">
      <h2 className="text-[32px] font-[800] text-center text-white mb-8">
     OUR MISSION
        </h2>

        <p className="font-[600] text-[18px] text-white text-center">
        To be the leading initiative in Southeast Asia for inspiring and empowering a new generation of international students through unique and impactful educational travel programs. We envision creating a vibrant programs where diverse perspectives converge, a deep appreciation for the region's rich heritage and dynamic future is cultivated.
        </p>
        </Container>
    </main>
  )
}
