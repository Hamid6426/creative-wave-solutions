import React from "react";
import Link from "next/link";

const BrandingDesign = () => {
  return (
    <section>
      <header className="bg-green-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Branding & Design</h1>
          <p className="mt-4 text-xl">
            Crafting unique identities that leave a lasting impression.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <p className="mb-6">
          We help build brands that stand out. From logos to full branding
          guides, we ensure your visual identity reflects your values and
          engages your audience.
        </p>
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>
        <ul className="list-disc ml-8 mb-6">
          <li>Discovery: Understanding your brand&apos;s essence.</li>
          <li>Design: Creating unique visuals and guidelines.</li>
          <li>Refinement: Iterating based on your feedback.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">
          Start building your brand today.
          <Link href="/contact" className="text-green-600">
            Contact us
          </Link>
          to get started.
        </p>
      </main>
    </section>
  );
};

export default BrandingDesign;
