import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

const Gallery = () => {
  const slides = [
    '/gallery/image25.jpeg',
    '/gallery/image2.jpeg',
    '/gallery/image3.jpeg',
    '/gallery/image4.jpeg',
    '/gallery/image5.jpeg',
    '/gallery/image6.jpeg',
    '/gallery/image7.jpeg',
    '/gallery/image8.jpeg',
    '/gallery/image9.jpeg',
    '/gallery/image10.jpeg',
    '/gallery/image11.jpeg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-white">

    
    <div className='max-w-[1200px] h-[800px] w-full m-auto py-14 px-4 relative group mb-10 '>
   <h1 className="text-3xl font-bold mb-8 text-center font-epical-glory">Art Gallery</h1>

      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex}`}
          layout='fill'
          objectFit='cover'
        />
        {currentIndex === slides.length - 1 && (
          <button className="absolute bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full font-bold">
            See More
          </button>
        )}
      </div>
      <div className='hidden group-hover:block absolute top-[50%] transform -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <BsChevronCompactLeft onClick={prevSlide} size={30} />
</div>
<div className='hidden group-hover:block absolute top-[50%] transform -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
  <BsChevronCompactRight onClick={nextSlide} size={30} />
</div>
      <div className='flex top-4 justify-center py-2 space-x-1'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-black' : 'text-gray-400'} mx-0`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Gallery;
