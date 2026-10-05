import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";
import { useAuth } from "../../context/authContext";

export function PrivateRoute() {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}
