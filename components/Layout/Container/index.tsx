export default function Container({ children, background, className }: { children: React.ReactNode, background: string, className?: string }) {
  const customClassName = `bg-cover bg-center ${background} px-3 md:px-0 py-20 ${className || ""}`
  
  return (
    <section className={customClassName}>
    <div className="md:max-w-6xl m-auto">
        {children}
  </div>
</section>
  )
}