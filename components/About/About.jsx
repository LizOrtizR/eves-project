import React from "react";
import Image from "next/image";
import aboutPhoto from "../../public/aboutPhoto.jpeg";
import instagram from "../../public/instagram.png";
import correo from "../../public/correo.png";
import facebook1 from "../../public/facebook1.png";
import { motion } from 'framer-motion';
export default function About() {
  return (
    
    <div>
      <div className="flex flex-col items-center py-12 bg-gray-300">
        <h2 className="text-3xl font-bold mb-6 font-epical-glory">About Me</h2>
        
        <div className="max-w-lg">
          <Image
            src={aboutPhoto}
            alt="About Photo"
            className="rounded-full w-40 h-40 mx-auto mb-6"
          />
          <h1 className="text-2xl text-center font-epical-glory">Eve Schell</h1>
          <p className="text-xs text-center mb-5">Artist</p>
          <div className="flex mb-4 justify-center items-center ">
            <div className="mr-4 ">
              <a
                href="https://instagram.com/schelleve.art?igshid=MXNoOWU2Y3AxMTkzZQ=="
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300 mb-4">
                <Image src={instagram} width="30" height="10px" alt="/" />
              </a>
            </div>
            <div className="mr-4">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300">
                <Image src={facebook1} width="30" height="10px" alt="/" />
              </a>
            </div>
            <div>
              <a
                href="mailto:artbyeves@gmail.com"
                className="text-white hover:text-gray-400 transition-colors duration-300">
                <Image src={correo} width="30" height="10px" alt="/" />
              </a>
            </div>
          </div>

          <p className="text-lg text-center mb-4">
          When you see my paintings they are in a conversation with you.  You will see them peeking back at you in some paintings. The work is guided by Spirit deciding what will be created on the canvas. These are moments shared with you that have moved my heart. 
Colors, dimensions, a feeling  that wants to be painted. 
Why do I paint….because the magic calls..
          </p>
          <div className="flex justify-center">
  <div className="flex flex-col md:flex-row gap-4">
  <motion.a
          href="/about"
          style={{
            backgroundImage:
              "linear-gradient(to right,#b9debd, #61c96a, #19381b)",
          }}
          whileHover={{ scale: 1.1 }} // Ejemplo de animación al pasar el ratón
          className="bg-green-500 text-black px-3 py-3 rounded-full font-bold flex items-center justify-center md:w-48">
          More About Me 
        </motion.a>
        <motion.a
          href="/#contact"
          style={{
            backgroundImage:
              "linear-gradient(to right,#b9debd, #61c96a, #38933f, #083b17)",
          }}
          whileHover={{ scale: 1.1 }} // Ejemplo de animación al pasar el ratón
          className="bg-green-500 text-black px-3 py-3 rounded-full font-bold flex items-center justify-center md:w-48">
          Contact to Me
        </motion.a>
  </div>
</div>

          
        </div>
      </div>
    </div>
  );
}

