import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/store";

export const UserLeyaut = () => {
  const user = loadState("user");
  if (!user) return <Navigate to={"/"} replace />;
  return (
    <div className="container">
      <div>
        <Link to="/user">Profile</Link>
        <Link to="user/addres">addres </Link>
      </div>
      <Outlet />
    </div>
  );
};
