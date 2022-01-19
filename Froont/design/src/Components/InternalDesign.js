import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function InternalDesign() {
	const types = [ 'internal design', 'external design' ];
	const [ internal, setInternal ] = useState([]);
	const { design_type } = useParams();
	console.log(design_type);
	useEffect(() => {
		types.forEach((design_type) => {
			axios
				.get(`http://localhost:8080/utility/col/${design_type}`)
				.then((response) => {
					console.log(response);
					console.log(response.data);

					if (design_type === 'internal design') {
						setInternal(response.data);
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
				<h2 className="main-title">Interior Design services</h2>
					{/* <select name="" id="">
						<option value="">Filter</option>
					</select> */}
				</div>
				<div className="items">
					{internal.map((ele) => (
						<Link to={`/Utility/${ele.id}`} className="item">
							<Link to={`/ProfileUser/${ele.user.id}`} className="user">
								<img src={ele.user.picture} alt="" />
							</Link>

							<div className="head">
								<img src={ele.picture} alt="" />
							</div>
							<p className="title">{ele.title}</p>

							{/* </div> */}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
