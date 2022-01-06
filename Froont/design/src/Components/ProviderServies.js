import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function ProviderServies() {
    const state = useSelector((state) => {
        return {
        
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })
    const navigate=useNavigate()
    console.log(state.utility);
    const[user,setUser]=useState()
    const[loading,setLoading]=useState(false)

    const{user_id}=useParams()
    const{utility_id}=useParams()
    console.log(utility_id);
    
    
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
        
        <div className='profile sections'>
        <div className='container'>
            <div className='inner-wrapper'>
             
                {loading?  
                
                 <div className='profile1'>
           
                      
                <>
                {/* <Link to={`/Utility/${utility_id}`} className="item">Test</Link> */}
                  {/* {navigate(`/Utility/${utility_id}`)}   */}
                        {/* <div className="head"> */}
                            {/* Put image src here */}
                            <div className='top-wrapper'>
                        <div className='top-info'>
                            <img alt="" src={user.picture}  />
                            {/* <img src=""/> */}
                            <h4>{user.fullName}</h4>  
                        </div>
                    </div>
                            
                        {/* </div> */}
                        <hr/>
                       <h3 >Personal Information</h3>
                        <p> {user.fullName}</p> 
                       

                        <p>{user.userName}</p> 
                       

                        <p>{user.email}</p> 

                       

                        

                        </>
                        
         
                            </div>

            :<h1>loading</h1>
            }
               

    
                
                </div>
                </div>
                </div>
            
        
                  
                

               
                

                
          
        
   
    )
}
