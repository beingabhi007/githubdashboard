import React, {useState, useContext} from "react"  
import firebase from "firebase/app";
// import { } from 'react-bootstrap';
import {Link , useHistory} from "react-router-dom"
import { UserContext } from './Context';


const Login = () => {

  const context = useContext(UserContext)
  
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  
  const handleSignin = () => { 
    
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user.email);
      console.log("Login successfully now load dashboard");  
      
      context.setUser({ 
        RawData: res.user.email,
        userName: document.getElementById("username").value
      }) 
//      console.log(context.user.RawDa
      history.push("/dashboard");
    
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("errorMsg").innerHTML = error.message; 
      
    });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      handleSignin();
    };

  return(
    <section> 

<div className="row">
<div className="col-lg-5" style={{backgroundColor: "#2ecc72"}} id="section1" > 
<div className="first"> 
<h1 className="text-white text-center mt-5">Welcome Back</h1> 
<img src="https://learncodeonline.in/login/images/111.svg" alt="loginvector"  id="image" />    
</div>
</div> 

<div className="col-lg-7" style={{backgroundColor: "#2C3335" }} id="section2">
<br/><br/>
<div className="row">
<div className="col-8 mx-auto">   
<h2 className="text-white text-center " >Login</h2><br/>
<div className="formcontent" >
<form onSubmit={handleSubmit}>
<input type="text"  style={{width: "100%" , padding: "8px"}} placeholder="Username" id="username" required /> <br/><br/>
<input type="email" style={{width: "100%" , padding: "8px"}} placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> <br/> <br/>
<input type="password" placeholder="Password" style={{width: "100%", padding: "8px"}} name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/> <br/><br/> 
  <div id="errorMsg" style={{color:"red"}} ></div>
<button className="btn-success btn-block mt-4" type="submit" style={{padding: "8px"}} >Login</button>    
</form>  
<Link to="/" className="text-white" style={{textDecoration: "none"}} >or return home</Link>
</div>  </div>  
</div>
</div></div>  

    </section>
  )
}


export default Login