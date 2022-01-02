import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Utility() {
	const state = useSelector((state) => {
		return {
			user: state.userReducer.user,
			// utility:state.utilityReducer.utility,
			token: state.userReducer.token
		};
	});
	console.log(state.utility);
	const navigate = useNavigate();
	const [ utility, setUtility ] = useState([]);
	const [ gallery, setGallery ] = useState([]);

	// const [loading, setLoading] = useState(false)

	const { utility_id } = useParams();
	console.log(utility_id);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/utility/row/${utility_id}`)
			.then((response) => {
				setUtility(response.data);
				
				console.log(response.data.gallery);
                setGallery(response.data.gallery)
                console.log(response.data.gallery);

			})
			.catch((err) => {
				console.log(err.data);
			});
	}, []);
	console.log(utility);

	function deleteUtility() {
		const config = {
			headers: { Authorization: `Bearer ${state.token}` }
		};
		axios
			.delete(`http://localhost:8080/utility/${utility_id}`, config)
			.then((res) => {
				console.log(res.data);

				navigate('/');
			})
			.catch((err) => {
				console.log(err.data);
			});
	}

	console.log(utility_id);
	return (
		<div className="items">
			<div className="profile sections">
				<div className="container">
					<div className="utility .inner-wrapper">
						<div className="top-wrapper">
							<div className="head">
								<div className="utility.box">
									{/* Put image src here */}
									<div className='row justify-content-center'>
										<div className='col-md-10'>
										<div className=''>
											<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
											<div className="carousel-inner">
												{gallery.map((ele)=>(
													<div className="carousel-item active">
													<img src={ele.picture} className="d-block w-100" alt="..." />
													</div>
												))}											

												
											</div>
											<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
												<span class="carousel-control-prev-icon" aria-hidden="true"></span>
												<span class="visually-hidden">Previous</span>
											</button>
											<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
												<span class="carousel-control-next-icon" aria-hidden="true"></span>
												<span class="visually-hidden">Next</span>
											</button>
											</div>
										

										<div className="box1">
											<h3>{utility.title}</h3>
											<hr />
											<h3>description :</h3>
											<p>{utility.description}</p>
											<hr />
											<h3>Instruction : </h3>
											<p> {utility.instructions}</p>
										</div>
										
										
										
										<div className='col-12 text-center '>
										    <button className='btn btn-danger' onClick={deleteUtility}>Delete</button>
										</div>
									</div>
										</div>
									</div>
									

									{/* {gallery.map((ele) => {
										return (
											<div>
											
												{console.log(ele)}{' '}
												
										
												<img src={ele.picture} className="mw-100" srcalt="./images/img4.jpg" />
											
											</div>
										
										);
									})} */}
									{/* <img src={utility.picture} className='mw-100' srcalt="./images/img4.jpg" />   */}
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			//{' '}
		</div>
	);
}
