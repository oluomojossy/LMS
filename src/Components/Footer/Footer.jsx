import React from "react"
import "./Footer.css"
import logo1 from "../../assets/logo1.png"
import sociallink2 from "../../assets/sociallink2.png"
import sociallink4 from "../../assets/sociallink4.png"
import sociallink3 from "../../assets/sociallink3.png"
import socialLink1 from "../../assets/socialLink1.png"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"



const Footer = () =>{
return(
    <>
    <div className="footerHolder">
        <div className="footerWrapper">
                <div className="contact">
                    <div className="leftText">
                        <h1>Need more information?</h1>
                        <p>Write your concerns to us and our specialist will get back to you</p>
                    </div>
                    <div className="conts">
                    <Link  className="link" to="/contact"> 
                    <button>Contact us</button>
                  </Link>
                        
                    
                       
                    </div>
                </div>
                <div className="body">
                    <div className="bodyLeft">
                        <div className="logss">
                            <img src={logo1} alt="logo"/>
                        </div>
                        <div className="render">
                            <p>Protected client data software.Nation-wide recognition</p>
                        </div>
                    </div>
                    <div className="bodyRight">
                        <div className="renders">
                            
                            <div className="text">
                            <h6>About</h6>
                            </div>
                            <div className="textz">
                                <Link className="link" to="/about">
                                <p>click here</p>
                                </Link>
                           
                            </div>
                        </div>
                        <div className="renders">
                            <div className="text">
                            <h6>Services</h6>
                            </div>
                            <div className="textz">
                                <Link className="link" to="/service">
                                <p>click here</p>
                                </Link>
                            </div>
                        </div>
                        <div className="renders">
                        <div className="text">
                            <h6>Contact us</h6>
                            </div>
                            
                            <div className="textz">
                            <Link className="link" to="/contact">
                                <p>click here</p>
                                </Link>
                            </div>
                        </div>
                       
                    </div>

                    <div className="renderr">
                           <div className="text">
                           <h6>Connect with us</h6>
                           </div>
                            <div className="social">
                                <img src={socialLink1}/>
                                <img src={sociallink2}/>
                                <img src={sociallink4}/>
                                <img src={sociallink3}/>
                            </div>
                        </div>
                </div>
        </div>
    </div>
    
    </>
)



}




export default Footer