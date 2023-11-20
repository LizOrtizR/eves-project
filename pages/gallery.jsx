import React, { useState } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: "/gallery/image1.jpeg", // Ruta de la imagen
      price: "$10",
    },
    {
      id: 2,
      src: "/gallery/image2.jpeg",
      price: "$15",
    },
    {
        id: 3,
        src: "/gallery/image3.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 5,
        src: "/gallery/image5.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 6,
        src: "/gallery/image6.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 4,
        src: "/gallery/image4.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 8,
        src: "/gallery/image8.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 9,
        src: "/gallery/image9.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 10,
        src: "/gallery/image10.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 11,
        src: "/gallery/image11.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 12,
        src: "/gallery/image12.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 13,
        src: "/gallery/image13.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 14,
        src: "/gallery/image14.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 15,
        src: "/gallery/image15.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 16,
        src: "/gallery/image16.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 1,
        src: "/gallery/image1.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 18,
        src: "/gallery/image18.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 19,
        src: "/gallery/image19.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 20,
        src: "/gallery/image20.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 21,
        src: "/gallery/image21.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 22,
        src: "/gallery/image22.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 23,
        src: "/gallery/image23.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 24,
        src: "/gallery/image24.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 25,
        src: "/gallery/image25.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 26,
        src: "/gallery/image26.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 26,
        src: "/gallery/image26.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 2,
        src: "/gallery/image2.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 28,
        src: "/gallery/image28.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 29,
        src: "/gallery/image29.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 30,
        src: "/gallery/image30.jpeg", // Ruta de la imagen
        price: "$10",
      },
      {
        id: 31,
        src: "/gallery/image31.jpeg", // Ruta de la imagen
        price: "$10",
      },
    // Agrega más imágenes según sea necesario
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center mt-8 max-w-screen-lg mx-auto px-4">
      <div className="flex flex-wrap justify-center max-w-5xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/4 p-4 text-center"
            style={{ minWidth: "150px" }}
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-full h-auto mx-auto mb-4"
              style={{ maxWidth: "100%" }} 
            />
            <div className="flex justify-between items-center mb-2">
              <span>{image.price}</span>
              <button className="bg-blue-500 text-white px-2 py-1 rounded-full">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white px-2 py-1 rounded-full mr-4"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-2 py-1 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;