import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const useIsLoggedIn = () => {
  const { token } = useSelector(selectAuth);
  const navigate = useNavigate();
  if (token) {
    console.log('user is Logged In');
  }
  navigate('/');
};
