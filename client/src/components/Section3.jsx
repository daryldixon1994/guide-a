import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Section3() {
  return (
    <div className="section3-container">
      <div className="section3-container-subcontainer">
        <h1>
          Find Travel Perfection With the Professionalism of Experts FIND YOUR
          PERFECT TOUR
        </h1>
        <Link className="all-guides-team-item" to="/guides">
          See all guides
        </Link>
      </div>
    </div>
  );
}

export default Section3;
