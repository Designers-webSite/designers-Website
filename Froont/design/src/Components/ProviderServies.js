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
        
       
             <div className='container'> 
                {loading?  
                
                 <div className='profile1'>
           
                        <div className='row'>
                            <div className='col-md-6'>Col 1</div>
                            <div className='col-md-6'>Col 2</div>
                        </div>
                <>
                <Link to={`/Utility/${utility_id}`} className="item">Test</Link>
                  {/* {navigate(`/Utility/${utility_id}`)}   */}
                        {/* <div className="head"> */}
                            {/* Put image src here */}
                            <img src="./images/img4.jpg" alt="" />
                        {/* </div> */}
                        <h3>{user.fullName}</h3> 

                        <h3>{user.userName}</h3> 
                        <p>{user.email}</p> 

                        <img src={user.picture}/>

                        

                        </>
                        
         
                            </div>

            :<h1>loading</h1>
            }
               

    
                
                </div>
            
        
                  
                

               
                

                
          
        
   
    )
}
