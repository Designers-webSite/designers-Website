import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ProfileUser() {
    const navigate=useNavigate();
    const state = useSelector((state) => {
        return {
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })
    const {user_id} = useParams();
    console.log(user_id);
    const [user, setUser] = useState([])

   const x= JSON.parse(localStorage.getItem("user"))
  console.log(x.id);
    useEffect(() => {
       
        axios
         .get("http://localhost:8080/user/"+x.id)
            .then(res =>{ setUser(res.data)
            
            })
          
            .catch(err => console.log(err));


    }
        , [])
        console.log(user)

        


    return (
      
        <div className='profile'>
            <div className='container'>
                <div className='top-info'>
                    <img alt="" src={user.picture} />
                    <h4 className='text-center'>{user.userName}</h4>  
                    <hr/>
                </div>
            
                <div className='row'>
                    <div className='col-md-6'>
                    <h1>Basic Information</h1>
                        <div className='box'>
                           
                            <p>full Name :{user.fullName}</p>
                            <hr />
                            <p>user Name:{user.userName}</p>
                            <hr />
                            <p>Email:{user.email}</p>
                            
                        {/* </div>
                        <Link to ={"/updateUser"}>Edit</Link> */}
                      <Link to ={`/updateUser/${x.id}`}>Edit</Link>
                    </div>
                    <div className='col-md-6'>
                        
                    </div>
                </div>
                    
            </div>            
            
        </div>
        </div>
   
    )
}
