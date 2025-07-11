import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import CareerAndAcadamicEnhancement from '@/public/images/career_and_academic_enhancement.svg'
import ContinuousImprovementAndAccountability1 from '@/public/images/continuous_improvement_and_accountability_1.png'
import ContinuousImprovementAndAccountability2 from '@/public/images/continuous_improvement_and_accountability_2.png'
import ContinuousImprovementAndAccountability3 from '@/public/images/continuous_improvement_and_accountability_3.png'
import PersonalGrowth from '@/public/images/personal_growth.svg'
import PositiveCommunityAndEnvironmentalImpact1 from '@/public/images/positive_community_&_environmental_impact_1.png'
import PositiveCommunityAndEnvironmentalImpact2 from '@/public/images/positive_community_&_environmental_impact_2.png'
import PositiveCommunityAndEnvironmentalImpact3 from '@/public/images/positive_community_&_environmental_impact_3.png'
import SkillDevelopment from '@/public/images/skill_development.svg'
import Image from 'next/image'

export default function Sustainability() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pb-0">
      <Heading color="text-[#22C55E] pt-20">
      SUSTAINABILITY
        </Heading>

<p className="text-[#00712D] text-center text-[18px] font-[600]">
Our commitment extends beyond facilitating meaningful volunteer experiences; it encompasses ensuring that our digital presence, our operations, and our projects contribute positively to the planet and its people for the long-term impact.
<br/>
The core of our mission is to promote volunteer programs that create genuine, lasting positive change. We carefully select partners and projects that deliver significant impact on both the community and the individual volunteer.
</p>
        </Container>

        <Container className="bg-[#ECFAE5] pb-0">
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
<div key={index} className={`flex flex-col h-[318px] items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
  <Image src={item.img} className="object-cover h-full overflow-hidden flex-1" layout="responsive" alt={item.description} />

<div className="flex-1 bg-[#00712D] h-full flex flex-col items-center justify-center text-center">
  <label className="font-[900] text-[24px] text-white mb-6">{item.title}</label>

  <p className="font-[600] text-[18px] text-white whitespace-break-spaces">{item.description}</p>
  </div>
</div>
))}
        </Container>

        <Container className="bg-[#ECFAE5] pb-0">
      <Heading color="text-[#22C55E]">
      SELF-IMPACT ON STUDENTS
        </Heading>

<div className="flex md:flex-row flex-col gap-6">
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
<div key={index} className="flex flex-col items-center flex-1">
<div className="flex items-center justify-center rounded-full bg-[#00712D] w-28 h-28 p-6 mb-5"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt={item.description} /></div>

<div className="text-center">
  <h3 className="font-[900] text-[24px] text-[#00712D] mb-6">{item.title}</h3>

  <p className="font-[600] text-[18px] text-[#00712D] whitespace-break-spaces">{item.description}</p>
  </div>
</div>
))}
</div>
        </Container>

        <Container className="bg-[#ECFAE5] pb-0">
      <Heading color="text-[#22C55E]">
      CONTINUOUS IMPROVEMENT & ACCOUNTABILITY
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
  img: ContinuousImprovementAndAccountability1,
  title: 'Environment',
  description: 'Number of trees planted, cubic meters of waste removed, hectares of habitat restored.',
}, {
  img: ContinuousImprovementAndAccountability2,
  title: 'Educational',
  description: 'Number of students reached, literacy rates improved in specific communities, new teaching resources established.',
}, {
  img: ContinuousImprovementAndAccountability3,
  title: 'Community Development',
  description: 'Number of homes built, place of protection center for disadvantaged people are access clean water, food. Their living place are redecorate beautifully.',
}].map((item, index) => (
<div key={index} className={`rounded-[15px] relative w-full aspect-square overflow-hidden flex flex-col h-[318px] items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 <Image src={item.img} className="object-cover w-full h-full" layout="fill" alt={item.description} />

<div className="absolute inset-6 flex flex-col items-center justify-center text-center">
  <h3 className="font-[900] text-[24px] text-white mb-6">{item.title}</h3>

  <p className="font-[600] text-[18px] text-white whitespace-break-spaces">{item.description}</p>
  </div>
</div>
))}
</div>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Contact us to find out how Our Volunteer Programs can help your students achieve their learning outcomes during a school trip abroad!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Explore our programs</Button>
        </div>
</Container>
    </main>
  )
}
