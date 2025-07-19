import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Sologan from '@/public/images/taman_negara_sologan.svg'
import Highlights1 from '@/public/images/highlights_1.webp'
import Highlights2 from '@/public/images/highlights_2.webp'
import Highlights3 from '@/public/images/highlights_3.webp'
import EnrollmentDeadline from '@/public/images/enrollment_deadline.svg'
import Ages from '@/public/images/ages.svg'
import Cost from '@/public/images/cost.svg'
import Duration from '@/public/images/duration.svg'
import ProgramTypes from '@/public/images/program_types.svg'
import Impact from '@/public/images/impact.svg'
import Image from 'next/image'

export default function TamanNegara() {
  return (
    <main>
              {/* Hero Section */}
              <div className="relative h-[50vh] md:h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/mobile_cover.webp')] md:bg-[url('../public/images/taman_negara_cover.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute px-5 md:px-[100px] z-1 flex flex-col items-center justify-center h-full w-full">
            <Image src={Sologan} layout="responsive" alt="reativity-activity-service" />

            <h2 className="text-[16px] md:text-[35px] font-[800] mt-3 mb-[77px] text-white text-center">
            22 OCTOBER – 26 OCTOBER 2025
            </h2>

            <Button>
            Sign Up Now
            </Button>
          </div>
        </div>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">LET'S TAKE A LOOK OUR JOURNEY</Heading>

        <div className="mt-10 flex justify-center">
          <Button>
          Watch more our trips
          </Button>
        </div>
      </Container>

      <Container className="relative bg-[url('../public/images/wilderness_expedition_cover.webp')] z-0">
      <Heading color="text-white">
      ASEAN ADVENTURE: WILDERNESS EXPEDITION
        </Heading>

        <div className="absolute inset-0 bg-[#00712D] opacity-50 z-[-1]" />

<div className="absolute inset-0 bg-[#000] opacity-50 z-[-1]" />

        <Paragraph className="text-white">
        Embark on a unique 7-day journey that seamlessly blends urban exploration, thrilling nature adventures, and authentic cultural immersion across Singapore and Malaysia. This program is designed for students seeking a dynamic experience that goes beyond the ordinary.

Kick off in the vibrant city-state of Singapore, exploring its iconic landmarks. Then, transition to the lush natural beauty of Malaysia, delving into the serene landscapes of Janda Baik and the ancient wonders of Taman Negara.

Engage in hands-on farm experiences, exciting outdoor challenges, and meaningful cultural exchanges. It's a perfect blend of learning, adventure, and personal growth.
        </Paragraph>

        <div className="mt-10 flex justify-center">
          <Button>
          Download Trip Itinerary
          </Button>
        </div>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      HIGHLIGHTS
        </Heading>

<ul className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[{
  img: Highlights1,
  title: 'City-state of Singapore',
}, {
  img: Highlights2,
  title: 'Taman Negara Immersion',
}, {
  img: Highlights3,
  title: 'Outdoor challenges',
}].map((item, index) => (
<li key={index} className="flex flex-col items-center">
<div className="flex items-center justify-center rounded-full w-full h-full"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt="" /></div>

<h3 className="font-[900] text-[14px] md:text-[24px] text-[#00712D] mt-10">{item.title}</h3>
</li>
))}
</ul>
        </Container>

        <Container className="bg-[#00712D]">
      <Heading color="text-white">
      TRIP OVERVIEW
        </Heading>

<ul className="grid grid-cols-3 md:grid-cols-6">
        {[{
  img: EnrollmentDeadline,
  title: 'Enrollment Deadline',
  description: 'July 25th 2025',
}, {
  img: Cost,
  title: 'Cost',
  description: 'Price',
}, {
  img: Ages,
  title: 'Ages',
  description: 'Senior: Ages 19 - 22\nJunior: Ages 14 - 18',
},
{
  img: Duration,
  title: 'Duration',
  description: '7 days',
},{
  img: ProgramTypes,
  title: 'Program Types',
  description: '7 days',
}, {
  img: Impact,
  title: 'Impact',
  description: 'Deepen knowledge\nSharpen soft skills',
}].map((item, index) => (
<li key={index} className="flex flex-col justify-start items-center space-y-2.5">
<div className="flex items-center justify-center rounded-full w-[88px] h-[88px]"><Image src={item.img} className="object-cover w-full h-full" layout="responsive" alt="" /></div>

<div className="text-center text-[18px] font-[900] text-white">{item.title}</div>

<div className="text-center text-[18px] font-[600] text-white break-spaces">{item.description}</div>
</li>
))}
</ul>
        </Container>

        <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      OUTCOMES
        </Heading>

<div className="grid grid-cols-1 md:grid-cols-2 rounded-t-[10px] border border-[#00712D] overflow-hidden">
{[{
  title: 'Community Impact',
  contents: [
  {title: 'Cultural Exchanges',
  description: 'Students directly engaging with the traditions, customs activities and daily lives of communities in Singapore and Malaysia.',
  },
  {title: 'Mutual Understanding',
  description: 'Through meaningful and cultural immersion, the program builds relationship between students and local populations in Singapore and Malaysia.',
  },
  {title: 'Local Engagement',
  description: 'Students experience hands-on farm to interact with local practices and livelihoods, potentially strengthening community ties and cultural preservation efforts in a supportive manner.',
  },
]
}, {
  title: 'Self-Impact on Students',
  contents: [
  {title: 'Personal Growth',
  description: 'Fostering adaptability, resilience, and a sense of adventure by pushing beyond ordinary experiences.',
  },
  {title: 'Expand Insights',
  description: 'Gain real-world insights through urban exploration, thrilling nature adventures, and active engagement with diverse environments.',
  },
  {title: 'Skill Development',
  description: 'Students improve soft skills, such as problem-solving, adaptability, communication, collaboration, critical thinking through experiencing outdoor challenges.',
  },
]
}].map((item, index) => (
<div key={index} className="flex flex-col items-center flex-1 last:border-l last:border-[#00712D]">
<div className="w-full text-white text-[32px] font-[800] text-center flex items-center justify-center bg-[#00712D] h-[76px]">{item.title}</div>

<ul className="py-8 px-10 text-[#00712D] flex-1">
  {item.contents.map((content, index) => (
<li key={index} className="mb-10 last:mb-0">
  <div className="text-[24px] font-[900] mb-1.5">{content.title}</div>

  <div className="text-[18px] font-[600] mb-1.5">{content.description}</div>
</li>
  ))}
</ul>
</div>
))}
</div>
        </Container>
    </main>
  )
}
