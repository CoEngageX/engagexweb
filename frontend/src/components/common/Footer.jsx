import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "/Logo.png";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#252B37] text-white">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo */}
        <div className="flex border-b border-gray-500 pb-4 mb-6">
          <img src={Logo} alt="Logo" className="w-24 h-auto object-contain" />
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold text-md mb-4">COMPANY</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/about#aboutus">About Us</Link></li>
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/about#mission">Our Mission</Link></li>
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/about#vision">Our Vision</Link></li>
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/sponsors#founder">Meet the Founder</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold text-md mb-4">EVENTS</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/events#mainevents">Main Event</Link></li>
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/events#otherevents">Upcoming Events</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold text-md mb-4">CONNECT</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/contact#contact">Contact Us</Link></li>
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/sponsors#sponsorsus">Become a Sponsor</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold text-md mb-4">OPPORTUNITIES</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="hover:text-[#FDB913] cursor-pointer"><Link to="/contact#socialmedia">Join Us</Link></li>
            </ul>

            {/* Social Media */}
            <div>
              <div className="flex flex-wrap gap-2">
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#0A66C2] transition-colors">
                  <FaLinkedinIn className="text-white text-sm" />
                </a>
                <a href="https://x.com/CoEngageX" aria-label="X" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors">
                  <FaTwitter className="text-white text-sm" />
                </a>
                <a href="https://www.instagram.com/coengagex?igsh=ZGx4cjVwY2Fzcmpx&utm_source=qr" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E4405F] transition-colors">
                  <FaInstagram className="text-white text-sm" />
                </a>
                <a href="https://www.facebook.com/share/18CoWuuFRE/?mibextid=wwXIfr" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#1877F2] transition-colors">
                  <FaFacebookF className="text-white text-sm" />
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#FF0000] transition-colors">
                  <FaYoutube className="text-white text-sm" />
                </a>
                <a href="https://www.tiktok.com/@coengagex_?_r=1&_t=ZS-93J0YSkckEx" aria-label="TikTok" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors">
                  <FaTiktok className="text-white text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 md:gap-0">
            <div>© {currentYear} CoEngageX. All rights reserved.</div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white font-medium transition-colors px-3 py-1 rounded ${
                      isActive
                        ? 'bg-[#FDB913] !text-black'
                        : 'hover:bg-[#ddcb9d] hover:text-black'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
