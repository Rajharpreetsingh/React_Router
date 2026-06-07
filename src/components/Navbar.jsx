import {Route , Routes,BrowserRouter , Link } from "react-router-dom"
import "../App.css"


export default function Navbar()
{

    return(
        <>
        <nav className="Navbar">

    
          <ul className="NavList">
          

            <Link to="/">
            <li className="Nav_Item">
                
                  <span>Home</span>
            </li>
            </Link>

            
                <Link to="Services">
              <li className="Nav_Item">
                <span> services</span>
            </li>
            </Link>



            
             <Link to="/contact">
              <li className="Nav_Item">
                <span> contact</span>
            </li>
            </Link>

            <Link to="/about"> 
            <li className="Nav_Item">
                <span> About</span>
            </li>
            </Link>
                  
          
          </ul>
            
         </nav>

        </>
    )
}

