import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth, setUser } from 'redux/auth/authSlice';

export const useLoginRedirect = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  useEffect(() => {
    dispatch(setUser(user));
  }, [user, dispatch]);

  const { name } = useSelector(selectAuth);
  const navigate = useNavigate();
  if (!name) {
    navigate('/');
  }
  return;
};
