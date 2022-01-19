import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';

import Swal from 'sweetalert2';
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
	const [utility, setUtility] = useState([]);
	const [gallery, setGallery] = useState([]);
	const [user, setUser] = useState([]);

	// const [loading, setLoading] = useState(false)

	const { utility_id } = useParams();
	console.log(utility_id);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/utility/row/${utility_id}`)
			.then((response) => {
				setUtility(response.data);
				setUser(response.data.user);
				console.log(response.data.gallery);
				setGallery(response.data.gallery);
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
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'service successfully deleted',
					showConfirmButton: false,
					timer: 1500
				})
				navigate("/")

				navigate('/');
			})
			.catch((err) => {
				Swal.fire({
					title: 'Error!',
				  text: 'dont delete',
					icon: 'error',
				  confirmButtonText: 'Cool'
			  })
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
									<div className="row justify-content-center">
										<div className="col-md-10">
											<div className="">
												<AliceCarousel autoPlay autoPlayInterval="3000">
													{gallery.map((ele) => (
														<div className='sliderimg'>
															<img
																src={ele.picture}
																className="d-block w-80"
																alt="..."
															/>
														</div>
													))}
												</AliceCarousel>


												{console.log(utility.title)}

												<div className="box1">
													<h3 className="modTitle">{utility.title}</h3>
													<br />
													<h3>description :</h3>
													<p>{utility.description}</p>
													<hr />
													<h3>Instruction : </h3>
													<p> {utility.instructions}</p>
												</div>

												{user.id == state.user.id ? (
													<div className="col-12 text-center ">
														<button className="btnDelete" id="bEdit1" onClick={deleteUtility}>
															<FaTrashAlt />
														</button>

														<Link
															className="btn btn-primary"
															to={`/updateUtility/${utility_id}`}
														>
															<FaUserEdit />

														</Link>
													</div>
												) : (
													''
												)}
											</div>
										</div>
									</div>


								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
