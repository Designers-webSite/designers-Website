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
import { BiAt } from "react-icons/bi"


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
		<div className="bodd">
			<div  id="containerrr">
				
				<div className="form-container sign-in-container">
					<form action="#">
							
					

						<h2 className="heading mb-4">Log In</h2>

						
						<div className="input-group input-group-icon">
								<input type="text"   placeholder="user name"onChange={handelChangeUserName} required />
								<div className="input-icon">
									<i class="fa fa-user" />
									< BiAt  />
								</div>
							</div>

							<div className="input-group input-group-icon">
									<input
										type="pasword"
										placeholder="password"
										onChange={handlChangePassword}
										required
									/>
									<div className="input-icon">
										<i className="fa fa-envelope">
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
						</form>
						</div>
					<div className="overlay-container">
					<div className="overlayy">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn">
								Sign In
							</button>
						</div>
						<div className="overlay-panel overlay-right">
							 <img className='lg' src="https://th.bing.com/th/id/R.49a960950209a09f51c9a819cad5cc2b?rik=p6qkKxhFEecmLg&pid=ImgRaw&r=0" width="60%" />
							<h1>Hello, Friend!</h1>
							
						</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Login;




// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, Navigate, useLocation, useParams } from 'react-router-dom';
// import { useState } from 'react';
// import { addUser, addToken } from '../reducers/user/action';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import jwt_decode from 'jwt-decode';
// import Swal from 'sweetalert2';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { faEye, faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { BiUser } from "react-icons/bi"


// const Login = () => {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const location = useLocation();
// 	const [ userName, setUserName ] = useState('');
// 	const [ password, setPassword ] = useState('');

// 	const state = useSelector((state) => {
// 		return {
// 			user: state.userReducer.user,
// 			token: state.userReducer.token
// 		};
// 	});

// 	const handelChangeUserName = (e) => {
// 		setUserName(e.target.value);
// 	};

// 	const handlChangePassword = (e) => {
// 		setPassword(e.target.value);
// 	};
//      //--------------------------------------Log in by user name and password-------------------------------------

// 	const add = () => {
// 		const data = {
// 			userName: userName,
// 			password: password
// 		};

// 		axios
// 			.post('http://localhost:8080/login', data)
// 			.then((res) => {
// 				console.log(res.data);
// 				const token = res.data.access_token;

// 				const decoded = jwt_decode(token);
// 				console.log(decoded);

// 				const user_action = addUser({
// 					id: decoded.id,
// 					userName: decoded.sub
// 				});

// 				const token_action = addToken(token);

// 				dispatch(user_action);
// 				dispatch(token_action);
// 				console.log(user_action);
// 				Swal.fire({
// 					position: 'top-end',
// 					icon: 'success',
// 					title: 'Your sucess log in ',
// 					showConfirmButton: false,
// 					timer: 1500
// 				});
// 				navigate('/');
// 			})
// 			.catch((err) => {
// 				Swal.fire({
// 					title: 'Error!',
// 				  text: 'pasword or userName inCorrect',
// 					icon: 'error',
// 				  confirmButtonText: 'Cool'
// 			  })
// 				console.log(err);
// 			});
// 	};

// 	return (
// 		<div>
// 			<div class="container d-flex justify-content-center" id="sig" >
// 				<div class="row my-4">
// 					<div class="col-md-5 text-left text-white lcols">
// 						<div class="greeting" id="gre">
// 							<h4>
// 								Welcome to <span class="txt">Designers webSite</span>
// 							</h4>
// 						</div>
// 					</div>
// 					<div class="col-md-4 rcol" id="borders">

// 						<h2 className="heading mb-4">Log In</h2>

						
// 						<div className="input-group input-group-icon">
// 								<input type="text" onChange={handelChangeUserName} required />
// 								<div className="input-icon">
// 									<i class="fa fa-user" />
// 									< BiUser  />
// 								</div>
// 							</div>

// 							<div class="input-group input-group-icon">
// 									<input
// 										type="pasword"
// 										onChange={handlChangePassword}
// 										required
// 									/>
// 									<div class="input-icon">
// 										<i class="fa fa-envelope">
// 											{' '}
// 											<FontAwesomeIcon
// 												id="show-hide"
// 												icon={faEye}
// 												required
// 											/>{' '}
// 										</i>
// 									</div>
// 									</div>


// 						<button type="button" className="btn btn-success mt-5" id="btttn" onClick={add}>
// 							log in 
// 						</button>
// 					</div>

// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;
