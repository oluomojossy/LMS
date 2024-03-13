import React from "react"
import "./Delete.css"
import 'animate.css';


const Delete =()=>{
return(
    <div className="deleteOptionHolder">
    <div className="deleteOptionWrapper">
            <div className="kard">
                <div className="Texts">
                    <p>Are you sure you want to delete "client name"?</p>
                </div>
                <div className="clicks">
                    <button className="clicky">
                        <p>Yes</p>
                    </button>
                    <button className="click">
                        <p>No</p>
                    </button>
                </div>

            </div>
    </div>
    </div>
)

}

export default Delete
