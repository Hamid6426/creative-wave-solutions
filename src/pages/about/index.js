
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us | CreativeWave Solutions</title>
        <meta name="description" content="Learn more about CreativeWave Solutions, our mission, team, and services." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            About <span className="text-yellow-300">CreativeWave Solutions</span>
          </h1>
          <p className="text-lg lg:text-2xl">
            Designing Dreams, Building Realities. Discover how we shape the future of businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our vision is to become a global leader in creative and technological solutions, shaping the future of businesses worldwide.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800 mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Graphic Design", desc: "Logos, Branding, Marketing Materials, UI/UX." },
              { title: "Web Development", desc: "Custom websites, e-commerce, CMS." },
              { title: "Mobile App Development", desc: "iOS, Android, and cross-platform apps." },
              { title: "Digital Marketing", desc: "SEO, social media, content creation." },
              { title: "IT Consultancy", desc: "Cloud solutions, database design, and QA." },
              { title: "Emerging Tech", desc: "AI/ML, Blockchain, and AR/VR solutions." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "Project Manager" },
              { name: "Sophia Lee", role: "Lead Graphic Designer" },
              { name: "Michael Brown", role: "Full-Stack Developer" },
              { name: "Emily Davis", role: "Digital Marketing Expert" },
              { name: "Liam White", role: "IT Consultant" },
              { name: "Olivia Green", role: "Mobile App Developer" },
            ].map((member, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
                <div className="w-24 h-24 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-2xl text-indigo-600 font-bold">
                  {member.name[0]}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">
            Ready to bring your dreams to life? Contact us today!
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white hover:bg-gray-100 text-indigo-800 font-bold rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
