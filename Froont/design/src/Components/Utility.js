import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addUtility} from "../reducers/utility/action"
import axios from 'axios'

 function Utility() {

    const dispatch=useDispatch()
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[date,setDate ]=useState("")
    const[instructions,setInstructions]=useState("")


    const handelChangeTitle=(e)=>{
        setTitle(e.target.value)


    }
    const handelChangeDate=(e)=>{
        setDate(e.target.value)
        
    }
    const handelChangeDescrption=(e)=>{
        setDescription(e.target.value)  
    }
    const handelChangeinstructions=(e)=>{
     setInstructions(e.target.value)  
    }
    
    const add=()=>{
        const data={  
            title,
            description,
            date,
            instructions,
            designer:{
                id : 1
                },
            gallery :{
                id:1
            }
            
            
        }

    
    axios
        .post("http://localhost:8080/utility",data)
        .then((res)=>{
            const action=addUtility(res.data)
            dispatch(action)
    
        })
        .catch((err)=>{
    
            console.log(err);

        });
    }

    return (
        <div id="table">
             <label for="add">Add New service:</label><br/>  
            <label >Title</label><br/>

           <input type="text" id="name" name="name" onChange={handelChangeTitle} /><br/>
           <label >Service creation date</label><br/>

           <input type="date" id="name" name="name"  onChange={handelChangeDate}/><br/>
    
         <label > Description</label><br/>

         <input type="text" id="name" name="name" style={{height:120 , width:200}} onChange={handelChangeDescrption}/><br/>

         <label > Instructions</label><br/>

        <input type="text" id="name" name="name" style={{height:120, width:200}} onChange={handelChangeinstructions}/><br/>
        <button  id="brn_service"onClick={add}>Add</button><br/>
            
        </div>
    )
}
export default Utility  
