import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export const useLoginRedirect = () => {
  const { isLogIn } = useAuth();

  const navigate = useNavigate();
  if (!isLogIn) {
    navigate('/');
  }
  return;
};
