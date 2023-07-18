import React from "react";
import video from "../assets/doughnuts.mp4";
import { Styles } from "./ad.css";

const Ad = () => {
  return (
    <div className="video" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <p>Welcome to InJoy Treats. Make your order!</p>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://vm.tiktok.com/ZM24gmUTq/">
            <video src={video} autoPlay muted loop />
          </a>
        </div>

        <form class="form">
          <span class="title">Subscribe to our newsletter.</span>
          <p class="description">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>
          <div>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email-address"
            ></input>
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ad;
