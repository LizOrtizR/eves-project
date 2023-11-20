import React from 'react';
import Image from "next/image";
import image1 from "../../public/gallery/image1.jpeg";

const Contact = () => {
  return (
    <div className="bg-gray-300">
    <div className="max-w-screen-xl mx-auto px-4 py-12 text-center bg">
      <div className="mb-6 relative">
        <Image
          src={image1}
          alt="Stay in touch"
          className="mx-auto mb-3 object-cover rounded-lg"
          style={{ width: '900px', height: '193px', 
              filter: "brightness(60%)",
            }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h2 className="text-3xl font-bold font-epical-glory mb-3">Let's talk</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 mb-6 md:mb-0">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex-1">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          style={{
            backgroundImage: "linear-gradient(to right,#b9debd, #61c96a, #38933f, #083b17)",
          }}
          className="bg-green-500 text-white px-6 py-3 rounded-full font-bold"
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
