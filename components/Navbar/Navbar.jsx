
"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#800080");
  const [linkColor, setLinkColor] = useState("#eef4ee");
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setNav(false); 
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    // <div
    //   style={{ backgroundColor: `${navBg}` }}
    <div
      style={{
        backgroundImage: 'linear-gradient(to right,#b9debd, #61c96a, #38933f, #083b17)',
      }}
      className={
        shadow
          ? "w-full h-20 shadow-xl z-[100] ease-in-out duration-300" +
            (theme ? " dark" : "")
          : " w-full h-20 z-[100]" + (theme ? " dark" : "")
      }
    >
      <div className="flex justify-center items-center w-full h-full px-8 2xl:px-1">
    
    
   <div className='mr-auto'>

   <ul  className="hidden md:flex">
         
         <li className="ml-10 text-2xl  hover:border-b">
             
           <Link href="/">
           <h1 className="font-epical-glory text-3xl text-white- " style={{
    textShadow: '5px 1.6px 2px rgba(189, 179, 179, 0.9)', // Ajusta los valores según tus preferencias
    lineHeight: '1.6', // Ajusta el espacio entre líneas
  }}>
    Arts By Eve</h1>
             </Link>
         </li>
         </ul>
        </div>
    
    
        <div>
        
              
              
        
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
         
            <li className="ml-10 text-sm uppercase hover:border-b">
                
              <Link href="/">
                <strong> Home
                    </strong>
                </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">
                <strong>About Me
                    </strong>
                </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/gallery">
                <strong>Gallery
                    </strong>
                </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">
                <strong>Projects</strong>
                </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/contact">
                <strong>Contact</strong>
                </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500 text-white"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4  text-white">
              <p className="w-[85%] md:w-[90%] py-4"></p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(true)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-white">
                  About Me
                </li>
              </Link>
              <Link href="/#gallery">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Gallery
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/elizabeth-ortiz-rivas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-[1rem] shadow-lg  shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {/* <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={link} width="30" height="10px" alt="/" />
                    </motion.div> */}
                  </div>
                </a>
                <a
                  href="https://github.com/LizOrtizR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {/* <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={git} width="30" height="10px" alt="/" />
                    </motion.div> */}
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    {/* <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={gmail} width="30" height="10px" alt="/" />
                    </motion.div> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
