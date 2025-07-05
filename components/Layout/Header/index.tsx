'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.svg'
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <header className={`sticky top-0 flex items-center justify-between h-[80px] z-20 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#00712D80] shadow-md' : 'bg-transparent'
      }`}>
    <div className="m-auto w-full md:max-w-6xl flex justify-between items-center">

    <Image src={Logo} alt="CAS-trip-logo" width={145} />

    <nav className="space-x-[16px] hidden md:block text-white">
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
    </div>
  </header>
  )
}
