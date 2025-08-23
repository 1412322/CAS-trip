import Accordion from '@/components/Accordion'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Accessories from '@/public/images/accessories.svg'
import CircleCheck from '@/public/images/circle_check_2.svg'
import Clothing from '@/public/images/clothing.svg'
import Documents from '@/public/images/documents.svg'
import Footwear from '@/public/images/footwear.svg'
import Lodging from '@/public/images/lodging.svg'
import Meals from '@/public/images/meals.svg'
import Overview1 from '@/public/images/overview_1.webp'
import Overview2 from '@/public/images/overview_2.webp'
import SupportIcon from '@/public/images/support.svg'
import Tag from '@/public/images/tag.svg'
import Transportation from '@/public/images/transportation.svg'
import Image from 'next/image'

export default function Support() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E] pt-16 md:pt-20">SUPPORT</Heading>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <Image className="hidden h-full w-full flex-1 object-cover md:block" src={Overview1} alt="volunteer" />

          <div className="flex flex-1 flex-col items-center justify-center bg-[#00712D] p-2.5 text-[12px] font-[600] text-white md:px-6 md:text-[18px]">
              This section provides essential information and resources to help you prepare, stay
              safe, and thrive during your volunteer trips.
              <ul>
                <li className="my-4 flex items-center gap-1 md:my-5 md:gap-2.5">
                  <div className="relative aspect-square min-w-1.5 md:w-4">
                    <Image src={CircleCheck} layout="fill" alt="check-icon" />
                  </div>
                  Safety is the most priority of our criteria for both students, teachers and staff
                  – without compromise.
                </li>

                <li className="flex items-center gap-1 md:gap-2.5">
                  <div className="relative aspect-square min-w-1.5 md:w-4">
                    <Image src={CircleCheck} layout="fill" alt="check-icon" />
                  </div>
                  All guides follow a comprehensive volunteer program assessed regularly.
                </li>
              </ul>
          </div>

          <Image
            className="hidden h-full w-full flex-1 object-cover md:block"
            src={Overview2}
            alt="backpack"
          />
        </div>
      </Container>

      {/* SAFETY COMMITMENT */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">SAFETY COMMITMENT</Heading>

        <Paragraph className="mb-2.5 md:mb-10">
          We are committed to providing a secure and supportive environment for all our
          international students and our staffs.
        </Paragraph>

        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-20 xl:grid-cols-3">
          {[
            {
              title: 'Activities Development',
              desc: 'Activity programs are designed to be engaging, impactful and safe under the supervision of experienced local staff or project leaders.',
            },
            {
              title: 'Partnerships',
              desc: 'We closely with organization, international schools, community with volunteers, local staff, and our head office.',
            },
            {
              title: 'Cultural Awareness',
              desc: 'Pre-departure information and in-country orientation helps you understand local customs, social norms, and laws.',
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="relative z-0 flex h-[42px] w-full items-center justify-center md:h-[52px]">
                <Image className="h-full w-full object-contain" src={Tag} fill alt="" />

                <div className="z-[1] text-[20px] font-[900] text-white md:text-[24px]">
                  {item.title}
                </div>
              </div>

              {/* <p className="text-[18px] font-[600] text-[#00712D] mt-5">{item.desc}</p> */}
            </div>
          ))}
        </div>

        {/* HEALTH & SAFETY + VISA */}
        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2">
          <div className="item-center flex flex-col rounded-[20px] bg-[#00712D] px-1.5 py-8 md:rounded-[40px] md:px-20 md:py-10">
            <div className="mb-2.5 flex items-center justify-center gap-2.5 text-center text-[20px] font-[800] md:mb-6 md:text-[32px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00712D] md:h-9 md:w-9">
                1
              </span>
              <div>Health & Safety</div>
            </div>

            <div className="text-[12px] md:text-[18px] font-[600] text-white">
              <ul className="list-inside list-disc space-y-4 md:space-y-6">
<li><b>Ensure a pre-tour health check-up</b> (30 days prior) and physical preparation.</li>

<li><b>Travel insurance</b> covers medical emergencies and personal liability.</li>

<li><b>Dietary needs</b> need to be informed in advance.</li>

<li><b>Stay hydrated</b> and follow local guidelines.</li>
              </ul>
            </div>
          </div>

          <div className="item-center flex flex-col rounded-[20px] bg-[#00712D] px-1.5 py-8 md:rounded-[40px] md:px-20 md:py-10">
            <div className="mb-2.5 flex items-center justify-center gap-2.5 text-center text-[20px] font-[800] md:mb-6 md:text-[32px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00712D] md:h-9 md:w-9">
                2
              </span>
              <div>Visa Requirements</div>
            </div>

            <div className="text-[12px] md:text-[18px] font-[600] text-white">
              <ul className="list-inside list-disc space-y-4 md:space-y-6">
                <li>
                <b>Obtain the correct visa</b> for destination and check latest requirements before departure.
                  <br />
                  <div className="mt-6 font-[400] italic">
                  We do not provide visas or visas on arrival (VOA); please plan this independently.
                  </div>
                </li>

                <li>
                <b>Stay updated</b> on the <b>local weather forecast</b> for optimal luggage preparation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* LUGGAGE SPLIT */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">LUGGAGE: 2 PARTS</Heading>

        <div className="relative space-y-4 text-[18px] font-[600] text-[#00712D] md:m-auto md:max-w-4xl md:space-y-10 md:before:absolute md:before:left-[8px] md:before:top-0 md:before:h-full md:before:border-2 md:before:border-[#00712D]">
          <div className="flex items-start gap-3">
            <div className="hidden h-5 w-5 rounded-full bg-[#00712D] md:block" />

            <Paragraph className="flex-1 md:!text-left">
              <b className="font-[800]">A 15-20L backpack</b> containing daily and essential clothes
              and personal belongings.
            </Paragraph>
          </div>

          <div className="relative z-0 flex items-start gap-3 md:after:absolute md:after:left-[8px] md:after:z-[-1] md:after:h-full md:after:border-2 md:after:border-[#ECFAE5]">
            <div className="hidden h-5 w-5 rounded-full bg-[#00712D] md:block" />

            <Paragraph className="flex-1 md:!text-left">
              Any <b className="font-[800]">unnecessary luggage</b> can be safely stored in base
              camp or program office.
            </Paragraph>
          </div>
        </div>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">PACKING ESSENTIALS</Heading>

        <div className="grid grid-cols-1 gap-8 md:m-auto md:max-w-4xl md:grid-cols-2 md:gap-28">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-full items-center justify-center rounded-[10px] border-2 border-[#00712D] bg-white px-2.5 text-center text-[20px] font-[900] text-[#00712D] md:mb-9 md:h-14 md:text-[24px]">
              What you need to bring
            </div>

            <ul className="w-full space-y-2.5 text-[18px] font-[600] text-[#00712D] md:space-y-5">
              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Clothing}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">Lightweight clothing.</Paragraph>
              </li>

              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Footwear}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">Comfortable walking shoes.</Paragraph>
              </li>

              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Accessories}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">
                  Sunscreen, hat, water bottle and any accessories.
                </Paragraph>
              </li>

              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Documents}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">
                  Documents: Passport, visa, tickets, contacts.
                </Paragraph>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-full items-center justify-center rounded-[10px] border-2 border-[#00712D] bg-white px-2.5 text-center text-[20px] font-[900] text-[#00712D] md:mb-9 md:h-14 md:text-[24px]">
              What We Provide
            </div>

            <ul className="w-full space-y-2.5 text-[18px] font-[600] text-[#00712D] md:space-y-5">
              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={SupportIcon}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">On-call support.</Paragraph>
              </li>

              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Transportation}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">Transportation between locations.</Paragraph>
              </li>

              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Meals}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">All meals provided.</Paragraph>
              </li>

              <li className="flex items-center gap-2.5 md:gap-6">
                <Image
                  src={Lodging}
                  className="w-full h-auto aspect-square max-w-8 md:max-w-[60px]"
                  alt="icon"
                />

                <Paragraph className="!text-left">Comfortable lodging provided.</Paragraph>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">FAQ</Heading>

        <Accordion
          title="What types of student trips/programs are available?"
          description={
            <div>
              We offer diverse programs across the region:
              <ul className="list-inside list-disc">
                <li>
                  <b>Nature Camps:</b> These programs allow you to explore and protect stunning
                  natural landscapes, fostering a profound understanding of environment and
                  inspiring positive environmental behaviors.
                </li>

                <li>
                  <b>Subject Camps:</b> These programs offer transformative, real-world learning
                  experiences beyond the classroom, allowing students to explore new cultures and
                  academic subjects.
                </li>

                <li>
                  <b>Leadership Camps:</b> These programs immerse students in real-world contexts,
                  engaging them in deep exploration of societal issues, meaningful volunteer work,
                  active discussions, and hands-on initiatives that drive positive change.
                </li>
              </ul>
            </div>
          }
        />

        <Accordion
          title="How do I apply for a volunteer program?"
          description={
            <div>
              You can follow up these guideline to apply for our programs:
              <ul className="list-inside list-disc">
                <li>
                  Explore our programs and choose a program that fits your interests and
                  availability.
                </li>

                <li>Submit online application on our website.</li>

                <li>Acceptance & Confirmation to complete the necessary paperwork and payment.</li>

                <li>You'll receive our Pre-Departure Preparation for your journey.</li>
              </ul>
            </div>
          }
        />

        <Accordion
          title="What are the eligibility criteria for international students?"
          description={
            <div>
              Generally, you should:
              <ul className="list-inside list-disc">
                <li>Be 14 - 18 or 19 - 22 years old.</li>

                <li>Demonstrate enthusiasm, adaptability, and an open mind.</li>

                <li>Possess a valid passport and be eligible for the required visa.</li>
              </ul>
            </div>
          }
        />

        <Accordion
          title="What kind of accommodation will I have?"
          description={
            <div>
              Accommodation varies by program and location, but common options include:
              <ul className="list-inside list-disc">
                <li>Local Homestays to experience deep cultural immersion.</li>

                <li>Guesthouses or Dorms.</li>

                <li>
                  Project-Specific Housing with basic facilities at remote conservation sites.
                  Details for each specific program's accommodation will be provided on its
                  dedicated page.
                </li>
              </ul>
            </div>
          }
        />
      </Container>

      <Container className="bg-[#ECFAE5]">
        <p className="text-[10px] md:text-[32px] font-[800] text-center text-[#00712D]">
        Ready to make an impact? Explore our programs and start your ASEAN adventure today!
        </p>

        <div className="mt-5 md:mt-10 flex justify-center">
        <Button path="/contact-us">Contact Us</Button>
        </div>
      </Container>
    </main>
  )
}
