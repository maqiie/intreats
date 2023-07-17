
// import React from 'react';
// import { Styles } from './App.css';
// import backgroundImage from './assets/background.jpg';
// import Socials from './components/socials';
// import Navbar from './components/Navbar';
// import Content from './components/Content';
// import Category from './components/Category'

// const App = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };

//   return (
//     <div className="App" style={backgroundStyle}>
//       <Socials />
//       <Navbar />
//       <div className="content-wrapper">
//         <Content />
//       </div>
//       {/* <Category /> */}
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import backgroundImage from './assets/background.jpg';
import Socials from './components/socials';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Category from './components/Category';
import Ad from './components/Ad';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
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
      <br/>
      <Ad/>
    </div>
  );
};

export default App;
