import React, { useState, useEffect } from "react";
import PublicNavBar from "../components/PublicNavBar";
import axios from "axios";
import TeamItem from "../components/TeamItem";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [guide, setguide] = useState();
  // console.log(guide)
  let id = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`/guide/api/user/Ownguides/${id}`)
      .then((res) => {
        if (res.data.status) {
          setguide(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [guide, id]);
  return (
    <div className="user-dashboard-container">
      <PublicNavBar />
      <div className="user-dashboard">
        <h1>Pending requests</h1>
        {guide ? (
          <TeamItem {...guide}/>
        ) : (
          <p>
            No data yet. <Link to="/guides">Checkout our guides now.</Link>{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
