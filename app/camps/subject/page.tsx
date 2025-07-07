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
        
      {/* What is NATURE CAMPS? */}
      <Container background="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      What is SUBJECT CAMPS?
        </Heading>

{[{
  imgs: [WhatIsSubjectCamps1, WhatIsSubjectCamps2],
  description: `These programs designed learning journeys that go beyond the classroom. You'll explore new cultures and subjects, gaining real-world understanding through immersive experiences and volunteer activities.`,
}, {
  imgs: [WhatIsSubjectCamps3, WhatIsSubjectCamps4],
  description: 'Students apply your knowledge, share skills, and offer support to communities, helping to improve educational opportunities or cultural preservation.',
}, {
  imgs: [WhatIsSubjectCamps5, WhatIsSubjectCamps6],
  description: 'Now operating across more than 25 countries, with a dedicated team of over 40 full-time staff and hundreds of seasonal field leaders, our approach has evolved. Our fundamental purpose remains steadfast: equipping students to foster meaningful, positive change in communities globally.',
}].map((item, index) => (
<div key={index} className={`flex flex-col items-center gap-6 mb-10 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
 
 <div className="flex gap-6 flex-1">
   {item.imgs.map(img => (
    <Image src={img} className="object-cover max-h-[290px] rounded-[20px] aspect-square overflow-hidden" layout="responsive" alt={item.description} />
   ))}
 </div>
  
  <p className="font-[600] text-[18px] text-[#00712D] flex-1 text-center md:text-left">{item.description}</p>
</div>
))}
        </Container>
    </main>
  )
}
