import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUtility from './Components/AddUtility';
import NavBar from './Components/NavBar';
import SignUpUser from './Components/SignUpUser';
import Login from './Components/Login';
import ProfileUser from './Components/ProfileUser';
import UpdateUser from './Components/UpdateUser';
import ExternalDesign from './Components/ExternalDesign';
import InternalDesign from './Components/InternalDesign';
import SearchUtilityByTitle from './Components/SearchUtilityByTitle';
import AllServies from './Components/AllServies';
import Utility from './Components/Utility';
import UpdateUtility from './Components/UpdateUtility';
import HommePage from './Components/HommePage';
import About from './Components/About';
import { useState } from 'react';

function App() {
	const [reload , setReload ] = useState()
	return (
		<BrowserRouter>
			<NavBar reload={reload}/>

			<Routes>
				<Route exact path="/" element={<HommePage />} />

				<Route path="/externalDesign/:design_type" element={<ExternalDesign />} />
				<Route path="/internalDesign/:design_type" element={<InternalDesign />} />
				<Route path="/searchUtilityByTitle/:title" element={<SearchUtilityByTitle />} />
				<Route path="/AllServies/:user_id" element={<AllServies />} />
				<Route path="/addutility" element={<AddUtility />} />
				<Route path="/signUp" element={<SignUpUser />} />
				<Route path="/login" element={<Login />} />
				<Route path="/About" element={<About />} />
				<Route path="/profileUser/:user_id" element={<ProfileUser />} />
				{/* setReload={setReload} */}
				<Route path="/updateUser/:user_id" element={<UpdateUser  setReload={setReload} />} />
				<Route path="/updateUtility/:utility_id" element={<UpdateUtility />} />
				<Route path="/Utility/:utility_id" element={<Utility />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
