import React, { useState } from 'react'
import { addDesigner } from "../reducers/designer/action"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function CreateDesigner() {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const [designType, setDesignType] = useState("")
    const [fill,setFill]=useState("")
    
    const state = useSelector((state)=>{
        return {
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })
    
    const handelChangeDesignType=(e)=>{
        setDesignType(e.target.value)  
    }

    const data={
         
        designType :designType,
        user:{
            id:state.user.id
        }
               
        }

    function add(e) {
        e.preventDefault();
        if(state.user.id===undefined){
            navigate("/login")
        }
        else{
            if(designType<1){
                setFill("Required")

            }
        }
        
        // const config = {
        //     headers: { Authorization: `Bearer ${state.token}` },
        //   };

        axios
            .post("http://localhost:8080/designer", data)

            .then((res) => {
                const action = addDesigner(res.data)
                console.log(res.data);
                dispatch(action)

            })
            .catch((err) => {

                console.log(err);
            });
            // navigate("/gallery")


    };
    // useEffect(() => {
    //     let isMounted = true;
    
    //     const config = {
    //       headers: { Authorization: `Bearer ${state.token}` },
    //     };
    
    //     axios
    //       .get(`http://localhost:8080/user/${state.user.id}`, config)
    //       .then((res) => {
    //         if (isMounted) {
    //           setDesignType(res.data.designType);
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    
    //     return () => {
    //       isMounted = false;
    //     };
    //   }, []);
    

    return (
        <div className='d1'>

            <form className='form-1'>
            <h2>Design Type </h2><br/>
            
             <input name="title" type="text" class="feedback-input" placeholder={fill.length>1?fill:"design Type"} onChange={handelChangeDesignType} /> 
             <button className='submit' onClick={add}>Submit</button>  
           </form>
           </div>
            // <label > fullName:</label>
            // <br />
            // <input type="text" id="fname" name="name" onChange={handelChangefullName} />
            // <br />
            // <label >userName:</label>
            // <br />
            // <input type="text" id="userName" name="lname"onChange={handelChangeUserName}/>
            // <br />
            // <lable>choose design type</lable>

            // <input type="text" id="type" onChange={handelChangeDesignType}/>



            /*       <label>Internal design</label><br/>
      <label >External Design</label><br></br> */
            // <br />
            // <button onClick={add}>Add</button>






       
    )
}

export default CreateDesigner