import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchUtilityByTitle() {
	const [ searchByTitle, setSearchByTitle ] = useState([]);
	const { title } = useParams();
	console.log(title);

	console.log(searchByTitle);
  //---------------------------search by title ---------------------------------------
	useEffect(() => {
		axios
			.get(`http://localhost:8080/utility/search/${title}`)
			.then((res) => {
				setSearchByTitle(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	},[]);

	return (
		<div className="content sections">
			<div className="section">
				<div className="header">
				
					<h1 className="main-title">
						
						<h2>Result Search :</h2>

					</h1>
				</div>
			</div>
			{searchByTitle.length == 0? <p className='message'> result for search  is not found try with another word </p>:
			<div className="items">
				{searchByTitle.map((ele) => (
					<Link to={`/Utility/${ele.id}`} className="item">
					{console.log(ele.user.picture)}
						<Link to={`/ProfileUser/${ele.user.id}`} className="user">
							<img src={ele.user.picture} alt="" />
						</Link>

						<div className="head">
							<img src={ele.picture} alt="" />
						</div>

						<p className="title">{ele.title}</p>
					</Link>
				))}
			</div>}
		</div>
	);
}
export default SearchUtilityByTitle;
