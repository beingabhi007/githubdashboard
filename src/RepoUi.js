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


if(setAbhiKaRepo) 
{
 return(   
 <section className="bg-success" >
     <div className="container">    
     <br/>
<p id="text3" >Repositories</p>  <br/>  
<div className="row">

{ abhiKaRepo.map((repo) =>
 (

<div className="col-lg-4">
<div className="card text-white bg-primary mb-4">
  <div className="card-header text-center">{repo.name}</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    
</div>
))}
 </div>
 </div>
 </section>
)
 }
 else{
   return <h1 className="text-danger text-center" >[Repo h hi nhi toh kya dekhne aaye ho {"=>"} baba g ka <b>THULLU</b>]</h1>
 }
} 

export default RepoUi;