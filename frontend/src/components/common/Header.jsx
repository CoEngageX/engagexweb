import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Button from './Button'
import Logo from"/Logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="top-0 z-50 bg-[#252B37] shadow-md">
      <div className="px-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center">
            <img
          src={Logo}
          alt="Logo"
          className="w-30 h-30 object-contains"
        />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white font-medium transition-colors px-3 py-2 rounded ${
                  isActive
                    ? 'bg-[#FDB913] !text-black'
                    : 'hover:bg-[#ddcb9d] hover:text-black'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#FDB913] text-black'
                  : 'bg-white text-black hover:bg-[#FDB913]'
              }`
            }
          >
            <Button className="font-semibold px-4 py-2">
              Log in
            </Button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#252B37] border-t border-gray-700 ">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-white font-medium px-3 py-2 rounded ${
                    isActive
                      ? 'bg-[#FDB913] !text-black'
                      : 'hover:bg-[#ddcb9d] hover:text-black'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#FDB913] text-black'
                      : 'bg-white text-black'
                  }`
                }
              >
                <Button className="w-full font-semibold py-2">
                  Log in
                </Button>
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
