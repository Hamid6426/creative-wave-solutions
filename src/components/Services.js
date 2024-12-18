import { FaCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: <FaCode size={40} className="text-blue-500" />,
    title: "Web Development",
    description: "Build modern, responsive, and scalable websites.",
    link: "/services/web-development",
  },
  {
    id: 2,
    icon: <FaPaintBrush size={40} className="text-green-500" />,
    title: "Branding & Design",
    description: "Craft unique brand identities and visuals.",
    link: "/services/branding-design",
  },
  {
    id: 3,
    icon: <FaBullhorn size={40} className="text-red-500" />,
    title: "Digital Marketing",
    description: "Expand your online reach with targeted strategies.",
    link: "/services/digital-marketing",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="bg-gray-100 pb-12 pt-12">
      <div className="container mx-auto px-6 text-center py-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-500 mt-2 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Learn More →
              </a>
            </div>
          ))}
          <div></div>
          <Link
            href="/services"
            className="bg-green-600 hover:bg-green-400 font-bold text-white py-3 text-lg rounded-lg"
          >
            Check Full Catalogue
          </Link>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
