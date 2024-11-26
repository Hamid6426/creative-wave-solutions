import React from 'react'

export default function index() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Case Study: Mobile App Development
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              <strong>Objective:</strong> To develop a sleek and intuitive
              mobile app for personal finance management.
            </li>
            <li>
              <strong>Technologies Used:</strong> React Native, Firebase, and
              Expo.
            </li>
            <li>
              <strong>Target Audience:</strong> Individuals looking to track
              and optimize their finances.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Challenges</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              Creating an intuitive user experience for financial data input
              and visualization.
            </li>
            <li>Ensuring robust security for sensitive user data.</li>
            <li>
              Maintaining cross-platform compatibility for iOS and Android.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">Solutions</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              Designed a user-centric interface with easy navigation and
              real-time data visualization.
            </li>
            <li>Implemented end-to-end encryption for data protection.</li>
            <li>
              Leveraged React Native for seamless cross-platform
              functionality.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Impact</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>
              Helped users save an average of 20% on their monthly expenses
              through effective tracking and insights.
            </li>
            <li>
              Achieved a 4.8-star rating on app stores within the first three
              months of launch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
