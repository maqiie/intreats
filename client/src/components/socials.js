
import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import "./socials.css";

const Socials = () => {
  return (
    <nav className="socials flex justify-between items-center ">
      <div className="icons flex gap-4">
        <a href="https://twitter.com">
          <FaTwitter size={12} color="#1DA1F2" />
        </a>
        <a href="https://instagram.com">
          <FaInstagram size={12} color="#C13584" />
        </a>
        <a href="https://tiktok.com">
          <SiTiktok size={12} color="white" />
        </a>
        <a href="https://whatsapp.com">
          <PiWhatsappLogoDuotone size={12} color="white" />
        </a>
      </div>

      <div className="contact-info">
        <a className="ml-10" >
          +254712355467
        </a>
        <a className="ml-4" >
          intreats@gmail.com
        </a>
      </div>
    </nav>
  );
};

export default Socials;
