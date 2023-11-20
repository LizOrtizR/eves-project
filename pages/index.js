import About from "../components/About/About"
import Gallery from "../components/Gallery/Gallery"
import Contact from "../components/Contact/Contact"
import Image from 'next/image';
import home from '../public/home.jpeg';
import Footer from '../components/Footer/Footer';
import Quote from '../components/Quote/Quote';

export default function Home() {
  return (
    <div>
    <div className="w-full h-screen relative flex flex-col items-center justify-center">
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
  <p className="text-3xl" style={{
    textShadow: '4px 1.6px 3px rgba(0, 0, 0, 0.9)', // Ajusta los valores según tus preferencias
    lineHeight: '1.6', // Ajusta el espacio entre líneas
  }}>
    <h1 className="font-epical-glory text-6xl text-white- " style={{
    textShadow: '5px 1.6px 2px rgba(0, 0, 0, 0.9)', // Ajusta los valores según tus preferencias
    lineHeight: '1.6', // Ajusta el espacio entre líneas
  }}>
    Welcome</h1>
    {/* <span className="font-epical-glory text-5xl text-green-900 m-1">M</span> */}
    My art is a metamorphosis of gathered inspiration from the artists who painted in caves 30,000 years ago through today. My spirit paints so that you too may see and join in…
  </p>






        <div className="mt-4">
          <button className="bg-green-500 text-black rounded-2xl font-bold py-2 px-4 text-xl">
            Learn More
          </button>
        </div>
      </div>
    
      </div>
       <Gallery />
      <About/>
      <   Quote/>
      <div className="bg-[#e6cfbd]">
     
    
      
    </div>
   
    <Contact/>
    <Footer/>
    </div>
     

    
  );
}
