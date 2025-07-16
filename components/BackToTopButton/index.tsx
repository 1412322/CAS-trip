"use client";

import { useEffect, useRef, useState } from "react";
import ArrowUp from '@/public/images/arrow_up.svg'
import Image from "next/image";

export default function BackToTopButton() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return showTop ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-[25px] right-[25px] p-2 md:p-4 w-[25px] h-[25px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center z-50 transition border-1 md:border-2 border-white"
      style={{ background: "#00712D4D" }}
      aria-label="Back to top"
    >
      <Image src={ArrowUp} layout="responsive" alt="back-to-top-button" />
    </button>
  ) : null;
}
