import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaUserEdit ,FaTrashAlt} from 'react-icons/fa';
 import {BiDotsVerticalRounded}  from "react-icons/bi";
import Alert from "react-bootstrap/Alert";


export default function ProfileUser() {
	const [ deleteService, setDeleteService ] = useState();
    const[closed,setClosed]=useState(true)
    const toggler = ()=>{
        setClosed(!closed)    
    }
	const navigate = useNavigate();
	const state = useSelector((state) => {
		return {
			user: state.userReducer.user,
			token: state.userReducer.token
		};
	});
	const { user_id } = useParams();
	// console.log(user_id);
	const [ user, setUser ] = useState([]);
	const [ utility, setUtility ] = useState([]);
	const { utility_id } = useParams();
	console.log(utility_id);

	const x = JSON.parse(localStorage.getItem('user'));
	// const [ currentUser, setCurrentUser ] = useState([ x.id == user_id ]);
	// console.log(currentUser);
console.log(user_id);
	useEffect(() => {
		axios
			.get('http://localhost:8080/user/' + user_id)
			.then((res) => {
				setUser(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);

				console.log('current');
			});
	}, [user_id]);
	console.log(user);

	useEffect(() => {
		axios
			.get('http://localhost:8080/utility/all/' + user_id)
			.then((response) => {
				setUtility(response.data);
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	}, [user_id]);


    function deleteUser() {
		const config = {
			headers: { Authorization: `Bearer ${state.token}` }
		};
		axios
			.delete('http://localhost:8080/user/'+ user_id)
			.then((res) => {
				console.log(res.data);
               
				navigate('/');
			})
			.catch((err) => {
				console.log(err.data);
			});
	}

	return (
		<div className="profile sections">
			<div className="container2">
				<div className="inner-wrapper">
					<div className="top-wrapper">
						<div className="top-info">
							<img alt="" src={user.picture} />
							{/* <img src=""/> */}
							<h4>{user.fullName}</h4>
						</div>
				
</div>
					<div className="row">
						<div className="col-lg-6">
                            <div className='box-info'>
							<h2>Basic Information</h2>
                           <div className='dots' ><BiDotsVerticalRounded/></div>
                            </div>
							{/* <div className="box"> */}
                            <div className='box-info1'>
								<p><span  className='info'>full Name :</span>{user.fullName}</p>
								<p><span  className='info'>user Name:</span>{user.userName}</p>

								<p><span  className='info'>Email:</span>{user.email}</p>
                                </div>
                                
								{x.id == user_id ? (
									<Link className="btn btn-primary" to={`/updateUser/${x.id}`}>
										<FaUserEdit />
									</Link>
								) : (
									''
								)}

                                {x.id == user_id ? (
									<button  className="btn btn-danger" id="danger"onClick={deleteUser}>
										<FaTrashAlt/>
									</button>
                            
                               

								) : (
									''
								)}
                                
							{/* </div> */}
						</div>
					</div>

					<div className="items">
                        <br/>
                        <br/>
						<h3 className="my-3">
                            <span className='service'>Services</span></h3>

						{user === 0 ? (
							''
						) : (
							<div className="row">
								{console.log('utility: ', utility)}
								{utility.map((ele) => {
									return (
										<div className="col-md-5">
											<div className="item">
												<div className="head">
													<Link to={`/Utility/${ele.id}`}>
														{' '}
														<img className="mw-100" src={ele.picture} alt="" />
													</Link>
												</div>
												<h4 className="text-black text-center">{ele.title}</h4>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>{' '}
				{/* End inner-wrapper  */}
			</div>
		</div>
        
	);
}
