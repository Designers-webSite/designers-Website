import React from 'react'
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import SearchUtilityByTitle from './SearchUtilityByTitle';
import "./HomePage.css"
import 'typeface-roboto'

const HomePage = () => {

    const navigate=useNavigate()
let a ;
const[search,setSearch]=useState();

    return (
    
<div className='contain'>
   <div className='roww'>
       <div className='colom'>
       <h1 className='h1-homePage'>Design</h1>
       <p className='p-homePage'>Architectural design, building practices and construction 
       materials use</p>
        <br/><br/>

       <p  className='p-homePage2'>is the third area in which energy conservation gains may be made</p>
       <div className='card-btn3'>
       <Link to="/addutility" ><h5 className="text-black" id="find">find job</h5></Link>
       </div>
       

       </div>
       <div className='colom'>
           <div className='card-btn1'>
           <Link to={`/internalDesign/:design_type`} > <h5 className="text-black">internal design </h5></Link>
               {/* <p>bnm,kllxcvbnm,</p> */}
           </div>
           
           <div className='card-btn2'>
           <Link to={`/externalDesign/:design_type`}> <h5 className="text-black">External Design  </h5></Link>
               {/* <p>bnm,kllxcvbnm,</p> */}
           </div>

       </div>
   </div>

   <div  className='fo-home'>
   <h2>Contac Us</h2><br/>
                <div className="social-icons">
               
                    
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />

                </div>
            </div>

</div>

        
   
           
    )
}

export default HomePage
