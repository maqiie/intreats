// import React from 'react';
// import backgroundImage from '../assets/background.jpg';
// import Socials from './socials';
// import Navbar from './Navbar';
// import Content from './Content';
// import Contact from './Contact';
// const Home = () => {
//     return (
//       <div
//         className="h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//        <div className="absolute top-4 left-4 justify-center items-center">
//         <Socials />
//         <br/>
//         <Navbar/>
//         <div className='content mt-10'>
//           <Content/>
 
//           <Contact/>
//       </div>
//       </div>
      
//       </div>

//     );
//   };
  
//   export default Home;
import React from 'react';
import backgroundImage from '../assets/background.jpg';
import Socials from './socials';
import Navbar from './Navbar';
import Content from './Content';
import Contact from './Contact';
import Category from './Category';

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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="mt-10">
        <Content />
      </section>
      
      <br/>
      <section className="mt-10 w-full">
        <Category/>
      </section>
    </div>
  );
};

export default Home;
