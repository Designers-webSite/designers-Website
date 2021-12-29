import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUtility from './Components/AddUtility';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Sections from './Components/Sections';
import Gallery from './Components/Gallery';
import SignUpUser from './Components/SignUpUser';
import Login from './Components/Login';
import ProfileUser from './Components/ProfileUser';
import UpdateUser from './Components/UpdateUser';
import ExternalDesign from './Components/ExternalDesign';
import InternalDesign from './Components/InternalDesign';
import SearchUtilityByTitle from './Components/SearchUtilityByTitle';
import AllServies from './Components/AllServies';
import ProviderServies from './Components/ProviderServies';
import Utility from './Components/Utility';
function App() {
  return (
    <BrowserRouter>
      

        <NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
		
			
          <Route path="/sections/:design_type" element={<Sections/>} />
          <Route path="/externalDesign/:design_type" element={<ExternalDesign/>} />
          <Route path="/internalDesign/:design_type" element={<InternalDesign/>} />
          <Route path="/searchUtilityByTitle/:title" element={<SearchUtilityByTitle/>} />
          <Route path="/AllServies" element={<AllServies/>} />
          <Route path="/addutility" element={<AddUtility/>} />
					<Route path="/support" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/signUp" element={<SignUpUser/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profileUser" element={<ProfileUser/>} /> 
          <Route path="/profileUser/:user_id" element={<ProfileUser/>} />
          <Route path="/updateUser/:user_id" element={<UpdateUser/>} />
          <Route path="/providerServies/:user_id" element={<ProviderServies/>}/>
          <Route path="/Utility/:utility_id" element={<Utility/>}/>



				</Routes>
        
    </BrowserRouter>
  );
}
 
export default App;
