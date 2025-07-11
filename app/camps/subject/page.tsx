import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Sologan from '@/public/images/subject_camps_sologan.svg'
import WhatIsSubjectCamps1 from '@/public/images/what_is_subject_camps_1.png'
import WhatIsSubjectCamps2 from '@/public/images/what_is_subject_camps_2.png'
import WhatIsSubjectCamps3 from '@/public/images/what_is_subject_camps_3.png'
import WhatIsSubjectCamps4 from '@/public/images/what_is_subject_camps_4.png'
import WhatIsSubjectCamps5 from '@/public/images/what_is_subject_camps_5.png'
import WhatIsSubjectCamps6 from '@/public/images/what_is_subject_camps_6.png'
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
      WHAT IS SUBJECT CAMPS?
        </Heading>

{[{
  imgs: [WhatIsSubjectCamps1, WhatIsSubjectCamps2],
  descriptions: [`These programs are designed as transformative learning journeys that extend far beyond the traditional classroom setting. You'll explore new cultures and academic disciplines – from environmental science knowledge in books to sociology within vibrant local communities – directly in the real world.`],
}, {
  imgs: [WhatIsSubjectCamps3, WhatIsSubjectCamps4],
  descriptions: ['Students apply their acquired knowledge, critical thinking, and problem-solving skills to address tangible, real-life challenges. Through immersive experiences and hands-on activities, students will directly contribute, sharing  expertise and offering practical support in cultural preservation, or enhancing local educational initiatives.'],
}, {
  imgs: [WhatIsSubjectCamps5, WhatIsSubjectCamps6],
  title: 'How the programs work?',
  descriptions: [
    '<b>Learning:</b> Visiting historical sites, cultural centers, or local schools to learn firsthand.',
    '<b>Volunteer Work:</b> Engaging in literacy projects, helping with school renovations, teaching basic skills, or assisting in cultural exchange initiatives.',
    '<b>Growth:</b> Developing critical thinking, cross-cultural communication, interpersonal skills, the ability to cooperate, leadership skill in a group and a deeper appreciation for global diversity.',
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
