import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CourseContext";

type CourseDetails = {
  id: number;
  image: string;
  title: string;
  description: string;
  name: string;
  teacherName: string;
  rating: number;
  price: number;
};

const fetchCourse = async (id: string): Promise<CourseDetails> => {
  const res = await axios.get(`http://localhost:5215/api/Courses/${id}`);
  return res.data;
};

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const {
    data: course,
    isLoading,
    isError,
    error,
  } = useQuery<CourseDetails>({
    queryKey: ["course", id],
    queryFn: () => fetchCourse(id!),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="text-center py-10 text-lg text-gray-600">
        در حال بارگذاری...
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 py-10 text-lg">
        خطا: {(error as Error).message}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-xl overflow-hidden">
        <img
          src={course?.image}
          alt={course?.title}
          className="w-full h-96 object-cover md:h-auto"
        />
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-blue-800">
              {course?.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {course?.description}
            </p>

            <div className="mb-4 text-gray-700 text-sm">
              <span className="font-semibold">مدرس:</span> {course?.teacherName}
            </div>
            <div className="text-yellow-500 text-sm mb-6">
              ⭐ امتیاز: {course?.rating}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <span className="text-3xl font-bold text-blue-600">
              {course?.price.toLocaleString()} تومان
            </span>
            <button
              onClick={() => addToCart(course)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg"
            >
              ثبت‌نام در دوره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
