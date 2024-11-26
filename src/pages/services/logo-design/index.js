import React from "react";
import Link from "next/link";

const LogoDesign = () => {
  return (
    <section>
      <header className="bg-purple-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Logo Design</h1>
          <p className="mt-4 text-xl">
            Memorable logos tailored to your brand identity.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <p className="mb-6">
          A great logo is the foundation of your brand. We design logos that are
          versatile, visually striking, and aligned with your goals.
        </p>
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>
        <ul className="list-disc ml-8 mb-6">
          <li>Consultation: Understanding your preferences and needs.</li>
          <li>Design: Creating initial concepts tailored to your vision.</li>
          <li>Finalization: Refining and delivering the perfect logo.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">
          Let&apos;s design something iconic.
          <Link href="/contact" className="text-green-600">
            Contact us
          </Link>
          today to get started.
        </p>
      </main>
    </section>
  );
};

export default LogoDesign;
