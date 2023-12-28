import React from "react";
import { Navigate } from "react-router-dom";

function UserRoute({ children }) {
  let isUser = localStorage.getItem("isUser");
  let token = localStorage.getItem("token");
  if (isUser === "true" && token) {
    return <> {children} </>;
  } else {
    return <Navigate to="/register" />;
  }
}

export default UserRoute;
