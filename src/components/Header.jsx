import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="flex justify-between items-start px-6 py-6 md:px-16 md:py-12 w-full gap-4" style={{ maxWidth: '1600px' }}>
      <Logo />
      <nav className="flex gap-2 flex-wrap justify-end">
        <Button
          to="/join"
          variant="secondary"
          className="hidden md:flex"
        >
          Join the coalition
        </Button>
        <Button
          to="/docs"
          variant="secondary"
          icon={
            <svg className="flex md:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7663 4.82403L10.2872 1.34492C9.99294 1.05069 9.60272 0.888916 9.18761 0.888916H4.22228C2.87383 0.888916 1.77783 1.98492 1.77783 3.33336V12.6667C1.77783 14.0151 2.87383 15.1111 4.22228 15.1111H11.7778C13.1263 15.1111 14.2223 14.0151 14.2223 12.6667V5.92358C14.2223 5.50847 14.0605 5.11736 13.7663 4.82403ZM5.11117 5.33336H6.88894C7.25694 5.33336 7.55561 5.63203 7.55561 6.00003C7.55561 6.36803 7.25694 6.66669 6.88894 6.66669H5.11117C4.74317 6.66669 4.4445 6.36803 4.4445 6.00003C4.4445 5.63203 4.74317 5.33336 5.11117 5.33336ZM10.8889 12H5.11117C4.74317 12 4.4445 11.7014 4.4445 11.3334C4.4445 10.9654 4.74317 10.6667 5.11117 10.6667H10.8889C11.2569 10.6667 11.5556 10.9654 11.5556 11.3334C11.5556 11.7014 11.2569 12 10.8889 12ZM10.8889 9.33336H5.11117C4.74317 9.33336 4.4445 9.03469 4.4445 8.66669C4.4445 8.29869 4.74317 8.00003 5.11117 8.00003H10.8889C11.2569 8.00003 11.5556 8.29869 11.5556 8.66669C11.5556 9.03469 11.2569 9.33336 10.8889 9.33336ZM12.8285 5.7778H10.2223C9.73339 5.7778 9.33339 5.3778 9.33339 4.88892V2.29247L9.34494 2.28803L12.8312 5.77336L12.8285 5.7778Z" style={{ fill: 'rgba(110, 118, 134, 1)' }} />
            </svg>
          }
        >
          <span className="hidden md:inline">View Docs</span>
        </Button>
        <Button
          to="/live"
          variant="primary"
          icon={<span className="rounded-full pulse-indicator"></span>}
        >
          Live Example
        </Button>
      </nav>
    </header>
  )
}

export default Header

