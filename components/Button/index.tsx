'use client'

import { redirect } from "next/navigation"

export default function Button({ children, path }: { children: React.ReactNode, path?: string }) {
  return (
<button className="text-white px-4 md:px-8 h-7 md:h-12 rounded-[10px] bg-[#FFA726] hover:bg-[#FFCA7D] active:bg-[#FFCA7D] text-[14px] md:text-[20px] font-[600]" onClick={() => redirect(path)}>
{children}
            </button>
  )
}
