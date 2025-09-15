import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'

export default function ContactUs() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E] pt-16 md:pt-20">CONTACT US</Heading>

        <Paragraph className="md:max-w-4xl m-auto">
          Curious how we can elevate student hiring and empower your team? Join our demo to explore the future of
          seamless recruitment.
        </Paragraph>

        <div className="my-10 space-y-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-2.5">
              <label className="text-[14px] font-[900] text-[#00712D] md:text-[24px]">First Name*</label>

              <input className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-[#00712D] p-2.5 text-[12px] font-[600] text-[#00712D] md:h-16 md:p-5 md:text-[24px]"></input>
            </div>

            <div className="space-y-2.5">
              <label className="text-[14px] font-[900] text-[#00712D] md:text-[24px]">Last Name*</label>

              <input className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-[#00712D] p-2.5 text-[12px] font-[600] text-[#00712D] md:h-16 md:p-5 md:text-[24px]"></input>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-2.5">
              <label className="text-[14px] font-[900] text-[#00712D] md:text-[24px]">Email*</label>

              <input
                type="email"
                className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-[#00712D] p-2.5 text-[12px] font-[600] text-[#00712D] md:h-16 md:p-5 md:text-[24px]"
              ></input>
            </div>

            <div className="space-y-2.5">
              <label className="text-[14px] font-[900] text-[#00712D] md:text-[24px]">Phone Number*</label>

              <input
                type="tel"
                className="h-8 w-full rounded-[5px] md:rounded-[10px] border border-[#00712D] p-2.5 text-[12px] font-[600] text-[#00712D] md:h-16 md:p-5 md:text-[24px]"
              ></input>
            </div>
          </div>

          <div className="flex space-x-2.5 md:space-x-10">
            <label className="text-[14px] font-[900] text-[#00712D] md:text-[24px]">Your Subject</label>

            <div className="space-y-2.5 md:space-y-5">
              <div className="flex items-center space-x-1 md:space-x-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[15px] w-[15px] rounded-[5px] md:rounded-[10px] border-[#00712D] bg-gray-100 text-[#00712D] focus:ring-2 focus:ring-[#00712D] md:h-[30px] md:w-[30px]"
                />

                <label htmlFor="default-checkbox" className="text-[12px] font-[600] text-[#00712D] md:text-[24px]">
                  Tour Booking
                </label>
              </div>

              <div className="flex items-center space-x-1 md:space-x-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[15px] w-[15px] rounded-[5px] md:rounded-[10px] border-[#00712D] bg-gray-100 text-[#00712D] focus:ring-2 focus:ring-[#00712D] md:h-[30px] md:w-[30px]"
                />

                <label htmlFor="default-checkbox" className="text-[12px] font-[600] text-[#00712D] md:text-[24px]">
                  Itinerary Consultation
                </label>
              </div>

              <div className="flex items-center space-x-1 md:space-x-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[15px] w-[15px] rounded-[5px] md:rounded-[10px] border-[#00712D] bg-gray-100 text-[#00712D] focus:ring-2 focus:ring-[#00712D] md:h-[30px] md:w-[30px]"
                />

                <label htmlFor="default-checkbox" className="text-[12px] font-[600] text-[#00712D] md:text-[24px]">
                  Pricing
                </label>
              </div>

              <div className="flex items-center space-x-1 md:space-x-5">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[15px] w-[15px] rounded-[5px] md:rounded-[10px] border-[#00712D] bg-gray-100 text-[#00712D] focus:ring-2 focus:ring-[#00712D] md:h-[30px] md:w-[30px]"
                />

                <label htmlFor="default-checkbox" className="text-[12px] font-[600] text-[#00712D] md:text-[24px]">
                  Other Support
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="text-[14px] font-[900] text-[#00712D] md:text-[24px]">Message</label>

            <textarea
              className="h-[50px] w-full rounded-[5px] md:rounded-[10px] border border-[#00712D] p-2.5 text-[12px] font-[600] text-[#00712D] placeholder:text-[12px] placeholder:font-[600] placeholder:text-[#00712D4D] md:h-[200px] md:p-5 md:text-[24px] md:placeholder:text-[24px]"
              placeholder="Where do you want to go? How many people? Expected dates? Budget?..."
            ></textarea>
          </div>
        </div>

        <div className="mt-5 flex justify-center md:mt-20">
          <Button>Submit</Button>
        </div>
      </Container>
    </main>
  )
}
