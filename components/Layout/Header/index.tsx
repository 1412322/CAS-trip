'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.svg'
import Menu from '@/public/images/menu.svg'
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
    <header className={`fixed top-0 flex items-center justify-between h-14 md:h-20 z-[999] w-full transition-all duration-300 ${
        scrolled ? 'bg-[#00712D80]' : ['/about-us', '/sustainability', '/support', '/resources'].includes(pathname) ? 'bg-[#00712D]' : 'bg-transparent'
      }`}>
    <div className="m-auto w-full px-5 md:px-[100px] flex justify-between items-center">

    <Image src={Logo} alt="CAS-trip-logo" className="w-[68px] md:w-[145px]" />

    <Image src={Menu} alt="CAS-trip-logo" className="lg:hidden" />

    <nav className="space-x-[16px] hidden lg:block text-white">
      <Link href="/" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/' ? 'underline font-[700]' : ''}`}>
        Home
      </Link>

      <Link href="/about-us" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/about-us' ? 'underline font-[700]' : ''}`}>
        About Us
      </Link>
{/* 
      <Link href="#" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/' ? 'underline font-[700]' : ''}`}>
        Programs
      </Link> */}

                {/* DROPDOWN */}
              
              <a className="relative" onMouseLeave={() => setActiveDropdown(null)}>
            <button className="hover:underline hover:font-[700] font-[600] text-[16px]" onMouseEnter={() => toggleDropdown("programs")} onMouseDown={() => toggleDropdown("programs")}>
            <Link href="/camps/nature" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${['/camps/nature', '/camps/leadership', '/camps/subject'].includes(pathname) ? 'underline font-[700]' : ''}`}>
              Programs
              </Link>
              </button>

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

      <Link href="/sustainability" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/sustainability' ? 'underline font-[700]' : ''}`}>
        Sustainability
      </Link>

      <Link href="/support" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/support' ? 'underline font-[700]' : ''}`}>
        Support
      </Link>

      <Link href="/resources" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/resources' ? 'underline font-[700]' : ''}`}>
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
