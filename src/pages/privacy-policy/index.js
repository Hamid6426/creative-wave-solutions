import Link from "next/link";

const PrivacyPolicy = () => {
    return (
      <div className="bg-gray-50 py-12 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Effective Date: <span className="font-medium">25-11-2024</span>
            </p>
  
            {/* Introduction Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600">
                At CreativeWave Solutions, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to safeguard it. By using our website or services, you consent to the practices described in this policy.
              </p>
            </section>
  
            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing information, etc.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to enhance your experience on our website and analyze traffic.</li>
              </ul>
            </section>
  
            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600">
                The information we collect is used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>To provide and manage our services.</li>
                <li>To improve our website, products, and services.</li>
                <li>To communicate with you regarding your account, service updates, and promotions.</li>
                <li>To process payments and manage billing information.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
  
            {/* How We Protect Your Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                3. How We Protect Your Information
              </h2>
              <p className="text-gray-600">
                We take reasonable measures to protect your personal information, including the use of encryption and secure servers. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.
              </p>
            </section>
  
            {/* Sharing Your Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with the following:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our business (e.g., payment processors, hosting services).</li>
                <li><strong>Legal Compliance:</strong> If required by law or to protect our rights, we may disclose your information to authorities.</li>
              </ul>
            </section>
  
            {/* Your Rights and Choices */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                5. Your Rights and Choices
              </h2>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request corrections to any inaccuracies in your personal data.</li>
                <li>Request deletion of your personal data under certain circumstances.</li>
                <li>Opt-out of marketing communications at any time.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise your rights, please contact us using the contact information provided below.
              </p>
            </section>
  
            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                6. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have inadvertently collected personal data from a child, we will take steps to delete it immediately.
              </p>
            </section>
  
            {/* Changes to This Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                7. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We reserve the right to update this Privacy Policy at any time. When we do, we will post the updated policy on our website and update the &quot;Effective Date&quot; at the top of this page. Your continued use of our services after such changes signifies your acceptance of the updated policy.
              </p>
            </section>
  
            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-blue-600 font-medium">
                <Link href="mailto:contact@creativewave.com">contact@creativewave.com</Link>
              </p>
              <p className="text-gray-600">Phone: +92-314-5711-577</p>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  