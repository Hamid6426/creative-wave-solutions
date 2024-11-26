import React from "react";
import Link from "next/link";

const DigitalMarketing = () => {
  return (
    <section>
      <header className="bg-red-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Digital Marketing</h1>
          <p className="mt-4 text-xl">
            Boost your online presence with targeted strategies.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <p className="mb-6">
          Our team crafts tailored digital marketing campaigns that increase
          visibility, engage your audience, and drive conversions.
        </p>
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>
        <ul className="list-disc ml-8 mb-6">
          <li>Research: Identifying your target audience.</li>
          <li>Strategy: Developing a plan with measurable goals.</li>
          <li>Execution: Implementing campaigns across channels.</li>
          <li>Analysis: Monitoring and optimizing for success.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">
          Ready to grow your business?
          <Link href="/contact" className="text-red-600">
            Contact us
          </Link>
          to discuss your needs.
        </p>
      </main>
    </section>
  );
};

export default DigitalMarketing;
