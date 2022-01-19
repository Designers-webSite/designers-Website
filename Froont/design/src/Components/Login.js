import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Navigate, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { addUser, addToken } from '../reducers/user/action';
import axios from 'axios';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { BsFillPersonFill } from 'react-icons/bs';
import { faEye, faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiUser } from "react-icons/bi"


const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');

	const state = useSelector((state) => {
		return {
			user: state.userReducer.user,
			token: state.userReducer.token
		};
	});

	const handelChangeUserName = (e) => {
		setUserName(e.target.value);
	};

	const handlChangePassword = (e) => {
		setPassword(e.target.value);
	};
     //--------------------------------------Log in by user name and password-------------------------------------

	const add = () => {
		const data = {
			userName: userName,
			password: password
		};

		axios
			.post('http://localhost:8080/login', data)
			.then((res) => {
				console.log(res.data);
				const token = res.data.access_token;

				const decoded = jwt_decode(token);
				console.log(decoded);

				const user_action = addUser({
					id: decoded.id,
					userName: decoded.sub
				});

				const token_action = addToken(token);

				dispatch(user_action);
				dispatch(token_action);
				console.log(user_action);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your sucess log in ',
					showConfirmButton: false,
					timer: 1500
				});
				navigate('/');
			})
			.catch((err) => {
				Swal.fire({
					title: 'Error!',
				  text: 'pasword or userName inCorrect',
					icon: 'error',
				  confirmButtonText: 'Cool'
			  })
				console.log(err);
			});
	};

	return (
		<div>
			<div class="container d-flex justify-content-center" id="sig" >
				<div class="row my-4">
					<div class="col-md-5 text-left text-white lcols">
						<div class="greeting" id="gre">
							<h4>
								Welcome to <span class="txt">Designers webSite</span>
							</h4>
						</div>
					</div>
					<div class="col-md-4 rcol" id="borders">

						<h2 className="heading mb-4">Log In</h2>

						
						<div className="input-group input-group-icon">
								<input type="text" onChange={handelChangeUserName} required />
								<div className="input-icon">
									<i class="fa fa-user" />
									< BiUser  />
								</div>
							</div>

							<div class="input-group input-group-icon">
									<input
										type="pasword"
										onChange={handlChangePassword}
										required
									/>
									<div class="input-icon">
										<i class="fa fa-envelope">
											{' '}
											<FontAwesomeIcon
												id="show-hide"
												icon={faEye}
												required
											/>{' '}
										</i>
									</div>
									</div>


						<button type="button" className="btn btn-success mt-5" id="btttn" onClick={add}>
							log in 
						</button>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Login;
