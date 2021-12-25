import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDashboardCustomize } from 'react-icons/md'
import Profile from './ProfileUser';



export default function NavBar() {

    const [closed,setClosed] = useState(true);
    const toggler = ()=>{
        setClosed(!closed)
    }
    return (
        <div>
<nav className='top-nav'>
            <Link to="/" className="logo">Logo</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/sections">sections</Link>
                <Link to="/support">support</Link>
                <Link to="/signUp">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/profileUser">Profile</Link>
                
            </div>
            <div className='dashboard-btn' onClick={toggler}><MdDashboardCustomize/>
                <div className={closed?'top-dropdown-menu':'top-dropdown-menu opened'}>
                    <Link to="/addutility" >Add Service</Link>
                </div>
            </div>
             <span className="avatar"><img src="./images/img2.jpg" alt="" /></span> 
        </nav>

            
        </div>
    )
}
