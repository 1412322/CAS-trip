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
      <div className="relative h-[100vw] bg-[url('../public/images/mobile_nature_camps_cover.webp')] bg-cover bg-center bg-no-repeat md:h-screen md:max-h-[655px] md:bg-[url('../public/images/nature_camps_cover.webp')]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center px-5 md:px-[100px]">
          <Image src={Sologan} layout="responsive" alt="nature-camps" />
        </div>
      </div>

      {/* WHAT IS NATURE CAMPS? */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">WHAT IS NATURE CAMPS?</Heading>

        {[
          {
            imgs: [WhatIsNatureCamps1, WhatIsNatureCamps2],
            descriptions: [
              `Our <b>Nature Camps</b> blend outdoor activities with hands-on environmental conservation. Students explore stunning landscapes, <b>protect nature</b>, and gain a deep understanding of local ecosystems.`,
            ],
          },
          {
            imgs: [WhatIsNatureCamps3, WhatIsNatureCamps4],
            descriptions: [
              'Our journeys <b>inspire initiative</b> and perseverance through environmental team challenges. Cultivate strong critical thinking, problem solving, communication, and <b>collaboration skills</b> through reality hands-on experiences.',
            ],
          },
          {
            imgs: [WhatIsNatureCamps5, WhatIsNatureCamps6],
            title: 'How it works:',
            descriptions: [
              '<b>Volunteer work</b> by planting trees, cleaning up river/beach,...',
              '<b>Learning</b> from experts, becoming globally aware citizens and engaged conservation contributors.',
            ],
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`mb-5 flex flex-col items-center gap-5 last:mb-0 md:mb-10 md:gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            <div className="flex w-full flex-1 gap-2.5 md:gap-6">
              {item.imgs.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  className="aspect-square w-full overflow-hidden rounded-[10px]"
                  layout="responsive"
                  alt=""
                />
              ))}
            </div>

            <div className="flex-1 text-left text-[#00712D]">
              {item.title && (
                <div className="text-[14px] font-[600] md:text-[18px]">{item.title}</div>
              )}

              <ul className={`${item.descriptions.length > 1 ? 'ml-4 list-disc' : ''}`}>
                {item.descriptions.map((description, descriptionIndex) => (
                  <li key={descriptionIndex}>
                    <p
                      className="text-[14px] font-[600] md:text-[18px]"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
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
