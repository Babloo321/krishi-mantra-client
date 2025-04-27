import { Link, PanelLeftOpen, Home, ShoppingBag, Box, Menu, Search,Heart,ShoppingCart,SquareChevronUp, Info, CircleUserRound, Sprout } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const navLinks = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/shop', label: 'Shop', Icon: ShoppingBag },
  { to: '/view-all-carts', label: 'Cart', Icon: ShoppingCart },
  { to: '/categories', label: 'Category', Icon: Menu },
  { to: '/mobile-account', label: 'Me', Icon: CircleUserRound },
];

function Navbar() {
  const [flag, setFlag] = useState(true);
  const { user,token} = useAuth();
  const { totalItems,products } = useCart();
  console.log("totals Itms: ",products.productId);
  const navigate = useNavigate();
  const handleLogoClick = ()=>{
    navigate("/")
  }
  const handleViewAllCart = ()=>{
    navigate("/view-all-carts");
  }
  return (
    <div className='fixed top-0 z-10 w-full'>
    {/* topbar for Mobile */}
    <nav className="fixed top-0 md:hidden w-full bg-gray-900 shadow p-2 h-14">
      <div className="w-full mx-auto flex justify-between items-center">
        
        {/* Search Container */}
        <div className="flex items-center w-full max-w-md border rounded-lg bg-gray-200 p-2">
          <Search className="text-gray-900 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full focus:outline-none"
          />
        </div>

        {/* Icons Container */}
        <div className="flex items-center gap-4 ml-4 py-2">
          <Heart className="text-gray-200 cursor-pointer" size={24} />  
        </div>

      </div>
    </nav>

    {/* top navbar */}
      <div className="hidden md:flex flex-col gap-0 bg-gray-900">
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
              <Link
                to="#"
                className="flex items-center gap-1 text-white text-sm"
              >
                <Info size={16} /> Need help?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* middle navbar */}
      <div className="hidden md:flex navbar bg-orange-300 shadow-sm justify-between items-center md:px-12 lg:px-25">

        <div className="flex gap-1 justify-center items-center">
        <Sprout size={33} color='green' onClick={()=>setFlag(true)}/>
        <span onClick={handleLogoClick} className='text-md font-linter text-xl text-gray-100 font-semibold cursor-pointer'>{"Krishi-Mantr"}</span>
        </div>

        <div className="">
          <input
            type="search"
            placeholder="Enter product name..."
            className="bg-gray-900 text-gray-200 p-2 w-122 rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-red-400"
            >
              <div className="indicator text-gray-200 font-bolder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{' '}
                </svg>
                <span className="text-[16px] text-gray-900 indicator-item">{totalItems ? totalItems : 0}</span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{totalItems ? totalItems : 0} items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button 
                  onClick={handleViewAllCart}
                  className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full h-10">
                <img
                  alt={user ? user.role : "profile"}
                  src={user ? user.picture : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
              {
                token ? (<span>Logout</span>) : (<span onClick={()=>navigate("/login")}>Login</span>)
              }
               
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* bottom navbar */}
      <div className='hidden md:flex items-center justify-between bg-gray-900 w-full md:px-12 lg:px-26 py-1'>

        <div className="drawer w-22">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex gap-0">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn drawer-button"
            >
              <PanelLeftOpen size={20} />
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>All Categories</a>
              </li>
              <li>
                <a>Seeds</a>
              </li>
              <li>
                <a>Fertilizers</a>
              </li>
            </ul>
          </div>
        </div>

        <nav
          className={`flex-col sm:flex-row gap-4 sm:gap-6  sm:flex`}
        >
          <NavLink
            to="/"
            className="text-gray-200 hover:text-orange-300 active:text-red-700 text-linter text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-gray-200 hover:text-orange-300 active:text-red-700 text-linter text-lg"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-200 hover:text-orange-300 active:text-red-700 text-linter text-lg"
          >
            About Us
          </NavLink>
        </nav>

        {/* Contact */}
        <div className="text-gray-200 text-sm">
        8999990
        </div>
      </div>
{/* Mobile Bottom Navbar */}
<div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-200 md:hidden z-40">
  <div className="flex justify-around items-center h-16 text-sm text-gray-200">
    {navLinks.map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        aria-label={link.label}
        className="flex flex-col items-center justify-center text-xs relative hover:text-orange-500"
      >
        {/* Icon and Special Case for "Me" and "Cart" */}
        <div className="flex flex-col items-center justify-center">
          
          {link.label === "Me" ? (
            token ? (
              <img
                src={user.picture}
                alt="profile"
                className="h-6 w-6 rounded-full mb-1"
              />
            ) : (
              <link.Icon size={24} className="mb-1" />
            )
          ) : link.label === "Cart" ? (
            <>
              {/* Cart Icon */}
              <link.Icon size={24} className="mb-1" />
              
              {/* Badge for totalItems */}
              {token && totalItems > 0 && (
                <span className="absolute -top-1 right-3 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </>
          ) : (
            <link.Icon size={24} className="mb-1" />
          )}

          {/* Label */}
          <span>{link.label}</span>
        </div>
      </NavLink>
    ))}
  </div>
</div>

    </div>
  );
}

export default Navbar;
