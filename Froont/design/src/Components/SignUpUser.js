import React from 'react'
import axios from 'axios'; 
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUser} from "../reducers/user/action"
import { useNavigate } from 'react-router-dom';
import {storage} from "../FireBase/Index"
import { BsFillPersonFill,BsHouseDoorFill ,BsFileLock2Fill,BsFillTelephoneFill} from "react-icons/bs";
import {IoEyeSharp }  from"react-icons/io5";
import Validaiton from './Validaiton';
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import  "./SignUpUser.css"

export default function SignUpUser() {
const[fullName,setFullName]=useState("")
const[userName,setUserName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[password2,setPassword2]=useState("")
const[fill,setFill]=useState("")
const[matchPas,setMatchPass]=useState("")
const[ message,setMessage]=useState("")
const [errors, setErrors] = useState({});
const[show,setShow]=useState(false)
const[matchEmail,setMatchEmail]=useState(true)
// const[picture,setPicture]=useState(null)
// const[url,setUrl]=useState("")
// const [progress, setProgress] = useState(0);

const dispatch=useDispatch();
const navigate=useNavigate()
 
// const validationResult =  Validaiton( fullName,userName ,email, password,password2)

    //     if(validationResult) {
    //         setErrors(validationResult);}



const add=(e)=>{
    e.preventDefault();

    let validationResult =  Validaiton( fullName,userName ,email, password,password2)
    console.log(fullName);
    console.log(validationResult);
        if(validationResult) 
            setErrors(validationResult);
        else 
        setErrors({})
    



    // if((email).includes("@gmail.com")||(email).includes("@hotmail.com")||(email).includes("@yahoo.com")|| (email).includes("@outlook.com")){
    //              setMatchEmail(true)
    //              navigate("/login");

    //        }else {
    //        setMatchEmail(false) }

    
   

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



}

     
        
   
    




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
//     const pasword=e.target.value;
//     if(pasword.match(/[A-Z]/!=null)){
//         valid('capital','fa-check','fa-times')
//     }else{
//         invalid('capital','fa-check','fa-times');
//     }
// }
// const invalid=(item,v_icon,inv_icon )=>{
//     let text=document.querySelector(`#${item}`)
//     text.style.opacity=".5";
//     let valid_icon =document.querySelector(`#${item}.#${v_icon}`)
//     valid_icon.style.opacity="0";

//     let invalid_icon =document.querySelector(`#${item}.#${inv_icon}`)
//     invalid_icon.style.opacity="1";
    


// }
 const handlChangePassword2=(e)=>{
    setPassword2(e.target.value)
 }

 const handelShowHide=()=>{
    setShow(!show);

 }
//  const handleChange=e=>{
//     if(e.target.files[0]){
//       setPicture(e.target.files[0]);
  
//     }
//   }
  
//   const handleUpload=(e)=>{
//     e.preventDefault()
//     const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
//     uploadTask.on(
//         "state_changed",
//         snapshot => {
//             const progress = Math.round(
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
//             setProgress(progress);
//         },
//         error => {
//             console.log(error);
//         },
//         () => {
//             storage
//                .ref("images")
//                .child(picture.name)
//                .getDownloadURL()
//                .then(url => {
//                    setUrl(url);
//                });
//         }
//         );
  
//   }
//   console.log("image :" , picture);
  
  



const data={
       fullName,
        userName,
        email,
        password,
         picture:"https://firebasestorage.googleapis.com/v0/b/fir-61d22.appspot.com/o/images%2F2740212.png?alt=media&token=25419864-1e0b-43f4-b2ac-7a35ef41d5fc",
        "role":"designer"
     
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
                <label for="name"><b><BsFillPersonFill/>Name :</b></label>
                 <input type="name" className="form-control"  onChange={ handelChangeFullName} required/> 
                 {errors.fullName && <p className="error">{errors.fullName}</p>}
                 </div>
                 <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                 <label for="userName"><b><BsFillPersonFill/>userName :</b></label>
                 <input type="userName" className="form-control"  onChange={ handelChangeUserName} required/> 
                 {errors.userName && <p className="error">{errors.userName}</p>}
                 </div>
                <div  className="form-group fone mt-2"> <i class="fas fa-envelope"></i> 
                <label for="email"><b>Email:</b></label>
                <input type="email" className="form-control"onChange={ handelChangeEmail}  required />
                {errors.email && <p className="error">{errors.email}</p>}
                 </div>

                 
                <div  className="form-group fone mt-2"> <i class="fas fa-lock"></i>
              
                <label for="pasword"><b>{show ? (<FontAwesomeIcon  id="show-hide"icon={faEye} onClick={handelShowHide} required/> ):(<FontAwesomeIcon className='fa-times icon' icon={faEyeSlash}  onClick={handelShowHide} />)}  pasword:</b></label>
                 <input type="pasword"  className="form-control" onChange={ handlChangePassword} required/>
                 {/* {show ? "txt" :" password"}  className="form-control"  placeholder={fill.length>1?fill:" "} */}
                 {errors.password && <p className="error">{errors.password}</p>}
                 {/* <div className='containPass'>
                 <p id="capital"> */}
                 {/* <FontAwesomeIcon className='fa-times icon' icon={faTimes} />
                 <FontAwesomeIcon  lassName='fa-Check icon' icon={faCheck} />
                 <span>Capital Letters</span>

                 </p>
                 <p id="char">
                 <FontAwesomeIcon className='fa-times icon' icon={faTimes} />
                 <FontAwesomeIcon className='fa-Check icon ' icon={faCheck} />
                 <span>Spcial Letters</span>
                 
                 </p>
                 <p id="num">
                 <FontAwesomeIcon className='fa-times icon ' icon={faTimes} />
                 <FontAwesomeIcon  lassName='fa-Check icon' icon={faCheck} />
                 <span>Use Numbers</span>
                 
                 </p>
                 <p id="more8">
                 <FontAwesomeIcon className='fa-times icon' icon={faTimes} />
                 <FontAwesomeIcon  lassName='fa-Check icon'icon={faCheck} />
                 <span>8+ Characters</span>
                 
                 </p>
                 </div> */}

                    <div  className="image"><i  className="fas fa-eye"></i></div>
                    <br/>
                    <br/>

                </div>

                <div  className="form-group fone mt-2"> <i class="fas fa-lock"></i>
                <label for=" confirm pasword"><b><BsFillPersonFill/>confirm pasword:</b></label>
                 <input type="password" className="form-control" onChange={ handlChangePassword2} required/>
                 {errors.password2 && <p className="error">{errors.password2}</p>}

                    <div  className="image"><i  className="fas fa-eye"></i></div>

                </div>
                
                {/* <div  className="form-group custom-upload mt-2"> <i class="fas fa-lock"></i>
                 <label htmlFor='file_img'>Upload Photo</label>
                 <input type="file" id='file_img' className="form-control"onChange={handleChange}/>
                 <button class="fas fa-lock"  onClick={handleUpload}>Upload</button> 
                    {/* <div  className="image"><i  className="fas fa-eye"></i></div> */}
{/* 
                </div> */} 
                
            </form> 
            <button type="button"  className="btn btn-success mt-5" onClick={add}>Get satrted now</button>
            <p  className="exist mt-3" >Existing user? <span onClick={()=>
            {navigate("/login")}}>Log in </span></p>
        </div>
    </div>
</div>
        </div>
    )
}