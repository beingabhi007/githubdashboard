import React, {useContext, useState} from 'react'
import { UserContext } from "./Context"; 
import CompareStat from "./CompareStat"
import { Redirect } from "react-router-dom"

export default function Compare() {

const context = useContext(UserContext);


const [uname1, setUname1] = useState('');
const [uname2, setUname2]= useState('');
const [status, setStatus] = useState(true)   


   const handleSubmit = (e) => {
     e.preventDefault();
     setStatus(false);
     
   }

  if(context.user) 
  {

  if(status) 
  {
    return (
        <> 


<div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ backgroundColor: "#222831" }}>
            <p id="text1">
              Github Dashboard
              <button
                onClick={() => { context.setUser(null) }}
                className="btn btn-danger float-right mr-1 mt-1"
              >
                Logout
              </button>
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
<br/><br/><br/>

<div className="row" style={{margin: "0"}} >
<div className="col-lg-6 mx-auto">
 
 <form onSubmit={handleSubmit}>
 <div className="form-group">
 <label>Username1 </label>
  
  <input 
  className="form-control"
  type="text"
  value={uname1} 
  onChange={ (event) => { setUname1(event.target.value) }}  
  />   
 </div>   

 <div className="form-group">
 <label>Username2</label>
  <input 
  className="form-control"
  type="text"
  value={uname2} 
  onChange={ (event) => { setUname2(event.target.value)}}
  />   
 </div>  <br/>

 <div className="text-center">
  <button 
  type= "submit"
  className="btn btn-outline-warning btn-block" >Compare</button>
 </div>

 </form>   
</div>
</div>
        </>
    )}

 else 
 { 
   return(
   <CompareStat uname1={uname1} uname2={uname2} />
   )}
  } 
 
 else 
 {
  return <Redirect to="/" />;
 } 

   

}
