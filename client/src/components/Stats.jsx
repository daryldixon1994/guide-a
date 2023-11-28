import React from "react";
import "./style.css";
function Stats() {
  return (
    <div>
      <div className="stats-container">
        <div className="stat">
          <img src="/imgs/icon-1.webp" alt="" />
          <h4>623,744</h4>
          <h6>Happy Clients</h6>
        </div>
        <div className="stat">
          <img src="/imgs/icon-2.webp" alt="" />
          <h4>112</h4>
          <h6>Amazing Tours</h6>
        </div>
        <div className="stat">
          <img src="/imgs/icon-3.webp" alt="" />
          <h4>594</h4>
          <h6>Partners</h6>
        </div>
        <div className="stat">
          <img src="/imgs/icon-4.webp" alt="" />
          <h4>8,711</h4>
          <h6>Questions Answered</h6>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fc9c1e"
          fill-opacity="1"
          d="M0,256L21.8,245.3C43.6,235,87,213,131,202.7C174.5,192,218,192,262,197.3C305.5,203,349,213,393,197.3C436.4,181,480,139,524,122.7C567.3,107,611,117,655,128C698.2,139,742,149,785,170.7C829.1,192,873,224,916,213.3C960,203,1004,149,1047,128C1090.9,107,1135,117,1178,117.3C1221.8,117,1265,107,1309,122.7C1352.7,139,1396,181,1418,202.7L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Stats;
