import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Utility from './Components/Utility';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" />
        <Route path="/register" element={<Register/>} />
        <Route path="/utility" element={<Utility/>} />
      </Routes>

    </BrowserRouter>
  );
}
 
export default App;
