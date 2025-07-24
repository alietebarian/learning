import React from "react";
import { Link } from "react-router-dom"; // یا از next/link اگر با Next.js کار می‌کنی
import { BiErrorCircle } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="max-w-xl text-center">
        <BiErrorCircle size={80} className="mx-auto text-blue-600 mb-6" />
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          صفحه پیدا نشد!
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          متأسفیم، صفحه‌ای که دنبال آن بودید وجود ندارد یا ممکن است حذف شده
          باشد.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition duration-300"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
