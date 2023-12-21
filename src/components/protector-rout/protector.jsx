import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Stor/AutnContext";

export const ProtectedRoute = ({  redirectPath = "/login" }) => {
  const {user} = useContext(AuthContext)
  if (!user) {
    return  <Navigate to={redirectPath} replace={true} />;
  }

  return  <Outlet />;
};
