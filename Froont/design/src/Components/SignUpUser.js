import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/user/action';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import Validaiton from './Validaiton';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { AiTwotoneMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BiAt } from "react-icons/bi"


export default function SignUpUser() {
	const [ fullName, setFullName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ fill, setFill ] = useState('');
	const [ matchPas, setMatchPass ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ errors, setErrors ] = useState({});
	const [ show, setShow ] = useState(false);
	const [ matchEmail, setMatchEmail ] = useState(true);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const add = (e) => {
		e.preventDefault();

		let validationResult = Validaiton(fullName, userName, phone, email, password, password2);
		console.log(fullName);
		console.log(validationResult);
		if (validationResult) setErrors(validationResult);
		else setErrors({});

		if (validationResult == null) {
			console.log('llloooged here');
			axios
				.post('http://localhost:8080/user', data)
				.then((res) => {
					const action = addUser(res.data);
					dispatch(action);
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your work has been saved',
						showConfirmButton: false,
						timer: 1500
					});
				})
				.catch((err) => {
					Swal.fire({
						title: 'Error!',
						text: 'Do you want to continue',
						icon: 'error',
						confirmButtonText: 'Cool'
					});
					console.log(err);
				});

			navigate('/login');
		}
	};
	const handelChangeFullName = (e) => {
		setFullName(e.target.value);
	};
	const handelChangeUserName = (e) => {
		setUserName(e.target.value);
	};
	const handelChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const valid = (item, v_icon, inv_icon) => {
		let text = document.querySelector(`#${item}`);
		text.style.opacity = '1';
		let valid_icon = document.querySelector(`#${item}.#${v_icon}`);
		valid_icon.style.opacity = '1';

		let invalid_icon = document.querySelector(`#${item}.#${inv_icon}`);
		invalid_icon.style.opacity = '0';
	};
	const handlChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const handlChangePhone = (e) => {
		setPhone(e.target.value);
	};

	const handlChangePassword2 = (e) => {
		setPassword2(e.target.value);
	};

	const handelShowHide = () => {
		setShow(!show);
	};

	const data = {
		fullName,
		userName,
		email,
		phone,
		password,
		picture:
			'https://firebasestorage.googleapis.com/v0/b/fir-61d22.appspot.com/o/images%2F2740212.png?alt=media&token=25419864-1e0b-43f4-b2ac-7a35ef41d5fc',
		role: 'designer'
	};

	return (
			<div className="boddy">
			<div className="containerr" id="containerr">
				
				<div class="form-container sign-in-container">
					<form action="#">
							
							<h2 className="heading mb-3">Sign up</h2>

							<div className="input-group input-group-icon">
								<input type="text" id=" texxt"  placeholder='name'
								onChange={handelChangeFullName} required />
								{errors.fullName && <p className="error">{errors.fullName}</p>}
								<div className="input-icon">
									<i className="fa fa-user">
										<BsFillPersonFill />
									</i>
								</div>
							</div>

							<div className="input-group input-group-icon">
								<input type="text" placeholder='user name' onChange={handelChangeUserName}  required />
								{errors.userName && <p className="error">{errors.userName}</p>}
								<div className="input-icon">
									<i className="fa fa-user" />
									<BiAt />
								</div>
							</div>
							<div className="input-group input-group-icon">
								<input type="phone"    placeholder="phone" onChange={handlChangePhone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> 
								{errors.phone && <p className="error">{errors.phone}</p>}
								<div className="input-icon">
									<i className="fa fa-envelope">
										<BiPhoneCall />
									</i>
								</div>
							</div>

							<div class="input-group input-group-icon">
								<input type="email"  placeholder="email" onChange={handelChangeEmail} required />
								{errors.email && <p className="error">{errors.email}</p>}
								<div className="input-icon">
									<i className="fa fa-envelope">
										<AiTwotoneMail />
									</i>
								</div>
							</div>

							
								<div className="input-group input-group-icon">
									<input
										type="pasword"
										placeholder="password"
										onChange={handlChangePassword}
										required
									/>
                                    	{errors.password && <p className="error">{errors.password}</p>}
									<div className="input-icon">
										<i className="fa fa-envelope">
											{' '}
											<FontAwesomeIcon
												id="show-hide"
												icon={faEye}
												onClick={handelShowHide}
												required
											/>{' '}
										</i>
									</div>
							
								<div className="image">
									<i className="fas fa-eye" />
								</div>
							</div>


						<div class="input-group input-group-icon">
								
								
								<input
									type="password"
									placeholder="confirm password"
									onChange={handlChangePassword2}
									required
								/>
								{errors.password2 && <p className="error">{errors.password2}</p>}

							</div>
                            <button type="button" className="btn btn-success mt-4" id="getStarted" onClick={add}>
							Get satrted now
						</button>
						<p className="exist mt-3" id="existing">
							Existing user?{' '}
							<span
								onClick={() => {
									navigate('/login');
								}}
							>
								Log In
							</span>{' '}
						</p>
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
							<p>Enter your personal details and start journey with us</p>
							<button className='lllog' onClick={() => {
									navigate('/login')}}>Log in </button>
						</div>
						</div>
					</div>
				</div>
			</div>

				
	);
}

