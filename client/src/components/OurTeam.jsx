import React from "react";
import TeamItem from "./TeamItem";
import { Link } from "react-router-dom";
import "./style.css";
import { guides } from "../../src/guides";

function OurTeam() {
  return (
    <div className="our-team-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fc9c1e"
          fill-opacity="1"
          d="M0,32L48,64C96,96,192,160,288,181.3C384,203,480,181,576,186.7C672,192,768,224,864,213.3C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="team-bloc">
        <h1>Our Guides</h1>
        <h3>Check out our top-rated tourist guide</h3>
        <div className="our-team-list">
          {guides.map((elt, i) => {
            while (i <= 3) {
              return <TeamItem key={i} {...elt} />;
            }
          })}
        </div>
        <Link className="all-guides-team-item" to="/guides">
          See all guides
        </Link>
      </div>
    </div>
  );
}

export default OurTeam;
