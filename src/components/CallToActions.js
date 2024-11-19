const CallToActions = () => {
    return (
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="mb-8">
            Get expert help for your project. Let&apos;s build something amazing
            together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/quote"
              className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200"
            >
              Request a Quote
            </a>
            <a
              href="/contact"
              className="bg-gray-200 text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-300"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToActions;
  