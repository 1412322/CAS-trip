import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import WhatIsNatureCamps1 from '@/public/images/what_is_nature_camps_1.png'
import WhatIsNatureCamps2 from '@/public/images/what_is_nature_camps_2.png'
import WhatIsNatureCamps3 from '@/public/images/what_is_nature_camps_3.png'
import WhatIsNatureCamps4 from '@/public/images/what_is_nature_camps_4.png'
import WhatIsNatureCamps5 from '@/public/images/what_is_nature_camps_5.png'
import WhatIsNatureCamps6 from '@/public/images/what_is_nature_camps_6.png'
import Sologan from '@/public/images/nature_camps_sologan.svg'
import Image from 'next/image'

export default function NatureCamps() {
  return (
    <main>
                    {/* Hero Section */}
                    <div className="relative h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/nature_camps_cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <Image className="absolute px-3 md:px-0 max-h-[137px]" src={Sologan} layout="responsive" alt="reativity-activity-service" style={{ top: 'calc((100% - 80px) / 2)' }} />
        </div>
        
      {/* What is NATURE CAMPS? */}
      <Container background="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E]">
      What is NATURE CAMPS?
        </Heading>

{[{
  imgs: [WhatIsNatureCamps1, WhatIsNatureCamps2],
  description: `These programs combine exciting outdoor adventures with hands-on environmental conservation efforts, responsibly. You'll explore stunning natural landscapes while actively working in group to protect them, meaningfully.`,
}, {
  imgs: [WhatIsNatureCamps3, WhatIsNatureCamps4],
  description: 'The spirit of these transformative voyages endures to this day. For over three decades, we has empowered young people to actively engage with the world and connect deeply with its diverse cultures.',
}, {
  imgs: [WhatIsNatureCamps5, WhatIsNatureCamps6],
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
