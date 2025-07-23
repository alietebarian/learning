import React from "react";

type CourseCardProps = {
  image: string;
  title: string;
  description: string;
  name: string;
  teacherName: string;
  rating: number;
  price: number;
};

export default function CourseCard({
  image,
  title,
  description,
  teacherName,
  rating,
  price,
}: CourseCardProps) {
  return (
    <div className="bg-gray-300 cursor-pointer rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-11">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description.slice(0, 60)}...</p>
        <div className="text-xs text-gray-500">مدرس: {teacherName}</div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm font-bold text-blue-600">
            {price.toLocaleString()} تومان
          </span>
          <span className="text-yellow-500 text-sm">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
}
