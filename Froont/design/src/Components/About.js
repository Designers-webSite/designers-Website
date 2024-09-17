import React from 'react'
import"./About.css"
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

export default function About() {
    return (
        <>
        <div class="blue-bg" > </div>
<div class="white-bg shadow"> 

</div>
<div class="content0">
  <p className='pp'><span className='about'>About Us:</span><br/> <br/>This webSite  An important gateway to find new clients and new design work,<br/> the designer can subscribe to the site and then open a design-related service ,<br/> allocating it to the design for internal designer and external design<br/>The visitors can search for interior or exterior design services and contact him on his number.</p>

 
  <p className='pp'><span className='about'>services:</span><br/></p>
  <div class="row1-container">
    <div class="box box-down cyan" id="bo">
      <h5><b>Search</b> </h5>
      <p>serch about best services in website and contact with designer</p>
      <img className='imgg' src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red" id="bo">
      <h5><b>Sections  </b> </h5>
      <p>Interior Design and Exterior designthe </p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue" id="bo">
    <h5><b> Find Job</b> </h5>
      <p> designer can subscribe to the site and then open design-related service</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
    
</div>
  </div>

  
  <div className="social-icons">
  <a className="a" href="https://www.facebook.com/"> <FaFacebook /></a>
  <a href="https://www.instagram.com/" > <FaInstagram /></a>
  <a href="https://www.facebook.com/" ><FaTwitter /></a>
                    </div>
  


</>
    )
}
