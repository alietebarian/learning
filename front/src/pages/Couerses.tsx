import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseCard from "../components/CourseCard";

type CourseProps = {
  id: number
  image: string;
  title: string;
  description: string;
  name: string;
  teacherName: string;
  rating: number;
  price: number;
};

const fetchCourses = async () => {
  const res = await axios.get("http://localhost:5215/api/Courses");
  return res.data;
};

export default function Courses() {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  if (isLoading)
    return <div className="text-center text-blue-400 text-3xl">Loading...</div>;

  if (isError)
    return (
      <div className="text-center text-red-500 text-3xl">
        Error: {String(error)}
      </div>
    );

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
