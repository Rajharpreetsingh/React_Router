import Footer from "../components/Footer.jsx"
import {Link } from "react-router-dom"
import "../App.css"


export default function About()
{

    return(
        <>
          

        
         
            <p className="web_content">
                 <h2> About Us</h2>

            <p>
               This project is built using React to demonstrate modern web development practices and component-based architecture.
        
        Our goal is to create fast, responsive, and user-friendly web
        applications. This app uses React Router for seamless navigation between
        different pages without reloading the browser. We focus on building interactive UI components and scalable frontend
        applications. This project is a starting point for learning how routing,
        components, and state management work together in React.

            </p>
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