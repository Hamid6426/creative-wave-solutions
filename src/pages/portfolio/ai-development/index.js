import React from 'react'

export default function index() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Case Study: AI Development
          </h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>
                <strong>Objective:</strong> To create a clean and responsive
                business portfolio template using AI-driven components with
                Next.js.
              </li>
              <li>
                <strong>Technologies Used:</strong> Next.js, TensorFlow.js, and
                TailwindCSS.
              </li>
              <li>
                <strong>Target Audience:</strong> Small businesses and
                freelancers requiring a professional online presence.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Challenges</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>
                Ensuring AI-driven features were seamlessly integrated with
                static components.
              </li>
              <li>Maintaining optimal performance despite complex data processing.</li>
              <li>
                Crafting a modern design that aligns with various industries.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Solutions</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>
                Built reusable AI components for personalized user experiences,
                such as dynamic content recommendations.
              </li>
              <li>
                Optimized Next.js for server-side rendering and faster load
                times.
              </li>
              <li>
                Used TailwindCSS to design an elegant and professional user
                interface.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Impact</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>
                Reduced portfolio creation time by 30% for clients using the
                template.
              </li>
              <li>
                Increased web traffic by 50% for users due to optimized
                performance and SEO-friendly design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
