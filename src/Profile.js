import React, {useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import { UserContext } from "./Context";
import RepoUi from './RepoUi';
const Profile =  ({myuser})  => {
  const context = useContext(UserContext);
  
  // const [myrepos, setMyrepos] = useState(null) 
  // const repodata = async () => {
  // try
  // {  
  // const { myrepo } = await Axios.get(`https://api.github.com/users/beingabhi007/repos`) 
  // setMyrepos(myrepo); 
  // } 
  // catch (error) {
  //   console.log(error);
  // }}

  // useEffect(()=> {
  //   repodata();
  // }, []);

return (
<section> 


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


<div style={{backgroundColor: "#10A881"}} > <br/>
<div className="container" style={{backgroundColor: "#E5B143", borderRadius: "370px 0px 370px 0px"}} > 
<br/>
<div className="row" style={{height: "100vh"}} >
<div className="md-4 mx-auto">
<div className="card" style={{ background: "#222831", borderRadius: "70px 70px 0px 0px" }} >
<div className="card-body text-center">
  <img height="250" width="250"
  className="rounded-circle border-warning img-thumbnail" 
  src={myuser.avatar_url} 
  alt="dp" />
</div>   
<div className="card-title text-center">
<h4>
<span className="p-2 text-light text-center">{myuser.name}</span> 
</h4> 
</div> 

<div className="card-text text-white">
<h5 className="ml-2">
Followers: {myuser.followers}  
</h5>  
<h5 className="ml-2">
Following: {myuser.following}  
</h5>   
<h5 className="ml-2">
Repos: {myuser.public_repos}  
</h5>
<div className="text-center" >
<button className="btn btn-primary" href="https://github.com/beingabhi007" >View on GitHub</button> </div>
<br/>
</div>
</div> <br/>
</div>  
</div>
</div>
<br/>
</div>
  <RepoUi repoUrl={myuser.repos_url} />
{/* {myrepos ? <RepoUi/> : null} */}

{/* 
<div className="container">   
<p id="text3" >Repositories</p>  <br/>  
<div className="row">


{ myrepos.map((repo) => (

<div className="col-lg-4">
<div className="card text-white bg-primary mb-4">
  <div className="card-header text-center">{myrepos.name}</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    
</div>
))} 
 </div>
 </div> */}


 
<div style={{backgroundColor: "black" , padding: "5px"}}>
<p style={{textAlign: "center" , color: "white", fontWeight: "700" , fontSize: "1.0rem"}} >Made with <img src="/love.png" style={{width: "25px"}} alt="love"/> and cooked in <img src="logo192.png" alt="react icon" style={{width: "30px"}} /> by Abhi.</p>  
</div>
   
    </section>
    )
}



export default Profile