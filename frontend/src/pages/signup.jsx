import { useState } from "react";
import "../auth.css"
function Signup(){
    const[ email,setemail]=useState("");
    const [ pass,setpass]=useState("");

    const handleSignup=async (e)=>{
        e.preventDefault();

        const res=await fetch("http://localhost:5000/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password:pass
            })
        })
        const data =await  res.json();
        console.log("User");
        console.log(data);
    }

    
    return<>
    <div className="auth-container">
    <form onSubmit={handleSignup}>
        <input
        type="email"
        value={email}
        placeholder="enter email"
        onChange={(e)=>setemail(e.target.value)}/>


        <input
        type="password"
        value={pass}
        placeholder="enter password"
        onChange={(e)=>setpass(e.target.value)}/>

        <button>signup</button>
    </form>
    <p>
    Already have an account? <a href="/login">Login</a>
    </p>
    </div>
    </>
}
export default Signup