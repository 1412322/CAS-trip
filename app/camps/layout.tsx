import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'

export default function CampsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>

        {children}

        <Container background="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Contact us to find out how Our Volunteer Programs can help your students achieve their learning outcomes during a school trip abroad!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Contact Us</Button>
        </div>
</Container>
    </>
  )
}
