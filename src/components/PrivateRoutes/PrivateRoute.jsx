// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAuth } from 'redux/auth/authSlice';

import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSlice';
import { LoadingToRedirect } from './LoadingToRedirect';
// /**
//  * - If the route is private and the user is logged in, render the component
//  * - Otherwise render <Navigate> to redirectTo
//  */

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { token } = useSelector(selectAuth);

//   const shouldRedirect = !token;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector(selectAuth);
  return token ? children : <LoadingToRedirect />;
};
