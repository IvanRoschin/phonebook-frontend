import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactPage, RegisterPage, AuthPage, CurrentUser } from 'pages';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './privateRoutes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<WelcomePage />}></Route> */}
        <Route path="/" element={<Navigate to="auth" replace />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>

        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/current" element={<CurrentUser />}></Route>
      </Route>
    </Routes>
  );
};
