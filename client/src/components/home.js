
import React from 'react';
import backgroundImage from '../assets/background.jpg';
import Socials from './socials';
import Navbar from './Navbar';
import Content from './Content';
import Contact from './Contact';
import Category from './Category';
import Ad from './Ad';

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-4 left-4">
        <Socials />
      </div>
      <Navbar />
    
      <section className="mt-10">
        <Content />
      </section>
      
      <br/>
      <section className="mt-10 w-full">
        <Category/>
      </section>
      <section>
        <Ad/>
      </section>
    </div>
  );
};

export default Home;
