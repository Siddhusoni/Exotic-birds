import React, { useState } from 'react';
import { NavLink ,Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo and Title */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://img.freepik.com/premium-photo/drawing-bird-with-white-background-that-has-bird-it_950428-20848.jpg"
            className="h-8"
            alt="Exotic Birds Logo"
          />
          <span className="text-2xl font-semibold dark:text-white">
            Exotic <span className="text-red-500 font-bold">Birds</span>
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <div>
            
          </div>
         <Link to ='/register'>
         <button
          
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
         </Link>
       
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'News', path: '/news' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Services', path: '/service' },
              { name: 'Buy', path: '/Buy' },
              { name: 'History', path: '/ExoticBirdsHistory' },
              { name: 'Contact', path: '/contact' },
            ].map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-2 px-3 text-red-500 rounded md:p-0'
                      : 'block py-2 px-3 text-gray-900 hover:text-blue-700 rounded md:p-0'
                  }
                  onClick={handleLinkClick} // Close menu on click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
