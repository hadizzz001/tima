"use client"
import {  Footer,Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation'
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext'; 
import GifLoader from '../components/GifLoader'
import Offer from '../components/Offer'
import WhatsAppIcon from '../components/WhatsAppIcon'; 
import ScrollToTop  from '../components/ScrollToTop'; 
import { GoogleAnalytics } from '@next/third-parties/google'




 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html className="no-js no-touch supports-no-cookies" lang="en"> 
    <>
  <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
  <meta content="en" httpEquiv="Content-Language" />
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1"
    name="viewport"
  />
  <meta content="max-image-preview:large" name="robots" />
  <title>
    Tima Beauty Cosmetics
  </title>
  <meta
    content="At Tima Beauty Cosmetics, we're reshaping the way businesses connect."
    name="description" 
  />
  <meta content="Tima Beauty Cosmetics" name="keywords" property="Tima Beauty Cosmetics, Tima Beauty Cosmetics, men, women" />
  <meta
    content="Tima Beauty Cosmetics"
    name=""
    property="og:title"
  />
  <meta
    content="https://Tima Beauty Cosmetics.com/"
    name=""
    property="og:url"
  />
  <meta content="website" name="" property="og:type" />
  <meta
    content="At Tima Beauty Cosmetics, we're reshaping the way businesses connect."
    name=""
    property="og:description"
  />
  <meta
    content="https://res.cloudinary.com/dsctzrmng/image/upload/v1749828572/Gold_Elegant_Fashion_Brand_Logo.pdf_page-0001_gbrwch.webp"
    name=""
    property="og:image"
  />
   
  <link
    href="https://res.cloudinary.com/dsctzrmng/image/upload/v1749828572/Gold_Elegant_Fashion_Brand_Logo.pdf_page-0001_gbrwch.webp"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="https://res.cloudinary.com/dsctzrmng/image/upload/v1749828572/Gold_Elegant_Fashion_Brand_Logo.pdf_page-0001_gbrwch.webp"
    rel="icon"
    sizes="32x32" 
  />
  <link
    href="https://res.cloudinary.com/dsctzrmng/image/upload/v1749828572/Gold_Elegant_Fashion_Brand_Logo.pdf_page-0001_gbrwch.webp"
    rel="icon"
    sizes="16x16" 
  /> 
 
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  

 
 










  <link
    href="css/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="css/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="css/style-4109db2b.css"
  />

<link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet"/> 
 

<link href="https://fonts.cdnfonts.com/css/futura-std-4" rel="stylesheet"/>
                
                
                
                
                

 
  
</>

      <body>

      <ScrollToTop />
      <Offer /> 
      <GifLoader />

        
        <BooleanProvider>
        <CartProvider>
          <Navbar2 />
          <WhatsAppIcon />
          <GoogleAnalytics gaId="G-CWL3GHDNXG" />
          {children} 
          <Footer />
        </CartProvider>
        </BooleanProvider>
        
      </body>
    </html>
  )
}
