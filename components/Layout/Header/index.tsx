'use client'

import Close from '@/public/images/close.svg'
import ArrowDown from '@/public/images/green_arrow_down.svg'
import Logo from '@/public/images/logo.png'
import Menu from '@/public/images/menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(false)
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
        scrolled ? 'bg-[#00712D80]' : ['/about-us', '/sustainability', '/support', '/resources', '/contact-us', '/our-programs'].includes(pathname) ? 'bg-[#00712D]' : 'bg-transparent'
      }`}>
    <div className="m-auto w-full px-5 md:px-[100px] flex justify-between items-center">

    <Image src={Logo} alt="CAS-trip-logo" className="md:h-16 h-[46px] w-auto" />

    <Image src={Menu} alt="CAS-trip-logo" className="lg:hidden" onClick={() => setIsVisible(!isVisible)} />

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
              
              <Link href="/camps/nature" className={`relative hover:underline hover:font-[700] font-[600] text-[16px] ${['/camps/nature', '/camps/leadership', '/camps/subject'].includes(pathname) ? 'underline font-[700]' : ''}`} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="hover:underline hover:font-[700] font-[600] text-[16px]" onMouseEnter={() => toggleDropdown("programs")} onMouseDown={() => toggleDropdown("programs")}>
              Programs
              </button>

            {activeDropdown === "programs" && (
              <div ref={dropdownRef} className="absolute left-0 top-full pt-5">
              <ul className="py-8 w-[300px] bg-white text-[#00712D] text-[18px] font-[900] rounded-[10px] border-[rgba(0, 113, 45, 0.50)] shadow-[3px 3px 2px 0px rgba(0, 113, 45, 0.30)] z-50">
                <li>
                  <Link href="/camps/nature" className={`block px-8 h-[30px] flex items-center hover:bg-[#00712D1A] ${pathname === '/camps/nature' ? 'underline' : ''}`}>
                    Nature Camps
                  </Link>
                </li>
                <li>
                  <Link href="/camps/subject" className={`block px-8 h-[30px] flex items-center hover:bg-[#00712D1A] ${pathname === '/camps/subject' ? 'underline' : ''}`}>
                    Subject Camps
                  </Link>
                </li>
                <li>
                  <Link href="/camps/leadership" className={`flex justify-between items-center block px-8 h-[30px] flex items-center hover:bg-[#00712D1A] ${pathname === '/camps/leadership' ? 'underline' : ''}`}>
                    Leadership Camps

                    <Image src={ArrowDown} width={16} height={16} alt="arrow-down-icon" />
                  </Link>

<ul>
  <li>
  <Link href="/taman-negara" className="px-8 text-[18px] font-[700]">Taman Negara</Link>
  </li>
  </ul>
                 
                </li>
              </ul></div>)}
              </Link>

      <Link href="/sustainability" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/sustainability' ? 'underline font-[700]' : ''}`}>
        Sustainability
      </Link>

      <Link href="/support" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/support' ? 'underline font-[700]' : ''}`}>
        Support
      </Link>

      <Link href="/resources" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/resources' ? 'underline font-[700]' : ''}`}>
        Resources
      </Link>

      <Link className="bg-[#FFA726] p-[8px] rounded-[8px] text-[16px] font-[600]" href="/contact-us">
        Contact Us
      </Link>
    </nav>

{isVisible && (
 <div className="block lg:hidden text-[18px] font-[900] text-[#00712D] rounded-l-[10px] shadow-[3px_3px_2px_0_rgba(0,113,45,0.30)] w-[calc(100vw-56px)] flex flex-col bg-white py-[30px] absolute right-0 top-[56px]">
 <div className="h-[30px] active:bg-[rgba(0,113,45,0.10)] px-[30px] flex items-center justify-between">
   <Link href="/" className={`flex-1 ${pathname === '/' ? 'underline' : ''}`}>
   Home
 </Link>

 <Image src={Close} width={24} height={24} alt="arrow-down-icon" onClick={() => setIsVisible(false)} />
</div>

 <Link href="/about-us" className={`flex items-center px-[30px] h-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/about-us' ? 'underline' : ''}`}>
   About Us
 </Link>
         
       
       <button className="flex items-center px-[30px] h-[30px] active:bg-[rgba(0,113,45,0.10)] flex justify-between items-center w-full" onClick={() => toggleDropdown("programs")}>
       <label className={`${['/camps/nature', '/camps/leadership', '/camps/subject'].includes(pathname) ? 'underline' : ''}`}>Programs</label>

         <Image className={activeDropdown === "programs" ? 'rotate-180' : ''} src={ArrowDown} width={12} alt="arrow-down-icon" />
         </button>

       {activeDropdown === "programs" && (
         <ul className="px-[30px] text-[16px] font-[800] space-y-2.5 mt-2.5">
           <li>
             <Link className={pathname === '/camps/nature' ? 'underline' : ''} href="/camps/nature">
               Nature Camps
             </Link>
           </li>

           <li>
             <Link className={pathname === '/camps/subject' ? 'underline' : ''} href="/camps/subject">
               Subject Camps
             </Link>
           </li>

           <li className="flex flex-col">
             <div className="flex justify-between items-center w-full">
             <Link className={pathname === '/camps/leadership' ? 'underline' : ''} href="/camps/leadership">
               Leadership Camps
             </Link>

             <Image src={ArrowDown} width={12} alt="arrow-down-icon" />
             </div>

             <ul className="text-[14px] font-[600] space-y-1 mt-1">
           <li>
             <Link className={pathname === '/taman-negara' ? 'underline' : ''} href="/taman-negara">Taman Negara</Link>
             </li>
         </ul>
           </li>
         </ul>)}

 <Link href="/sustainability" className={`flex items-center px-[30px] h-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/sustainability' ? 'underline' : ''}`}>
   Sustainability
 </Link>

 <Link href="/support" className={`flex items-center px-[30px] h-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/support' ? 'underline' : ''}`}>
   Support
 </Link>

 <Link href="/resources" className={`flex items-center px-[30px] h-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/resources' ? 'underline' : ''}`}>
   Resources
 </Link>

 <Link href="/contact-us" className={`flex items-center px-[30px] h-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/contact-us' ? 'underline' : ''}`}>
   Contact Us
 </Link>
</div>
)}
    </div>
  </header>
  )
}
