import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function TeamItem({
  img,
  imgUrl,
  rate,
  name,
  isPending,
  isReserved,
  teamUser,
}) {
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
        </Link>
        <p>{"⭐".repeat(rate)}</p>
      </div>
    </div>
  );
}

export default TeamItem;
