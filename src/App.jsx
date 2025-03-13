import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";
import MiddleEarthMap from "./pages/hobbiton/Hobbiton";
import 'boxicons';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/hobbiton" element={<MiddleEarthMap/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
