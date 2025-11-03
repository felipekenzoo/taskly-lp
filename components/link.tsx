interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a 
      href={href} 
      className={`text-blue-500 hover:text-blue-700 underline transition-colors ${className}`}
    >
      {children}
    </a>
  )
}