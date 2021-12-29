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
    const[user,setUser]=useState()
    const[loading,setLoading]=useState(false)

    const{user_id}=useParams()
useEffect(() => {
       
     axios
        .get(`http://localhost:8080/user/${user_id}`)
        .then(res =>{ 
            
            console.log(res.data);
            setUser(res.data)
            setLoading(true)
        })
      
        .catch(err => console.log(err));

}
    , [])
    console.log(user)
    return (
        
       
            
            <div className='container'>
                {loading?  
                
                 <div className='profile'>
           

                <>
                    
                        <div className="head">
                            {/* Put image src here */}
                            <img src="./images/img4.jpg" alt="" />
                        </div>
                        <h3>{user.userName}</h3> 
                        <h3>{user.picture}</h3> 

                        </>
                        
         
                            </div>

            :<h1>loading</h1>
            }
               

    
                
                </div>
            
        
                  
                

               
                

                
          
        
   
    )
}
