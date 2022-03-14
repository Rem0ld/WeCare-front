import React, { ReactElement, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { refreshToken } from "../../redux/slices/userSlice";
import Auth from "../../services/Auth";

const RequireAuth = ({
  role,
  children,
}: {
  role: "patient" | "admin" | "doctor";
  children: ReactElement;
}) => {
  const location = useLocation();
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  if (!state?.user.isLogged || state?.user?.role !== role) {
    return <Navigate to={`/login/${role}`} state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default RequireAuth;
