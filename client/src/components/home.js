import React from 'react';
import backgroundImage from '../assets/background.jpg';
import Socials from './socials';
import Navbar from './Navbar';
import Content from './Content';
const Home = () => {
    return (
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
       <div className="absolute top-4 left-4 justify-center items-center">
        <Socials />
        <br/>
        <Navbar/>
        <div className='content mt-10'>
          <Content/>
 

      </div>
      </div>
      
      </div>

    );
  };
  
  export default Home;
  