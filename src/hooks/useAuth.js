import { useSelector } from 'react-redux';
import { selectToken, selectUser, selectIsLoggedIn } from 'redux/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  return {
    isLoggedIn,
    user,
    token,
  };
};
