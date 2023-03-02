import { Routes, Route } from 'react-router-dom';
import { WelcomePage, LoginPage, ContactPage } from 'pages';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contacts" element={<ContactPage />}></Route>
      </Route>
    </Routes>
  );
};
