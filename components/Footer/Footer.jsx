import React from "react";
import Image from "next/image";
import instagram from "../../public/instagram.png";
import correo from "../../public/correo.png";
import facebook1 from "../../public/facebook1.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "linear-gradient(to right, #b9debd, #61c96a, #38933f, #083b17)",
      }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto flex flex-col items-center">
        

      <h1 className="font-epical-glory font-bold text-3xl text-white- " style={{
    textShadow: '5px 1.6px 2px rgba(0, 0, 0, 0.9)', // Ajusta los valores según tus preferencias
    lineHeight: '1.6', // Ajusta el espacio entre líneas
  }}>
   Arts By Eve</h1>
        <div className="flex justify-center items-center">
          <div className="mr-4 mb-2">
            <a
              href="https://instagram.com/schelleve.art?igshid=MXNoOWU2Y3AxMTkzZQ=="
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <Image src={instagram} width={30} height={10} alt="Instagram" />
            </a>
          </div>
          <div className="mr-4 mb-2">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <Image src={facebook1} width={30} height={10} alt="Facebook" />
            </a>
          </div>
          <div className="mr-4 mb-2">
            <a
              href="mailto:artbyeves@gmail.com"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <Image src={correo} width={30} height={10} alt="Correo" />
            </a>
          </div>
        </div>
        <p className="text-xs">© 2023 ArtsByEve</p>
      </div>
    </footer>
  );
}

export default Footer;
