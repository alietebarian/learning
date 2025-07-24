import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface BlogProps {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

const fetchBlog = async (id: string): Promise<BlogProps> => {
  const res = await axios.get(`http://localhost:5215/api/Blog/${id}`);
  return res.data;
};

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery<BlogProps>({
    queryKey: ["blog", id],
    queryFn: () => fetchBlog(id!),
    enabled: !!id,
  });

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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link
          to="/blogs"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← بازگشت به لیست مقالات
        </Link>
      </div>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {blog?.title}
          </h1>
          <h2 className="text-md text-gray-500 mb-6">نویسنده: {blog?.name}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {blog?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
