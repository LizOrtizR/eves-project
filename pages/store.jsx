import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Store = () => {
  return (
    <section className="bg-gradient-to-r from-green-300 via-green-800 to-green-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Explore My Art Collection
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Each painting tells a unique story. Bring one into your life today.
        </p>
        <button className="bg-white text-gray-800 py-2 px-6 rounded-full font-semibold text-lg flex items-center justify-center">
          <FaShoppingCart className="mr-2" />
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Store;
