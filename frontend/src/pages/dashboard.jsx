import { useContext, useEffect, useState } from "react"
import { Authcontext } from "../authcontext/authcontext"
import { useNavigate } from "react-router-dom"
import "./dashboard.css"
export default function Dashboard(){
    const {user,logout } = useContext(Authcontext)
    const [task ,settask]=useState("");
    const [tasks ,settasks]=useState([]);
    const [editid,seteditid]= useState(null)

    const navigate = useNavigate()
    const Handlelogout=()=>
    {
        logout();
        navigate("/login");
    }
    useEffect(()=>{
        fetch("https://react-auth-crud.onrender.com/tasks/all")
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        settasks(data)
    })},[])
    const startedit=(task)=>{
        settask(task.title);
        seteditid(task._id);

    }
    const Addtask= async()=>{
        if (task.trim()==="")return

        if(editid!=null){

            const res = await fetch(`https://react-auth-crud.onrender.com/tasks/update/${editid}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:task,
                    description:"task"
            })
            })
            const update = await res.json()
            const updated = tasks.map((t)=>{
                if(t._id===editid){
                    return update
                }
                return t
            })
            settasks(updated)
            seteditid(null)
            settask("")
        }else{
        const res = await fetch("https://react-auth-crud.onrender.com/tasks/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:task,
                description:"task"
            })
        })
        const newtasks= await res.json()
        settasks([...tasks,newtasks])
        settask("")
    }}

    const DeleteTask=async (id)=>{
        await fetch(`https://react-auth-crud.onrender.com/tasks/delete/${id}`,{
            method:"DELETE"
        })
        
        const updatedtasks=tasks.filter((t)=>t._id!=id)
        settasks(updatedtasks)
    }
    return <>
    <div className="dashboard">
        <h2>dashboard page</h2>
        <h1>user LOGGED in</h1>

        <button onClick={Handlelogout}>logout</button>
        <div className="task-input">
        <input 
        type="text"
        value={task}
        placeholder="enter task"
        onChange={(e)=>{
            settask(e.target.value)
        }}
        />
        <button onClick={Addtask}>
            {editid?"UPDATE":"ADD"}
        </button>
        </div>
        <ul className="task-list">
        {
            tasks.map((t)=>(<li key={t._id}>
                {t.title}
                <button onClick={()=>DeleteTask(t._id)}>Delete</button>
                <button onClick={()=>startedit(t)}>edit</button>
            </li>   ))
        }</ul>        
        </div>
    </>
}