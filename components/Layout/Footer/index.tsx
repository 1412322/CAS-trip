import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.svg'
import Facebook from '@/public/images/facebook.svg'
import Tiktok from '@/public/images/tiktok.svg'
import Youtube from '@/public/images/youtube.svg'
import Instagram from '@/public/images/instagram.svg'

export default function Footer() {
  return (
<footer className="bg-[#00712D] text-white px-3 py-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:max-w-6xl m-auto">
  <div className="md:col-span-1">
    <Image src={Logo} alt="CAS-trip-logo" width={211} />
  </div>
  <div>
    <h4 className="font-[900] text-[24px] mb-[25px]">Expore</h4>
    <ul className="space-y-[10px] text-[18px] font-[600]">
      <li>Nature Camps</li>
      <li>Subject Camps</li>
      <li>Leadership Camps</li>
      <li>//////</li>
    </ul>
  </div>
  <div>
    <h4 className="font-[900] text-[24px] mb-[25px]">Address</h4>
    <ul className="space-y-[10px] text-[18px] font-[600]">
      <li>123 Anywhere St. Any City 1234</li>
    </ul>
  </div>
  <div>
    <h4 className="font-[900] text-[24px] mb-[25px]">Office Hours</h4>
    <ul className="space-y-[10px] text-[18px] font-[600]">
      <li>Monday: 8am – 7pm</li>

      <li>Tuesday: 8am – 5pm</li>

      <li>Wednesday: 8am – 5pm</li>

      <li>Thursday: 8am – 7pm</li>

      <li>Friday: 8am – 5pm</li>
    </ul>
  </div>

  <div className="md:block hidden" />

  <div>
    <h4 className="font-[900] text-[24px] mb-[25px]">Contact</h4>
    <ul className="space-y-[10px] text-[18px] font-[600]">
      <li>Telephone:</li>

      <li>Mobile:</li>

      <li>Gmail:</li>
    </ul>
  </div>
  <div>
    <h4 className="font-[900] text-[24px] mb-[25px]">Social Media Contacts</h4>
    <ul className="space-y-[10px] text-[18px] font-[600]">
      <li>Please check us out at:</li>
      </ul>

    <div className="flex gap-6 mt-[25px]">
      <Link href="#">
        <Image src={Facebook} width={47} height={47} alt="facebook" />
      </Link>
      
      <Link href="#">
      <Image src={Instagram} width={47} height={47} alt="instagram" />
      </Link>

      <Link href="#">
       <Image src={Tiktok} width={47} height={47} alt="tiktok" />
      </Link>

      <Link href="#">
         <Image src={Youtube} width={47} height={47} alt="youtube" />
      </Link>
    </div>
  </div>
</div>
</footer>
  )
}
