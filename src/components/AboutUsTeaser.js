import Link from "next/link";
import Image from "next/image";

const AboutUsTeaser = () => {
    return (
      <section className="bg-gray-200 py-12 mb-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About CreativeWave Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              At CreativeWave, we empower businesses with cutting-edge digital
              solutions. Our passionate team specializes in web development,
              branding, and marketing to help you achieve your goals.
            </p>
            <Link
              href="/about"
              className="text-blue-600 font-medium hover:underline"
            >
              Learn More About Us →
            </Link>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/about-us.png"
              alt="CreativeWave Team"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsTeaser;
  