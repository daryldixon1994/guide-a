import React from "react";
import { Navigate } from "react-router-dom";
function AdminRoute({ children }) {
  let isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin === "true") {
    return <> {children} </>;
  } else {
  return <Navigate to="/" />;
  }
}

export default AdminRoute;
