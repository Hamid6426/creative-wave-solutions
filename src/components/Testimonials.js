import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, ExampleCorp",
    image: "/john.png",
    feedback: "CreativeWave transformed our online presence. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Founder, Startup Inc.",
    image: "/jane.jpg",
    feedback: "Exceptional service and great results. Our brand looks amazing now!",
  },
  {
    id: 3,
    name: "Alex Brown",
    role: "Marketing Head, BrandCo",
    image: "/alex.png",
    feedback: "Their team is professional and incredibly skilled. Amazing experience!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto p-6 shadow-md rounded-lg bg-gray-100 text-center">
          {/* Current Testimonial */}
          <Image
            src={testimonials[currentIndex].image}
            width={96}
            height={96}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <p className="italic text-gray-600">
            &quot;{testimonials[currentIndex].feedback}&quot;
          </p>
          <h4 className="mt-4 font-semibold text-gray-800">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-400 font-bold text-white"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-400 font-bold text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
