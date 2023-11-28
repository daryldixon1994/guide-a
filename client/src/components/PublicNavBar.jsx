import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSession } from "../redux/actions";
import "./style.css";
function PublicNavBar() {
  let token = localStorage.getItem("token");
  let dispatch = useDispatch();
  const activeStyle = {
    all: "unset",
    fontWeight: "500",
    color: "white",
    textDecoration: "underline",
    cursor: "pointer",
  };
  const style = {
    all: "unset",
    fontWeight: "500",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div className="public-navbar">
      <div>
        <NavLink to="/">
          <img src="/imgs/logo.webp" alt="" />
        </NavLink>
      </div>
      <div className="public-nav-items">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive ? activeStyle : style;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          style={({ isActive }) => {
            return isActive ? activeStyle : style;
          }}
        >
          About us
        </NavLink>
        <NavLink
          to="/guides"
          style={({ isActive }) => {
            return isActive ? activeStyle : style;
          }}
        >
          Guides
        </NavLink>
        {token ? (
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return isActive ? activeStyle : style;
            }}
            onClick={() => {
              dispatch(logoutSession());
              localStorage.clear();
            }}
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return isActive ? activeStyle : style;
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={({ isActive }) => {
                return isActive ? activeStyle : style;
              }}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default PublicNavBar;
