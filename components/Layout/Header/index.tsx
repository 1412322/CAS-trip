'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.svg'
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (menu: string) => {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', onScroll);

      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          setActiveDropdown(null);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        window.removeEventListener('scroll', onScroll);
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, []);

  return (
    <header className={`fixed top-0 flex items-center justify-between h-[80px] z-[999] w-full transition-all duration-300 ${
        scrolled ? 'bg-[#00712D80]' : ['/about-us', '/sustainability', '/support', '/resources'].includes(pathname) ? 'bg-[#00712D]' : 'bg-transparent'
      }`}>
    <div className="m-auto w-full md:max-w-6xl flex justify-between items-center">

    <Image src={Logo} alt="CAS-trip-logo" width={145} />

    <nav className="space-x-[16px] hidden md:block text-white">
      <Link href="/" className="hover:underline hover:font-[700] font-[600] text-[16px]">
        Home
      </Link>

      <Link href="/about-us" className="hover:underline hover:font-[700] font-[600] text-[16px]">
        About Us
      </Link>
{/* 
      <Link href="#" className="hover:underline hover:font-[700] font-[600] text-[16px]">
        Programs
      </Link> */}

                {/* DROPDOWN */}
              
              <a className="relative" onMouseLeave={() => setActiveDropdown(null)}>
            <button className="hover:underline hover:font-[700] font-[600] text-[16px]" onMouseEnter={() => toggleDropdown("programs")} onMouseDown={() => toggleDropdown("programs")}>Programs</button>

            {activeDropdown === "programs" && (
              <div ref={dropdownRef} className="absolute left-0 top-full pt-6">
              <ul className="w-[250px] px-2.5 py-10 bg-white text-[#00712D] text-[18px] font-[900] rounded-[10px] border-[rgba(0, 113, 45, 0.50)] shadow-[3px 3px 2px 0px rgba(0, 113, 45, 0.30)] z-50">
                <li>
                  <Link href="/camps/nature" className="block px-4 py-2 hover:bg-[#00712D1A]">
                    Nature Camps
                  </Link>
                </li>
                <li>
                  <Link href="/camps/subject" className="block px-4 py-2 hover:bg-[#00712D1A]">
                    Subject Camps
                  </Link>
                </li>
                <li>
                  <Link href="/camps/leadership" className="block px-4 py-2 hover:bg-[#00712D1A]">
                    Leadership Camps
                  </Link>
                </li>
                <li>
                  <Link href="/camps/community" className="block px-4 py-2 hover:bg-[#00712D1A]">
                    Community Programs
                  </Link>
                </li>
              </ul></div>)}
              </a>

      <Link href="/sustainability" className="hover:underline hover:font-[700] font-[600] text-[16px]">
        Sustainability
      </Link>

      <Link href="/support" className="hover:underline hover:font-[700] font-[600] text-[16px]">
        Support
      </Link>

      <Link href="/resources" className="hover:underline hover:font-[700] font-[600] text-[16px]">
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
