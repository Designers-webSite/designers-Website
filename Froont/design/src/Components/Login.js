import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate , Navigate, useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import {addUser,addToken} from "../reducers/user/action"
import axios from 'axios'
import { useSelector } from 'react-redux'
 import jwt_decode from "jwt-decode";

const Login = () => {
    const dispatch=useDispatch()
   const navigate=useNavigate()
   const location = useLocation();
    const[userName,setUserName]=useState("")
   const[password,setPassword]=useState("")
// const[errorMwssage,setErrorMessage]=useState()

const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

   
   const handelChangeUserName=(e)=>{
    setUserName(e.target.value);
};

const handlChangePassword=(e)=>{
setPassword(e.target.value)
}

   
   const add=()=>{
      
    const data={
        "userName":userName,
        "password":password
    
       }

    axios
    .post("http://localhost:8080/login",data)
    .then((res)=>{
        console.log(res.data);
        const token = res.data.access_token

        const decoded = jwt_decode(token);
        console.log(decoded);

        const user_action = addUser({
            id: decoded.id,
            userName: decoded.sub
          });
  
          const token_action = addToken(token);
  
           dispatch(user_action);
          dispatch(token_action);
          console.log(user_action);
          
           navigate("/");
        

    })
    .catch((err)=>{

        console.log(err);
    });

   }
   
    return (
        <div>

            <div class="container d-flex justify-content-center">
    <div class="row my-5">
        <div class="col-md-6 text-left text-white lcol">
            <div class="greeting">
                <h4>Welcome to <span class="txt">Designers webSite</span></h4>
            </div>
            
        </div>
        {/* {!state.token ? ( */}
        <div class="col-md-6 rcol">
       
              {/* <form  className="sign-up" >  */}

                <h2  className="heading mb-4">Log In</h2>
               
                <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                 <input type="name" className="form-control" placeholder="userName" onChange={ handelChangeUserName}/> 
                 </div>
                
                <div  className="form-group fone mt-2"> <i class="fas fa-lock"></i>
                 <input type="password" className="form-control" placeholder="Password"onChange={ handlChangePassword}/>
                    <div  className="image"><i  className="fas fa-eye"></i></div>
                </div>
                
                
           {/* </form>   */}
            
             
            <button type="button"  className="btn btn-success mt-5" onClick={add}>Get satrted now</button>
            
        </div>
       
                {/* <Navigate to="/" from={{ from: location }} />
              )} */}
    </div>
</div>
        </div>
    )
}


export default Login
