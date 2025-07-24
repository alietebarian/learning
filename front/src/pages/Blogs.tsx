import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Link } from "react-router-dom";

interface BlogProps {
    id: string
  name: string;
  title: string;
  description: string;
  image: string
}


const fetchBlogs = async (): Promise<BlogProps[]> => {
    const res = await axios.get("http://localhost:5215/api/Blog");

    return res.data
}

export default function Blogs() {

    const { data: blog, isLoading, isError, error } = useQuery<BlogProps[]>({
        queryKey: ['blogs'],
        queryFn: fetchBlogs
    })
    
    if (isLoading)
      return (
        <div className="text-center py-20 text-gray-600 text-lg">
          در حال بارگذاری...
        </div>
      );

    if (isError)
      return (
        <div className="text-center py-20 text-red-500">
          خطا در دریافت اطلاعات: {(error as Error).message}
        </div>
      );
 
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        مقالات وبلاگ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog?.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
                >
                  ادامه مطلب →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
