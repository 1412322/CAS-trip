import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import BackToTopButton from '../components/BackToTopButton'
import './global.css'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'CAS Trips',
  description: 'Youth travel programs for growth and adventure',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Head>
          <title>CAS Trips - Home</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        {/* Navbar */}
        <Header />

        <div className="relative">
          {children}

          {/* BACK TO TOP BUTTON */}
          <BackToTopButton />
        </div>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  )
}
