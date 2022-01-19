import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import 'typeface-roboto';
import { BiPhoneCall } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';

const HomePage = () => {
	return (
		<div className="contain">
			<div className="roww">
				<div className="colom">
					<h1 className="h1-homePage">Designers</h1>
					<h1 className="p-homePage">Best Services from Best Designers in Arabic World</h1>

					<br />
					<br />

					<p className="p-homePage2">is the third area in which energy conservation gains may be made</p>
					{/* <div className='card-btn3'>
       <Link to="/addutility" ><h5 className="text-black" id="find">find job</h5></Link>
       </div> */}
				</div>
				<div className="colom">
					<div className="card-btn1">
						<Link to={`/internalDesign/:design_type`}>
							{' '}
							<h5 className="text-black">internal design </h5>
						</Link>
					</div>

					<div className="card-btn2">
						<Link to={`/externalDesign/:design_type`}>
							{' '}
							<h5 className="text-black">External Design </h5>
						</Link>
					</div>
				</div>
			</div>

			<div className="fo-home">
				<div className="text-center text-lg-start bg-light text-muted">
					<div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
						<div className="container text-center text-md-start mt-5">
							<div className="row mt-1">
								<div className="col-md-3 col-lg-3 col-xl-4 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										<i className="fas fa-gem me-3" />Thuria Decor
									</h6>
									<p>
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
											<p className="text-black">Servies </p>
										</Link>
									</p>
									<p>
										<Link to={`/login`}>
											{' '}
											<p className="text-black">Log In </p>
										</Link>
									</p>
								</div>

								<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
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
									<p>
										<i className="fas fa-print me-3" />
										<BiPhoneCall />+ 966 534 544 88
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		//   </div>
	);
};

export default HomePage;
