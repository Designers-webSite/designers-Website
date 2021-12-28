import React from 'react'
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import SearchUtilityByTitle from './SearchUtilityByTitle';

const Home = () => {

    const navigate=useNavigate()
let a ;
const[search,setSearch]=useState();

    return (
        <div className='content home'>
            <div className="container">
                <div className="page-top">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text">
                                <h1 className='mb-2'>Best Services from Best Designers in Arabic World</h1>
                                <h3 className='mb-3'>Find Best Design Services</h3>
                                <div className="search-box my-4">
                                    <input type="text" id="title" placeholder="Enter title"  onChange={(e)=>{setSearch( e.target.value.trim())}}  />

                                    <button onClick={()=>{navigate(`/searchUtilityByTitle/${search}`)}}>Search</button>
                                </div>
                                
                                

                            </div>
                            <div className="links">
                                {/* <Link to="/CreateDesigner" className='main-btn'>Find Job</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="images">
                            <img src="./images/img1.jpg" alt="" className="main-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-design">
                <div className="text-card">
                    <Link to={`/externalDesign/:design_type`}><h4>Exterior Design</h4> </Link>
                </div>
            </div>
            <div className="in-design">
                <div className="text-card right">
                    <Link to={`/internalDesign/:design_type`}><h4>Interior Design</h4> </Link>
                </div>
            </div>




            <footer>
                <h2>Contact Us</h2>
                <div className="social-icons">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />

                </div>
            </footer>
        </div>
    )
}

export default Home
