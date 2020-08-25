import React from "react" 
import {Link} from "react-router-dom"
// import {} from "reactstrap"
//

const Hero = () => {
  return(
   
  <section> 
   <div className="row" style={{margin: "0"}}>
    <div className="col-12" style={{backgroundColor: "#222831"}} >
  <p id="text1" >Github Dashboard</p>
    </div>   
   </div> 
  
  <div className="row" style={{margin: "0"}} >
  <div className="col-lg-6" style={{backgroundColor: "#64B6AC"}} id="section3" >
 <img src="/team.svg" alt="" id="image2" />
  </div> 

  <div className="col-lg-6" style={{backgroundColor: "#222831"}} id="section4" >
<p id="text2">...whether you’re making your first commit </p>
 <p id="text2">or</p> 
 <p id="text2">sending a Rover to Mars,</p>
 <p id="text2"> there’s room for you here, </p>
 <p id="text2">and that is Github.</p> 
 
 <div className="text-center">
<br/><br/>
 <Link to="/register" className="btn border-danger mx-auto text-white" style={{width: "80%"}} >Get Started</Link>
 
 
 </div>
  </div>    
  </div>
   
   
   
   
   </section>
   )}; 

export default Hero;