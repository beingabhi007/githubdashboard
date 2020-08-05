import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "./Context";
import Axios from "axios";
import Profile from "./Profile";

const Dashboard = () => {

  const context = useContext(UserContext);
  const [myuser, setMyuser] = useState(null);
  
  const gitHubData = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/users/${context.user.userName}`
      );
      setMyuser(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gitHubData();
  }, []);
  
  if(context.user)
   {
   
 if(myuser){
   return( <Profile myuser={myuser} />
    )
 }
 else{
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

} 

  else 
  {
    return <Redirect to="/" />;
  }
};


export default Dashboard;
