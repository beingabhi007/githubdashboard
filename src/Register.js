import React, {useState} from "react" 
import firebase from "firebase/app";
import {Link} from "react-router-dom"

const Register = () => {
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSignup = () => {
      firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("errorMsg").innerHTML = error.message;
    });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      handleSignup();
    };

  return(
    <section> 
    <div className="row"> 
    <div className="col-lg-5" style={{backgroundColor: "#2ecc72"}} id="section1" >
    <div className="first">    
    <h1 className="text-white text-center mt-5">Get Started</h1> 
    <img src="https://learncodeonline.in/login/images/111.svg" alt="myvector" id="image" />    
    </div>
    </div>
    
    <div className="col-lg-7" style={{backgroundColor: "#2C3335"}} id="section2" >
    <div className="row">
    <div className="col-8 mx-auto">  
    <br/><br/>  
    <h2 className="text-white text-center " >Register</h2><br/>
    <div className="formcontent" >
    <form onSubmit={handleSubmit}>
    
        <input type="email" style={{width: "100%" ,padding: "8px"}} className="mb-2" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> <br/><br/>
        <input type="password" placeholder="Password" style={{width: "100%", padding: "8px"}} className="mb-2" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>  <br/><br/>
    
           <div style={{color:"red"}} id="errorMsg" /> 
        
       <button 
      //  onClick= {toast('Account created')} 
       className="btn-success btn-block" 
       type="submit" 
       style={{padding: "8px"}}>Register</button> 
       
        </form>  
        <Link to="/login" className="text-white" >or Login</Link>
    </div> </div>
    </div></div>
    
    </div>
    </section>
  )
  }


export default Register;