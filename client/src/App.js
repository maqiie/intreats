
import React from "react";
import { BrowserRouter as Router, Route, Routes, Route as RRoute } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Category from "./components/Category";
import Ad from "./components/Ad";
import Newsletter from "./components/Newsletter";
import Review from "./components/reviews";
import About from "./About";
import OrderForm from "./Order";

const App = () => {
 

  return (
    <Router>
      <div className="App">
        <div className="background" s>
          {/* <Socials /> */}
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/category" element={<Category />} />
              <Route path="/OrderForm" element={<OrderForm />} />
              
              
            </Routes>
          </div>
          <Category />
          <Ad />
          <Newsletter />
          <OrderForm/>
          <About />
        
        </div>
      </div>
    </Router>
  );
};

export default App;
