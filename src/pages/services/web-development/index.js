import React from "react";
import Link from "next/link";

const WebDevelopment = () => {
  return (
    <section>
      <header className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Web Development</h1>
          <p className="mt-4 text-xl">
            Modern, scalable solutions for your business needs.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <p className="mb-6">
          We build responsive, SEO-friendly websites tailored to your unique
          needs. Whether it&apos;s an e-commerce platform or a personal
          portfolio, we deliver quality solutions.
        </p>
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>
        <ul className="list-disc ml-8 mb-6">
          <li>Discovery: Understand your goals and audience.</li>
          <li>Design: Create visually appealing and user-friendly layouts.</li>
          <li>Development: Code using the latest technologies.</li>
          <li>Launch: Deploy and ensure smooth operation.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">
          Have a project in mind?
          <Link href="/contact" className="text-blue-600">
            Contact us
          </Link>
          today.
        </p>
      </main>
    </section>
  );
};

export default WebDevelopment;
