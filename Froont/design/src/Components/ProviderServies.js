import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProviderServies() {
    const state = useSelector((state) => {
        return {
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })
const[user,setUser]=useState([])
const{user_id}=useParams()
useEffect(() => {
       
    axios
    
        .get(`http://localhost:8080/user/${user_id}`)
        .then(res =>{ setUser(res.data)
        console.log(res.data);
        })
      
        .catch(err => console.log(err));

}
    , [])
    console.log(user)
    return (
        
        <div className='profile'>
            
            <div className='container'>
            {user.map((ele=>{
                <>
                    
                        <div className="head">
                            {/* Put image src here */}
                            <img src="./images/img4.jpg" alt="" />
                        </div>
                        <h3>{ele.userName}</h3> 
                        <h3>{ele.email}</h3> 

                        </>
                        
            }))}
               


                
                </div>
            
                 
                  
                 </div>

               
                

                
          
        
   
    )
}
