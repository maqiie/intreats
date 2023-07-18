import React from "react";
import video from "../assets/doughnuts.mp4";
import { Styles } from "./ad.css";

const Ad = () => {
  return (
    <div className="video" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <p>
          Welcome to InJoy Treats, your ultimate destination for delightful
          baked goods! Our shop is a haven for all those who crave the heavenly
          aroma of freshly baked treats. As you step through our doors, you'll
          be greeted by a symphony of tantalizing scents and an array of
          delectable delights that will awaken your senses. At InJoy Treats, we
          take immense pride in crafting each and every treat with love and
          passion. Our team of talented bakers combines the finest ingredients
          with a sprinkle of creativity, resulting in masterpieces that are not
          only visually stunning but also incredibly scrumptious. From
          melt-in-your-mouth cookies and fluffy cupcakes to artisanal bread and
          irresistible pastries, our menu offers a variety of options to satisfy
          every palate.!
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://vm.tiktok.com/ZM24gmUTq/">
            <video src={video} autoPlay muted loop />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ad;
