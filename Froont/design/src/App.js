import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Utility from './Components/Utility';
import CreateDesigner from './Components/CreateDesigner';
import Gallery from './Components/Gallery';
import NavBar from './Components/NavBar';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        
        <Route path="/register" element={<Register/>} />
        <Route path="/utility" element={<Utility/>} />
        <Route path="/createDesigner" element={<CreateDesigner/>} />
        <Route path="/gallery" element={<Gallery/>} />
       

        
				</Routes>
        
   
    </BrowserRouter>
  );
}
 
export default App;
