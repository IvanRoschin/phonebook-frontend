import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Container, UserMenuText } from './UserMenu.styled';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container>
      <UserMenuText>Welcome, </UserMenuText>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};
