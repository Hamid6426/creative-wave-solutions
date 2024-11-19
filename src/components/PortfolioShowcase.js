import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution for modern retail businesses.",
    image: "/e-commerce.png",
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "A complete brand design package for startups.",
    image: "/e-commerce.png",
    link: "/portfolio/brand-identity",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "A sleek and intuitive app for managing finances.",
    image: "/e-commerce.png",
    link: "/portfolio/mobile-app",
  },
];

const PortfolioShowcase = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Portfolio
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1024}
                height={597}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 mt-4 inline-block font-medium hover:underline"
                >
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
