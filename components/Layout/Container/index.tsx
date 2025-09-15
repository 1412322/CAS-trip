export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  const customClassName = `bg-cover bg-center px-5 md:px-[100px] py-10 md:py-20 ${className || ''}`

  return (
    <section className={customClassName}>
      <div className="w-full">{children}</div>
    </section>
  )
}
