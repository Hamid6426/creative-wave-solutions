import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: "1",
    title: "Understanding React Lifecycle",
    author: "Hamid",
    href: "learn-about-the-react-component-lifecycle-in-this-detailed-guide",
    date: "Nov 20, 2024",
    description: "Learn about the React component lifecycle in this detailed guide.",
  },
  {
    id: "2",
    title: "Getting Started with Tailwind CSS",
    author: "Hamid",
    href: "a-beginner-friendly-introduction-to-tailwind-css",
    date: "Nov 18, 2024",
    description: "A beginner-friendly introduction to Tailwind CSS.",
  },
  {
    id: "3",
    title: "Next.js Routing Basics",
    author: "Hamid",
    href: "an-overview-of-routing-in-next-js-with-dynamic-pages",
    date: "Nov 15, 2024",
    description: "An overview of routing in Next.js with dynamic pages.",
  },
  {
    id: "4",
    title: "Optimizing React Performance",
    author: "Hamid",
    href: "techniques-to-make-your-react-apps-faster-and-more-efficient",
    date: "Nov 10, 2024",
    description: "Techniques to make your React apps faster and more efficient.",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col items-center w-full p-8">
      <h1 className="text-4xl font-bold mb-6">Blog Page</h1>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="w-3/4 p-4 mb-6 bg-gray-100 shadow rounded flex flex-col"
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
          {/* Uploader info */}
          <div className="flex items-center mb-2">
            <Image
              src="/profile.png"
              alt="Uploader"
              width={96}
              height={96}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-600">
              {blog.author} - {blog.date}
            </span>
          </div>
          {/* Description */}
          <p className="text-gray-700 mb-4">{blog.description}</p>
          {/* Read more */}
          <Link href={`/blogs/${blog.href}`} className="text-blue-500 hover:underline font-medium">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
