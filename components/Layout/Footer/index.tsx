import Paragraph from '@/components/Paragraph'
import Facebook from '@/public/images/facebook.svg'
import Instagram from '@/public/images/instagram.svg'
import Logo from '@/public/images/logo.svg'
import Tiktok from '@/public/images/tiktok.svg'
import Youtube from '@/public/images/youtube.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
<footer className="bg-[#00712D] text-white px-5 md:px-[100px] py-7 md:py-20 break-words">
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-12 w-full">
    <Image className="w-1/2 md:w-full" src={Logo} alt="CAS-trip-logo" />

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Expore</h4>

    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li><Link href="/"><Paragraph className="text-white !text-left">Home</Paragraph></Link></li>

      <li><Link href="/about-us"><Paragraph className="text-white !text-left">About us</Paragraph></Link></li>

      <li><Link href="/"><Paragraph className="text-white !text-left">News & Article</Paragraph></Link></li>

      <li><Link href="/"><Paragraph className="text-white !text-left">Trip Diaries</Paragraph></Link></li>
    </ul>
  </div>

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Our Programs</h4>

    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li><Link href="/camps/nature"><Paragraph className="text-white !text-left">Nature Camps</Paragraph></Link></li>

      <li><Link href="/camps/subject"><Paragraph className="text-white !text-left">Subject Camps</Paragraph></Link></li>

      <li><Link href="/camps/leadership"><Paragraph className="text-white !text-left">Leadership Camps</Paragraph></Link></li>
    </ul>
  </div>

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Support</h4>
    
    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
    <li><Link href="/sustainability"><Paragraph className="text-white !text-left">Sustainability</Paragraph></Link></li>

    <li><Link href="/"><Paragraph className="text-white !text-left">FAQ</Paragraph></Link></li>
    </ul>
  </div>

  <div>
    <h4 className="font-[900] text-[18px] md:text-[24px] mb-2.5 md:mb-6">Contact Us</h4>

    <ul className="space-y-2.5 text-[14px] md:text-[18px] font-[600]">
      <li><Paragraph className="text-white !text-left">Telephone: 65 6338 3733</Paragraph></li>

      <li><Paragraph className="text-white !text-left">Mail: fionag@transinex.com.sg</Paragraph></li>

      <li><Paragraph className="text-white !text-left">Address: Coleman St, #04-31, Singapore 179803</Paragraph></li>
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
