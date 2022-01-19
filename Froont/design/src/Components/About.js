import React from 'react'
import"./About.css"
import { FaFacebook, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa'

export default function About() {
    return (
        <>
        <div class="blue-bg"> </div>
<div class="white-bg shadow"> 

</div>
<div class="content0">
  <h1>Designer website</h1>
  <p className='pp'>This webSite  An important gateway to find new clients and new design work, the designer can subscribe to the site and then open a new design-related service, allocating it to the design for internal designer and external design.</p>

  <p className='pp'>On this site, you can add your services as a designer, and visitors can search for interior or exterior design services and contact him on his number</p>

  <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="https://1.bp.blogspot.com/-TekOsGIQCOk/XJqziNCOrqI/AAAAAAADRm4/Fl38Iugztc04Pz0Mus4VM1a4t4WBGspjwCLcBGAs/s1600/06a0fc4ba2402d1967a8f17b7cd2dcf0.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
         
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/20cd6e100346235.5f06e536326c8.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          {/* <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                  */}
          {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" /> */}
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  
  
</ul>
  <div className="social-icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaBehance />
                    </div>
</div>


</>
    )
}
