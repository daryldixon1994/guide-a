import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaRegHandPointDown } from "react-icons/fa";

function TeamItem({ imgB, rate, name, resume, phone, adress }) {
  return (
    <div className="team-item guide-item-2">
      <button className="poke">Poke now! </button>
      <img
        src={imgB}
        alt=""
        width="300px"
        height="500px"
        style={{ objectFit: "cover" }}
      />
      <div className=" item-2">
        <Link style={{ all: "unset", cursor: "pointer" }}>
          <h5>{name}</h5>
        </Link>
        <p> {resume} </p>
        <div className="guide-details">
          <h6>Phone: {phone} </h6>
          <h6>Adress: {adress} </h6>
        </div>
        <p>{"⭐".repeat(rate)}</p>
      </div>
    </div>
  );
}

export default TeamItem;
