import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./route/Services";
import Gallery from "./route/Gallery";
import Contact from "./route/Contact";
import Home from "./route/Home";
import ScrollToTop from "./component/ScrollToTop.jsx";
import Privacy from "./route/Privacy.jsx";
import Layout from "./component/Layout.jsx";
import Hero from "./component/Hero.jsx";

function App() {
  
  return (
    <>
     
       <ScrollToTop />  
      <Routes>
      <Route path= "/" element= {<Layout navbarHeight="large" showHomeImage={true}>
         <Hero />
        <Home />
      </Layout>
    } 
  />
     <Route path="/services" element={<Layout navbarHeight="small">
        <Services />
      </Layout>
    } 
  />
      <Route path= "/contact" element={
      <Layout navbarHeight="small">
        <Contact />
      </Layout>
    } 
  />
      <Route path= "/gallery" element={
      <Layout navbarHeight="small">
        <Gallery />
      </Layout>
    } 
  />
      <Route path="/privacy" element={
      <Layout navbarHeight="medium">
        <Privacy />
      </Layout>
    } 
  />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
