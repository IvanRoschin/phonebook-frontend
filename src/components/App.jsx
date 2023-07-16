import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader';
import { useAuth } from 'hooks/useAuth';
import { useCurrentQuery } from 'redux/auth/authApi';
import Container from '@mui/material/Container';

const PrivatRoute = lazy(() =>
  import(
    '../components/routes/PrivateRoute' /* webpackChunkName: "PrivatRoute" */
  )
);

const PublickRoute = lazy(() =>
  import(
    '../components/routes/PublicRoute' /* webpackChunkName: "PublickRoute" */
  )
);

const AuthPage = lazy(() =>
  import('../pages/authPage/AuthPage' /* webpackChunkName: "AuthPage" */)
);

const ContactPage = lazy(() =>
  import(
    '../pages/contactPage/ContactPage' /* webpackChunkName: "ContactPage" */
  )
);

export const App = () => {
  const { token } = useAuth();
  useCurrentQuery(null, { skip: !token });

  return (
    <Container width={{ xs: '320px', sm: '768px', md: '1280px' }}>
      <Suspense fallback={<Loader color="#6e78e8" size="100px" />}>
        <Routes>
          <Route
            path="/auth"
            element={
              <PublickRoute>
                <AuthPage />
              </PublickRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute>
                <ContactPage />
              </PrivatRoute>
            }
          />
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
