import React from "react" 
import {Link} from "react-router-dom"

const notFound = () => {
    return(
        <section>
       
       <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ backgroundColor: "#222831" }}>
            <p id="text1">
              Github Dashboard
            <Link 
            className="btn btn-danger float-right mr-1 mt-1"
            to="/" 
            >Home</Link>  
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12"
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
          >
            <div className="line"></div>
          </div>
        </div>
      </div>
       
        <div className="container-fluid">
         <div className="row">
         <div className="col-lg-4 col-sm-12">
        <img src="404img.jpeg" alt="404errorimage" width="100%" />
         </div>  
         <div className="col-lg-8 col-sm-12">
          <p id="text5">AWWW...DON’T CRY.</p> 
         <p id="text6">It's just an 404 Error! </p> 
         <p id="text6">The username you are looking for is NOT VALID.</p> 
         </div>   
         </div>   
        </div>    
        </section>
    )
} 


export default notFound;