import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";
import MiddleEarthMap from "./pages/middle-earth-map/MiddleEarthMap";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/map" element={<MiddleEarthMap/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
