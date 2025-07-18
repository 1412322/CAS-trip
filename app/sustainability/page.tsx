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
      <Heading color="text-[#22C55E] pt-10 md:pt-20">
      SUSTAINABILITY
        </Heading>

<Paragraph>
Our commitment extends beyond facilitating meaningful volunteer experiences; it encompasses ensuring that our digital presence, our operations, and our projects contribute positively to the planet and its people for the long-term impact.
<br/>
<br/>
The core of our mission is to promote volunteer programs that create genuine, lasting positive change. We carefully select partners and projects that deliver significant impact on both the community and the individual volunteer.
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
  description: 'We prioritize programs that are\ncommunity-led, ensuring projects meet\nreal needs and are sustainable beyond\nvolunteer presence.',
}, {
  img: PositiveCommunityAndEnvironmentalImpact2,
  title: 'Significant Changes',
  description: 'We improved access to education,\nenhanced environmental health (e.g.,\ncleaner marine ecosystems, thriving\nforests), better community infrastructure,\nor strengthened local livelihoods.',
}, {
  img: PositiveCommunityAndEnvironmentalImpact3,
  title: 'Environmental Stewardship',
  description: 'We directly address environmental\nconservation, from marine protection to\nreforestation, promoting long-term\necological balance in the local area.',
}].map((item, index) => (
<div key={index} className={`flex h-1/2 md:h-[318px] items-stretch ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
 
  <Image src={item.img} className="object-cover h-full overflow-hidden flex-1" layout="responsive" alt={item.description} />

<div className="flex-1 bg-[#00712D] h-full p-2.5 md:p-0 flex flex-col items-center justify-center text-center">
  <label className="font-[900] text-[14px] md:text-[24px] text-white mb-2.5 md:mb-6">{item.title}</label>

  <Paragraph className="text-white whitespace-break-spaces">{item.description}</Paragraph>
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
  description: 'Volunteers develop greater independence, adaptability, and resilience by navigating new environments and challenges.',
}, {
  img: SkillDevelopment,
  title: 'SKILL DEVELOPMENT',
  description: 'Students enhance crucial skills like problem-solving, intercultural communication, teamwork, and leadership all highly valuable for future careers.',
}, {
  img: CareerAndAcadamicEnhancement,
  title: 'CAREER & ACADEMIC ENHANCEMENT',
  description: 'Our programs combine with networking opportunities, significantly boosts resumes and university applications, opening doors for future academic and professional pursuits.',
}].map((item, index) => (
<li key={index} className="flex flex-col items-center flex-1">
<div className="flex items-center justify-center rounded-full bg-[#00712D] w-[72px] h-[72px] md:w-28 md:h-28 p-6 mb-2.5 md:mb-5"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt={item.description} /></div>

<div className="text-center">
  <h3 className="font-[900] text-[14px] md:text-[24px] text-[#00712D] mb-1 md:mb-4">{item.title}</h3>

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
  title: 'Environment',
  description: 'Number of trees planted, the continuous monitoring and protection of forested areas, and plastic waste collection initiatives.',
}, {
  img: ContinuousImprovementAndAccountability2,
  title: 'Educational',
  description: 'Number of students reached, literacy rates improved in specific communities, new teaching resources established.',
}, {
  img: ContinuousImprovementAndAccountability3,
  title: 'Community Development',
  description: 'Community support initiatives empowered by enhancing protection centers, and engaging students in educational activities to foster greater resilience.',
}].map((item, index) => (
<div key={index} className={`rounded-[15px] relative w-full aspect-square overflow-hidden flex flex-col h-[318px] items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 <Image src={item.img} className="object-cover w-full h-full" layout="fill" alt={item.description} />

<div className="absolute inset-5 md:inset-6 flex flex-col items-center justify-center text-center">
  <h3 className="font-[900] text-[20px] text-[24px] text-white mb-2.5 md:mb-6">{item.title}</h3>

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
