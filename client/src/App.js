
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Socials from './components/socials';
import Navbar from './components/Navbar';

function App() {
  return (
  
    <Router>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/social" element={<Socials />}/>
      </Routes>
    </Router>
  );
}

export default App;
