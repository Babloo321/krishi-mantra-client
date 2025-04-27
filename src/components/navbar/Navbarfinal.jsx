import React, { useState } from 'react';
import {
  Info,
  Search,
  Menu,
  SquareChevronUp,
  SquareChevronDown,
  Home,
  ShoppingBag,
  Box,
  Tractor,
  ShoppingCart,
  Heart,
  User
} from 'lucide-react';
// ShoppingCart, Heart, User, Tractor
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [flag, setFlag] = useState(true);
  // const [popup,setPopup] = useState(false);
  // const navigate = useNavigate();
  // const { totalItems } = useProducts();
  return (
    <div className="w-full relative z-55 overflow-x-hidden">
      {/* Top Bar */}
      <div className="hidden md:block bg-gray-900">
        <div className={`${flag ? 'flex' : 'hidden'} h-9`}>
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 w-full">
            <p className="text-white text-sm flex items-center gap-2">
              <SquareChevronUp
                size={16}
                onClick={() => setFlag(false)}
                className="cursor-pointer"
              />
              Free on all orders over $50
            </p>
            <div className="hidden sm:flex items-center gap-4">
              <select className="bg-transparent text-sm text-white outline-none">
                <option className="text-black">Hindi</option>
                <option className="text-black">English</option>
              </select>
              <Link to="#" className="text-white text-sm">
                Faqs
              </Link>
              <Link to="#" className="flex items-center gap-1 text-white text-sm">
                <Info size={16} /> Need help?
              </Link>
            </div>
          </div>
        </div>
        <SquareChevronDown
          size={16}
          onClick={() => setFlag(true)}
          className={`${
            flag ? 'hidden' : 'block'
          } text-white cursor-pointer absolute top-0 left-4`}
        />
      </div>

            {/* middel navbar */}
         <NavbarPop />
      {/* Bottom Navbar */}
      <div className="hidden md:flex items-center justify-between bg-gray-100 w-full py-0 lg:px-16">
        {/* Category Dropdown */}
        <select className="bg-transparent text-md text-gray-900 outline-none px-4 py-2">
          <option disabled>Categories</option>
          <option>Seeds</option>
          <option>Fertilizers</option>
          <option>Equipment</option>
          <option>Pesticides</option>
        </select>

        {/* Nav Links */}
        <nav
          className={`flex-col sm:flex-row gap-4 sm:gap-6  sm:flex`}
        >
          <NavLink
            to="/"
            className="text-orange-700 hover:text-orange-900 text-sm"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-green-700 hover:text-green-900 text-sm"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="text-green-700 hover:text-green-900 text-sm"
          >
            About Us
          </NavLink>
        </nav>

        {/* Contact */}
        <div className="text-gray-800 text-sm">
        8999990
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden z-40">
        <div className="flex justify-around items-center h-14 text-sm text-gray-700">
          <NavLink
            to="/"
            aria-label="Home"
            className="flex flex-col items-center hover:text-orange-500"
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/shop"
            aria-label="Shop"
            className="flex flex-col items-center hover:text-orange-500"
          >
            <ShoppingBag size={20} />
            <span>Shop</span>
          </NavLink>
          <NavLink
            to="/product"
            aria-label="Product"
            className="flex flex-col items-center hover:text-orange-500"
          >
            <Box size={20} />
            <span>Product</span>
          </NavLink>
          <NavLink
            to="/categories"
            aria-label="Category"
            className="flex flex-col items-center hover:text-orange-500"
          >
            <Menu size={20} />
            <span>Category</span>
          </NavLink>
          <NavLink
            to="/search"
            aria-label="Search"
            className="flex flex-col items-center hover:text-orange-500"
          >
            <Search size={20} />
            <span>Search</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



import{ useRef, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const NavbarPop = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef();

  // Close the popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-green-700">
          <Leaf size={24} />
          <span>Krishi-Mantr</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 px-6">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute top-2.5 right-3 text-gray-500" size={18} />
          </div>
        </div>

        {/* Profile */}
        <div className="relative" ref={menuRef}>
          <button onClick={() => setShowProfileMenu(prev => !prev)} className="text-gray-700 hover:text-green-600">
            <User size={24} />
          </button>

          {/* Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

