
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Socials from './components/socials';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Contact from './components/Contact';
import Category from './components/Category';

function App() {
  return (
  
    <Router>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/social" element={<Socials />}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
    </Router>
  );
}

export default App;
