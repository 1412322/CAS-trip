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
import Image from 'next/image'
import "./styles.scss"

export default function Support() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pt-40 pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
          OVERVIEW
        </Heading>

        <div className="flex flex-col md:flex-row items-center justify-center items-stretch">
      <Image className="flex-1 w-full h-full object-cover" src={Overview1} alt="volunteer" layout="responsive" />

    <div className="text-white bg-[#00712D] flex-1 p-6 flex flex-col items-center justify-center">
      <p className="mb-5 text-[18px] font-[500]">This section provides essential information and resources to help you prepare, stay safe, and thrive during your volunteer trips.</p>

      <ul className="text-[18px] font-[600]">
        <li className="mb-5 flex items-center gap-2.5"><Image src={CircleCheck} width={16} height={16} alt="check-icon" /> Safety is the most priority of our criteria for both students, teachers and staff – without compromise.</li>

        <li className="flex items-center gap-2.5"><Image src={CircleCheck} width={16} height={16} alt="check-icon" /> All guides follow a comprehensive volunteer program assessed regularly.</li>
      </ul>
    </div>

      <Image className="flex-1 w-full h-full object-cover" src={Overview2} alt="backpack" layout="responsive" />
  </div>
  </Container>

  {/* SAFETY COMMITMENT */}
  <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">SAFETY COMMITMENT</Heading>

      <p className="text-[#00712D] text-center text-[18px] font-[600] mb-9">
    We are committed to providing a secure and supportive environment for all our international students and our staffs.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
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
        <div className="font-[900] text-[24px] text-white mb-5 h-[52px] bg-[#00712D] flex items-center justify-center rounded-[10px]">
          {item.title}
          </div>

        <p className="text-[18px] font-[600] text-[#00712D]">{item.desc}</p>
      </div>
    ))}
  </div>


  {/* HEALTH & SAFETY + VISA */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
    <div className="bg-[#00712D] p-6 rounded-[40px] flex flex-col item-center py-10 px-20">
      <div className="font-[800] text-[32px] mb-6 text-center flex items-center justify-center gap-2.5">
        <span className="rounded-full bg-white text-[#00712D] w-9 h-9 flex items-center justify-center">1</span> 
      Health & Safety
      </div>

      <ul className="list-disc space-y-6 text-[18px] font-[600]">
        <li>Health check updated 30 days before the tour departure. Find suggestions for physical preparation before the tour.</li>

        <li>Travel Insurance covering medical emergencies and personal liability.</li>

        <li>Dietary Needs need to be informed in advance.</li>

        <li>Stay hydrated in warm climates and follow local guidelines to prevent illness.</li>
      </ul>
    </div>

    <div className="bg-[#00712D] p-6 rounded-[40px] flex flex-col item-center py-10 px-20">
      <div className="font-[800] text-[32px] mb-6 text-center flex items-center justify-center gap-2.5">
        <span className="rounded-full bg-white text-[#00712D] w-9 h-9 flex items-center justify-center">2</span> 
        Visa Requirements
      </div>

      <ul className="list-disc space-y-6 text-[18px] font-[600]">
        <li>Obtaining the correct visa for the destination country is the  responsibility of the participant and checking the latest visa requirements for  nationality entering in advance of your departure date.
          <br />
          <div className="font-[400] italic mt-6 ml-[-16px]">We do not provide visas or visas on arrival (VOA), please plan for this independently from now on.</div>
        </li>

        <li>Updated on the latest weather forecast for local places to have the best luggage preparation for your adventure ahead.</li>
      </ul>
    </div>
  </div>
  </Container>

  {/* LUGGAGE SPLIT */}
  <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">YOUR LUGGAGE WILL BE DIVIDED INTO 3 PARTS:</Heading>
      
  <div className="text-[#00712D] text-[18px] font-[600] space-y-10 relative before:border-2 before:border-[#00712D] before:absolute before:top-0 before:left-[8px] before:h-full">
    <div className="flex items-start gap-3">
      <div className="bg-[#00712D] w-5 h-5 rounded-full" />

      <p className="flex-1"><b className="font-[800]">A 15-20L backpack</b> containing daily and essential clothes and personal belongings. For certain multi-day treks, our support team assists these bags to project sites.</p>
    </div>

    <div className="flex items-start gap-3">
    <div className="bg-[#00712D] w-5 h-5 rounded-full" />
      
      <p className="flex-1">Any <b className="font-[800]" >unnecessary luggage</b> can be safely stored in our designated base camp or program office at the start of the journey.</p>
    </div>

    <div className="flex items-start gap-3 relative after:border-2 after:border-[#ECFAE5] after:absolute after:left-[8px] after:h-full z-0 after:z-[-1]">
    <div className="bg-[#00712D] w-5 h-5 rounded-full" />

      <p className="flex-1"><b className="font-[800]">Prepare a 20L dry backpack</b> for extensive programs, multi-day community stays (common in Eco-Adventure, Critical Issues, Community Programs).</p>
    </div>
  </div>
  </Container>

  <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">PACKING ESSENTIALS</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-28">

<div className="flex flex-col items-center">
      <div className="text-[#00712D] flex items-center justify-center border-2 border-[#00712D] bg-white text-center text-[24px] font-[900] h-14 px-2.5 mb-9 rounded-[10px]">What you need to bring</div>

      <ul className="space-y-5 text-[18px] font-[600] text-[#00712D]">
        <li className="flex gap-6 items-center">
          <Image src={Clothing} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Clothing:</b> Lightweight clothing suitable for warm climates and physical activity.</p>
        </li>

        <li className="flex gap-6 items-center">
        <Image src={Footwear} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Footwear:</b> Walking shoes for daily activities.</p>
        </li>

        <li className="flex gap-6 items-center">
        <Image src={Accessories} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Accessories: </b> Water bottle, hat, sunglasses, sunscreen, repellent.</p>
        </li>

        <li className="flex gap-6 items-center">
        <Image src={Documents} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Documents:</b> Passport & Visa, Flight tickets, Emergency contact information (physical copy).</p>
        </li>
      </ul>
      </div>

      <div className="flex flex-col items-center">
      <div className="text-[#00712D] flex items-center justify-center border-2 border-[#00712D] bg-white text-center text-[24px] font-[900] h-14 px-2.5 mb-9 rounded-[10px]">What We Provide</div>

      <ul className="space-y-5 text-[18px] font-[600] text-[#00712D]">
        <li className="flex gap-6 items-center">
          <Image src={SupportIcon} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Support:</b> On-call support throughout the program for peace of mind.</p>
        </li>

        <li className="flex gap-6 items-center">
        <Image src={Transportation} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Transportation:</b> Providing transportation between locations.</p>
        </li>

        <li className="flex gap-6 items-center">
        <Image src={Meals} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Meals:</b> Breakfast, lunch, and dinner throughout your stay.</p>
        </li>

        <li className="flex gap-6 items-center">
        <Image src={Lodging} className="max-w-[60px] aspect-square" layout="responsive" alt="icon" />

          <p><b className="font-[800]">Lodging:</b> All nights of comfortable accommodation will be provided.</p>
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
