import { Link } from 'react-router-dom'
import Button from './Button'
import { useState } from 'react' // Add this import

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
  ]

  const [activeItem, setActiveItem] = useState(null) // Add this state

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="section-padding flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#FDB913] rounded-lg"></div>
          <span className="text-2xl font-bold text-[#FDB913]">CoEngageX</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white hover:text-[#FDB913] font-medium transition-colors px-3 py-2 rounded ${
                activeItem === item.name ? 'bg-[#FDB913] text-[#252B37]' : 'hover:bg-[#FDB913] hover:text-[#252B37]'
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-[#FDB913] text-[#252B37] hover:bg-white font-semibold px-4 py-2 rounded-lg transition-colors">
            Sign Up
          </Button>
          <Button className="bg-white text-[#252B37] hover:bg-[#FDB913] font-semibold px-4 py-2 rounded-lg transition-colors">
            Log in
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header