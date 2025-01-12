import React, { useState } from "react";
import { HiSearch, HiOutlineUser, HiHeart, HiShoppingCart, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="bg-pink-700 border-b shadow-md p-4">
      {/* Navbar Content */}
      <div className="flex items-center justify-between space-x-4 md:space-x-8">
        {/* Left Section: Dropdown and Text */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer text-sm text-white"
            >
              United States (US) | en
              <span
                className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </span>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white
              
              
               shadow-md rounded-md w-48">
                <li className="p-2 text-black
                
                
                ">United States (US)</li>
                <li className="p-2 text-black
                
                
                ">Canada (CA)</li>
                <li className="p-2 text-black
                
                
                ">Mexico (MX)</li>
              </ul>
            )}
          </div>
        </div>

        {/* Center Section: Logo */}
        <div className="flex-1 text-center">
          <span className="text-2xl font-semibold text-white">Hudabeauty</span>
        </div>

        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <HiSearch className="text-xl cursor-pointer text-white" />
          <HiOutlineUser className="text-xl cursor-pointer text-white" />
          <HiHeart className="text-xl cursor-pointer text-white" />
          <HiShoppingCart className="text-xl cursor-pointer text-white" />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden flex items-center space-x-2 text-white">
          <HiMenu
            onClick={toggleHamburger}
            className={`text-2xl cursor-pointer ${isHamburgerOpen ? "hidden" : "block"}`}
          />
          <HiX
            onClick={toggleHamburger}
            className={`text-2xl cursor-pointer ${isHamburgerOpen ? "block" : "hidden"}`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isHamburgerOpen && (
        <div className="md:hidden p-4 bg-white space-y-4">
          {/* Search Field */}
          <div className="flex items-center border-b pb-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full text-sm p-2 border-b-2 border-pink-500 bg-pink-100 focus:outline-none"
            />
            <HiSearch className="text-xl text-pink-500 ml-2 cursor-pointer" />
          </div>

          {/* Menu Links */}
          <ul className="space-y-2 text-gray-800">
            <li className="cursor-pointer hover:text-pink-500">New</li>
            <li className="cursor-pointer hover:text-pink-500">Best Sellers</li>
            <li className="cursor-pointer hover:text-pink-500">Hudabeauty</li>
            <li className="cursor-pointer hover:text-pink-500">Kyli</li>
            <li className="cursor-pointer hover:text-pink-500">Wishfull</li>
            <li className="cursor-pointer hover:text-pink-500">Gifts</li>
          </ul>

          {/* Profile Link */}
          <div className="flex items-center mt-4 space-x-2 cursor-pointer hover:text-pink-500">
            <HiOutlineUser className="text-xl" />
            <span>Login/Create Account</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
