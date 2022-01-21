import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { addUser } from '../reducers/user/action';
import { useDispatch } from 'react-redux';
import { storage } from '../FireBase/Index';
import Alert from 'react-bootstrap/Alert';
import { BsFillPersonFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import ValidaitonUpdateUser from './ValidaitonUpdateUser';
import './Update.css';
import { BiPhoneCall, BiUser } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';

export default function UpdateUser() {
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			user: state.userReducer,
			token: state.userReducer.token
		};
	});
	const [ errors, setErrors ] = useState({});

	const { user_id } = useParams();
	const navigate = useNavigate();
	const [ fullName, setFullName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ phone, setPhone ] = useState('');

	const [ picture, setPicture ] = useState(null);
	const [ url, setUrl ] = useState('');
	const [ progre, setProgre ] = useState(0);
	const [ update, SetUpdate ] = useState();

	const [ fill, setFill ] = useState('');

	const data = {
		fullName: fullName,
		userName: userName,
		phone: phone,
		email: email,
		password: password,
		picture: url
	};
    const data1 = {
		fullName: fullName,
		userName: userName,
		phone: phone,
		email: email,
		password: password,
		picture: url
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
	

	const handelChangePhone = (e) => {
		setPhone(e.target.value);
	};

	const config = {
		headers: { Authorization: `Bearer ${state.token}` }
	};
	const x = JSON.parse(localStorage.getItem('user'));
	console.log(x.id);
         //--------------------------------------get information user for update -------------------------------------


	useEffect(() => {
    
		axios
			.get(`http://localhost:8080/user/${user_id}`)
			.then((res) => {
				setFullName(`${res.data.fullName}`);
				setUserName(`${res.data.userName}`);
				setEmail(`${res.data.email}`);
				setPicture(`${res.data.picture}`);
				setUrl(`${res.data.picture}`);
				setPhone(`${res.data.phone}`);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	console.log('get pic heeereee', picture);
     //--------------------------------------Update information user -------------------------------------
     console.log(data);

	const updateInfo = () => {
		let validationResult = ValidaitonUpdateUser(fullName, userName, email, picture);
		console.log(fullName);
		console.log(validationResult);
		if (validationResult) setErrors(validationResult);
		else setErrors({});

		if (validationResult == null) {
			axios
				.put(`http://localhost:8080/user/${user_id}`, data, config)
				.then((res) => {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Account successfully updated',
						showConfirmButton: false,
						timer: 1500
					});
					navigate('/');
				})
				.catch((err) => {
					Swal.fire({
						title: 'Error!',
						text: 'not update ',
						icon: 'error',
						confirmButtonText: 'Cool'
					});
					console.log(err);
				});
		}
	};
console.log(data);
	const handleChange = (e) => {
        // // console.log("here is e ",e);
		if (e.target.files[0]) {
			setPicture(e.target.files[0]);
		}
	};

	const handleUpload = (e) => {
        e.preventDefault()
        const uploadTask = storage.ref(`image/${picture.name}`).put(picture);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progre = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgre(progre);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                   .ref("image")
                   .child(picture.name)
                   .getDownloadURL()
                   .then(url => {
                       setUrl(url);
                   });
            }
            );
	};
	console.log('image :', picture);

	return (
		<div className="conButton">
			<div class="containerUser">
				<form className="formUser">
					<div class="rows">
						<h4 className=".hh4">Update User</h4>

						<div className="input-group input-group-icon" id="input">
							<input type="text" placeholder={fullName} onChange={handelChangeFullName} />
							{errors.fullName && <p className="error">{errors.fullName}</p>}
							<div className="input-icon">
								<i class="fa fa-user">
									<BsFillPersonFill />
								</i>
							</div>
						</div>
						<div className="input-group input-group-icon">
							<input type="text" placeholder={userName} onChange={handelChangeUserName} />
							{errors.userName && <p className="error">{errors.userName}</p>}
							<div className="input-icon">
								<i class="fa fa-user" />
								<BiUser />
							</div>
						</div>
						<div class="input-group input-group-icon">
							<input type="phone" placeholder={phone} onChange={handelChangePhone} />
							{errors.phone && <p className="error">{errors.phone}</p>}
							<div class="input-icon">
								<i class="fa fa-envelope">
									<BiPhoneCall />
								</i>
							</div>
						</div>
						<div class="input-group input-group-icon">
							<input type="email" placeholder={email} onChange={handelChangeEmail} />
							{errors.email && <p className="error">{errors.email}</p>}
							<div class="input-icon">
								<i class="fa fa-envelope">
									<AiTwotoneMail />
								</i>
							</div>
						</div>

						<div className="form-group custom-upload1 mt-2">
							{' '}
							<i class="fas fa-lock" />
                            <progress  value={progre} max="100" /> 

							<label htmlFor="file_img">Upload Photo</label>
							<input type="file" id="file_img" className="form-control" onChange={handleChange} />
							<br />
							<img src={url} style={{ width: '50px' }} />
							<br />
							<br />
							<button className="btn btn-warning" id="btnUtiliy2" onClick={handleUpload}>
								Upload
							</button>
							{errors.picture && <p className="error">{errors.picture}</p>}
						</div>
					</div>
				</form>
			</div>
			<button type="button" className="btn btn-warning" id="bttos" onClick={updateInfo}>
				Update
			</button>
		</div>
	);
}


	