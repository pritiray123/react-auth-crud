import {  useState } from "react";
import { createContext } from "react";
import { Navigate  } from "react";
export const Authcontext = createContext();

export default function ContextProvider({children}){
    const [user,setuser] = useState(
    localStorage.getItem("token") || null);

    const login = (token)=>{
        localStorage.setItem("token",token)
        setuser(token);
    }

    
    const logout = ()=>{
        localStorage.removeItem("token")
        setuser(null);
        console.log("logged out");
        
    }

    return(
        <>
        <Authcontext.Provider value= {{user,login,logout}}>
            {children}
        </Authcontext.Provider>
        </>
    )
}
