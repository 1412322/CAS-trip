'use client'

import { useRouter } from 'next/navigation'

export default function Button({ children, path }: { children: React.ReactNode; path?: string }) {
  const router = useRouter()

  return (
    <button
      onClick={path ? () => router.push(path) : () => {}}
      className="flex items-center justify-center h-7 rounded-[10px] bg-[#FFA726] px-4 text-[14px] font-[600] text-white md:h-12 md:px-8 md:text-[20px] from-slate-800 to-slate-700 focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative
  before:absolute before:inset-0 before:rounded-[inherit]
  before:bg-[linear-gradient(-45deg,transparent_25%,theme(colors.white/.8)_50%,transparent_50%,transparent_25%)]
  before:bg-[length:200%_200%,5%_5%]
  before:bg-no-repeat
  before:animate-[shine_3s_linear_infinite] hover:before:animate-[shine-hover_0.3s_linear]"
    >
      {children}
    </button>
  )
}
