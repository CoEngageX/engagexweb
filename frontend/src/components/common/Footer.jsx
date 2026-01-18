// Compact Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
              <span className="text-xl font-bold">CoEngageX</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bridging professionals, students, and businesses
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                aria-label={social}
              >
                <span className="text-xs font-semibold">{social.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div>© {currentYear} CoEngageX. All rights reserved.</div>
            <div className="mt-2 md:mt-0">
              <a href="mailto:hello@coengagex.com" className="hover:text-white">
                hello@coengagex.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer