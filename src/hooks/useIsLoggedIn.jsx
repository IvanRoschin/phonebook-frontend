import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useIsLoggedIn = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  if (token) {
    console.log('user is Logged In');
  }
  navigate('/');
};
