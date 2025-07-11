export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  const customClassName = `bg-cover bg-center px-3 md:px-0 py-20 ${className || ""}`
  
  return (
    <section className={customClassName}>
    <div className="md:max-w-6xl m-auto">
        {children}
  </div>
</section>
  )
}