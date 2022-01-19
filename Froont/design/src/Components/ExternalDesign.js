import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ExternalDesign() {
	const types = [ 'internal design', 'external design' ];
	const [ external, setExternal ] = useState([]);
	const { design_type } = useParams();
	     //-------------------------------------- get utility by design Type-------------------------------------

	useEffect(() => {
		types.forEach((design_type) => {
			axios
				.get(`http://localhost:8080/utility/col/${design_type}`)
				.then((response) => {
					console.log(response);
					console.log(response.data);

					if (design_type === 'external design') {
						setExternal(response.data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}, []);

	return (
		<div className="content sections">
			<div className="section">
				<div className="header">
					<h2 className="main-title">Exterior Design services</h2>

					{/* <select name="" id="">
						<option value="">Filter</option>
					</select> */}
				</div>
				<div className="items">
					{external.map((ele) => (
						<Link to={`/Utility/${ele.id}`} className="item">
							<Link to={`/ProfileUser/${ele.user.id}`} className="user">
								<img src={ele.user.picture} alt="" />
							</Link>

							<div className="head">
								<img src="./images/img4.jpg" alt="" />
							</div>

							<p className="title">{ele.title}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
