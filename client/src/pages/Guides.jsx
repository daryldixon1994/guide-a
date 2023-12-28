import React, { useEffect, useState } from "react";
import "./style.css";
// import { guides } from "../guides";
import TeamItem2 from "../components/TeamItem2";
import FadeLoader from "react-spinners/FadeLoader";
import PublicNavBar from "../components/PublicNavBar";
import axios from "axios";
function Guides() {
  const [guidesData, setGuidesData] = useState();
  useEffect(() => {
    axios
      .get("/guide/api/user/guides")
      .then((res) => {
        console.log(res);
        setGuidesData(res.data.data.reverse());
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [guidesData]);
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
          {guidesData &&
          guidesData.some(
            (elt) => elt.user?._id === localStorage.getItem("id")
          ) ? (
            guidesData.map((elt, i) => (
              <TeamItem2 poke={true} key={i} {...elt}  />
            ))
          ) : guidesData &&
            !guidesData.some(
              (elt) => elt.user?._id === localStorage.getItem("id")
            ) ? (
            guidesData.map((elt, i) => (
              <TeamItem2 poke={false} key={i} {...elt}  />
            ))
          ) : (
          <div className="loading-box">
            <FadeLoader color="#fc9c1e" height={20} radius={5} width={5} />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Guides;
