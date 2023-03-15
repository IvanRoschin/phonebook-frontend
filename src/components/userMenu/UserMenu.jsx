// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
// import { logout } from 'redux/auth/authSlice';
import { useLogoutQuery } from 'redux/auth/authApi';
import { selectAuth } from 'redux/auth/authSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import { Container, UserMenuText } from './UserMenu.styled';
// import { Button } from './UserMenu.styled';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const { logout } = useLogoutQuery();

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector(selectAuth);
  const { avatar } = useSelector(selectAuth);
  const { id } = useSelector(selectAuth);
  console.log('id', id);

  function handleLogout() {
    // dispatch(logout());
    logout(id);

    toast.success('Logout Successfully');
    navigate('/auth');
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 2fr)' }}>
      Wellcome
      <img src={avatar} alt="avatar" /> {name}
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};
