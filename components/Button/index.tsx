
export default function Button({ children }: { children: React.ReactNode }) {
  return (
<button className="text-white px-4 md:px-8 h-7 md:h-12 rounded-[10px] bg-[#FFA726] text-[14px] md:text-[20px] font-[600]">
{children}
            </button>
  )
}
