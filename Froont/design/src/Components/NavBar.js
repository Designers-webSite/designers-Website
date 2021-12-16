import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {




    return (
        <div>
<nav className='top-nav'>
            <Link to="/" className="logo">Logo</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/sections">sections</Link>
                <Link to="/designers">Designers</Link>
                <Link to="/support">support</Link>
                <Link to="/register">Register</Link>
            </div>
            
             <span className="avatar"><img src="./images/img2.jpg" alt="" /></span> 
        </nav>

            
        </div>
    )
}
