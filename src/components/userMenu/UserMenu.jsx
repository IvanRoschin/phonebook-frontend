// import { useAuth } from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { logOut } from 'redux/auth/operations';
import { Container, UserMenuText } from './UserMenu.styled';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  // const handleLogOut = () => {
  //   dispatch(logOut());
  //   toast.info('Good bye, see you next time!');
  // };

  return (
    <Container>
      <UserMenuText>Welcome</UserMenuText>
      <Button type="button">Logout</Button>
    </Container>
  );
};
