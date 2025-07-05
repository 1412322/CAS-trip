import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BackToTopButton from '../components/BackToTopButton'
import './global.css'
import Sologan from '@/public/images/sologan.svg'
import Logo from '@/public/images/logo.svg'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
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
        <Header />

        {/* Hero Section */}
        <div className="top-[-80px] relative h-screen md:max-h-[655px] bg-cover bg-no-repeat bg-center bg-[url('../public/images/cover.png')]">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="top-[10%] absolute px-3 md:px-0 z-1 flex flex-col items-center justify-center h-full w-full">
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
        <Footer />

        {/* BACK TO TOP BUTTON */}
        <BackToTopButton />
      </body>
    </html>
  )
}
