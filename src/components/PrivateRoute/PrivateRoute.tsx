import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";

export function PrivateRoute() {
    const [authState] = useState(true);
  return authState ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}
