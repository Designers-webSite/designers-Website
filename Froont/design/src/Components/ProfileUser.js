import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { logOut } from '../reducers/user/action';
import { useDispatch } from 'react-redux';
import{AiFillCaretRight} from "react-icons/ai";


export default function ProfileUser() {
	const [ deleteService, setDeleteService ] = useState();
	const [ closed, setClosed ] = useState(true);
	const toggler = () => {
		setClosed(!closed);
	};
	const navigate = useNavigate();
	const state = useSelector((state) => {
		return {
			user: state.userReducer.user,
			token: state.userReducer.token
		};
	});
	const dispatch=useDispatch()
	const Logout=()=>{
		dispatch(logOut())
		}
	const { user_id } = useParams();
	const [ user, setUser ] = useState();
	const [ utility, setUtility ] = useState([]);
	const { utility_id } = useParams();

	const x = JSON.parse(localStorage.getItem('user'));
	     //--------------------------------------get user by id-------------------------------------

	useEffect(
		() => {
			axios
				.get(`http://localhost:8080/user/${user_id}`)
				.then((res) => {
					console.log(res.data);
					setUser(res.data);
				})
				.catch((err) => {
					console.log(err);

					console.log('current');
				});
		},
		[user_id]
	);
     //--------------------------------------get all utility for  user by id-------------------------------------

	useEffect(
		() => {
			axios
				.get(`http://localhost:8080/utility/all/${user_id}`)
				.then((response) => {
					setUtility(response.data);
					console.log(response.data);
				})
				.catch((err) => console.log(err));
		},
		[ user_id ]
	);
     //--------------------------------------delete Acount -------------------------------------

	function deleteUser() {
		const config = {
			headers: { Authorization: `Bearer ${state.token}` }
		};
		axios
			.delete(`http://localhost:8080/user/${user_id}`)
			.then((res) =>{
				console.log(res.data);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Account successfully deleted',
					showConfirmButton: false,
					timer: 1500
				});
				navigate('/');
			})
			.catch((err) => {
				console.log(err.data);
				


			});
	}

	console.log(user);
	return (
		<>
		{user != undefined ? 
		 <div className="profile sections" >
			 <div className="container2">
			 <div className="inner-wrapper">
			 <div className="top-wrapper" id="s">
			 <div className="top-info">
			 <img alt="" src={user.picture} />
				 <h4 className="fullName">{user.fullName}</h4>
				 </div>
				 </div>
				 <div className="row">
		 				<div className="col-lg-6">
						 <div className="box-info">
								<h2>Basic Information</h2>
								<br/>
								<p className='in'>
		 							<span className="info"> full Name :</span>
		 							{user.fullName}
		 						</p>
		 						<p className='in'>
		 							<span className="info">user Name:</span>
		 							{user.userName}
		 						</p>
		 						<p className='in'>
		 							<span className="info">phone :</span>
		 							{user.phone}
		 						</p>

		 						<p className='in'>
		 							<span className="info">Email:</span>
		 							{user.email}
		 						</p>
								 </div>

						{x? 
							<>{x.id == user_id ? (
								<Link className="btn btn-primary" id="bEdit1" to={`/updateUser/${x.id}`}>
									<FaUserEdit />
								</Link>
							) : (
								''
							)}
							
							{x.id == user_id ? (
								<button className="btnDelete" onClick={()=> {
									deleteUser();
									Logout();
									}}>
									<FaTrashAlt />
								</button>
							) : (
								''
							)}</>
							: ""}

               <br/>
          <div className="my-servies">
	         <br/>
						<h3> My Servies</h3>
					</div>
					<div className="items">
						<br />
						<br />
						<h3 className="my-4" />
						<hr />
						{user === 0 ? (
							''
						) : (
							<div className="row">
								{console.log('utility: ', utility)}
								{utility.map((ele) => {
									return (
										<div className="col-md-6">
											<div className="item">
												<div className="head">
													<Link to={`/Utility/${ele.id}`}>
														{' '}
														<img className="mw-100" src={ele.picture} alt="" />
													</Link>
												</div>
												<p className="title">{ele.title}</p>
											</div>
										</div>
									);
								})}
							</div>
						)}
					
				</div>{' '}
			
			
				 
				<div className="utt-link">
									<Link  to={`/AllServies/${user.id}`}><AiFillCaretRight/></Link> 
									</div>
						
		</div>
		</div>
		</div>
		</div>
		
		</div>

		: ""}
	
		</>
	);
}
