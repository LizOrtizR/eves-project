import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quotes = [
  {
    text: "Nature like this can sometimes awaken in a mind things that would otherwise never have woken.",
    author: "Vincent Van Gogh",
  },
  {
    text: "I'd rather paint people's eyes than cathedrals, for there's something in the eyes that isn't in the cathedral—although it's solemn and impressive—to my mind, the soul of a person... is more interesting.",
    author: "Vincent Van Gogh",
  },
  {
    text: "Life is not happening to you. Life is responding to you.",
    author: "Randy Croft",
  },
];

const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 mb-8">
      <div className="rounded-full p-6 bg-gradient-to-r from-green-500 via-green-600 to-green-900">
        <Slider {...settings} className="max-w-3xl mx-auto">
          {quotes.map((quote, index) => (
            <div key={index} className="text-center">
              <p className="text-lg md:text-xl lg:text-1xl xl:text-3xl text-white">{quote.text}</p>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-white">- {quote.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Quote;
