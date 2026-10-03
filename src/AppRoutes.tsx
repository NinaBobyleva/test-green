import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SignInPage } from "./Pages/SignInPage/SighInPage";
import { paths } from "./paths";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.SIGN_IN} element={<SignInPage />} />

      <Route element={<PrivateRoute />}>
        <Route path={paths.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
