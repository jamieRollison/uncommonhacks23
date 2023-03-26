import "./index.css";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "./pages/home";
import View from "./pages/view";
// import AnimatedEnvelope from './components/AnimatedEnvelope'

import { Content } from "./types";

function App() {
  const content : Content = {
    text: 'screaming and crying and throwing up '
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/> 
        <Route path='/view' element={<View title="First Letter" from="Anonymous" to="Ellie" content={content}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
