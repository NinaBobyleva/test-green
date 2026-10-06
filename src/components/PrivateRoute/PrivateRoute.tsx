import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";
import { useState } from "react";
// import { useAuth } from "../../context/authContext";

export function PrivateRoute() {
  // const { isAuth } = useAuth();
  const [isAuth] = useState(true);

  return isAuth ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}
