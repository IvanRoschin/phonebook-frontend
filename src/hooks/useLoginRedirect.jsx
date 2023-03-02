import { useCurrentQuery } from 'redux/auth/authSlice_query';
import { useNavigate } from 'react-router-dom';

export const useLoginRedirect = () => {
  const navigate = useNavigate();
  const { data: current } = useCurrentQuery();

  console.log(current);

  if (current) {
    navigate('/contacts', { replace: true });
  }

  return 'welcome to hell';
};
