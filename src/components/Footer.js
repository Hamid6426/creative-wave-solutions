import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-gray-100 py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Quick Links */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-5">
            <li>
              <Link href="/about" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Our Portfolio</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Blogs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <Link href="/services/web-development" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Web Development</Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/services/branding-design" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Branding & Design</Link>
            </li>
            <li>
              <Link href="/services/ai-development" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">AI Development</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <Link href="/privacy-policy" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Terms of Service</Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Partners</Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-center border-gray-300 pt-8 mt-8">
        <p className="text-gray-600 text-[15px]">
          © 2024 CreativeWave Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
