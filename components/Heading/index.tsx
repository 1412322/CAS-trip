export default function Heading({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <h2 className={`text-center text-[20px] font-[800] md:text-[32px] ${color} mb-3 md:mb-8`}>
      {children}
    </h2>
  )
}
