import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'

export default function AboutUs() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5]">
      <Heading color="text-[#22C55E] pt-16 md:pt-20">
      CONTACT US
        </Heading>

<Paragraph>
Curious how we can elevate student hiring and empower your team? Join our demo to explore the future of seamless recruitment.
</Paragraph>

<div className="space-y-10 my-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div className="space-y-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">First Name*</label>

  <input className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full"></input>
  </div>

  <div className="space-y-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">Last Name*</label>

  <input className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full"></input>
  </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div className="space-y-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">Email*</label>

  <input type="email" className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full"></input>
  </div>

  <div className="space-y-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">Phone Number*</label>

  <input type="tel" className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full"></input>
  </div>
  </div>

  <div className="space-y-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">Your Office Address</label>

  <input className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-8 md:h-16 w-full"></input>
  </div>

  <div className="flex space-x-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">Your Subject</label>

<div className="space-y-2.5 md:space-y-5">
  <div className="flex items-center md:space-x-5 space-x-1">
    <input id="default-checkbox" type="checkbox" value="" className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] text-[#00712D] bg-gray-100 border-[#00712D] rounded-sm focus:ring-[#00712D] focus:ring-2" />
    
    <label htmlFor="default-checkbox" className="text-[12px] md:text-[24px] font-[600] text-[#00712D]">Tour Booking</label>
</div>

<div className="flex items-center md:space-x-5 space-x-1">
    <input id="default-checkbox" type="checkbox" value="" className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] text-[#00712D] bg-gray-100 border-[#00712D] rounded-sm focus:ring-[#00712D] focus:ring-2" />
    
    <label htmlFor="default-checkbox" className="text-[12px] md:text-[24px] font-[600] text-[#00712D]">Itinerary Consultation</label>
</div>

<div className="flex items-center md:space-x-5 space-x-1">
    <input id="default-checkbox" type="checkbox" value="" className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] text-[#00712D] bg-gray-100 border-[#00712D] rounded-sm focus:ring-[#00712D] focus:ring-2" />
    
    <label htmlFor="default-checkbox" className="text-[12px] md:text-[24px] font-[600] text-[#00712D]">Pricing</label>
</div>

<div className="flex items-center md:space-x-5 space-x-1">
    <input id="default-checkbox" type="checkbox" value="" className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] text-[#00712D] bg-gray-100 border-[#00712D] rounded-sm focus:ring-[#00712D] focus:ring-2" />
    
    <label htmlFor="default-checkbox" className="text-[12px] md:text-[24px] font-[600] text-[#00712D]">Other Support</label>
</div>
</div>
  </div>

  <div className="space-y-2.5">
  <label className="text-[14px] md:text-[24px] font-[900] text-[#00712D]">Message</label>

  <textarea className="p-2.5 md:p-5 text-[#00712D] text-[12px] md:text-[24px] font-[600] rounded-[10px] border border-[#00712D] h-[50px] md:h-[200px] w-full placeholder:text-[#00712D4D] placeholder:text-[12px] md:placeholder:text-[24px] placeholder:font-[600]" placeholder="Where do you want to go? How many people? Expected dates? Budget?..."></textarea>
  </div>
  </div>
        
  <div className="mt-5 md:mt-20 flex justify-center">
  <Button>
  Submit
            </Button>
            </div>
</Container>
    </main>
  )
}
