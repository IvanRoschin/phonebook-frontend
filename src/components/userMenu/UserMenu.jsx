import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/authSlice';
import { selectAuth } from 'redux/auth/authSlice';
import { Container, UserMenuText } from './UserMenu.styled';
import { Button } from './UserMenu.styled';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector(selectAuth);
  const { avatar } = useSelector(selectAuth);

  function handleLogout() {
    dispatch(logout());
    toast.success('Logout Successfully');
    navigate('/auth');
  }

  return (
    <Container>
      <UserMenuText>
        <>
          Welcome, {name} <img src={avatar} alt="1" />
        </>
      </UserMenuText>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};
