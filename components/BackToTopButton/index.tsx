'use client'

import ArrowUp from '@/public/images/arrow_up.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return showTop ? (
    <div className="sticky bottom-0">
    <button
      onClick={scrollToTop}
      className="absolute border-1 bottom-[25px] right-[25px] z-50 flex h-[25px] w-[25px] items-center justify-center rounded-full border-white p-2 transition md:h-[50px] md:w-[50px] md:border-2 md:p-3"
      style={{ background: '#00712D4D' }}
      aria-label="Back to top"
    >
      <Image src={ArrowUp} className="h-full w-auto" alt="back-to-top-button" />
    </button>
    </div>
  ) : null
}
