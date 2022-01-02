import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ProfileUser() {
    const[deleteService,setDeleteService]=useState()
    const navigate=useNavigate();
    const state = useSelector((state) => {
        return {
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })
    const {user_id} = useParams();
    // console.log(user_id);
 const [user, setUser] = useState([])
 const[utility,setUtility]=useState([])
 const {utility_id}=useParams()
     console.log(utility_id);

   const x= JSON.parse(localStorage.getItem("user"))
  console.log(x.id);
    useEffect(() => {
       
        axios
         .get("http://localhost:8080/user/"+x.id)
            .then(res =>{ setUser(res.data)
         
          
             

    }).catch((err)=>{ 
                    console.log(err);
                })
        
    
            }, [])
        console.log(user)

        useEffect(() => {
       
                 axios
                    .get("http://localhost:8080/utility/all/"+x.id)
                    .then(response=>{setUtility(response.data)
                    console.log(response.data);})
                
              
                .catch(err => console.log(err));
    
    
      },[])



    return (
      

        <div className='profile sections'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <div className='top-wrapper'>
                        <div className='top-info'>
                            <img alt="" src={user.picture}  />
                            {/* <img src=""/> */}
                            <h4>{user.fullName}</h4>  
                        </div>
                    </div>

                    <div className='row'>
                    <div className='col-lg-6'>
                    <h2>Basic Information</h2>
                        <div className='box'>
                           
                            <p>full Name :{user.fullName}</p>
                            <hr />
                            <p>user Name:{user.userName}</p>    
                            
                            <hr />
                            <p>Email:{user.email}</p>
                            
                            <Link className='btn btn-primary' to ={`/updateUser/${x.id}`}>Edit</Link>       
                        </div>
                    </div>
                </div>
                          
                <div className="items">
                    
                        <h3 className='my-3'>Servies</h3>
                   
                          {user===0?"":
                        <div className='row'>
                        {console.log("utility: ",utility)}
                         { utility.map((ele)=>{
                              
                             return(
                                 <div className='col-md-4'>
                                    <div className='item'>
                                        <div className="head">
                                        <Link to={`/Utility/${ele.id}`} > <img className='mw-100' src={ele.picture} alt="" /></Link>
                                        </div>
                                        <h4 className='text-white text-center'>{ele.title}</h4>
                                    </div>
                                 </div>

                             )
                            
                        
                         })} 
         
                         </div>}                                  
     
                     </div>   
                </div> {/* End inner-wrapper  */}        
            
        </div>
       
   </div>
    )
}
