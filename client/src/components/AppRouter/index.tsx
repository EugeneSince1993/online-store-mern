import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/hooks";
import { authRoutes, publicRoutes } from "../../routes";
import { HOME } from "../../utils/routes/consts";

export const AppRouter: FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {isAuth && (
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))
      )}
      <Route path="*" element={<Navigate to={HOME} replace />} />
    </Routes>
  );
};