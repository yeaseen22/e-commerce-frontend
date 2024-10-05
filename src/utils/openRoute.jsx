import React from "react";
import { Navigate } from "react-router-dom";

export const OpenRoute = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));
  return getTokenFromLocalStorage === undefined ? (
    children
  ) : (
    <React.Fragment>
      <Navigate to="/" replace={true} />
    </React.Fragment>
  );
};
