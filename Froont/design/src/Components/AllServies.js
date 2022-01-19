import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AllServies() {
	const [ user, setUser ] = useState();
	const navigate = useNavigate();
	let a;
	const { user_id } = useParams();
	const [ search, setSearch ] = useState();

	const [ allutility, setAllutility ] = useState([]);
	const { design_type } = useParams();
	useEffect(() => {
		axios
			.get('http://localhost:8080/utility/all')
			.then((response) => {
				console.log(response);
				console.log(response.data);

				setAllutility(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/user/${user_id}`)
			.then((res) => {
				console.log(res.data);
				setUser(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="content sections">
			<div className="section">
				<div className="header">
					<h2 className="main-title"> services</h2>
					<div className="search-box my-4">
						<input
							type="text"
							id="title"
							placeholder="Enter title"
							onChange={(e) => {
								setSearch(e.target.value.trim());
							}}
						/>

						<button
							onClick={() => {
								navigate(`/searchUtilityByTitle/${search}`);
							}}
						>
							Search
						</button>
					</div>
					{/* <select className="" name="" id="">
						<option value="filter">Filter</option>
					</select> */}
				</div>
				<div className="items">
					{allutility.map((ele) => (
						<Link to={`/Utility/${ele.id}`} className="item">
							<Link to={`/ProfileUser/${ele.user.id}`} className="user">
								<img src={ele.user.picture} alt="" />
							</Link>
							{console.log(ele.user.picture)}{' '}
							<div className="head">
								{/* Put image src here */}
								<img src={ele.picture} alt="" />
							</div>
							{/* <div className="footer"> */}
							<p className="title" id="t">{ele.title}</p>
							{/* </div> */}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
