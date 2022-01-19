import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUtility from './Components/AddUtility';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Gallery from './Components/Gallery';
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
import HomePage from './Components/HomePage';
import { useState } from 'react';
import { useContext } from 'react';
import HommePage from './Components/HommePage';
import AboutUs from './Components/AboutUs';
import LogInn from './Components/LogInn';
import Register from './Components/Register';
import About from './Components/About';


function App() {


        return (
         
  <BrowserRouter>
        <NavBar />
       
				<Routes>

        <Route path="/" element={<HommePage/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
		
			

          <Route path="/externalDesign/:design_type" element={<ExternalDesign/>} />
          <Route path="/internalDesign/:design_type"  element={<InternalDesign/>} />
          <Route path="/searchUtilityByTitle/:title"element={<SearchUtilityByTitle/>} />
          <Route path="/AllServies/:user_id" element={<AllServies/>} />
          <Route path="/addutility" element={<AddUtility/>} />
					<Route path="/support" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/signUp" element={<SignUpUser/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logInn" element={<LogInn/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/About" element={<About/>} />
          

          
          {/* <Route path="/profileUser" element={<ProfileUser/>} />  */}
          <Route path="/profileUser/:user_id" element={<ProfileUser/>} />
          <Route path="/updateUser/:user_id" element={<UpdateUser/>} />
          <Route path="/updateUtility/:utility_id" element={<UpdateUtility/>} />
          <Route path="/Utility/:utility_id" element={<Utility/>}/>
          {/* <Route path="/homePage" element={<HomePage/>} /> */}


          

				</Routes>
        {/* </ThemeProvider> */}
    </BrowserRouter>
   
  );
}
 
export default App;
