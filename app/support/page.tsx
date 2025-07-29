import Accordion from '@/components/Accordion'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Accessories from '@/public/images/accessories.svg'
import Clothing from '@/public/images/clothing.svg'
import Documents from '@/public/images/documents.svg'
import Footwear from '@/public/images/footwear.svg'
import Lodging from '@/public/images/lodging.svg'
import Meals from '@/public/images/meals.svg'
import Overview1 from '@/public/images/overview_1.webp'
import Overview2 from '@/public/images/overview_2.webp'
import SupportIcon from '@/public/images/support.svg'
import Transportation from '@/public/images/transportation.svg'
import CircleCheck from '@/public/images/circle_check_2.svg'
import Tag from '@/public/images/tag.svg'
import Image from 'next/image'
import Paragraph from '@/components/Paragraph'

export default function Support() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E] pt-16 md:pt-20">
          OVERVIEW
        </Heading>

        <div className="grid grid-cols-2 md:grid-cols-3">
      <Image className="flex-1 w-full h-full object-cover" src={Overview1} alt="volunteer" />

    <div className="text-[8px] md:text-[18px] font-[600] text-white bg-[#00712D] flex-1 px-2.5 md:px-6 flex flex-col items-center justify-center">
      <p>This section provides essential information and resources to help you prepare, stay safe, and thrive during your volunteer trips.

      <ul>
        <li className="my-4 md:my-5 flex items-center gap-1 md:gap-2.5"><div className="relative min-w-1.5 md:w-4 aspect-square"><Image src={CircleCheck} layout='fill' alt="check-icon" /></div>Safety is the most priority of our criteria for both students, teachers and staff – without compromise.</li>

        <li className="flex items-center gap-1 md:gap-2.5"><div className="relative min-w-1.5 md:w-4 aspect-square"><Image src={CircleCheck} layout='fill' alt="check-icon" /></div>All guides follow a comprehensive volunteer program assessed regularly.</li>
      </ul>
      </p>
    </div>

      <Image className="hidden md:block flex-1 w-full h-full object-cover" src={Overview2} alt="backpack" />
  </div>
  </Container>

  {/* SAFETY COMMITMENT */}
  <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">SAFETY COMMITMENT</Heading>

      <p className="text-[#00712D] text-center text-[18px] font-[600] mb-9">
    We are committed to providing a secure and supportive environment for all our international students and our staffs.
  </p>

  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10 md:mb-20">
    {[
      {
        title: "Activities Development",
        desc: "Activity programs are designed to be engaging, impactful and safe under the supervision of experienced local staff or project leaders.",
      },
      {
        title: "Partnerships",
        desc: "We closely with organization, international schools, community with volunteers, local staff, and our head office.",
      },
      {
        title: "Cultural Awareness",
        desc: "Pre-departure information and in-country orientation helps you understand local customs, social norms, and laws.",
      },
    ].map((item, i) => (
      <div key={i} className="text-center">
        <div className="z-0 relative w-full h-[42px] md:h-[52px] flex items-center justify-center">
          <Image
  className="object-contain w-full h-full" src={Tag} fill alt="" />

          <div className="font-[900] text-[20px] md:text-[24px] text-white z-[1]">{item.title}</div>
          </div>

        {/* <p className="text-[18px] font-[600] text-[#00712D] mt-5">{item.desc}</p> */}
      </div>
    ))}
  </div>


  {/* HEALTH & SAFETY + VISA */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
    <div className="bg-[#00712D] rounded-[20px] md:rounded-[40px] flex flex-col item-center px-1.5 py-8 md:py-10 md:px-20">
      <div className="font-[800] text-[20px] md:text-[32px] mb-2.5 md:mb-6 text-center flex items-center justify-center gap-2.5">
        <span className="rounded-full bg-white text-[#00712D] w-5 md:w-9 h-5 md:h-9 flex items-center justify-center">1</span> 
      <div>Health & Safety</div>
      </div>

      <Paragraph className="!text-left text-white">
      <ul className="list-disc list-inside space-y-4 md:space-y-6">
        <li>Health check updated 30 days before the tour departure. Find suggestions for physical preparation before the tour.</li>

        <li>Travel Insurance covering medical emergencies and personal liability.</li>

        <li>Dietary Needs need to be informed in advance.</li>

        <li>Stay hydrated in warm climates and follow local guidelines to prevent illness.</li>
      </ul>
      </Paragraph>
    </div>

    <div className="bg-[#00712D] rounded-[20px] md:rounded-[40px] flex flex-col item-center px-1.5 py-8 md:py-10 md:px-20">
      <div className="font-[800] text-[20px] md:text-[32px] mb-2.5 md:mb-6 text-center flex items-center justify-center gap-2.5">
      <span className="rounded-full bg-white text-[#00712D] w-5 md:w-9 h-5 md:h-9 flex items-center justify-center">2</span> 
        <div>Visa Requirements</div>
      </div>

      <Paragraph className="!text-left text-white">
      <ul className="list-disc list-inside space-y-4 md:space-y-6">
        <li>Obtaining the correct visa for the destination country is the  responsibility of the participant and checking the latest visa requirements for  nationality entering in advance of your departure date.
          <br />
          <div className="font-[400] italic mt-6">We do not provide visas or visas on arrival (VOA), please plan for this independently from now on.</div>
        </li>

        <li>Updated on the latest weather forecast for local places to have the best luggage preparation for your adventure ahead.</li>
      </ul>
      </Paragraph>
    </div>
  </div>
  </Container>

  {/* LUGGAGE SPLIT */}
  <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">LUGGAGE: 2 PARTS</Heading>
      
  <div className="md:max-w-4xl md:m-auto text-[#00712D] text-[18px] font-[600] space-y-4 md:space-y-10 relative md:before:border-2 md:before:border-[#00712D] md:before:absolute md:before:top-0 md:before:left-[8px] md:before:h-full">
    <div className="flex items-start gap-3">
      <div className="hidden md:block bg-[#00712D] w-5 h-5 rounded-full" />

      <Paragraph className="md:!text-left flex-1"><b className="font-[800]">A 15-20L backpack</b> containing daily and essential clothes and personal belongings.</Paragraph>
    </div>

    <div className="flex items-start gap-3 relative md:after:border-2 md:after:border-[#ECFAE5] md:after:absolute md:after:left-[8px] md:after:h-full z-0 md:after:z-[-1]">
    <div className="hidden md:block bg-[#00712D] w-5 h-5 rounded-full" />
      
      <Paragraph className="md:!text-left flex-1">Any <b className="font-[800]" >unnecessary luggage</b> can be safely stored in base camp or program office.</Paragraph>
    </div>
  </div>
  </Container>

  <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">PACKING ESSENTIALS</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 md:max-w-4xl md:m-auto">

<div className="flex flex-col items-center">
      <div className="w-full text-[#00712D] flex items-center justify-center border-2 border-[#00712D] bg-white text-center text-[20px] md:text-[24px] font-[900] h-12 md:h-14 px-2.5 mb-4 md:mb-9 rounded-[10px]">What you need to bring</div>

      <ul className="w-full space-y-2.5 md:space-y-5 text-[18px] font-[600] text-[#00712D]">
        <li className="flex gap-2.5 md:gap-6 items-center">
          <Image src={Clothing} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">Lightweight clothing.</Paragraph>
        </li>

        <li className="flex gap-2.5 md:gap-6 items-center">
        <Image src={Footwear} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">Comfortable walking shoes.</Paragraph>
        </li>

        <li className="flex gap-2.5 md:gap-6 items-center">
        <Image src={Accessories} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">Sunscreen, hat, water bottle and any accessories.</Paragraph>
        </li>

        <li className="flex gap-2.5 md:gap-6 items-center">
        <Image src={Documents} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">Documents: Passport, visa, tickets, contacts.</Paragraph>
        </li>
      </ul>
      </div>

      <div className="flex flex-col items-center">
      <div className="w-full text-[#00712D] flex items-center justify-center border-2 border-[#00712D] bg-white text-center text-[20px] md:text-[24px] font-[900] h-12 md:h-14 px-2.5 mb-4 md:mb-9 rounded-[10px]">What We Provide</div>

      <ul className="w-full space-y-2.5 md:space-y-5 text-[18px] font-[600] text-[#00712D]">
        <li className="flex gap-2.5 md:gap-6 items-center">
          <Image src={SupportIcon} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">On-call support.</Paragraph>
        </li>

        <li className="flex gap-2.5 md:gap-6 items-center">
        <Image src={Transportation} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">Transportation between locations.</Paragraph>
        </li>

        <li className="flex gap-2.5 md:gap-6 items-center">
        <Image src={Meals} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">All meals provided.</Paragraph>
        </li>

        <li className="flex gap-2.5 md:gap-6 items-center">
        <Image src={Lodging} className="max-w-8 md:max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <Paragraph className="!text-left">Comfortable lodging provided.</Paragraph>
        </li>
      </ul>
      </div>
      </div>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      FAQ
        </Heading>
     
     <Accordion title="What types of student trips/programs are available?" description={
      <div>
     We offer diverse programs across the region:
     <ul className="list-disc list-inside	">
<li><b>Nature Camps:</b> These programs allow you to explore and protect stunning natural landscapes, fostering a profound understanding of environment and inspiring positive environmental behaviors.</li>

<li><b>Subject Camps:</b> These programs offer transformative, real-world learning experiences beyond the classroom, allowing students to explore new cultures and academic subjects.</li>

<li><b>Leadership Camps:</b> These programs immerse students in real-world contexts, engaging them in deep exploration of societal issues, meaningful volunteer work, active discussions, and hands-on initiatives that drive positive change.</li>
</ul>
     </div>
     }/>

<Accordion title="How do I apply for a volunteer program?" description={
      <div>
     You can follow up these guideline to apply for our programs:

     <ul className="list-disc list-inside	">
<li>Explore our programs and choose a program that fits your interests and availability.</li>

<li>Submit online application on our website.</li>

<li>Acceptance & Confirmation to complete the necessary paperwork and payment.</li>

<li>You'll receive our Pre-Departure Preparation for your journey.</li>
</ul>
     </div>
     }/>

<Accordion title="What are the eligibility criteria for international students?" description={
      <div>

Generally, you should:
     <ul className="list-disc list-inside	">
<li>Be 14 - 18 or 19 - 22 years old.</li>

<li>Demonstrate enthusiasm, adaptability, and an open mind.</li>

<li>Possess a valid passport and be eligible for the required visa.</li>
</ul>
     </div>
     }/>

<Accordion title="What kind of accommodation will I have?" description={
      <div>

Accommodation varies by program and location, but common options include:
     <ul className="list-disc list-inside	">
<li>Local Homestays to experience deep cultural immersion.</li>

<li>Guesthouses or Dorms.</li>

<li>Project-Specific Housing with basic facilities at remote conservation sites. Details for each specific program's accommodation will be provided on its dedicated page.</li>
</ul>
     </div>
     }/>
</Container>

      <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Ready to make an impact? Explore our programs and start your ASEAN adventure today!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Contact Us</Button>
        </div>
</Container>
    </main>
  )
}
