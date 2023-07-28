

import React from "react";
import "./App.css";
import backgroundImage from "./assets/background.jpg";
import Socials from "./components/socials";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Category from "./components/Category";
import Ad from "./components/Ad";
import Newsletter from "./components/Newsletter";
import OrderForm from "./Order";
import CustomerReviews from "./components/reviews";

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="App">
      <div className="background" style={backgroundStyle}>
        <Socials />
        <Navbar />
        <div className="content-wrapper">
          <Content />
        </div>
      </div>
      <Category />

      <Ad />
      <Newsletter/>
      {/* <OrderForm/> */}
      {/* <CustomerReviews/> */}
    </div>
  );
};

export default App;
