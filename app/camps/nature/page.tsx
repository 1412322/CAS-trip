import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Sologan from '@/public/images/nature_camps_sologan.svg'
import WhatIsNatureCamps1 from '@/public/images/what_is_nature_camps_1.png'
import WhatIsNatureCamps2 from '@/public/images/what_is_nature_camps_2.png'
import WhatIsNatureCamps3 from '@/public/images/what_is_nature_camps_3.png'
import WhatIsNatureCamps4 from '@/public/images/what_is_nature_camps_4.png'
import WhatIsNatureCamps5 from '@/public/images/what_is_nature_camps_5.png'
import WhatIsNatureCamps6 from '@/public/images/what_is_nature_camps_6.png'
import Image from 'next/image'

export default function NatureCamps() {
  return (
    <main>
                    {/* Hero Section */}
                    <div className="relative h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/nature_camps_cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <Image className="absolute px-3 md:px-0 max-h-[137px]" src={Sologan} layout="responsive" alt="reativity-activity-service" style={{ top: 'calc((100% - 80px) / 2)' }} />
        </div>
        
      {/* WHAT IS NATURE CAMPS? */}
      <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      WHAT IS NATURE CAMPS?
        </Heading>

{[{
  imgs: [WhatIsNatureCamps1, WhatIsNatureCamps2],
  descriptions: [`These programs combine exciting outdoor adventures with immersive, hands-on environmental conservation activities. You'll not only explore stunning natural landscapes but also actively work to protect them. This will foster a deep understanding of the importance of conservation, enhance awareness of interconnected ecosystems in the local environment and motivate positive environmental protection behaviors.`],
}, {
  imgs: [WhatIsNatureCamps3, WhatIsNatureCamps4],
  descriptions: ['Journeys inspire students to take initiative and persevere through environmental team challenges to gain practical conservation scenic beauty skills. These hands-on experiences inherently cultivate students strong critical-thinking, problem-solving, effective communication and collaboration skills.'],
}, {
  imgs: [WhatIsNatureCamps5, WhatIsNatureCamps6],
  title: 'How the programs work?',
  descriptions: [
    '<b>Volunteer Work:</b> Planting trees, cleaning up beaches/rivers, monitoring wildlife, or supporting sustainable farming practices.',
'<b>Learning:</b> Understanding local ecosystems globally aware citizens and engaged contributors on the world stage and the importance of conservation from experts.',
  ],
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
