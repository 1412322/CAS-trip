'use client'

import Close from '@/public/images/close.svg'
import ArrowDown from '@/public/images/green_arrow_down.svg'
import Logo from '@/public/images/logo.png'
import Menu from '@/public/images/menu.svg'
import Search from '@/public/images/search.svg'
import GreenSearch from '@/public/images/green_search.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsVisible(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 z-[999] flex h-14 w-full items-center justify-between transition-all duration-300 md:h-20 ${
        scrolled
          ? 'bg-[#00712D80]'
          : [
                '/about-us',
                '/sustainability',
                '/support',
                '/resources',
                '/contact-us',
                '/our-programs',
              ].includes(pathname)
            ? 'bg-[#00712D]'
            : 'bg-transparent'
      }`}
    >
      <div className="m-auto flex w-full items-center justify-between px-5 md:px-[100px]">
        <Image src={Logo} alt="CAS-trip-logo" className="h-[46px] w-auto md:h-16" />

        <div className="flex items-center justify-end gap-4 md:gap-6">
        <nav className="hidden space-x-4 text-white lg:block">
          <Link
            href="/"
            className={`text-[16px] font-[600] hover:font-[700] hover:underline ${pathname === '/' ? 'font-[700] underline' : ''}`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`text-[16px] font-[600] hover:font-[700] hover:underline ${pathname === '/about-us' ? 'font-[700] underline' : ''}`}
          >
            About Us
          </Link>
          {/* 
      <Link href="#" className={`hover:underline hover:font-[700] font-[600] text-[16px] ${pathname === '/' ? 'underline font-[700]' : ''}`}>
        Programs
      </Link> */}

          {/* DROPDOWN */}

          <Link
            href="/camps/nature"
            className={`relative text-[16px] font-[600] hover:font-[700] hover:underline ${['/camps/nature', '/camps/leadership', '/camps/subject'].includes(pathname) ? 'font-[700] underline' : ''}`}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="text-[16px] font-[600] hover:font-[700] hover:underline"
              onMouseEnter={() => toggleDropdown('programs')}
              onMouseDown={() => toggleDropdown('programs')}
            >
              Programs
            </button>

            {activeDropdown === 'programs' && (
              <div ref={dropdownRef} className="absolute left-0 top-full pt-5">
                <ul className="border-[rgba(0, 113, 45, 0.50)] shadow-[3px 3px 2px 0px rgba(0, 113, 45, 0.30)] z-50 w-[300px] rounded-[10px] bg-white py-8 text-[18px] font-[900] text-[#00712D]">
                  <li>
                    <Link
                      href="/camps/nature"
                      className={`block flex h-[30px] items-center px-8 hover:bg-[#00712D1A] ${pathname === '/camps/nature' ? 'underline' : ''}`}
                    >
                      Nature Camps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/camps/subject"
                      className={`block flex h-[30px] items-center px-8 hover:bg-[#00712D1A] ${pathname === '/camps/subject' ? 'underline' : ''}`}
                    >
                      Subject Camps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/camps/leadership"
                      className={`block flex h-[30px] items-center justify-between px-8 hover:bg-[#00712D1A] ${pathname === '/camps/leadership' ? 'underline' : ''}`}
                    >
                      Leadership Camps
                      <Image src={ArrowDown} width={16} height={16} alt="arrow-down-icon" />
                    </Link>

                    <ul>
                      <li>
                        <Link href="/taman-negara" className="px-8 text-[18px] font-[700]">
                          Taman Negara
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </Link>

          <Link
            href="/sustainability"
            className={`text-[16px] font-[600] hover:font-[700] hover:underline ${pathname === '/sustainability' ? 'font-[700] underline' : ''}`}
          >
            Sustainability
          </Link>

          <Link
            href="/support"
            className={`text-[16px] font-[600] hover:font-[700] hover:underline ${pathname === '/support' ? 'font-[700] underline' : ''}`}
          >
            Support
          </Link>

          <Link
            href="/resources"
            className={`text-[16px] font-[600] hover:font-[700] hover:underline ${pathname === '/resources' ? 'font-[700] underline' : ''}`}
          >
            Resources
          </Link>

          <Link
            // className="rounded-[8px] bg-[#FFA726] p-[8px] text-[16px] font-[600]"
            className="rounded-[8px] bg-[#FFA726] p-[8px] text-[16px] font-[600] text-white from-slate-800 to-slate-700 focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(-45deg,transparent_25%,theme(colors.white/.8)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </nav>

        <Image
          src={Search}
          alt="search-logo"
          className="w-4 md:w-8 aspect-square cursor-pointer"
          onClick={() => { setIsSearchVisible(!isSearchVisible); setIsVisible(false) }}
        />

        <Image
          src={Menu}
          alt="menu-logo"
          className="lg:hidden"
          onClick={() => { setIsVisible(!isVisible); setIsSearchVisible(false) }}
        />
        </div>

        {isSearchVisible && (
          <div ref={searchRef} className="absolute flex items-center right-0 md:top-0 top-[56px] w-full bg-white p-6 md:p-24 text-[20px] md:text-[80px] font-[900] text-[#00712D] shadow-[3px_3px_2px_0_rgba(0,113,45,0.30)]">
            <input className="w-full rounded-none border-0 border-b border-[#00712D] placeholder:text-[#00712D] outline-0" placeholder="Search" />

            <Image
          src={GreenSearch}
          alt="search-logo"
          className="w-3 md:w-12 aspect-square"
        />
          </div>
        )}

        {isVisible && (
          <div className="absolute right-0 top-[56px] block flex w-[calc(100vw-56px)] flex-col rounded-l-[10px] bg-white py-[30px] text-[18px] font-[900] text-[#00712D] shadow-[3px_3px_2px_0_rgba(0,113,45,0.30)] lg:hidden">
            <div className="flex h-[30px] items-center justify-between px-[30px] active:bg-[rgba(0,113,45,0.10)]">
              <Link href="/" className={`flex-1 ${pathname === '/' ? 'underline' : ''}`}>
                Home
              </Link>

              <Image
                src={Close}
                width={24}
                height={24}
                alt="arrow-down-icon"
                onClick={() => setIsVisible(false)}
              />
            </div>

            <Link
              href="/about-us"
              className={`flex h-[30px] items-center px-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/about-us' ? 'underline' : ''}`}
            >
              About Us
            </Link>

            <button
              className="flex h-[30px] w-full items-center justify-between px-[30px] active:bg-[rgba(0,113,45,0.10)]"
              onClick={() => toggleMobileDropdown('programs')}
            >
              <label
                className={`${['/camps/nature', '/camps/leadership', '/camps/subject'].includes(pathname) ? 'underline' : ''}`}
              >
                Programs
              </label>

              <Image
                className={activeMobileDropdown === 'programs' ? 'rotate-180' : ''}
                src={ArrowDown}
                width={12}
                alt="arrow-down-icon"
              />
            </button>

            {activeMobileDropdown === 'programs' && (
              <ul className="mt-2.5 space-y-2.5 px-[30px] text-[16px] font-[800]">
                <li>
                  <Link
                    className={pathname === '/camps/nature' ? 'underline' : ''}
                    href="/camps/nature"
                  >
                    Nature Camps
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname === '/camps/subject' ? 'underline' : ''}
                    href="/camps/subject"
                  >
                    Subject Camps
                  </Link>
                </li>

                <li className="flex flex-col">
                  <div className="flex w-full items-center justify-between">
                    <Link
                      className={pathname === '/camps/leadership' ? 'underline' : ''}
                      href="/camps/leadership"
                    >
                      Leadership Camps
                    </Link>

                    <Image src={ArrowDown} width={12} alt="arrow-down-icon" />
                  </div>

                  <ul className="mt-1 space-y-1 text-[14px] font-[600]">
                    <li>
                      <Link
                        className={pathname === '/taman-negara' ? 'underline' : ''}
                        href="/taman-negara"
                      >
                        Taman Negara
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}

            <Link
              href="/sustainability"
              className={`flex h-[30px] items-center px-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/sustainability' ? 'underline' : ''}`}
            >
              Sustainability
            </Link>

            <Link
              href="/support"
              className={`flex h-[30px] items-center px-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/support' ? 'underline' : ''}`}
            >
              Support
            </Link>

            <Link
              href="/resources"
              className={`flex h-[30px] items-center px-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/resources' ? 'underline' : ''}`}
            >
              Resources
            </Link>

            <Link
              href="/contact-us"
              className={`flex h-[30px] items-center px-[30px] active:bg-[rgba(0,113,45,0.10)] ${pathname === '/contact-us' ? 'underline' : ''}`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
