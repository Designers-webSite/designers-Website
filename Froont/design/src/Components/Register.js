// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// // import {addUser} from "../reducers/user/action"
// import {addUser} from "../reducers/user/action"
// import React from 'react'

//  function Register() {
//  const dispatch=useDispatch();
//  const[fullName,setFullName]=useState("")
// const[userName,setUserName]=useState("")
// const[email,setEmail]=useState("")
// const[password,setPassword]=useState("")

 



// const handelChangeFullName=(e)=>{
//       setFullName(e.target.value);
//      };
// const handelChangeUserName=(e)=>{
//         setUserName(e.target.value);
//     };
// const handelChangeEmail=(e)=>{
//     setEmail(e.target.value);
// };
// const handlChangePassword=(e)=>{
//     setPassword(e.target.value)
// }


// const add=()=>{
//     const data={
//         fullName,
//         userName,
//         email,
//         password,
        
//     }

// axios
//     .post("http://localhost:8080/user",data)
//     .then((res)=>{
//         const action=addUser(res.data)
//         dispatch(action)

//     })
//     .catch((err)=>{

//         console.log(err);
//     });
// }

//     return (
//         <div>
//             <input type="text"  id="fullName" onChange={ handelChangeFullName} />
//             <input type="text" id="uName"  onChange={ handelChangeUserName} />
//             <input type="text" id="email" onChange={ handelChangeEmail}  />
//             <input type="text" id="password" onChange={ handlChangePassword}  />
//         <button onClick={add}>Sign Up</button>

            
//         </div>
//     )
// }
// export default Register
