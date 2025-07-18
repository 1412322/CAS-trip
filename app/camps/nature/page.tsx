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
                    <div className="relative h-[100vw] md:h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/mobile_nature_camps_cover.webp')] md:bg-[url('../public/images/nature_camps_cover.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute px-5 md:px-[100px] z-1 flex flex-col items-center justify-center h-full w-full">
            <Image src={Sologan} layout="responsive" alt="nature-camps" />
</div>
        </div>
        
      {/* WHAT IS NATURE CAMPS? */}
      <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      WHAT IS NATURE CAMPS?
        </Heading>

{[{
  imgs: [WhatIsNatureCamps1, WhatIsNatureCamps2],
  descriptions: [`Our <b>Nature Camps</b> blend outdoor activities with hands-on environmental conservation. Students explore stunning landscapes, <b>protect nature</b>, and gain a deep understanding of local ecosystems.`],
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
<div key={index} className={`flex flex-col items-center gap-5 md:gap-6 mb-5 md:mb-10 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
 <div className="flex gap-2.5 md:gap-6 flex-1 w-full">
   {item.imgs.map((img, index) => (
    <Image key={index} src={img} className="w-full rounded-[10px] aspect-square overflow-hidden" layout="responsive" alt="" />
   ))}
 </div>
  
  <div className="flex-1 text-left text-[#00712D]">
    {item.title && <div className="text-[18px] md:text-[24px] font-[900] md:mb-6">{item.title}</div>}

<ul className={`${item.descriptions.length > 1 ? 'list-disc ml-4' : ''}`}>
{item.descriptions.map((description, descriptionIndex) => (
  <li key={descriptionIndex} className={`${item.descriptions.length > 1 ? 'md:mb-6 last:mb-0' : ''}`}>
    <p className="font-[600] text-[14px] md:text-[18px]" dangerouslySetInnerHTML={{ __html: description }} />
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
