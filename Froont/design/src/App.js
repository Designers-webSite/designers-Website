import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Utility from './Components/Utility';
import CreateDesigner from './Components/CreateDesigner';
import Gallery from './Components/Gallery';
import DesignType from './Components/DesignType';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route exact path="/" />
        <Route path="/register" element={<Register/>} />
        <Route path="/utility" element={<Utility/>} />
        <Route path="/createDesigner" element={<CreateDesigner/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/designType" element={<DesignType/>} /> */}

        <NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
		
					<Route path="/designers" element={<Home />} />
					<Route path="/support" element={<Home />} />
          <Route path="/CreateDesigner" element={<CreateDesigner />} />
          <Route path="/register" element={<Register />} />
				</Routes>
        
    </BrowserRouter>
  );
}
 
export default App;
