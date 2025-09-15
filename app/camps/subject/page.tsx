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
      <div className="relative h-[100vw] bg-[url('../public/images/mobile_subject_camps_cover.webp')] bg-cover bg-center bg-no-repeat md:h-screen md:max-h-[655px] md:bg-[url('../public/images/subject_camps_cover.webp')]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center px-5 md:px-[100px]">
          <Image src={Sologan} className="max-w-4xl w-full h-auto" alt="nature-camps" />
        </div>
      </div>

      {/* WHAT IS NATURE CAMPS? */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">WHAT IS SUBJECT CAMPS?</Heading>

        {[
          {
            imgs: [WhatIsSubjectCamps1, WhatIsSubjectCamps2],
            descriptions: [
              `Our <b>Subject Camps</b> are transformative learning journeys that go far beyond traditional classrooms. Students explore new cultures and <b>academic disciplines</b> directly in the vibrant real world.`,
            ],
          },
          {
            imgs: [WhatIsSubjectCamps3, WhatIsSubjectCamps4],
            descriptions: [
              'Students apply knowledge, critical thinking, and problem-solving to <b>tangible, real-life challenges</b>. Through <b>immersive experiences</b>, students directly contribute to practical support.',
            ],
          },
          {
            imgs: [WhatIsSubjectCamps5, WhatIsSubjectCamps6],
            title: 'How it works:',
            descriptions: [
              '<b>Explore & Learn</b> local cultures, history, math, geology...',
              '<b>Engage</b> in vital volunteer projects, ranging from literacy to cultural exchange.',
              '<b>Develop essential skills</b> critical thinking, communication, teamwork, problem solving and global leadership.',
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
              {item.title && <div className="text-[14px] font-[600] md:text-[18px]">{item.title}</div>}

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
