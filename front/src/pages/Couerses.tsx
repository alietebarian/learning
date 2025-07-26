import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

type CourseProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  name: string;
  teacherName: string;
  rating: number;
  price: number;
};

const fetchCourses = async ()=> {
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

    const [ searchParams ] = useSearchParams()
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";

    const filteredCourses = useMemo(() => {
      if(!courses) return []
      if(!searchTerm) return courses

      return courses.filter(
        (course: CourseProps) => 
          course?.title?.toLowerCase().includes(searchTerm) ||
           course?.description?.toLowerCase().includes(searchTerm) ||
             course?.teacherName?.toLowerCase().includes(searchTerm)
      )
    }, [courses, searchTerm])

    
  if (isLoading)
    return <div className="text-center text-blue-400 text-3xl">Loading...</div>;

  if (isError)
    return (
      <div className="text-center text-red-500 text-3xl">
        Error: {String(error)}
      </div>
    );    

  if (filteredCourses.length === 0) return <div>Emoty</div>;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses?.length === 0 && (
        <div className="col-span-full text-center text-gray-500 text-xl">
          هیچ دوره‌ای مطابق با جستجوی شما یافت نشد.
        </div>
      )}
      {filteredCourses?.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
