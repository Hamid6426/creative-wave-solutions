const ContactInfo = () => {
    return (
      <section className="bg-gray-900 text-white py-12 my-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Contact Details */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="text-lg font-medium">Phone: +123 456 7890</p>
              <p className="text-lg font-medium">Email: info@creativewave.com</p>
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            {/* Get in Touch Button */}
            <div>
              <a
                href="/contact"
                className="bg-blue-600 px-6 py-3 rounded font-semibold text-white hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactInfo;
  