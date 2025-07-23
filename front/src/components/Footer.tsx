import logo from "../../public/svgexport-5.svg";
import letter from "../../public/svgexport-47.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white rtl py-10 px-6 text-right">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* لوگو و اطلاعات تماس */}
        <div className="flex flex-col md:w-1/3 gap-4">
          <div className="flex items-center gap-2 self-end">
            <h1 className="text-2xl font-semibold"> آموزشی </h1>
            <img src={logo} alt="logo" className="w-16 h-auto" />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex items-center gap-2">
              <span>@learning_support</span>
              <FaTelegramPlane className="text-blue-500 hover:text-blue-400 transition" />
            </div>
            <div className="flex items-center gap-2">
              <span>learning@info.com</span>
              <img src={letter} alt="letter" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-3xl md:text-4xl justify-end w-full md:w-auto">
          <FaTelegramPlane className="cursor-pointer hover:text-blue-500 transition" />
          <FaSquareInstagram className="cursor-pointer hover:text-pink-500 transition" />
          <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
       
        <div className="md:w-1/3 text-right">
          <h2 className="text-xl font-semibold mb-4">درباره سایت</h2>
          <p className="text-sm mb-2 leading-loose">
            شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و
            بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای
            برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت
            ببریم.
          </p>
          <span className="text-sm text-gray-400 block mt-2">
            کلیه حقوق مادی و معنوی سایت محفوظ است.
          </span>
        </div>

        <div className="md:w-1/3 text-right">
          <h2 className="text-xl font-semibold mb-4">دوره‌های پرطرفدار</h2>
          <ul className="space-y-2 text-sm">
            <li>آموزش پایتون</li>
            <li>دوره طراحی قالب حرفه‌ای</li>
            <li>مستر فریلنس</li>
            <li>آموزش BootStrap</li>
          </ul>
        </div>

        <div className="md:w-1/3 text-right">
          <h2 className="text-xl font-semibold mb-4">دسترسی سریع</h2>
          <ul className="space-y-2 text-sm">
            <li>قوانین و مقررات</li>
            <li>ارسال تیکت</li>
            <li>همه دوره‌ها</li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">ساخته شده با ❤️</p>
        </div>
      </div>
    </footer>
  );
}

