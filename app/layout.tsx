import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackToTopButton from '../components/BackToTopButton'
import './global.css'
import Sologan from '@/public/images/sologan.svg'
import Logo from '@/public/images/logo.svg'
import Facebook from '@/public/images/facebook.svg'
import Tiktok from '@/public/images/tiktok.svg'
import Youtube from '@/public/images/youtube.svg'
import Instagram from '@/public/images/instagram.svg'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
})

export const metadata = {
  title: 'CAS Trips',
  description: 'Youth travel programs for growth and adventure',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#E9F4E5] text-gray-900`}>
        <Head>
          <title>CAS Trips - Home</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        {/* Navbar */}
        <header className="p-3 md:px-[120px] absolute top-0 left-0 w-full z-20 h-[80px] flex justify-between items-center text-white">
          <Image src={Logo} alt="CAS-trip-logo" width={145} />
          <nav className="space-x-[16px] hidden md:block">
            <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
              Home
            </Link>
            <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
              About Us
            </Link>
            <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
              Programs
            </Link>
            <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
              Sustainability
            </Link>
            <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
              Support
            </Link>
            <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
              Resources
            </Link>
            <button className="bg-[#FFA726] p-[8px] rounded-[8px] text-[16px] font-[600]">
              Contact Us
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="relative h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="top-[10%] absolute px-3 md:px-[120px] z-1 flex flex-col items-center justify-center h-full w-full">
            <Image src={Sologan} height={113} alt="reativity-activity-service" />

            <h2 className="text-[35px] font-[800] mt-3 mb-[77px] text-white text-center">
              CONNECT CULTURES, CREATE CHANGE
            </h2>

            <button className="text-white px-8 py-4 rounded-xl bg-[#FFA726] text-[20px] font-[600]">
              Explore Our Programs
            </button>
          </div>
        </div>

        {children}

        {/* FOOTER */}
        <footer className="bg-[#00712D] text-white px-3 py-20 md:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
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

        {/* BACK TO TOP BUTTON */}
        <BackToTopButton />
      </body>
    </html>
  )
}
