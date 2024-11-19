const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Effective Digital Marketing",
      image: "/images/blog1.jpg",
      link: "/blog/digital-marketing-tips",
    },
    {
      id: 2,
      title: "Why Branding Matters for Startups",
      image: "/images/blog2.jpg",
      link: "/blog/branding-matters",
    },
    {
      id: 3,
      title: "The Future of Web Development in 2024",
      image: "/images/blog3.jpg",
      link: "/blog/web-development-future",
    },
  ];
  
  const BlogTeaser = () => {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            From Our Blog
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <a
                    href={post.link}
                    className="text-blue-600 mt-4 inline-block font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogTeaser;
  