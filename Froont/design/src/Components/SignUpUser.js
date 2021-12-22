import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser} from "../reducers/user/action"
import { useNavigate } from 'react-router-dom';

export default function SignUpUser() {
 const[fullName,setFullName]=useState("")
const[userName,setUserName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
 const[password2,setPassword2]=useState("")
 const[fill,setFill]=useState("")
 const[matchPas,setMatchPass]=useState("")


const dispatch=useDispatch();
const navigate=useNavigate()
 

const handelChangeFullName=(e)=>{
      setFullName(e.target.value);
     };
const handelChangeUserName=(e)=>{
        setUserName(e.target.value);
    };
const handelChangeEmail=(e)=>{
    setEmail(e.target.value);
};
const handlChangePassword=(e)=>{
    setPassword(e.target.value)
}
 const handlChangePassword2=(e)=>{
    setPassword2(e.target.value)
 }




const data={
  "fullName":fullName,
        "userName":userName,
        "email":email,
        "password":password,
        "role":1
     
}
            
        




const add=()=>{
    // if((email).includes("@gmail.com")||(email).includes("@hotmail.com")||(email).includes("@yahoo.com")|| (email).includes("@outlook.com")){
        //         setEmail(true)
        //         navigate("/login");
        //     }else 
        //     setEmail(false) 
        
    if(  fullName.length<1 || email.length<1|| userName.length<1 || password.length<1 || password.length<1 || password2<1  ){
       setFill("required filed")
     }
     else {
        if(password2!=password){ 
            setMatchPass("not match")
        }


     

    else{   
    

axios
    .post("http://localhost:8080/user",data)
    .then((res)=>{
        const action=addUser(res.data)
        dispatch(action)
        // navigate("/login")

    })
    .catch((err)=>{

        console.log(err);
    });
}

}
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
        <div class="col-md-6 rcol">
            <form  className="sign-up">
                <h2  className="heading mb-4">Sign up</h2>
                <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                 <input type="name" className="form-control" placeholder={fill.length>1?fill:"Name"} onChange={ handelChangeFullName}/> 
                 </div>
                 <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                 <input type="name" className="form-control" placeholder={fill.length>1?fill:"userName"} onChange={ handelChangeUserName}/> 
                 </div>
                <div  className="form-group fone mt-2"> <i class="fas fa-envelope"></i> 
                <input type="email" className="form-control" placeholder={fill.length>1?fill:"email"} onChange={ handelChangeEmail}/> </div>
                {/* <div className={matchEmail ? "form_message form_message-error m-hidden " : "form_message form_message-error "}>you have enterd an invalid e-mail please try agin.</div> */}
                <div  className="form-group fone mt-2"> <i class="fas fa-lock"></i>
                 <input type="password" className="form-control" placeholder={fill.length>1?fill:"Password"} onChange={ handlChangePassword}/>
                    <div  className="image"><i  className="fas fa-eye"></i></div>

                </div>
                <div  className="form-group fone mt-2"> <i class="fas fa-lock"></i>
                 <input type="password" className="form-control" placeholder={fill.length>1?fill:"confirm Password"} onChange={ handlChangePassword2}/>
                    <div  className="image"><i  className="fas fa-eye"></i></div>

                </div>
                
                
            </form> 
            <button type="button"  className="btn btn-success mt-5" onClick={add}>Get satrted now</button>
            <p  className="exist mt-4">Existing user? <span onClick={()=>{navigate("/login")}}>Log in </span></p>
        </div>
    </div>
</div>
        </div>
    )
}