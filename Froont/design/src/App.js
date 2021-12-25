import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import AddUtility from './Components/AddUtility';
import CreateDesigner from './Components/CreateDesigner';
import DesignType from './Components/DesignType';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Section from './Components/Sections';
import Sections from './Components/Sections';
import Gallery from './Components/Gallery';
import SignUpUser from './Components/SignUpUser';
import Login from './Components/Login';
import Profile from './Components/ProfileUser';
import ProfileUser from './Components/ProfileUser';


function App() {
  return (
    <BrowserRouter>
      

        <NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
		
			
          <Route path="/sections" element={<Sections/>} />
        
          <Route path="/addutility" element={<AddUtility/>} />
					<Route path="/support" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/signUp" element={<SignUpUser/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profileUser" element={<ProfileUser/>} />



				</Routes>
        
    </BrowserRouter>
  );
}
 
export default App;
