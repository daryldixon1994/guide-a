import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  let isUser = localStorage.getItem("isUser");
  let isAdmin = localStorage.getItem("isAdmin");
  if (isUser === "true" || isAdmin === "true") {
   return <Navigate to="/" />;
  } else {
    return <> {children} </>;
  }
}

export default PublicRoute;
