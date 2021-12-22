import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Auth from "../../services/Auth";

const RequireAuth = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user);

  if (!user.isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default RequireAuth;
