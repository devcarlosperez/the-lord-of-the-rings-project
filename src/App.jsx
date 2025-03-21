import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";
import "./App.css"
import Hobbiton from "./pages/hobbiton/Hobbiton";
import Forum from "./pages/forum/Forum";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/hobbiton" element={<Hobbiton/>}/>
        <Route path="/forum" element={<Forum/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
