import React from "react";
import "./style.css";

function WhyTouristoItem({ icon, title, desc }) {
  return (
    <div className="why-touristo-item">
      <div className="icon-div">{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default WhyTouristoItem;
