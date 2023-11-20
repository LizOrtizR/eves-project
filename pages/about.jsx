import React, { useState } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import image1 from '../public/gallery/image15.jpeg';
import image2 from '../public/about/about1.jpeg';
import image3 from '../public/about/about2.jpeg';
import image4 from '../public/about/about3.jpeg';
import image5 from '../public/about/about4.jpeg';
import image6 from '../public/about/about5.jpeg';
import Quote from "../components/Quote/Quote"

const AboutMe = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div>

    
    <div className="flex flex-col md:flex-row justify-center items-center p-8">
      {/* Información a la izquierda */}
      <div className="max-w-md md:mr-8">
        <h2 className="text-3xl font-bold mb-4 font-epical-glory">More About Me</h2>
        <p className="text-lg mb-4">
          Welcome to Arts By Eve!
        </p>
        <p className="text-lg mb-4">
          I'm Eve Schell, a passionate artist on a journey to transform canvases into vibrant stories.
        </p>
        <p className="text-lg mb-4">
          My artistic journey is a tapestry woven with inspiration from the great artists who came before me, spanning from the cave painters of 30,000 years ago to the contemporary creators shaping today's art landscape.
        </p>
        <p className="text-lg mb-4">
          Every stroke of my brush is a celebration of this rich artistic heritage, an homage to the timeless beauty that transcends eras.
        </p>
        {/* Puedes agregar más información según sea necesario */}
      </div>

      {/* Carrusel de imágenes a la derecha */}
      <div className="relative">
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrevImage}
        >
          <BsChevronCompactLeft size={24} />
        </button>
        <div className="w-full h-96 md:w-72 md:h-auto md:rounded-md overflow-hidden">
          <Image
            src={images[currentImage]}
            alt={`Gallery Image ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNextImage}
        >
          <BsChevronCompactRight size={24} />
        </button>
     
      </div>
 
      </div>
      <Quote/>
    </div>
  );
};

export default AboutMe;
