
import { useContext, useState } from "react";
import {Authcontext}from "../authcontext/authcontext";
import { useNavigate } from "react-router-dom";
import "../auth.css"
export default function Login(){
    const [email , setemail] =useState("");
    const [pass,setpass]=useState("");
    const {login} = useContext(Authcontext)
    const navigate = useNavigate();
    const [error,seterror] = useState("")
    
    const Handlelogin = async (e)=>{
        e.preventDefault();

        const res = await fetch("https://react-auth-crud.onrender.com/api/auth/login",{
                method:"POST",
                
                headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        email,
                        password:pass
                    })
            })
        const data =await res.json()
        console.log(data);
        if(data.token){
        login(data.token);
        console.log("login success");
        console.log(data.token);
        navigate("/dashboard")}else{
            seterror("user not signed up")
        }

    }
    

    return<>     
       <div className=" auth-container">
        <form onSubmit={Handlelogin}>
            <input
            type="email"
            value={email}
            placeholder="enter email"
            onChange={(e)=>setemail(e.target.value)}/>


            <input
            type="password"
            value={pass}
            placeholder="enter pass"
            onChange={(e)=>setpass(e.target.value)}/>

            <button type="submit">login</button>
            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={()=>navigate("/signup")}>
                        signup
                    </button>
                </div>
                )}
            
        </form>
                </div>
        </>

    
    
}

