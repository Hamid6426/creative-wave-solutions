import React from 'react'

export default function index() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Case Study: E-commerce Platform
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              <strong>Objective:</strong> To create a modern e-commerce
              platform for businesses to sell their products online
              effectively.
            </li>
            <li>
              <strong>Technologies Used:</strong> React, Node.js, MongoDB, and
              TailwindCSS.
            </li>
            <li>
              <strong>Target Audience:</strong> Retail businesses and
              individual sellers seeking to digitize their sales process.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Challenges</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>Designing a responsive and user-friendly interface.</li>
            <li>Implementing secure payment gateways.</li>
            <li>
              Optimizing product search and filter functionality for speed and
              accuracy.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Solutions</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              Developed a modular frontend using React for a seamless user
              experience.
            </li>
            <li>
              Integrated Stripe and PayPal for secure payment processing.
            </li>
            <li>
              Used MongoDB&apos;s flexible schema to manage product data
              effectively.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Impact</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              Delivered a fully functional platform that increased user
              engagement by 40%.
            </li>
            <li>
              Improved customer conversion rates by 25% through intuitive
              design and performance optimization.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}