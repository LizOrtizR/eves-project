// import About from "../components/About/About"
// import Gallery from "../components/Gallery/Gallery"
// import Contact from "../components/Contact/Contact"
import Image from 'next/image';
import home from '../public/home.jpeg';
// import Footer from '../components/Footer/Footer';
import Quote from '../components/Quote/Quote';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';
import Contact from "../components/Contact/Contact"

export default function index() {
  return (
    <div >
      <Home/>
      <About/>
      <Gallery/>
<Quote/>

<Contact/>
    </div>
     

    
  );
}
