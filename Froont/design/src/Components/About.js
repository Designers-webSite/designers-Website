import React from 'react'
import"./About.css"
import "./Ab.css"
import { FaFacebook, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa'

export default function About() {
    return (
        <>
        <div class="blue-bg" > </div>
<div class="white-bg shadow"> 

</div>
<div class="content0">
  <p className='pp'><span className='about'>About Us:</span><br/> <br/>This webSite  An important gateway to find new clients and new design work, the designer can subscribe to the site and then open a new design-related service, allocating it to the design for internal designer and external design.</p>

  <p className='pp'>On this site, you can add your services as a designer, and visitors can search for interior or exterior design services and contact him on his number</p>
  <p className='pp'><span className='about'>services:</span><br/></p>
  <div class="row1-container">
    <div class="box box-down cyan" id="bo">
      <h2>Search </h2>
      <p>serch about best services in website and contact with designer</p>
      <img className='imgg' src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red" id="bo">
      <h2>Sections   </h2>
      <p>Interior Design and Exterior designthe </p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue" id="bo">
    <h2> Find Job </h2>
      <p> designer can subscribe to the site and then open design-related service</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
    
</div>
  </div>
  
  
  <div className="social-icons">
  <a className="a" href="https://www.facebook.com/" className="u0 text-primary"> <FaFacebook /></a>
  <a href="https://www.instagram.com/" className="u0 text-primary"> <FaInstagram /></a>
  <a href="https://www.facebook.com/" className="u0 text-primary"><FaTwitter /></a>
                    </div>
  


</>
    )
}
