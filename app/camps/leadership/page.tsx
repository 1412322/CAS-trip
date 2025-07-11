import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Sologan from '@/public/images/leadership_camps_sologan.svg'
import WhatIsLeadershipCamps1 from '@/public/images/what_is_leadership_camps_1.webp'
import WhatIsLeadershipCamps2 from '@/public/images/what_is_leadership_camps_2.webp'
import WhatIsLeadershipCamps3 from '@/public/images/what_is_leadership_camps_3.webp'
import WhatIsLeadershipCamps4 from '@/public/images/what_is_leadership_camps_4.webp'
import WhatIsLeadershipCamps5 from '@/public/images/what_is_leadership_camps_5.webp'
import WhatIsLeadershipCamps6 from '@/public/images/what_is_leadership_camps_6.webp'
import Image from 'next/image'

export default function NatureCamps() {
  return (
    <main>
                    {/* Hero Section */}
                    <div className="relative h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/subject_camps_cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <Image className="absolute px-3 md:px-0 max-h-[137px]" src={Sologan} layout="responsive" alt="reativity-activity-service" style={{ top: 'calc((100% - 80px) / 2)' }} />
        </div>
        
      {/* WHAT IS NATURE CAMPS? */}
      <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      WHAT IS LEADERSHIP CAMPS?
        </Heading>

{[{
  imgs: [WhatIsLeadershipCamps1, WhatIsLeadershipCamps2],
  descriptions: [`These camps immerse students in real-world challenges through deep exploration and understand complex societal issues firsthand. Students will engage in meaningful volunteer work, supporting initiatives related to society, healthcare access, human rights or vulnerable populations. Through active engagement, students will participate in discussions and hands-on initiatives driving positive change.`],
}, {
  imgs: [WhatIsLeadershipCamps3, WhatIsLeadershipCamps4],
  descriptions: ['Students collaborate in dynamic group projects, directly contributing to initiatives that address these real-world problems. This hands-on experience is pivotal in fostering their capacity for impactful leadership, equipping them to develop innovative solutions and soft skills, as crucial as academics for their future success.'],
}, {
  imgs: [WhatIsLeadershipCamps5, WhatIsLeadershipCamps6],
  title: 'How the programs work?',
  descriptions: [
    '<b>Exploration:</b> Visiting NGOs, community organizations, and local cities to understand complex issues.',
    '<b>Volunteer Work:</b> Supporting initiatives related to fair trade, healthcare access, human rights, community resilience projects or supporting vulnerable populations.',
    '<b>Engagement:</b> Participating in discussions, research, and hands-on projects that drive positive change.',
  ]
}].map((item, index) => (
<div key={index} className={`flex flex-col items-center gap-6 mb-10 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
 <div className="flex gap-6 flex-1">
   {item.imgs.map(img => (
    <Image src={img} className="object-cover max-h-[290px] rounded-[20px] aspect-square overflow-hidden" layout="responsive" alt="" />
   ))}
 </div>
  
  <div className="flex-1 text-left text-[#00712D]">
    {item.title && <div className="text-[18px] text-[24px] font-[900] mb-6">{item.title}</div>}

<ul className={`${item.descriptions.length > 1 ? 'list-disc ml-4' : ''}`}>

{item.descriptions.map((description, descriptionIndex) => (
  <li key={descriptionIndex} className={`${item.descriptions.length > 1 ? 'mb-6 last:mb-0' : ''}`}>
    <p className="font-[600] text-[18px]" dangerouslySetInnerHTML={{ __html: description }} />
  </li>
))}
  </ul>
  </div>
</div>
))}
        </Container>
    </main>
  )
}
