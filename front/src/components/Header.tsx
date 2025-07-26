import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingBasket, MdOutlineWbSunny } from "react-icons/md";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import logo from "../../public/svgexport-5.svg";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CourseContext";

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/courses?search=${encodeURIComponent(search)}`);
    }
  };

  const { cart } = useCart() 

  return (
    <header className="rtl px-8 py-4 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      {/* لوگو */}
      <Link to="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="لوگو"
          className="w-16 h-auto cursor-pointer hover:opacity-90 transition-opacity"
        />
      </Link>

      {/* نوار جستجو */}
      <div className="flex-1 mx-8 max-w-2xl">
        <form className="relative" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="جستجوی دوره‌ها، مقالات..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-12 pl-5 py-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 ring-blue-400 shadow-sm transition-all duration-300 hover:shadow-md"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
          >
            <FaSearch className="text-lg" />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/blogs" className="group">
          <span className="text-white text-lg font-medium hover:text-blue-200 transition-colors flex items-center">
            مقاله‌ها
            <span className="w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300 mt-1"></span>
          </span>
        </Link>

        <Link to="/courses" className="group">
          <span className="text-white text-lg font-medium hover:text-blue-200 transition-colors flex items-center">
            همه دوره‌ها
            <span className="w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300 mt-1"></span>
          </span>
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-lg font-semibold hover:text-blue-200 transition-colors flex items-center gap-1"
          >
            دوره‌های آموزشی
            <FaChevronDown
              className={`text-sm mt-1 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl z-50 overflow-hidden animate-fadeIn">
              <ul>
                <Link to="/canwatch">
                  <li className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer border-b border-gray-100">
                    قابل مشاهده
                  </li>
                </Link>
                <Link to='/cannotwatch'>
                  <li className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                    غیر قابل مشاهده
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-5 text-white text-xl">
          <MdOutlineWbSunny className="cursor-pointer hover:text-yellow-300 transition-colors" />
          <Link to="/shoppingcart" className="relative">
            <MdOutlineShoppingBasket className="cursor-pointer hover:text-blue-200 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
          <FaRegUser className="cursor-pointer hover:text-blue-200 transition-colors" />
        </div>
      </div>
    </header>
  );
}
