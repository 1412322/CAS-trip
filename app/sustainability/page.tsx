import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import CareerAndAcadamicEnhancement from '@/public/images/career_and_academic_enhancement.svg'
import ContinuousImprovementAndAccountability1 from '@/public/images/continuous_improvement_and_accountability_1.png'
import ContinuousImprovementAndAccountability2 from '@/public/images/continuous_improvement_and_accountability_2.png'
import ContinuousImprovementAndAccountability3 from '@/public/images/continuous_improvement_and_accountability_3.png'
import PersonalGrowth from '@/public/images/personal_growth.svg'
import PositiveCommunityAndEnvironmentalImpact1 from '@/public/images/positive_community_&_environmental_impact_1.png'
import PositiveCommunityAndEnvironmentalImpact2 from '@/public/images/positive_community_&_environmental_impact_2.png'
import PositiveCommunityAndEnvironmentalImpact3 from '@/public/images/positive_community_&_environmental_impact_3.png'
import SkillDevelopment from '@/public/images/skill_development.svg'
import Sustainability1 from '@/public/images/sustainability_1.webp'
import Image from 'next/image'

export default function Sustainability() {
  return (
    <main>
      {/* SUSTAINABILITY */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E] pt-16 md:pt-20">
      SUSTAINABILITY
        </Heading>

<Paragraph>
Our commitment extends beyond facilitating meaningful volunteer experiences; it encompasses ensuring that our digital presence, our operations, and our projects contribute positively to the planet and its people for the long-term impact.
</Paragraph>

<div className="relative mt-10 w-full">
<Image className="w-2/4" src={Sustainability1} alt="" />

  {/* <Image className="absolute w-[60%] right-0 bottom-[-100px]" src={Sustainability2} alt="" /> */}
</div>
        </Container>

        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      POSITIVE COMMUNITY & ENVIRONMENT IMPACT
        </Heading>

        {[{
  img: PositiveCommunityAndEnvironmentalImpact1,
  title: 'Local Ownership',
  description: 'Our community-led projects ensure\nsustainable impact beyond volunteers.',
}, {
  img: PositiveCommunityAndEnvironmentalImpact2,
  title: 'Significant Changes',
  description: 'We boost education, environmental\nhealth, and local livelihoods.',
}, {
  img: PositiveCommunityAndEnvironmentalImpact3,
  title: 'Environmental Stewardship',
  description: 'Directly addressing environmental\nconservation for lasting ecological balance.',
}].map((item, index) => (
<div key={index} className={`flex h-1/2 md:h-[318px] items-stretch ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
 
  <Image src={item.img} className="object-cover h-full overflow-hidden flex-1" layout="responsive" alt={item.description} />

<div className="flex-1 bg-[#00712D] h-full py-10 px-1.5 md:p-0 flex flex-col items-center justify-center text-center">
  <div className="font-[900] text-[14px] md:text-[24px] text-white mb-2.5 md:mb-6">{item.title}</div>

  <p className="text-center text-[10px] md:text-[18px] font-[600] text-white whitespace-break-spaces">{item.description}</p>
  </div>
</div>
))}
        </Container>

        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      SELF-IMPACT ON STUDENTS
        </Heading>

<ul className="flex md:flex-row flex-col gap-6">
        {[{
  img: PersonalGrowth,
  title: 'PERSONAL GROWTH',
  description: 'Adaptability, independence, resilience, and confidence.',
}, {
  img: SkillDevelopment,
  title: 'SKILL DEVELOPMENT',
  description: 'Problem-solving, communication, teamwork, leadership skills.',
}, {
  img: CareerAndAcadamicEnhancement,
  title: 'CAREER & ACADEMIC ENHANCEMENT',
  description: 'Networking opportunities, academic pursuits.',
}].map((item, index) => (
<li key={index} className="flex flex-col items-center flex-1">
<div className="flex items-center justify-center rounded-full bg-[#00712D] w-[72px] h-[72px] md:w-28 md:h-28 p-4 md:p-6 mb-2.5 md:mb-5"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt={item.description} /></div>

<div className="text-center">
  <div className="font-[900] text-[14px] md:text-[24px] text-[#00712D] mb-1 md:mb-4">{item.title}</div>

  <Paragraph>{item.description}</Paragraph>
  </div>
</li>
))}
</ul>
        </Container>

        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      CONTINUOUS IMPROVEMENT & ACCOUNTABILITY
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
  img: ContinuousImprovementAndAccountability1,
  title: 'Environment & Conservation',
  description: 'Number of trees planted, the continuous monitoring and protection of forested areas, and plastic waste collection initiatives.',
}, {
  img: ContinuousImprovementAndAccountability2,
  title: 'Education Support',
  description: 'Number of students reached, literacy rates improved in specific communities, new teaching resources established.',
}, {
  img: ContinuousImprovementAndAccountability3,
  title: 'Community Development',
  description: 'Community support initiatives empowered by enhancing protection centers, and engaging students in educational activities to foster greater resilience.',
}].map((item, index) => (
<div key={index} className={`rounded-[15px] relative w-full aspect-square overflow-hidden flex flex-col h-[318px] items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 <Image src={item.img} className="object-cover w-full h-full" layout="fill" alt={item.description} />

<div className="absolute inset-2 md:inset-5 md:inset-6 flex flex-col items-center justify-center text-center">
  <div className="font-[900] text-[20px] md:text-[24px] text-white mb-2.5 md:mb-6">{item.title}</div>

  <Paragraph className="text-white whitespace-break-spaces">{item.description}</Paragraph>
  </div>
</div>
))}
</div>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      By choosing to volunteer through our platform, you're not just embarking on an incredible personal journey; you're contributing to a collective effort to build a more sustainable and equitable world for all.
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Explore our programs</Button>
        </div>
</Container>
    </main>
  )
}
