import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function TeamItem({ img, rate, name, width, height, resume, phone, adress }) {
  return (
    <div className="team-item">
      <img src={img} alt="" width="280px" height="186px" />
      <div className="team-item-body">
        <Link style={{ all: "unset", cursor: "pointer" }}>
          <h5>{name}</h5>
        </Link>
        <p>{"⭐".repeat(rate)}</p>
      </div>
    </div>
  );
}

export default TeamItem;
