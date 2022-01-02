import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDashboardCustomize, MdLogout } from 'react-icons/md'
import{AiOutlineLogout} from 'react-icons/ai'
import Profile from './ProfileUser';
import axios from 'axios';
import { useNavigate ,useParams } from 'react-router-dom';
import { removeUser } from '../reducers/user/action';
import { useDispatch } from 'react-redux';


export default function NavBar() {

    const [closed,setClosed] = useState(true);
    const navigate=useNavigate()
const {user_id}=useParams()
const dispatch=useDispatch()
    const toggler = ()=>{
        setClosed(!closed)    
    }
 const Logout=()=>{
    localStorage.clear();
    navigate("/")

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
    

    return (
        <div>
<nav className='top-nav'>
            <Link to="/" className="logo">Logo</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/AllServies">sections</Link>
                {/* <Link to="/support">support</Link> */}
                <Link to="/signUp">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/profileUser">Profile</Link>
                
                
            </div>
            <div className='dashboard-btn' onClick={toggler}><MdDashboardCustomize/>
                <div className={closed?'top-dropdown-menu':'top-dropdown-menu opened'}>
                    <Link to="/addutility" >Add Service</Link>
                </div>
               
            </div>
            <div className='dashboard-btn' onClick={Logout}><AiOutlineLogout/>
                </div>
             <span className="avatar"><img src="./images/img2.jpg" alt="" /></span> 
        </nav>

            
        </div>
    )
}
