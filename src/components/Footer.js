import React from 'react';

export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-gray-100 py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-5">
            <li>
              <a href="/about-us" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">About Us</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Blog</a>
            </li>
            <li>
              <a href="/careers" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Careers</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <a href="/services/web-development" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Web Development</a>
            </li>
            <li>
              <a href="/services/digital-marketing" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Digital Marketing</a>
            </li>
            <li>
              <a href="/services/branding" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Branding</a>
            </li>
            <li>
              <a href="/services/ui-ux" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">UI/UX Design</a>
            </li>
          </ul>
        </div>

        {/* Platforms */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Platforms</h4>
          <ul className="space-y-5">
            <li>
              <a href="/platforms/hubspot" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Hubspot</a>
            </li>
            <li>
              <a href="/platforms/marketing-tools" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Marketing Tools</a>
            </li>
            <li>
              <a href="/platforms/automation-tools" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Automation Tools</a>
            </li>
            <li>
              <a href="/platforms/analytics" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Analytics</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-green-600 font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <a href="/privacy-policy" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">Contact</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-green-600 text-gray-700 text-[15px] transition-all">FAQs</a>
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
