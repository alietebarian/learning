import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingBasket, MdOutlineWbSunny } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import logo from "../../public/svgexport-5.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="rtl px-8 py-4 flex items-center justify-between bg-gray-500">
      <div className="flex items-center gap-5 text-white text-xl">
        <FaRegUser className="cursor-pointer hover:text-blue-600 transition" />
        <Link to={'/shoppingcart'}>
        <MdOutlineShoppingBasket className="cursor-pointer hover:text-blue-600 transition" />
        </Link>
          <MdOutlineWbSunny className="cursor-pointer hover:text-yellow-500 transition" />
        <div className="relative">
          <input
            type="text"
            placeholder="جست‌وجو..."
            className="pl-10 pr-4 py-2 rounded-2xl bg-gray-100 text-sm text-gray-800 focus:outline-none focus:ring-2 ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/blogs">
          <span className="text-white text-xl font-medium cursor-pointer hover:text-blue-600 transition">
            مقاله‌ها
          </span>
        </Link>
        <Link to="/courses">
          <span className="text-white text-xl font-medium cursor-pointer hover:text-blue-600 transition">
            همه دوره‌ها
          </span>
        </Link>
        <span className="text-white text-xl font-semibold cursor-pointer hover:text-blue-600 transition">
          دوره‌های آموزشی
        </span>
        <Link to="/">
          <img
            src={logo}
            alt="لوگو"
            className="w-[80px] h-auto cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}
