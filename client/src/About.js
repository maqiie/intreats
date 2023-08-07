import React from "react";
import img from "./assets/reviews.jpg";
import "./about.css";

import { FaFacebook, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Injoy Treats is a delightful bakery venture that's all about
                spreading joy through delectable treats. Our mission is simple:
                to create a haven for food enthusiasts where they can indulge in
                the most exquisite bakery delights. With a passion for baking,
                we're dedicated to crafting treats that not only satisfy your
                taste buds but also bring a smile to your face. From the moment
                you step into Injoy Treats, you'll be greeted by the enticing
                aroma of freshly baked goods that have been crafted with care
                and love. Our range includes a variety of delectable pastries,
                cupcakes, cookies, and more, each made using the finest
                ingredients and traditional recipes. Whether you're celebrating
                a special occasion or simply want to treat yourself, Injoy
                Treats is here to make every moment a memorable one with our
                irresistible treats.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="#">Cookies</a>
                </li>
                <li>
                  <a href="#">Cakes</a>
                </li>
                <li>
                  <a href="#">Bread</a>
                </li>
                <li>
                  <a href="#">Pastries</a>
                </li>
                <li>
                  <a href="#">Pies</a>
                </li>
                <li>
                  <a href="#">Desserts</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <FaTiktok />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
