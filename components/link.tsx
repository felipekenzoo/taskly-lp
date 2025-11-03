interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a 
      href={href} 
      className={`no-underline transition-colors ${className}`}
    >
      {children}
    </a>
  )
}