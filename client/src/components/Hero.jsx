import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-intro">
        <h1>Enjoy Your Dream Vacation</h1>
        <h2>
          Travel to the any corner of the world, without going around in
          circles.
        </h2>
        <Link className="hero-link" to="/guides">
          Pick your guide now
          <MdKeyboardArrowRight className="hero-link-icon" size={30} />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
