
import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import {PiWhatsappLogoDuotone} from  'react-icons/pi'

const Socials = () => {
  return (
    <div className='socials flex justify-center items-center flex gap-4'>
      <a href='https://twitter.com'>
        <FaTwitter size={20} color='#1DA1F2' />
      </a>
      <a href='https://instagram.com'>
        <FaInstagram size={20} color='#C13584' />
      </a>
      <a href='https://instagram.com'>
        <SiTiktok size={20} color='white' />
      </a>
      <a href='https://instagram.com'>
        <PiWhatsappLogoDuotone size={20} color='white' />
      </a>
    </div>
  );
};

export default Socials;
