import React from "react";
import "./style.css";
import { guides } from "../guides";
import TeamItem2 from "../components/TeamItem2";
import PublicNavBar from "../components/PublicNavBar";
function Guides() {
  return (
    <div>
      <PublicNavBar />
      <div className="guides-container">
        <h1>OUR GUIDES</h1>
        <p>
          Experienced and skilled repairmen will free you from many problems!
          You’ll definitely will be pleased with the result as we guarantee the
          best service!
        </p>
        <div className="guides-list">
          {guides.map((elt, i) => (
            <TeamItem2 {...elt} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guides;
