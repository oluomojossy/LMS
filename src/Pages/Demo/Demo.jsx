import React from "react"
import Header from "../../Components/Header/Header"
import "./Demo.css"
import lawvideo from "../../assets/lawvideo.mp4"



const Demo = () =>{
return(
    <>
     <Header/>
    <div className="demoHolder">
        <div className="demoWrapper">
        <div className="demoBody">
        <video src={lawvideo} className="vids" preload="metadata" playsInline autoPlay muted loop type="video/mp4">
         </video>
        </div>
        </div>
    </div>
    </>
)


}


export default Demo