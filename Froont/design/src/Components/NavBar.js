import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDashboardCustomize, MdLogout } from 'react-icons/md'
import{AiOutlineLogout} from 'react-icons/ai'
import Profile from './ProfileUser';
import axios from 'axios';
import { useNavigate ,useParams } from 'react-router-dom';
import { removeUser } from '../reducers/user/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import"./HomePage.css"

import { logOut } from '../reducers/user/action';


export default function NavBar() {
    


    
    const state = useSelector((state) => {
        return {
          user: state.userReducer.user,
        };
      });

const [closed,setClosed] = useState(true);
const navigate=useNavigate()
const {user_id}=useParams()
const [user,setUser]=useState([])
const dispatch=useDispatch()
    const toggler = ()=>{
        setClosed(!closed)    
    }
 const Logout=()=>{
 dispatch(logOut())
 }
const deleteUser=()=>{
   
    axios
    .delete("http://localhost:8080/user/")
    .then((res)=>{
        const action=removeUser(res.data)
        dispatch(action)
         navigate("/")

    })
    .catch((err)=>{

        console.log(err);
    });
}
useEffect(() => {
       
    axios
       .get(`http://localhost:8080/user/${state.user.id}`)
       .then(res =>{ 
           
           console.log(res.data);
           setUser(res.data)
           console.log(res.data);
          
       })
     
       .catch(err => console.log(err));

}
   , [])

    const x = JSON.parse(localStorage.getItem('user'));

    return (
 <nav className='top-nav' id="nnav"> 
            {/* <Link to="/" className="logo">Logo</Link>  */}
            <Link to="/" className="logo"> <img className='lo' src="https://th.bing.com/th/id/R.49a960950209a09f51c9a819cad5cc2b?rik=p6qkKxhFEecmLg&pid=ImgRaw&r=0" width="60%" /></Link>

            {/* <Link to="/" className="logo"><img src="" className='lo'></img></Link>  */}

           
            
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/AllServies/:user_id">services</Link>
                <Link to="/AboutUs">About Us</Link>

                {/* <Link to="/support">support</Link> */}
                <Link to="/signUp">Register</Link>
                
                
                
            </div>
            <>
            { state.user.id !=undefined?

            <div className='dashboard-btn' onClick={toggler}><MdDashboardCustomize/>
                <div className={closed?'top-dropdown-menu':'top-dropdown-menu opened'}>
                    <Link to="/addutility" >Add Service</Link>
                </div>
                
            </div>
                           :""}

            </>
           


            <div className='dashboard-btn' onClick={Logout}> { state.user.id !=undefined? <AiOutlineLogout/>:" "}

                </div>
                
             <span className="avatar"> 
             {console.log(state.user.id)}
             {console.log(user.picture)}

             { state.user.id !=undefined?
           
             <Link to={`/profileUser/${state.user.id}`}>  <img src={user.picture} alt="" /></Link>:""}
             </span> 
                  
        </nav>

               
    )
}
