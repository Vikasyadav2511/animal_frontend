import React from "react";
import SidebarComp from "./SidebarComp";
import { Navigate, Outlet } from "react-router-dom";

const Protectedroute = () => {
  const auth = localStorage.getItem("token");

  return (
    <div>
      {auth ? (
        <SidebarComp>
          <Outlet />
        </SidebarComp>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Protectedroute;
