"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import NavLogo from "../../public/Navlogo2.png";
import gmail from "../../public/gmail.png";
import instagram from "../../public/instagram.png";
import { motion } from "framer-motion";
import facebook from "../../public/facebook1.png";
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
        backgroundImage:
          "linear-gradient(to right,#b9debd, #61c96a, #38933f, #083b17)",
        zIndex: "",
        position: "relative",
      }}
      className={
        shadow
          ? "w-full h-20 shadow-xl z-[100] ease-in-out duration-300" +
            (theme ? " dark" : "")
          : " w-full h-20 z-[100]" + (theme ? " dark" : "")
      }>
      <div className="flex justify-center items-center w-full h-full px-8 2xl:px-1">
        <Link href="/">
          <div>
            <Image src={NavLogo} width="107" height="55" alt="/" />
          </div>
        </Link>
        <div className="mr-auto">
          <ul className=" md:flex">
            <li className="ml-10 text-2xl  hover:border-b"></li>
          </ul>
        </div>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">
                <strong> Home</strong>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">
                <strong>About Me</strong>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/gallery">
                <strong>Gallery</strong>
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
            className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 text-black  z-60"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer bg-slate-100">
                <AiOutlineClose />
              </div>
              <div className="ml-4 mt-4">
            <Image src={NavLogo} width="107" height="55" alt="/" />
          </div>
            </div>
            <div className="border-b border-gray-800 my-4  text-black">
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
              <Link href="/about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-black">
                  About Me
                </li>
              </Link>
              <Link href="/gallery">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Gallery
                </li>
              </Link>
              <Link href="/store">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Store
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#161716]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-[1rem] shadow-lg  shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={facebook} width="35" height="11px" alt="/" />
                    </motion.div>
                  </div>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={instagram} width="35" height="11px" alt="/" />
                    </motion.div>
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <motion.div whileHover={{ scale: 1.6 }}>
                      <Image src={gmail} width="35" height="11px" alt="/" />
                    </motion.div>
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
