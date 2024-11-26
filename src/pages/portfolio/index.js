import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/e-commerce.png",
    description: "A modern e-commerce platform built with React and Node.js.",
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: 2,
    title: "Brand Identity for Startups",
    image: "/branding.png",
    description: "Designed a cohesive branding strategy for startups.",
    link: "/portfolio/brand-identity",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "A sleek and intuitive app for managing finances.",
    image: "/app-dev.png",
    link: "/portfolio/mobile-app",
  },
  {
    id: 4,
    title: "AI Development",
    image: "/tech.png",
    description: "A clean and responsive portfolio template using Next.js.",
    link: "/portfolio/ai-development",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-white py-12 mx-auto px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Portfolio
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#eee] border border-[#bbb] rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={360}
              height={360}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link
                href={project.link}
                rel="noopener noreferrer"
                className="text-blue-600 mt-4 inline-block font-medium hover:underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;