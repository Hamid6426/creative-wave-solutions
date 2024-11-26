import React from "react";
import Link from "next/link";

const MobileAppDevelopment = () => {
  return (
    <section>
      <header className="bg-sky-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Mobile App Development</h1>
          <p className="mt-4 text-xl">
            Creating user-friendly apps for all platforms.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <p className="mb-6">
          From concept to deployment, we build mobile apps that are fast,
          reliable, and visually appealing, enhancing user experiences on
          Android and iOS.
        </p>
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>
        <ul className="list-disc ml-8 mb-6">
          <li>Planning: Understanding user needs and defining app goals.</li>
          <li>Design: Crafting intuitive interfaces and experiences.</li>
          <li>Development: Using cutting-edge technology to build your app.</li>
          <li>Launch & Maintenance: Deployment and ongoing support.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">
          Let&apos;s bring your app idea to life.
          <Link href="/contact" className="text-blue-600">
            Contact us
          </Link>
          to get started.
        </p>
      </main>
    </section>
  );
};

export default MobileAppDevelopment;
