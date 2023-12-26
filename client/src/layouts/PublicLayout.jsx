import React from "react";
import { Outlet } from "react-router-dom";
import PublicNavBar from "../components/PublicNavBar";
function PublicLayout() {
  return (
    <div>
      <PublicNavBar />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
