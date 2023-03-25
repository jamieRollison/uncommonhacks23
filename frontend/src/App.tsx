import "./index.css";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import Home from "./pages/home";
import View from "./pages/view";
// import AnimatedEnvelope from './components/AnimatedEnvelope'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/> 
        <Route path='/view' element={<View/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
