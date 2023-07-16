import { LoadingToRedirect } from './LoadingToRedirect';
import { useAuth } from 'hooks/useAuth';

export default function PublicRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <LoadingToRedirect /> : children}</>;
}
