import { AppWrapper, AppTitle } from './AppBar.styled';
import { AuthNav } from '../authNav';
import { UserMenu } from '../userMenu';
// import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();
  return (
    <>
      <AppWrapper>
        <AppTitle>Phonebook</AppTitle>
        <>
          <UserMenu />
          <AuthNav />
        </>
      </AppWrapper>
    </>
  );
};
