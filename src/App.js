import React, {useState} from "react"  
import { UserContext } from './Context';
import  "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./Hero" 
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./Login"
import Register from "./Register" 
import Dashboard from "./Dashboard"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config/FirebaseConfig";
import notFound from "./notFound";
firebase.initializeApp(firebaseConfig);


const App = () =>   
{ 
 
  const [user, setUser]=useState(null)

   return(
      <>
<Router>
<UserContext.Provider value={{user, setUser}}>      
<Switch>
<Route exact path="/" component={Hero}/>
<Route exact path="/login" component={Login} />
<Route exact path="/register" component={Register} /> 
<Route exact path="/dashboard" component={Dashboard} /> 
<Route exact path="*" component={notFound} />
</Switch> 
 </UserContext.Provider>
</Router>
</>
   
   )}

export default App;