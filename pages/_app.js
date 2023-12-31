import '@/styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />

      <div>
  
        <Component {...pageProps} />
        <Footer/>
      </div>
    </div>
  )
}
