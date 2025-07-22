import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Why from "./pages/Why";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/why" element={<Why/>}/>
    </Routes>
  );
}

export default App;
