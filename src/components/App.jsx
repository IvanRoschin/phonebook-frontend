import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader';
import { useAuth } from 'hooks/useAuth';
import { useCurrentQuery } from 'redux/auth/authApi';

const PrivatRoute = lazy(() =>
  import(
    '../components/routes/PrivateRoute' /* webpackChunkName: "PrivatRoute" */
  )
);

const PublicRoute = lazy(() =>
  import(
    '../components/routes/PublicRoute' /* webpackChunkName: "PublickRoute" */
  )
);

const AuthPage = lazy(() =>
  import('../pages/authPage/AuthPage' /* webpackChunkName: "AuthPage" */)
);

const DashboardPage = lazy(() =>
  import(
    '../pages/DashboardPage/DashboardPage' /* webpackChunkName: "ContactPage" */
  )
);

export const App = () => {
  const { token } = useAuth();
  useCurrentQuery(null, { skip: !token });

  return (
    <Suspense fallback={<Loader color="#6e78e8" size="100px" />}>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivatRoute>
              <DashboardPage />
            </PrivatRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivatRoute>
              <DashboardPage />
            </PrivatRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivatRoute>
              <DashboardPage />
            </PrivatRoute>
          }
        />

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
