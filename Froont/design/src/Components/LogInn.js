import React from 'react';
import './LogInn.css';
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

export default function LogInn() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');

	const state = useSelector((state) => {
		return {
			user: state.userReducer.user
		};
	});

	const handelChangeUserName = (e) => {
		setUserName(e.target.value);
	};

	const handlChangePassword = (e) => {
		setPassword(e.target.value);
	};

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
				console.log(err);
			});
	};

	return (
		<div className="boddy">
			<div className="containerr" id="containerr">
				
				<div class="form-container sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						<label for="userName">
							<b>
							<BiUser  />userName :
							</b>
						</label>
						<input type="name" placeholder="userName" onChange={handelChangeUserName} />

						<label for="pasword">
							<b>
								{' '}
								<FontAwesomeIcon id="show-hide" icon={faEye} required /> pasword:
							</b>
						</label>
						<input type="password" placeholder="Password" onChange={handlChangePassword} />
						<button>Sign In</button>
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
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost" id="signUp">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
