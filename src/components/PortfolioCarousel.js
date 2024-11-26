import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution for modern retail businesses.",
    image: "/images/ecommerce.jpg",
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "A complete brand design package for startups.",
    image: "/images/branding.jpg",
    link: "/portfolio/brand-identity",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "A sleek and intuitive app for managing finances.",
    image: "/images/mobile-app.jpg",
    link: "/portfolio/mobile-app",
  },
];

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Portfolio</h2>
        <div className="relative">
          {/* Current Project */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {projects[currentIndex].title}
            </h3>
            <p className="text-gray-600 mt-2">
              {projects[currentIndex].description}
            </p>
            <a
              href={projects[currentIndex].link}
              className="text-blue-600 mt-4 inline-block font-medium hover:underline"
            >
              View More →
            </a>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
