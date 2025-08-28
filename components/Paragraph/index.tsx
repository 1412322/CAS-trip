export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`text-center text-[14px] font-[600] text-[#00712D] md:text-[18px] whitespace-break-spaces ${className || ''}`}
    >
      {children}
    </p>
  )
}
