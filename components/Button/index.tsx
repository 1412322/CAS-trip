'use client'

import { useRouter } from 'next/navigation'

export default function Button({ children, path }: { children: React.ReactNode; path?: string }) {
  const router = useRouter()

  return (
    <button
      className="h-7 rounded-[10px] bg-[#FFA726] px-4 text-[14px] font-[600] text-white hover:bg-[#FFCA7D] active:bg-[#FFCA7D] md:h-12 md:px-8 md:text-[20px]"
      onClick={path ? () => router.push(path) : () => {}}
    >
      {children}
    </button>
  )
}
