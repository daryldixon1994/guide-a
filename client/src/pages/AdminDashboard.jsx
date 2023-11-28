import React from "react";
import "./style.css";
import AdminNavBar from "../components/AdminNavBar";
import AdminGuidesList from "../components/AdminGuidesList";
import AdminUsersList from "../components/AdminUsersList";
function AdminDashboard() {
  return (
    <div>
      <AdminNavBar />

      <div className="admin-dashboard">
        <AdminGuidesList />
        <AdminUsersList />
      </div>
    </div>
  );
}

export default AdminDashboard;
