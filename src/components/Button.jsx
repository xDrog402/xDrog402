import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  icon, 
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = "px-4 md:px-5 py-2 rounded-full flex items-center h-11 text-base transition-all"
  
  const variantClasses = {
    primary: "text-white bg-primary hover:opacity-90",
    secondary: "text-black border border-gray-300 bg-white hover:bg-gray-50"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  const content = (
    <span className="flex gap-2 items-center">
      {icon && icon}
      {children}
    </span>
  )

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        {...props}
      >
        {content}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  )
}

export default Button

