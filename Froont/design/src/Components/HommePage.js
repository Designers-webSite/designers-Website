import React from 'react'
import { useState, useEffect } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import {  } from 'react-router-dom';
export default function HommePage() {
const location=useLocation()


    return (
		<div >
        <div className='banner'>
            	
            <div className='content1'>
                <h1>DESIGNERS WEB SITE</h1>
                <p className='pHome'>Best Services from Best Designers in Arabic World
                </p>
                <div className='linkDesign'>
                    <Link to={`/internalDesign/:design_type`} className='button1'><span  className='span1'></span>
						
					INTERNAL DESIGN 	</Link> 
					<Link to={`/externalDesign/:design_type`} className='button1'><span className='span1' ></span> EXTERNAL DESIGN</Link>

                </div>
				</div>
				</div>
                <div className="fo-home" id="nnav">
				<div className="text-center text-lg-start bg-light text-muted">
					<div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" id="nnav">
						<div className="container text-center text-md-start mt-5">
							<div className="row mt-1">
								<div className="col-md-3 col-lg-3 col-xl-4 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										<i className="fas fa-gem me-3" /> Decor web site
									</h6>
									<p id="texxt1">
										full-service architectural, interior,<br /> and landscaping design
										<br />
										Building Your Dreams
									</p>
								</div>

								<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
									<h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
									<p>
										<Link to={`/AllServies/:design_type`}>
											{' '}
											<p  id="texxt">Serviؤes </p>
										</Link>
									</p>
									<p>
										<Link to={`/About`}>
											{' '}
											<p  id="texxt" >About Us </p>
										</Link>
									</p>
									<p>
										<Link to={`/login`}>
											{' '}
											<p  id="texxt" >Log In </p>
										</Link>
									</p>
								</div>

								<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" >
									<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
									<p>
										<i className="fas fa-home me-3" /> Saudi Arabia, Rieadh
									</p>
									<p>
										<i className="fas fa-envelope me-3" />
										<AiTwotoneMail /> info@example.com
									</p>
									<p>
										<i className="fas fa-phone me-3" />
										<BiPhoneCall />+ 966 534 567 88{' '}
									</p>
									
								</div>
							</div>
                            </div>
                            </div>
                            </div>
                            </div>

            </div>

        
            
    )
}
