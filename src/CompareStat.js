import React, { useContext,useEffect,useState} from 'react'
import { UserContext } from "./Context"; 
import Axios from "axios"
import {Redirect } from "react-router-dom"


export default function CompareStat({uname1,uname2}) {
const context = useContext(UserContext);
const [data1, setData1] = useState({})
const [data2, setData2] = useState({})


  useEffect(() =>{
    
  const user1 = async () => {

  const {data} = await Axios.get(
    `https://api.github.com/users/${uname1}`
  );
  setData1(data);   
  }  
user1();
  },[uname1]);
 
  useEffect(() =>{
    
    const user2 = async () => {
  
    const {data} = await Axios.get(
      `https://api.github.com/users/${uname2}`
    );
    setData2(data);
    }  
  user2();
    },[uname2]);


  // if(uname1=== true && uname2=== true) 
  // {

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

  
  <div className="row" style={{margin: "0"}}>
   <div className="col-lg-8 mx-auto">


   <table className="table table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col" className="text-center" >Uname</th>
      <th scope="col" className="text-center">{uname1}</th>
      <th scope="col" className="text-center">{uname2}</th>
      
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row" className="text-center">Name</th>
      <td className="text-center">{data1.name}</td>
      <td className="text-center">{data2.name}</td>
    </tr>
    <tr>
      <th scope="row" className="text-center">Followers</th>
      <td className="text-center">{data1.followers}</td>
      <td className="text-center">{data2.followers}</td>
    </tr>
    <tr>
      <th scope="row" className="text-center">Following</th>
      <td className="text-center">{data1.following}</td>
      <td className="text-center">{data2.following}</td>
    </tr>
    <tr>
      <th scope="row" className="text-center" >Repos</th>
      <td className="text-center">{data1.public_repos}</td>
      <td className="text-center">{data2.public_repos}</td>
    </tr> 
    <tr>
      <th scope="row" className="text-center" >Hireable</th>
      <td className="text-center">{data1.hireable?"Yes":"No"}</td>
      <td className="text-center">{data2.hireable?"Yes":"No"}</td>
    </tr>
    
    
  </tbody>
</table>
   </div>    
  </div>


        </> )
    // ) } 

    // else 
    // {
    //    //  <Redirect to="/404" />
    //    return   <h1>Not found</h1>
    // }
}
