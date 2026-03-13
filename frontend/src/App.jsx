import Signup from "./pages/signup";
import Login  from "./pages/login";
import { Routes,Route } from "react-router-dom";
import React from "react";
import Protected from "./component/protected";
import Dashboard from "./pages/dashboard";

function App(){
    return(
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path = "/login" element= {<Login/>}/>
        <Route path="/dashboard" element={<Protected> {<Dashboard/>}</Protected>}/>
        
      </Routes>

    )
}

export default  App 