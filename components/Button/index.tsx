
export default function Button({ children }: { children: React.ReactNode }) {
  return (
<button className="text-white px-8 h-12 rounded-xl bg-[#FFA726] text-[20px] font-[600]">
{children}
            </button>
  )
}
