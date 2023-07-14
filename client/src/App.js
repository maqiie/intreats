
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Socials from './components/socials';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
  
    <Router>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/social" element={<Socials />}/>
        <Route path="/content" element={<Content/>}/>
      </Routes>
    </Router>
  );
}

export default App;
