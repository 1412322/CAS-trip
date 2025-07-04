"use client";

import { useEffect, useRef, useState } from "react";

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
      className="fixed bottom-24 right-6 md:right-10 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-lg z-50 transition border-2 border-white"
      style={{ background: "#00712D4D" }}
      aria-label="Back to top"
    >
      ↑
    </button>
  ) : null;
}
