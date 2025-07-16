
export default function Heading({ children, color }: { children: React.ReactNode, color: string }) {
  return (
    <h2 className={`text-[20px] md:text-[32px] font-[800] text-center ${color} mb-3 md:mb-8`}>
    {children}
  </h2>
  )
}
