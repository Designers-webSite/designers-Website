import React, { useState } from 'react'
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
        <div>
<nav className='top-nav'>
{/* <img src="https://firebasestorage.googleapis.com/v0/b/fir-61d22.appspot.com/o/image%2F1.jpg?alt=media&token=86a3f72e-67f3-48cd-8481-bcc651b907e1"></img> */}
            <Link to="/" className="logo">Logo</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/AllServies/:user_id">services</Link>
                {/* <Link to="/support">support</Link> */}
                <Link to="/signUp">Register</Link>
                {/* <Link to="/login">Login</Link> */}
                {/* { state.user.id !=undefined?  */}
                 {/* <Link to="/profileUser/:user_id">  Profile</Link>:" " */}
                {/* // <Link to={`/profileUser/${state.user.id}`}>  Profile</Link>:" "} */}
                
                
            </div>
            <div className='dashboard-btn' onClick={toggler}><MdDashboardCustomize/>
                <div className={closed?'top-dropdown-menu':'top-dropdown-menu opened'}>
                    <Link to="/addutility" >Add Service</Link>
                </div>
               
            </div>
            <div className='dashboard-btn' onClick={Logout}> { state.user.id !=undefined? <AiOutlineLogout/>:" "}

                </div>
                
             <span className="avatar"> 
             {console.log(state.user.id)}
             <Link to={`/profileUser/${state.user.id}`}>  <img src={user.picture} alt="" /></Link>
             </span> 
                  
        </nav>

               
        </div>
    )
}
