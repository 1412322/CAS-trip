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
import Sustainability2 from '@/public/images/sustainability_2.webp'
import Image from 'next/image'

export default function Sustainability() {
  return (
    <main>
      {/* SUSTAINABILITY */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E] pt-16 md:pt-20">SUSTAINABILITY</Heading>

        <Paragraph className="md:max-w-4xl m-auto">
        Our commitment extends beyond facilitating meaningful volunteer experiences; it encompasses ensuring that our digital presence, our operations, and our projects contribute positively to the planet and its people for the long-term impact.
        </Paragraph>

        <div className="relative mt-10 w-full pb-20 md:pb-40">
          <Image className="w-1/2 rounded-[5px] md:rounded-[20px]" src={Sustainability1} alt="" />

          <Image className="w-2/3 rounded-[5px] md:rounded-[20px] absolute bottom-0 right-0 shadow-[-0.519px_-0.519px_0.779px_0_#FFF]" src={Sustainability2} alt="" />
        </div>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">POSITIVE COMMUNITY & ENVIRONMENT IMPACT</Heading>

        {[
          {
            img: PositiveCommunityAndEnvironmentalImpact1,
            title: 'Local Ownership',
            description: 'Our community-led projects ensure sustainable impact beyond volunteers.',
          },
          {
            img: PositiveCommunityAndEnvironmentalImpact2,
            title: 'Significant Changes',
            description: 'We boost education, environmental\nhealth, and local livelihoods.',
          },
          {
            img: PositiveCommunityAndEnvironmentalImpact3,
            title: 'Environmental Stewardship',
            description:
              'Directly addressing environmental\nconservation for lasting ecological balance.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex h-1/2 items-stretch md:h-[318px] ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <Image
              src={item.img}
              className="h-full flex-1 overflow-hidden object-cover"
              layout="responsive"
              alt={item.description}
            />

            <div className="flex h-full flex-1 flex-col items-center justify-center bg-[#00712D] px-1.5 py-10 text-center md:p-0">
              <div className="mb-2.5 text-[14px] font-[900] text-white md:text-[24px]">
                {item.title}
              </div>

              <p className="whitespace-break-spaces text-center text-[10px] font-[600] text-white md:text-[18px] lg:px-24">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">SELF-IMPACT ON STUDENTS</Heading>

        <ul className="flex flex-col gap-6 md:flex-row md:max-w-5xl m-auto">
          {[
            {
              img: PersonalGrowth,
              title: 'PERSONAL GROWTH',
              description: 'Adaptability, independence, resilience, and confidence.',
            },
            {
              img: SkillDevelopment,
              title: 'SKILL DEVELOPMENT',
              description: 'Problem-solving, communication, teamwork, leadership skills.',
            },
            {
              img: CareerAndAcadamicEnhancement,
              title: 'CAREER & ACADEMIC ENHANCEMENT',
              description: 'Networking opportunities, academic pursuits.',
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-1 flex-col items-center">
              <div className="mb-2.5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#00712D] p-4 md:mb-5 md:h-28 md:w-28 md:p-6">
                <Image
                  src={item.img}
                  className="h-full w-full object-cover"
                  layout="responsive"
                  alt={item.description}
                />
              </div>

              <div className="text-center">
                <div className="mb-1 text-[14px] font-[900] text-[#00712D] md:mb-4 md:text-[24px]">
                  {item.title}
                </div>

                <Paragraph>{item.description}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">PROGRESS & RESPONSIBILITY</Heading>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              img: ContinuousImprovementAndAccountability1,
              title: 'Environment & Conservation',
              description:
                'Number of trees planted, the continuous monitoring and protection of forested areas, and plastic waste collection initiatives.',
            },
            {
              img: ContinuousImprovementAndAccountability2,
              title: 'Education Support',
              description:
                'Number of students reached, literacy rates improved in specific communities, new teaching resources established.',
            },
            {
              img: ContinuousImprovementAndAccountability3,
              title: 'Community Development',
              description:
                'Community support initiatives empowered by enhancing protection centers, and engaging students in educational activities to foster greater resilience.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative flex aspect-square w-full flex-col items-stretch overflow-hidden rounded-[15px] ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <Image
                src={item.img}
                className="h-full w-full object-cover"
                layout="fill"
                alt={item.description}
              />

              <div className="absolute top-1/4 flex flex-col items-center justify-center text-center">
                <div className="mb-2.5 text-[20px] font-[900] text-white md:mb-6 md:text-[24px]">
                  {item.title}
                </div>

                <Paragraph className="px-4 whitespace-break-spaces text-white">
                  {item.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="bg-[#ECFAE5]">
        <p className="text-[10px] md:text-[32px] font-[800] text-center text-[#00712D]">
        By choosing to volunteer through our programs, you're contributing to build a more sustainable world for all.
        </p>

        <div className="mt-5 md:mt-10 flex justify-center">
          <Button path='/our-programs'>Explore our programs</Button>
        </div>
      </Container>
    </main>
  )
}
