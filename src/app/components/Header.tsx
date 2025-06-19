"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBell, FaUserCircle, FaCog, FaSignOutAlt, FaUserEdit, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import logo from '@/assate/logo.png';
import logoMain from '@/assate/logo-01.png';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New career opportunity available', read: false },
    { id: 2, text: 'Your profile needs completion', read: true },
  ]);
  const { user, logout } = useAuth();


  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  if (!isMounted) {
    return (
      <nav className="flex justify-between items-center px-4 sm:px-8 py-3 bg-white shadow-sm fixed w-full z-50">
        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
      </nav>
    );
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-out ${isScrolled
      ? 'bg-white shadow-md py-2 border-b border-gray-100'
      : 'bg-gradient-to-r from-blue-700 to-blue-500 py-3'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative h-[80px] w-[150px]">
              <Image src={logo} alt="Logo" fill className={`object-contain absolute transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />
              <Image src={logoMain} alt="Logo" fill className={`object-contain absolute transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="#" className={`px-1 py-2 text-[16px] font-bold transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Home</Link>
              <Link href="#" className={`px-1 py-2 text-[16px] font-bold transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>About Us</Link>
              <Link href="#" className={`px-1 py-2 text-[16px] font-bold transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Blog</Link>
              <Link href="#" className={`px-1 py-2 text-[16px] font-bold transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Contact</Link>
            </div>

            <div className="flex items-center space-x-6 ml-6">
              <button className={`p-1 rounded-full relative transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100' : 'text-white hover:text-blue-200 hover:bg-blue-800'}`}>
                <FaBell size={18} />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border border-white"></span>
                )}
              </button>

              {user ? (
                <div className="relative">
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`flex items-center space-x-2 transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                    <FaUserCircle size={28} />
                    <span className="hidden lg:inline font-bold">{user.email}</span>
                    <FaChevronDown size={12} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''} ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
                  </button>

                 // In your Header component, update the dropdown section to properly display user data:

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-20 divide-y divide-gray-100 border border-gray-200">
                      <div className="px-4 py-3">
                        <div className="flex items-center space-x-3">
                          {user.profile_image_url ? (
                            <Image
                              src={user.profile_image_url}
                              alt="Profile"
                              width={32}
                              height={32}
                              className="rounded-full object-cover border-2 border-blue-400"
                            />
                          ) : (
                            <FaUserCircle size={28} className="text-gray-500" />
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {user.first_name} {user.last_name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user.email}
                            </p>
                            <p className="text-xs text-blue-600 mt-1">
                              {user.role === 'admin' ? 'Administrator' : 'Member'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Rest of the dropdown menu items */}
                      <div className="py-1">
                        <Link href="/profile">
                          <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                            <FaUserEdit className="mr-3 text-gray-500" />
                            My Profile
                          </div>
                        </Link>
                        {user.role === 'admin' && (
                          <Link href="/admin">
                            <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                              <FaCog className="mr-3 text-gray-500" />
                              Admin Dashboard
                            </div>
                          </Link>
                        )}
                        <Link href="/settings">
                          <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                            <FaCog className="mr-3 text-gray-500" />
                            Account Settings
                          </div>
                        </Link>
                      </div>

                      <div className="py-1">
                        <div
                          onClick={handleLogout}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <FaSignOutAlt className="mr-3 text-gray-500" />
                          Sign Out
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden md:flex space-x-4">
                  <Link href="/login">
                    <button className={`px-4 py-2 rounded-md text-[16px] font-bold transition-all ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'}`}>
                      Login/Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 focus:outline-none`}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
