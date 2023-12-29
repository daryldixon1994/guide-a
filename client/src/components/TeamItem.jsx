import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function TeamItem({ img, imgUrl, rate, name, isPending, isReserved }) {
  return (
    <div className="team-item">
      {img && (
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="team-item-img-home"
        ></div>
      )}
      {imgUrl && (
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="team-item-img-home-2"
        ></div>
      )}
      <div className="team-item-body">
        <Link style={{ all: "unset", cursor: "pointer" }}>
          <h5>{name}</h5>
          {isPending ? (
            <span
              style={{
                color: "#fe9307",
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              {" "}
              <CiClock1 size={18} />
              Pending
            </span>
          ) : (
            <span
              style={{
                color: "#16ab39",
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              {" "}
              <FaCheckCircle /> Approuved
            </span>
          )}
        </Link>
        <p>{"⭐".repeat(rate)}</p>
      </div>
    </div>
  );
}

export default TeamItem;
