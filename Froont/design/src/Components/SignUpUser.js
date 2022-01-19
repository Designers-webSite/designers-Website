import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/user/action';
import { useNavigate } from 'react-router-dom';
import { storage } from '../FireBase/Index';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import Validaiton from './Validaiton';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
// import "./SignUpUser.css"
import { AiTwotoneMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BiUser } from "react-icons/bi"

// import "./Update.css"

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
		<div >
			<div class="container d-flex justify-content-center" id="signUp">
				<div class="row my-4">
					<div class="col-md-4 text-left text-white lcol">
						<div class="greeting">
                            <div className=''>
                            <img className='lg' src="https://th.bing.com/th/id/R.49a960950209a09f51c9a819cad5cc2b?rik=p6qkKxhFEecmLg&pid=ImgRaw&r=0" width="60%" />

                            </div>
							<h4>
								Welcome to <span class="txt">Designers webSite</span>
							</h4>
						</div>
					</div>
					<div class="col-md-6 rcol" id="border">
						<form className="sign-up">
							<h2 className="heading mb-4">Sign up</h2>

							<div className="input-group input-group-icon">
								<input type="text" id=" texxt" onChange={handelChangeFullName} required />
								{errors.fullName && <p className="error">{errors.fullName}</p>}
								<div className="input-icon">
									<i class="fa fa-user">
										<BsFillPersonFill />
									</i>
								</div>
							</div>

							<div className="input-group input-group-icon">
								<input type="text" onChange={handelChangeUserName} required />
								{errors.userName && <p className="error">{errors.userName}</p>}
								<div className="input-icon">
									<i class="fa fa-user" />
									<BiUser />
								</div>
							</div>
							<div class="input-group input-group-icon">
								<input type="phone" onChange={handlChangePhone} pattern="^\d{10}$" required />
								{errors.phone && <p className="error">{errors.phone}</p>}
								<div class="input-icon">
									<i class="fa fa-envelope">
										<BiPhoneCall />
									</i>
								</div>
							</div>

							<div class="input-group input-group-icon">
								<input type="email" onChange={handelChangeEmail} required />
								{errors.email && <p className="error">{errors.email}</p>}
								<div class="input-icon">
									<i class="fa fa-envelope">
										<AiTwotoneMail />
									</i>
								</div>
							</div>

							
								<div class="input-group input-group-icon">
									<input
										type="pasword"
										onChange={handlChangePassword}
										required
									/>
                                    	{errors.password && <p className="error">{errors.password}</p>}
									<div class="input-icon">
										<i class="fa fa-envelope">
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
								Log in
							</span>{' '}
						</p>
						</form>
						
					</div>
				</div>
			</div>
		</div>
	);
}

// import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addUser } from "../reducers/user/action"
// import { useNavigate } from 'react-router-dom';
// import { storage } from "../FireBase/Index"
// import { BsFillPersonFill } from "react-icons/bs";
// import { IoEyeSharp } from "react-icons/io5";
// import Validaiton from './Validaiton';
// import Swal from 'sweetalert2'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
// import "./SignUpUser.css"
// import { AiTwotoneMail } from 'react-icons/ai';
// import { BiPhoneCall } from 'react-icons/bi';

// export default function SignUpUser() {
//     const [fullName, setFullName] = useState("")
//     const [userName, setUserName] = useState("")
//     const [phone, setPhone] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [password2, setPassword2] = useState("")
//     const [fill, setFill] = useState("")
//     const [matchPas, setMatchPass] = useState("")
//     const [message, setMessage] = useState("")
//     const [errors, setErrors] = useState({});
//     const [show, setShow] = useState(false)
//     const [matchEmail, setMatchEmail] = useState(true)

//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//     const add = (e) => {
//         e.preventDefault();

//         let validationResult = Validaiton(fullName, userName, phone, email, password, password2)
//         console.log(fullName);
//         console.log(validationResult);
//         if (validationResult)
//             setErrors(validationResult);

//         else
//             setErrors({})

//         if (validationResult == null) {

//             console.log("llloooged here");
//             axios
//                 .post("http://localhost:8080/user", data)
//                 .then((res) => {
//                     const action = addUser(res.data)
//                     dispatch(action)
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: 'Your work has been saved',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })

//                 })
//                 .catch((err) => {
//                          Swal.fire({
//                              title: 'Error!',
//                            text: 'Do you want to continue',
//                              icon: 'error',
//                            confirmButtonText: 'Cool'
//                        })
//                     console.log(err);
//                 });

//             navigate("/login")
//         }

//     }
//     const handelChangeFullName = (e) => {
//         setFullName(e.target.value);
//     };
//     const handelChangeUserName = (e) => {
//         setUserName(e.target.value);
//     };
//     const handelChangeEmail = (e) => {
//         setEmail(e.target.value);
//     };

//     const valid = (item, v_icon, inv_icon) => {
//         let text = document.querySelector(`#${item}`)
//         text.style.opacity = "1";
//         let valid_icon = document.querySelector(`#${item}.#${v_icon}`)
//         valid_icon.style.opacity = "1";

//         let invalid_icon = document.querySelector(`#${item}.#${inv_icon}`)
//         invalid_icon.style.opacity = "0";

//     }
//     const handlChangePassword = (e) => {
//         setPassword(e.target.value)
//     }
//     const handlChangePhone = (e) => {
//         setPhone(e.target.value)
//     }

//     const handlChangePassword2 = (e) => {
//         setPassword2(e.target.value)
//     }

//     const handelShowHide = () => {
//         setShow(!show);

//     }

//     const data = {
//         fullName,
//         userName,
//         email,
//         phone,
//         password,
//         picture: "https://firebasestorage.googleapis.com/v0/b/fir-61d22.appspot.com/o/images%2F2740212.png?alt=media&token=25419864-1e0b-43f4-b2ac-7a35ef41d5fc",
//         "role": "designer"

//     }

//     return (

//         <div>
//             <div class="container d-flex justify-content-center" id="signUp">
//                 <div class="row my-5">
//                     <div class="col-md-6 text-left text-white lcol">
//                         <div class="greeting">
//                             <h4>Welcome to <span class="txt">Designers webSite</span></h4>
//                         </div>

//                     </div>

//                     <div class="col-md-6 rcol" id="border">
//                         <form className="sign-up">
//                             <h2 className="heading mb-4">Sign up</h2>
//                             <div className="form-group fone mt-2" id="font"> <i class="fas fa-user"></i>
//                                 <label for="name"><b><BsFillPersonFill />Name :</b></label>
//                                 <input type="name" className="form-control" onChange={handelChangeFullName} required />
//                                 {errors.fullName && <p className="error">{errors.fullName}</p>}
//                             </div>
//                             <div className="form-group fone mt-2" id="font"> <i class="fas fa-user"></i>
//                                 <label for="userName"><b><BsFillPersonFill />userName :</b></label>
//                                 <input type="userName" className="form-control" onChange={handelChangeUserName} required />
//                                 {errors.userName && <p className="error">{errors.userName}</p>}
//                             </div>
//                             <div className="form-group fone mt-2"id="font"> <i class="fas fa-envelope"></i>
//                                 <label for="email"><b> <AiTwotoneMail />Email:</b></label>
//                                 <input type="email" className="form-control" onChange={handelChangeEmail} required />
//                                 {errors.email && <p className="error">{errors.email}</p>}
//                             </div>
//                             <div className="form-group fone mt-2" id="font"> <i class="fas fa-envelope"></i>
//                                 <label for="email"><b> <BiPhoneCall />Phone:</b></label>
//                                 <input type="email" className="form-control" onChange={handlChangePhone} pattern="^\d{10}$"   required />
//                                 {errors.phone && <p className="error">{errors.phone}</p>}
//                             </div>

//                             <div className="form-group fone mt-2" id="font"> <i class="fas fa-lock"></i>

//                                 <label for="pasword"><b> <FontAwesomeIcon id="show-hide" icon={faEye} onClick={handelShowHide} required />   pasword:</b></label>
//                                 <input type="pasword" className="form-control" onChange={handlChangePassword} required />
//                                 {/* {show ? "txt" :" password"}  className="form-control"  placeholder={fill.length>1?fill:" "} */}
//                                 {errors.password && <p className="error">{errors.password}</p>}

//                                 <div className="image"><i className="fas fa-eye"></i></div>

//                             </div>

//                             <div className="form-group fone mt-2"> <i class="fas fa-lock"></i>
//                                 <label for=" confirm pasword"><b>confirm pasword:</b></label>
//                                 <input type="password" className="form-control" onChange={handlChangePassword2} required />
//                                 {errors.password2 && <p className="error">{errors.password2}</p>}

//                             </div>

//                         </form>
//                         <button type="button" className="btn btn-success mt-4" id="getStarted" onClick={add}>Get satrted now</button>
//                         <p className="exist mt-3" id="existing" >Existing user? <span onClick={() => { navigate("/login") }}>Log in</span> </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }
