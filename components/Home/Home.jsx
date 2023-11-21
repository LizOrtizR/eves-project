"use client";
import Image from "next/image";
import home from "../../public/home.jpeg";
import { motion } from "framer-motion";


export default function Home() {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 1,
            staggerChildren: 0.4, // Ajusta el intervalo entre cada letra
          },
        },
      };
    
      const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
        },
      };
    
      const text = "Welcome";
  return (
    <div>
      <div className="w-screen h-[640px] relative flex flex-col items-center justify-center">
        <Image
          src={home}
          alt="Imagen de ejemplo"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center">
          <p
            className="text-2xl"
            style={{
              textShadow: "4px 1.6px 3px rgba(0, 0, 0, 0.9)", // Ajusta los valores según tus preferencias
              lineHeight: "1.4", // Ajusta el espacio entre líneas
            }}>
            <motion.h1
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="font-epical-glory text-6xl text-white"
      style={{
        textShadow: "5px 1.6px 2px rgba(0, 0, 0, 0.9)",
        lineHeight: "1.6",
      }}
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
            My art is a metamorphosis of gathered inspiration from the artists
            who painted in caves 30,000 years ago through today. My spirit
            paints so that you too may see and join in…
          </p>

          <div className="mt-6">
            <motion.button
  className="bg-white bg-opacity-80 text-black rounded-2xl font-bold py-2 px-4 text-xl transform transition-all hover:scale-105 hover:bg-opacity-30 hover:shadow-xl"
  whileHover={{ scale: 1.05 }} // Aumenta el tamaño al hacer hover
  whileTap={{ scale: 0.95 }} // Reduce el tamaño al hacer clic
>
  Learn More
</motion.button>

          </div>
        </div>
      </div>

      <div className="bg-[#e6cfbd]"></div>
    </div>
  );
}
