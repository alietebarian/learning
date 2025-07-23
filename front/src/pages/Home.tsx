import {
  FaArrowLeft,
  FaArrowRight,
  FaBarcode,
  FaPython,
} from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoExtensionPuzzle } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { BiSolidBookBookmark } from "react-icons/bi";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

import CourseCard from "../components/CourseCard";
import DetailsBox from "../components/DetailsBox";
import { useState } from "react";
import ReadMore from "../components/ReadMore";

// --- API Calls ---
const fetchBlosgCoutnt = async () => {
  const res = await axios.get("http://localhost:5215/api/Blog/getCount");
  return res.data;
};

const fetchCoursesCount = async () => {
  const res = await axios.get("http://localhost:5215/api/Courses");
  return res.data;
};

export default function Home() {
  const { data: blog } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlosgCoutnt,
  });

  const { data: course } = useQuery({
    queryKey: ["course"],
    queryFn: fetchCoursesCount,
  });

  const totalTime = course?.reduce((sum, c) => sum + c.time, 0);

  const [ show, setShow ] = useState<boolean>(false)

  return (
    <div className="w-full mx-auto px-6 md:px-16 py-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="py-3 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          تمرین، اولین مسیر حرفه‌ای شدن
        </h1>
        <p className="text-lg text-gray-300">
          با تمرین بیشتر و بیشتر حرفه‌ای‌تر از همیشه شوید
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center p-6 bg-gray-700/50 rounded-lg min-w-[180px] hover:bg-gray-700/70 transition">
          <MdOutlineTimer className="text-3xl text-cyan-400 mb-2" />
          <span className="text-2xl font-bold text-cyan-100">{totalTime}</span>
          <span className="text-sm text-gray-300 mt-1">ساعت آموزشی</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-700/50 rounded-lg min-w-[180px] hover:bg-gray-700/70 transition">
          <BiSolidBookBookmark className="text-3xl text-blue-400 mb-2" />
          <span className="text-2xl font-bold text-blue-100">{blog}</span>
          <span className="text-sm text-gray-300 mt-1">دوره آموزشی</span>
        </div>
      </div>

      {/* Courses Section */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            to="/courses"
            className="text-lg text-gray-300 hover:text-white transition"
          >
            مشاهده همه دوره‌ها →
          </Link>
          <h2 className="text-2xl font-bold">سکوی پرتاب شما به سمت موفقیت</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {course?.slice(0, 16).map((c) => (
            <CourseCard key={c.id} {...c} />
          ))}
        </div>
        {/* Roadmaps */}
        <div className="space-y-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4"></div>
            <div className="text-right space-y-2">
              <p className="text-green-400 text-xl">نقشه راه‌ها</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                نقشه‌های راه برای شروع اصولی یادگیری
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DetailsBox
              icon={<FaBarcode />}
              title="فرانت اند"
              count="30 دوره"
            />
            <DetailsBox icon={<TiTick />} title="امنیت" count="9 دوره" />
            <DetailsBox icon={<FaPython />} title="پایتون" count="7 دوره" />
            <DetailsBox
              icon={<IoExtensionPuzzle />}
              title="مهارت های نرم"
              count="7 دوره"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 pb-8">
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 flex items-center justify-center transition">
              <FaArrowRight />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 flex items-center justify-center transition">
              <FaArrowLeft />
            </button>
          </div>
          <div className="text-right space-y-2">
            <p className="text-green-400 text-xl">پرطرفدار ترین دوره ها</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              دوره های محبوب و پروژه محور
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {course?.slice(0, 4).map((c) => (
            <CourseCard key={c.id} {...c} />
          ))}
        </div>
        <div className="py-16 px-4 md:px-16 bg-gray-900 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold text-right text-green-400 mb-6">
            با دوره‌های ما حرفه‌ای شوید
          </h1>

          <p className="text-right text-gray-300 leading-8 text-lg">
            اگر در ابتدای مسیر یادگیری برنامه‌نویسی قرار دارید یا بعد از چند سال
            فعالیت حرفه‌ای به‌عنوان برنامه‌نویس به‌دنبال فتح قله‌های جدید در این
            حوزه هستید، دوره‌های سبزلرن شما را به هدفتان می‌رسانند. در این
            آکادمی همه چیز برای یادگیری برنامه‌نویسی از صفر یا دریافت آموزش‌های
            تکمیلی برای تبدیل شدن به یک برنامه‌نویس کاربلد مهیا است. در سبزلرن
            دوره‌های آموزشی متنوع با کمترین هزینه و پشتیبانی مستمر آماده شده تا
            بدون نیاز به کتاب یا دوره دیگر، بتوانید صفر تا صد برنامه‌نویسی را
            یاد بگیرید. تجربه‌های دانشجویان قبلی نشان می‌دهد که سبک تدریس اساتید
            مجرب سبزلرن نه تنها آموزش‌های استاندارد را با پروژه‌های واقعی ترکیب
            می‌کند، بلکه به دانشجویان انگیزه و اعتمادبه‌نفس لازم برای ادامه مسیر
            برنامه‌نویسی را می‌دهد.
            {show && (
              <span className="block mt-4">
                سبزلرن با تمرکز بر آموزش‌های منطبق با نیازهای بازار کار ایران و
                استفاده از روش‌های تدریس بومی‌سازی‌شده، تضمین می‌کند که نه تنها
                مطالب به‌روز و حرفه‌ای را یاد بگیرید، بلکه با آمادگی کامل وارد
                بازار کار شوید.
                <ReadMore />
              </span>
            )}
          </p>

          <div className="text-center mt-6">
            <button
              onClick={() => setShow(!show)}
              className="px-6 py-2 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-gray-900 transition duration-300"
            >
              {show ? "بستن" : "ادامه مطلب"}
            </button>
          </div>
        </div>   
      </div>
    </div>
  );
}
