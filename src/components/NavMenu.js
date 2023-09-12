import { Link } from "react-router-dom";
//sidebar menu
import React from "react"

const NavMenu = () => {
    return (

        <div>


            <ul className="Menu-bar">
                
                <Link to="/">  <li>Home</li> </Link>
                <Link to="/menu">  <li>Menu</li> </Link>
                <Link to="/about">  <li>About Us</li> </Link>
                <Link to="/contact">  <li>Contact Us</li> </Link>
               

               
            </ul>

        </div>
    );

}
export default NavMenu; 