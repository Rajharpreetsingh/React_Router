import {Route , Routes,BrowserRouter , Link } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import logo from "./logo_b.gif";
import "../App.css"
export default function Home()
{

    return(
        <>
          

          <center>
             <Navbar/>
             <img src={logo} className="hero"></img>
             <h1 className="Logo_Name">React js</h1>
             <span className="stext">The library for web and native user interfaces</span>
                    <Footer/>
             
          </center>
           
        
      
        </>
    )
}