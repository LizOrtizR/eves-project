import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Have questions, collaborations, or just want to chat about art? Feel free to reach out!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="mailto:info@example.com"
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-white py-2 px-6 rounded-full font-semibold text-lg hover:from-purple-500 hover:to-pink-700 transition duration-300"
          >
            Email Me
          </a>
          <a
            href="https://www.instagram.com/yourartistprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-pink-600 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
