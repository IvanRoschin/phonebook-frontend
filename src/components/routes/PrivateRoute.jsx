import { LoadingToRedirect } from './LoadingToRedirect';
import { useAuth } from 'hooks/useAuth';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <LoadingToRedirect />;
}
