import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import * as React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Energy SaaS", path: "/energy-saas" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Who We Serve", path: "/who-we-serve" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Our Insights", path: "/our-insights" },
    { name: "Our Partners", path: "/our-partners" },
    { name: "Join Us", path: "/join-us" },
    { name: "Get in Touch", path: "/get-in-touch" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-orange-900">
              GitHub Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-blue-800 bg-blue-50"
                    : "text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-800 hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? "text-blue-800 bg-blue-50"
                    : "text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;