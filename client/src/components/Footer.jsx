import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
import {
  MdLocationPin,
  MdLocalPhone,
  MdOutlineMailOutline,
} from "react-icons/md";

import "./style.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="s1">
          <img src="./imgs/footer-logo.webp" alt="" />
          <p>
            We are offering travel services of the highest quality, combining
            our energy and enthusiasm.
          </p>
        </div>
        <div className="contact-info">
          <h5>Contact Information</h5>
          <p>
            <MdLocationPin />
            732/21 Second Street, Manchester,King Street, Kingston United
            Kingdom
          </p>
          <p>
            <MdLocalPhone /> +216 58 474 569
          </p>
          <p>
            <MdOutlineMailOutline /> fewloszen@uz.ss
          </p>
        </div>
        <div className="socials">
          <h5>Follow us </h5>
          <AiFillFacebook size={30} color="rgb(182, 181, 181)" />
          <RiTwitterXFill size={30} color="rgb(182, 181, 181)" />
          <RiYoutubeFill size={30} color="rgb(182, 181, 181)" />
        </div>
      </div>
      {/* <div className="footer-footer">
        <p>Zemez © . All rights reserved.</p>
      </div> */}
    </div>
  );
}

export default Footer;
