// components/BlogCard.tsx
interface BlogCardProps {
  title: string;
  image: string;
  description: string;
}

export default function BlogCard({ title, image, description }: BlogCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded-md mb-4"
      />
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
    </div>
  );
}
