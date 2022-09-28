import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UseAuth } from "./views/login/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = UseAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
