import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";
import "./App.css"
import Forum from "./pages/forum/Forum";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermConditions from "./pages/term-conditions/TermConditions";
import FormAddComment from "./pages/form-add-comment/FormAddComment";
import FormUpdateComment from "./pages/form-update-comment/FormUpdateComment";
import Locations from "./pages/locations/Locations";
import SignIn from "./pages/sign-in/SignIn";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/form-add-comment" element={<FormAddComment/>}/>
        <Route path="/form-add-comment/:topicId" element={<FormAddComment/>}/>
        <Route path="/form-update-comment" element={<FormUpdateComment/>}/>
        <Route path="/form-update-comment/:topicId/:commentId" element={<FormUpdateComment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-conditions" element={<TermConditions/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
