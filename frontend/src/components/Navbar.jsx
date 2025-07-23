import React, { useState } from "react";
import {
  Menu,
  X,
  Eye,
  Home,
  Search,
  FileText,
  Settings,
  HelpCircle,
  Info,
  User,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const showButton = location.pathname !== "/";

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Why Accessibility ?", href: "/why", icon: HelpCircle },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <nav
      className="bg-white shadow-lg border-b border-gray-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center cursor-pointer" onClick={handleNavigate}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="p-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h1 className="flex items-center gap-2 text-xl md:text-xl font-bold text-gray-900 pointer-cursor">
                Accessibility
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Insight
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`Navigate to ${item.name}`}
                >
                  <IconComponent className="h-4 w-4" aria-hidden="true" />
                  <span>{item.name}</span>
                </a>
              );
            })}

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              {showButton && (
                <button
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Start accessibility check"
                  onClick={handleNavigate}
                >
                  New Scan
                </button>
              )}

              {/* When i implement user s */}

              {/* <button
                className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="User profile"
              >
                <User className="h-5 w-5" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={`Navigate to ${item.name}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <IconComponent className="h-4 w-4" aria-hidden="true" />
                <span>{item.name}</span>
              </a>
            );
          })}

          {/* Mobile CTA and Profile */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            {showButton && (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white block w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-2"
                aria-label="Start accessibility check"
                onClick={handleNavigate}
              >
                Start Check
              </button>
            )}

            {/* <button
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="User profile"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4" aria-hidden="true" />
              <span>Profile</span>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
