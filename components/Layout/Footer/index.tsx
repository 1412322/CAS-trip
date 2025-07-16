import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.svg'
import Facebook from '@/public/images/facebook.svg'
import Tiktok from '@/public/images/tiktok.svg'
import Youtube from '@/public/images/youtube.svg'
import Instagram from '@/public/images/instagram.svg'

export default function Footer() {
  return (
<footer className="bg-[#00712D] text-white px-5 md:px-[100px] py-7 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20 w-full">
    <Image className="w-auto max-h-[60px]" src={Logo} alt="CAS-trip-logo" />

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Expore</h4>
    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li>Nature Camps</li>

      <li>Subject Camps</li>

      <li>Leadership Camps</li>
    </ul>
  </div>

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Address</h4>
    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li>123 Anywhere St. Any City 1234</li>
    </ul>
  </div>

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Office Hours</h4>
    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li>Monday: 8am – 7pm</li>

      <li>Tuesday: 8am – 5pm</li>

      <li>Wednesday: 8am – 5pm</li>

      <li>Thursday: 8am – 7pm</li>

      <li>Friday: 8am – 5pm</li>
    </ul>
  </div>

  <div className="md:block hidden" />

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Contact</h4>
    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li>Telephone:</li>

      <li>Mobile:</li>

      <li>Gmail:</li>
    </ul>
  </div>

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Social Media Contacts</h4>
    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li>Please check us out at:</li>
      </ul>

    <div className="flex gap-6 mt-[25px]">
      <Link href="#">
        <Image className="w-8 md:w-12 aspect-square" src={Facebook} alt="facebook" />
      </Link>
      
      <Link href="#">
      <Image className="w-8 md:w-12 aspect-square" src={Instagram} alt="instagram" />
      </Link>

      <Link href="#">
       <Image className="w-8 md:w-12 aspect-square" src={Tiktok} alt="tiktok" />
      </Link>

      <Link href="#">
         <Image className="w-8 md:w-12 aspect-square" src={Youtube} alt="youtube" />
      </Link>
    </div>
  </div>
</div>
</footer>
  )
}
