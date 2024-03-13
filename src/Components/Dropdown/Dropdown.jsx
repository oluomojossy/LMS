import "./Dropdown.css"
// import { FiToggleRight } from "react-icons/fi";
import { GiPentarrowsTornado } from "react-icons/gi";
// import { motion } from "framer-motion"
import { useState } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


export default function Dropdown(){
    

    return(
     
     <div className="dropdown">
    
      <div className="option">
        <Link className="link" to="/about">
        <p>About</p>
        </Link>

            <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
            </Link>
        </div>

        <div className="option">
        <Link className="link" to="/pricing">
        <p>Pricing</p>
            </Link>
            <GiPentarrowsTornado style={{fontSize: "25px",color: "#003482ff"}}/>
        </div>

        <div className="option">
            <Link className="link" to="/service">
            <p>Services</p>
            </Link>
            <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
        </Link>
        </div>
        
       
        <div className="option">
        <Link className="link" to="/contact">
        <p>Contact Us</p>
            </Link>
        <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
        </Link>
        </div>

        <div className="option">
        <Link className="link" to="/login">
        <p>Login</p>
            </Link>
            <Link className="link" to="/">
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
            </Link>
        </div>
{/* 
        <div className="exit">
            <Link className="link" to="/">
            <button>Exit</button>
            </Link>
           
        </div> */}
       </div>
     
    )
}

