import React from 'react'
import axios from 'axios'; 
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser} from "../reducers/user/action"
import { useNavigate } from 'react-router-dom';
import {storage} from "../FireBase/Index"
import { BsFillPersonFill} from "react-icons/bs";
import {IoEyeSharp }  from"react-icons/io5";
import Validaiton from './Validaiton';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import  "./SignUpUser.css"
import { AiTwotoneMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import "./LogInn.css"
import "./Update.css"


export default function Register() {
    const[fullName,setFullName]=useState("")
    const[userName,setUserName]=useState("")
    const[phone,setPhone]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[password2,setPassword2]=useState("")
    const[fill,setFill]=useState("")
    const[matchPas,setMatchPass]=useState("")
    const[ message,setMessage]=useState("")
    const [errors, setErrors] = useState({});
    const[show,setShow]=useState(false)
    const[matchEmail,setMatchEmail]=useState(true)
    
    
    const dispatch=useDispatch();
    const navigate=useNavigate()
     
    
    
    
    const add=(e)=>{
        e.preventDefault();
    
        let validationResult =  Validaiton( fullName,userName ,phone,email, password,password2)
        console.log(fullName);
        console.log(validationResult);
            if(validationResult) 
                setErrors(validationResult);
    
            else 
            setErrors({})
        
    
    
    if (validationResult==null){
    
        console.log("llloooged here");
        axios
        .post("http://localhost:8080/user",data)
        .then((res)=>{
            const action=addUser(res.data)
            dispatch(action)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
    
           
        })
        .catch((err)=>{
        //     Swal.fire({
        //         title: 'Error!',
        //        text: 'Do you want to continue',
        //          icon: 'error',
        //        confirmButtonText: 'Cool'
        //    })
            console.log(err);
        });
    
    
        navigate("/login")}
    
         
            
       
        
    
    
    
    
    }
    const handelChangeFullName=(e)=>{
          setFullName(e.target.value);
         };
    const handelChangeUserName=(e)=>{
            setUserName(e.target.value);
        };
    const handelChangeEmail=(e)=>{
        setEmail(e.target.value);
    };
    
    
    const valid=(item,v_icon,inv_icon )=>{
        let text=document.querySelector(`#${item}`)
        text.style.opacity="1";
        let valid_icon =document.querySelector(`#${item}.#${v_icon}`)
        valid_icon.style.opacity="1";
    
        let invalid_icon =document.querySelector(`#${item}.#${inv_icon}`)
        invalid_icon.style.opacity="0";
        
    
    }
    const handlChangePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handlChangePhone=(e)=>{
        setPhone(e.target.value)
    }
    
     const handlChangePassword2=(e)=>{
        setPassword2(e.target.value)
     }
    
     const handelShowHide=()=>{
        setShow(!show);
    
     }
    
    const data={
           fullName,
            userName,
            email,
            phone,
            password,
             picture:"https://firebasestorage.googleapis.com/v0/b/fir-61d22.appspot.com/o/images%2F2740212.png?alt=media&token=25419864-1e0b-43f4-b2ac-7a35ef41d5fc",
            "role":"designer"
         
    }
   
                

    return (
        <div className="boddy">
        <div id="containerr">
            
            <div class="form-containerr sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                   
                {/* <label for="name"><b><BsFillPersonFill/>Name :</b></label>
                 <input type="name"   onChange={ handelChangeFullName} required/> 
                 {errors.fullName && <p className="error">{errors.fullName}</p>} */}
                 <div className="input-group input-group-icon"><input type="text"onChange={ handelChangeFullName} required />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
            <div  className="input-icon"><i class="fa fa-user"><BsFillPersonFill/></i></div>
            </div>
                 
                 <label for="userName"><b><BsFillPersonFill/>userName :</b></label>
                 <input type="userName"   onChange={ handelChangeUserName} required/> 
                 {errors.userName && <p className="error">{errors.userName}</p>}
                 
               
                <label for="email"><b> <AiTwotoneMail/>Email:</b></label>
                <input type="email" onChange={ handelChangeEmail}  required />
                {errors.email && <p className="error">{errors.email}</p>}
                
                 
                <label for="email"><b> <BiPhoneCall/>Phone:</b></label>
                <input type="email" onChange={ handlChangePhone}  required />
                {errors.phone && <p className="error">{errors.phone}</p>}
                
                 
              
                <label for="pasword"><b> <FontAwesomeIcon  icon={faEye} onClick={handelShowHide} required/>   pasword:</b></label>
                 <input type="pasword"   onChange={ handlChangePassword} required/>
                 {/* {show ? "txt" :" password"}  className="form-control"  placeholder={fill.length>1?fill:" "} */}
                 {errors.password && <p className="error">{errors.password}</p>}

               
                <label for=" confirm pasword"><b>confirm pasword:</b></label>
                 <input type="password"  onChange={ handlChangePassword2} required/>
                 {errors.password2 && <p className="error">{errors.password2}</p>}

                    <button onClick={add} id="signIn">Sign Up</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlayy">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">
                            Sign In
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signIn">
                            Sign in 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
