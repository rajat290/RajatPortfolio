import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Hamburger menu button */}
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <NavLink to="/" className="font-bold text-2xl">
                Rajat Singh Tomar
              </NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => 
                    `hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                  }
                >
                  Projects
                </NavLink>
                <NavLink 
                  to="/skills" 
                  className={({ isActive }) => 
                    `hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                  }
                >
                  Skills
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:bg-gray-700 hover:text-white block px-3 py -2 rounded-md text-base font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => 
              `hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
            }
          >
            Skills
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-700 text-white' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;