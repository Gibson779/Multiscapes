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


function App() {
  
  return (
    <>
     
       <ScrollToTop />  
      <Routes>
      <Route path= "/" element= {<Layout navbarHeight="large">
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
      <Layout navbarHeight="medium">
        <Contact />
      </Layout>
    } 
  />
      <Route path= "/gallery" element={
      <Layout navbarHeight="medium">
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
