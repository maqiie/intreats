import React from 'react';
import video from '../assets/doughnuts.mp4';

const Ad = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://vm.tiktok.com/ZM24gmUTq/">
          <video src={video} autoPlay muted loop />
        </a>
      </div>
      <h2>
        Doughnuts!
      </h2>
    </div>
  );
};

export default Ad;




