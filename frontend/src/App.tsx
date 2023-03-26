import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import View from "./pages/view";
import Create from "./pages/create";
import About from "./pages/about";
// import AnimatedEnvelope from './components/AnimatedEnvelope'

import { Content } from "./types";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:short" element={<View />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
