
import Footer from "../components/Footer.jsx"
import {Link } from "react-router-dom"
import "../App.css"


export default function Contact()
{

    return(
        <>
          

    
            <p className="web_content">
                <h2>Contact Details</h2>
                 <span><strong>Name:</strong>RajharpreetSingh</span><br/>
                 <span><strong>Phone:</strong>9682599483</span><br/>
                 <span><strong>Email:</strong>rajharpreetinki@gmail.com</span>
            </p>
             
            <center>
            <Link to="/">
             <li className="Back_btn">
              

                <span>Back to Home</span>
             
            </li>
            </Link>
                 
            
            </center>
                 <Footer/>
      
        </>
    )
}