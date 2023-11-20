import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      
      <Head />
      <Navbar/>
      <body>
      
        {/* <Home/> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
