import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" />
        <Route path="/register" element={<Register/>} />
      </Routes>

    </BrowserRouter>
  );
}
 
export default App;
