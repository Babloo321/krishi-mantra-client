import React, { useState } from 'react';
import {
  Info,
  Tractor,
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  SquareChevronUp,
  SquareChevronDown,
  Home,
  ShoppingBag,
  Box,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [flag, setFlag] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full relative z-10 overflow-x-hidden">
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
              <Link to="#" className="text-white text-sm">Faqs</Link>
              <Link to="#" className="flex items-center gap-1 text-white text-sm">
                <Info size={16} /> Need help?
              </Link>
            </div>
          </div>
        </div>
        <SquareChevronDown
          size={16}
          onClick={() => setFlag(true)}
          className={`${flag ? 'hidden' : 'block'} text-white cursor-pointer absolute top-0 left-4`}
        />
      </div>

      {/* Middle Navbar */}
      <div className="bg-orange-900 h-16 hidden md:block">
        <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-semibold flex items-center gap-2">
            <Tractor size={28} />
            Krishi-Mantr
          </Link>

          {/* Search */}
          <div className="hidden md:block w-[380px]">
            <form className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full h-10 pl-4 pr-10 rounded-md focus:outline-none bg-white"
              />
              <button type="submit" className="absolute right-2 top-3">
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-4 text-white">
            <div className="relative cursor-pointer">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </div>
            <Heart className="cursor-pointer" />
            <div className="relative group">
              <User className="cursor-pointer" />
              <ul className="absolute top-8 right-0 bg-white rounded shadow-lg hidden group-hover:block w-36 text-black">
                <li className="p-2 hover:bg-gray-100"><a href="#">Account</a></li>
                <li className="p-2 hover:bg-gray-100"><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="hidden md:block border-b border-gray-300">
        <div className="max-w-screen-xl mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Dropdown */}
         
          <div className="mb-2 sm:mb-0">
            <div className="dropdown">
              <label tabIndex={0} className="flex items-center gap-2 cursor-pointer">
                <Menu size={20} /> All categories
              </label>
              <ul className="dropdown-content mt-2 bg-white rounded shadow w-40 text-sm">
                <li><a className="block px-4 py-2 hover:bg-gray-100">Seeds</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-100">Fertilizers</a></li>
              </ul>
            </div>
          </div>

          {/* Nav Links */}
          <nav className={`flex-col sm:flex-row gap-4 sm:gap-6 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <NavLink to="/" className="text-orange-700 hover:text-orange-900 text-sm">Home</NavLink>
            <NavLink to="/shop" className="text-green-700 hover:text-green-900 text-sm">Shop</NavLink>
            <NavLink to="/product" className="text-green-700 hover:text-green-900 text-sm">Product</NavLink>
            <NavLink to="/pages" className="text-green-700 hover:text-green-900 text-sm">Pages</NavLink>
            <NavLink to="/about" className="text-green-700 hover:text-green-900 text-sm">About Us</NavLink>
          </nav>

          {/* Contact */}
          <div className="text-sm text-gray-700 mt-4 sm:mt-0">
            <p>(808)-555-203</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-[1px] left-0 w-full bg-white border-t border-gray-200 md:hidden z-40">
        <div className="flex justify-around items-center h-14 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center hover:text-orange-500">
            <Home size={20} /><span>Home</span>
          </NavLink>
          <NavLink to="/shop" className="flex flex-col items-center hover:text-orange-500">
            <ShoppingBag size={20} /><span>Shop</span>
          </NavLink>
          <NavLink to="/product" className="flex flex-col items-center hover:text-orange-500">
            <Box size={20} /><span>Product</span>
          </NavLink>
          <NavLink to="/categories" className="flex flex-col items-center hover:text-orange-500">
            <Menu size={20} /><span>Category</span>
          </NavLink>
          <NavLink to="/search" className="flex flex-col items-center hover:text-orange-500">
            <Search size={20} /><span>Search</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
