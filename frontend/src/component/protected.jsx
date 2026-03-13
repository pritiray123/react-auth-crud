import { useContext } from "react";
import { Authcontext } from "../authcontext/authcontext";
import Navigate from "react"
function Protected({children}){
    const {user} = useContext(Authcontext);

    if(!user){
        
        <Navigate  to = "/Login"></Navigate>
        
    }

    return(
        <>
        {children}
        </>
    )
}

export default Protected