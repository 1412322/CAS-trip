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
      <div className="relative h-[100vw] bg-[url('../public/images/mobile_leadership_camps_cover.webp')] bg-cover bg-center bg-no-repeat md:h-screen md:max-h-[655px] md:bg-[url('../public/images/leadership_camps_cover.webp')]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center px-5 md:px-[100px]">
          <Image src={Sologan} className="max-w-4xl w-full h-auto" alt="nature-camps" />
        </div>
      </div>

      {/* WHAT IS NATURE CAMPS? */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">WHAT IS LEADERSHIP CAMPS?</Heading>

        {[
          {
            imgs: [WhatIsLeadershipCamps1, WhatIsLeadershipCamps2],
            descriptions: [
              `<b>Our Leadership Camps</b> immerse students in <b>real-world challenges</b> and meaningful <b>volunteer work</b>. This drives students' <b>positive change</b> through active discussions and impactful community initiatives.`,
            ],
          },
          {
            imgs: [WhatIsLeadershipCamps3, WhatIsLeadershipCamps4],
            descriptions: [
              '<b>Students collaborate</b> on group projects and directly address <b>real-world problems</b>. Through discussion, students develop crucial <b>soft skills</b>.',
            ],
          },
          {
            imgs: [WhatIsLeadershipCamps5, WhatIsLeadershipCamps6],
            title: 'How it works:',
            descriptions: [
              '<b>Explore</b> local cities or organizations.',
              '<b>Volunteer</b> by supporting vital initiatives for community.',
              '<b>Engage</b> in hands-on projects, research, and discussions.',
            ],
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`mb-5 flex flex-col items-center gap-2.5 last:mb-0 md:mb-10 md:gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
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
