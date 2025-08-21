import Paragraph from '@/components/Paragraph'
import Facebook from '@/public/images/facebook.svg'
import Instagram from '@/public/images/instagram.svg'
import Logo from '@/public/images/logo.png'
import Tiktok from '@/public/images/tiktok.svg'
import Youtube from '@/public/images/youtube.svg'
import Phone from '@/public/images/phone.svg'
import Email from '@/public/images/email.svg'
import Address from '@/public/images/location.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#00712D] px-5 py-7 text-white md:px-[100px] md:py-20">
      <div className="flex w-full flex-col flex-wrap gap-10 md:flex-row md:gap-12">
        <Image className="h-fit w-1/2 md:w-[160px]" src={Logo} alt="CAS-trip-logo" />

        <div>
          <h4 className="mb-2.5 text-[18px] font-[900] md:mb-6 md:text-[24px]">Explore</h4>

          <ul className="space-y-2.5 text-[14px] font-[600] md:text-[18px]">
            <li>
              <Link href="/">
                <Paragraph className="!text-left text-white">Home</Paragraph>
              </Link>
            </li>

            <li>
              <Link href="/about-us">
                <Paragraph className="!text-left text-white">About us</Paragraph>
              </Link>
            </li>

            <li>
              <Link href="/taman-negara">
                <Paragraph className="!text-left text-white">News & Article</Paragraph>
              </Link>
            </li>

            <li>
              <Link href="/">
                <Paragraph className="!text-left text-white">Trip Diaries</Paragraph>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2.5 text-[18px] font-[900] md:mb-6 md:text-[24px]">Our Programs</h4>

          <ul className="space-y-2.5 text-[14px] font-[600] md:text-[18px]">
            <li>
              <Link href="/camps/nature">
                <Paragraph className="!text-left text-white">Nature Camps</Paragraph>
              </Link>
            </li>

            <li>
              <Link href="/camps/subject">
                <Paragraph className="!text-left text-white">Subject Camps</Paragraph>
              </Link>
            </li>

            <li>
              <Link href="/camps/leadership">
                <Paragraph className="!text-left text-white">Leadership Camps</Paragraph>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2.5 text-[18px] font-[900] md:mb-6 md:text-[24px]">Support</h4>

          <ul className="space-y-2.5 text-[14px] font-[600] md:text-[18px]">
            <li>
              <Link href="/sustainability">
                <Paragraph className="!text-left text-white">Sustainability</Paragraph>
              </Link>
            </li>

            <li>
              <Link href="/">
                <Paragraph className="!text-left text-white">FAQ</Paragraph>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2.5 text-[18px] font-[900] md:mb-6 md:text-[24px]">Contact Us</h4>

          <ul className="space-y-2.5 text-[14px] font-[600] md:text-[18px]">
            <li className="flex items-center space-x-1.5">
              <Image className="aspect-square w-3 md:w-4" src={Phone} alt="phone" />
              <Paragraph className="!text-left text-white">+65 6338 3733</Paragraph>
            </li>

            <li className="flex items-center space-x-1.5">
              <Image className="aspect-square w-3 md:w-4" src={Email} alt="email" />
              <Paragraph className="!text-left text-white">fionag@transinex.com.sg</Paragraph>
            </li>

            <li className="flex items-center space-x-1.5">
              <Image className="aspect-square w-3 md:w-4" src={Address} alt="address" />
              <Paragraph className="!text-left text-white">
                Coleman St, #04-31, Singapore 179803
              </Paragraph>
            </li>
          </ul>

          <div className="mt-[25px] flex gap-6">
            <Link href="#">
              <Image className="aspect-square w-8 md:w-12" src={Facebook} alt="facebook" />
            </Link>

            <Link href="#">
              <Image className="aspect-square w-8 md:w-12" src={Instagram} alt="instagram" />
            </Link>

            <Link href="#">
              <Image className="aspect-square w-8 md:w-12" src={Tiktok} alt="tiktok" />
            </Link>

            <Link href="#">
              <Image className="aspect-square w-8 md:w-12" src={Youtube} alt="youtube" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
