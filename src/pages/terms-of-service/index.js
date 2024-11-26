import React from 'react'

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Effective Date: <span className="font-medium">[Insert Date]</span>
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By engaging with CreativeWave Solutions, either through our
              website or directly contracting our services, you agree to these
              Terms of Service. If you do not agree to these terms, please
              refrain from using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Services Offered
            </h2>
            <p className="text-gray-600">
              CreativeWave Solutions provides a wide range of creative and
              technological services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Graphic Design</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
              <li>IT Consultancy</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Eligibility
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                You are responsible for providing accurate and complete
                information during the onboarding process.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-gray-600">
              When you engage with CreativeWave Solutions, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                Provide all necessary information and materials required for
                your project.
              </li>
              <li>
                Respond promptly to communications to ensure project timelines
                are met.
              </li>
              <li>
                Use the services provided by CreativeWave Solutions in
                compliance with all applicable laws.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All designs, code, and content created by CreativeWave Solutions
              remain our intellectual property until full payment has been
              received. Upon receipt of payment, intellectual property rights
              will transfer to the client, except for any third-party assets or
              tools used in the project, which remain the property of their
              respective owners.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Payment Terms
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                Payment must be made as per the agreed-upon terms in your
                project proposal.
              </li>
              <li>
                Accepted payment methods include PayPal, Stripe, and Bank
                Transfer. Cryptocurrency payments may be available upon request.
              </li>
              <li>
                Failure to make timely payments may result in project delays or
                termination of services.
              </li>
            </ul>
          </section>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              If you have any questions, contact us at:
            </p>
            <p className="text-blue-600 font-medium">
              <a href="mailto:contact@creativewave.com">contact@creativewave.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
