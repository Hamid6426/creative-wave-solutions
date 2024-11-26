import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/postMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have questions or need assistance? Fill out the form below, and we&apos;ll get back to you promptly!
        </p>
        {formSubmitted ? (
          <div className="text-center bg-green-100 text-green-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
            <p>Your message has been sent successfully. We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form
            className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
