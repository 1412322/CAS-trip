import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Ages from '@/public/images/ages.svg'
import Carret from '@/public/images/carret.svg'
import Cost from '@/public/images/cost.svg'
import Duration from '@/public/images/duration.svg'
import EnrollmentDeadline from '@/public/images/enrollment_deadline.svg'
import Highlights1 from '@/public/images/highlights_1.webp'
import Highlights2 from '@/public/images/highlights_2.webp'
import Highlights3 from '@/public/images/highlights_3.webp'
import Impact from '@/public/images/impact.svg'
import ProgramTypes from '@/public/images/program_types.svg'
import Sologan from '@/public/images/taman_negara_sologan.svg'
import Image from 'next/image'
import Tabs from './tabs'

export default function TamanNegara() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('../public/images/mobile_cover.webp')] bg-cover bg-center bg-no-repeat md:h-screen md:max-h-[655px] md:bg-[url('../public/images/taman_negara_cover.webp')]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center px-5 md:px-[100px]">
          <Image src={Sologan} layout="responsive" alt="reativity-activity-service" />

          <h2 className="mb-[77px] mt-3 text-center text-[16px] font-[800] text-white md:text-[35px]">
            22 OCTOBER – 26 OCTOBER 2025
          </h2>

          <Button>Sign Up Now</Button>
        </div>
      </div>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">LET'S TAKE A LOOK OUR JOURNEY</Heading>

        <div className="mt-10 flex justify-center">
          <Button>Watch more our trips</Button>
        </div>
      </Container>

      <Container className="relative z-0 bg-[url('../public/images/wilderness_expedition_cover.webp')]">
        <Heading color="text-white">ASEAN ADVENTURE: WILDERNESS EXPEDITION</Heading>

        <div className="absolute inset-0 z-[-1] bg-[#00712D] opacity-50" />

        <div className="absolute inset-0 z-[-1] bg-[#000] opacity-50" />

        <Paragraph className="text-white">
          Experience a unique 7-day journey blending urban exploration, thrilling nature, and
          cultural immersion across Singapore and Malaysia. Discover Singapore's iconic landmarks
          before delving into Malaysia's serene landscapes and ancient wonders. Engage in hands-on
          challenges and cultural exchanges for a perfect blend of learning, adventure, and personal
          growth.
        </Paragraph>

        <div className="mt-10 flex justify-center">
          <Button>Download Trip Itinerary</Button>
        </div>
      </Container>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">HIGHLIGHTS</Heading>

        <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {[
            {
              img: Highlights1,
              title: 'City-state of Singapore',
            },
            {
              img: Highlights2,
              title: 'Taman Negara Immersion',
            },
            {
              img: Highlights3,
              title: 'Outdoor challenges',
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="flex h-full w-full items-center justify-center rounded-full">
                <Image
                  src={item.img}
                  className="max-h-60 max-w-60 object-cover md:max-h-full md:max-w-full"
                  layout="responsive"
                  alt=""
                />
              </div>

              <h3 className="mt-2.5 text-[20px] font-[900] text-[#00712D] md:mt-10 md:text-[24px]">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="bg-[#00712D]">
        <Heading color="text-white">TRIP OVERVIEW</Heading>

        <ul className="grid grid-cols-3 md:grid-cols-6">
          {[
            {
              img: EnrollmentDeadline,
              title: 'Enrollment Deadline',
              description: 'July 25th 2025',
            },
            {
              img: Cost,
              title: 'Cost',
              description: 'Price',
            },
            {
              img: Ages,
              title: 'Ages',
              description: 'Senior: Ages 19 - 22\nJunior: Ages 14 - 18',
            },
            {
              img: Duration,
              title: 'Duration',
              description: '5 days',
            },
            {
              img: ProgramTypes,
              title: 'Program Types',
              description: '7 days',
            },
            {
              img: Impact,
              title: 'Impact',
              description: 'Deepen knowledge\nSharpen soft skills',
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-start space-y-1 md:space-y-2.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full md:h-[88px] md:w-[88px]">
                <Image
                  src={item.img}
                  className="h-full w-full object-cover"
                  layout="responsive"
                  alt=""
                />
              </div>

              <div className="text-center text-[14px] font-[900] text-white md:text-[18px]">
                {item.title}
              </div>

              <Paragraph className="text-white">{item.description}</Paragraph>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">OUTCOMES</Heading>

        <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-t-[10px] border border-[#00712D] md:grid-cols-2 md:gap-0">
          {[
            {
              title: 'Community Impact',
              contents: [
                {
                  title: 'Cultural Exchanges',
                  description:
                    'Students directly engaging with the traditions, customs activities and daily lives of communities in Singapore and Malaysia.',
                },
                {
                  title: 'Mutual Understanding',
                  description:
                    'Through meaningful and cultural immersion, the program builds relationship between students and local populations in Singapore and Malaysia.',
                },
                {
                  title: 'Local Engagement',
                  description:
                    'Students experience hands-on farm to interact with local practices and livelihoods, potentially strengthening community ties and cultural preservation efforts in a supportive manner.',
                },
              ],
            },
            {
              title: 'Self-Impact on Students',
              contents: [
                {
                  title: 'Personal Growth',
                  description:
                    'Fostering adaptability, resilience, and a sense of adventure by pushing beyond ordinary experiences.',
                },
                {
                  title: 'Expand Insights',
                  description:
                    'Gain real-world insights through urban exploration, thrilling nature adventures, and active engagement with diverse environments.',
                },
                {
                  title: 'Skill Development',
                  description:
                    'Students improve soft skills, such as problem-solving, adaptability, communication, collaboration, critical thinking through experiencing outdoor challenges.',
                },
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center last:border-l last:border-[#00712D]"
            >
              <div className="flex h-10 w-full items-center justify-center bg-[#00712D] text-center text-[20px] font-[800] text-white md:h-[76px] md:text-[32px]">
                {item.title}
              </div>

              <ul className="flex-1 px-2.5 py-6 text-[#00712D] md:px-10 md:py-8">
                {item.contents.map((content, index) => (
                  <li key={index} className="mb-2.5 last:mb-0 md:mb-10">
                    <div className="mb-1.5 flex items-center gap-2.5">
                      <div className="relative aspect-square w-4 md:w-5">
                        <Image src={Carret} alt="" layout="fill" />
                      </div>

                      <div className="text-[14px] font-[900] md:text-[24px]">{content.title}</div>

                      {/* <Image className={activeDropdown === "programs" ? 'rotate-180' : ''} src={ArrowDown} width={12} alt="arrow-down-icon" /> */}
                    </div>

                    <Paragraph className="mb-1.5 ml-[26px] !text-left md:ml-[30px]">
                      {content.description}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Tabs />
    </main>
  )
}
