
export default function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`text-[#00712D] text-center text-[14px] md:text-[18px] font-[600] ${className}`}>
    {children}
  </p>
  )
}
