import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

type Course = {
  id: number;
  name: string;
  watchType: boolean;
  // بقیه فیلدهایی که لازم داری رو اضافه کن
};

const fetchData = async (): Promise<Course[]> => {
  const res = await axios.get("http://localhost:5215/api/Courses");
  return res.data;
};

export default function CanNotWatch() {
const { data: courses } = useQuery({
  queryKey: ['courses'],
  queryFn: fetchData
})

const filteredData = useMemo(() => {

  if(!courses)
    return []

  return courses?.filter(c => c.watchType === false)

}, [courses])

if (filteredData.length === 0) return <div>دوره‌ای برای نمایش وجود ندارد.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredData.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow p-4">
          <h2 className="font-bold text-lg">{course.name}</h2>
          <p className="text-gray-600">قابل تماشا: خیر</p>
        </div>
      ))}
    </div>
  );
}
