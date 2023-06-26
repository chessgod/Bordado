
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import ContactPage from "./Pages/ContactPage/ContactPage";
import HomePage from './Pages/HomePage/HomePage.jsx'
import QualificationsPage from './Pages/QualificationsPage/QualificationsPage';
import WhoPage from "./Pages/WhoPage/WhoPage";
import Nav from "./Elements/NavBar/NavBar.jsx";
import Footer from "./Elements/Footer/Footer.jsx"

function App() {
  return (
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="" element={<HomePage/>}/>
          <Route path="qualifications" element={<QualificationsPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="who" element={<WhoPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
