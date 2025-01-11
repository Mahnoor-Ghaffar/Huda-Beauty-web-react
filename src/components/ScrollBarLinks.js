import React from "react";

const ScrollbarLinks = () => {
  return (
    <div className="w-full overflow-x-auto py-4 bg-white">
      <div className="flex space-x-4 items-center justify-center">
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-4 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px]">
          New
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-4 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px]">
          Best Sellers
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-4 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px]">
          Huda Beauty
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-4 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px]">
          Kayali
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-4 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px]">
          Wishful
        </button>
        <button className="text-black bg-transparent border border-[#EB3986] rounded-[30px] px-4 py-1 focus:outline-none transition-all duration-300 ease-in-out hover:bg-pink-700 focus:bg-pink-700 text-[12px] md:text-[17px]">
          Gifts & Sets
        </button>
      </div>
    </div>
  );
};

export default ScrollbarLinks;
