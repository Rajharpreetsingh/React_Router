
import {Route , Routes,BrowserRouter , Link } from "react-router-dom"
import { useState } from 'react'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Services from "./pages/Services.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"


function App() 
{


  return (
    <>
   

      
     <BrowserRouter>
      <center>
     <Navbar/>
     </center>
     <Routes>

       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/contact" element={<Contact />}/>
     </Routes>
     
  
     </BrowserRouter>
       
    </>
  )
}

export default App
