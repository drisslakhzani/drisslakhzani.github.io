import React from "react";
import logo from "./images/TrollFace.png"

function NavBar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="#"/>
            <h1>meme generator</h1>
        </nav>
        
    )
 }
export default NavBar