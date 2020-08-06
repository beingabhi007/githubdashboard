import React, {useState, useEffect} from "react" 
import Axios from "axios"

const RepoUi = ({repoUrl}) => {
  const [abhiKaRepo, setAbhiKaRepo] = useState([])


//  const datafromurl = async () => {
//   const gitUrl = `https://api.github.com/users/beingabhi007/repos`
//     const {myUrlData} = await Axios.get(gitUrl)
//   console.log({myUrlData});
//  }

//   useEffect( ()=> {
//     datafromurl();
//   }, [])


  useEffect(() => {
    const fetchRepos = async () => {
const {data} = await Axios.get(repoUrl)
      console.log(data);
      setAbhiKaRepo(data)
    };

    fetchRepos();
  }, [repoUrl]);


if(abhiKaRepo.length !==0) 
{
 return(   
 <section style={{backgroundColor: "#1D3557"}} >
     <div className="container">    
     <br/>
<p id="text3" >Repositories</p>  <br/>  
<div className="row">

{ abhiKaRepo.map((repo) =>
 (

<div className="col-lg-4">
<div className="card text-white bg-primary mb-4">
  <div className="card-header text-center" style={{fontSize: "1rem", fontWeight: "700"}} >{repo.name}</div>
  <div className="card-body">
    <h5 className="text-white">Created: {repo.created_at} </h5>
    <h5 className="text-white">Language: {repo.language}</h5>
<div className="text-center" > 
<a href={repo.html_url} rel="noopener noreferrer" target="_blank" className="btn btn-warning btn-outline btn-block" >View on Github</a>
</div>    
  </div>
</div>
    
</div>
))}
 </div>
 </div>
 </section>
)
 } 
else
{
  return <p className="text-white text-center bg-dark" style={{marginBottom: "0rem"}} >You don't have any Repo.</p>
} 
 }
//  else{
//    return <h1 className="text-danger text-center" >[Repo h hi nhi toh kya dekhne aaye ho {"=>"} baba g ka <b>THULLU</b>]</h1>
//  }


export default RepoUi;