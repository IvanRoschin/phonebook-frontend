import { AppWrapper, AppTitle } from './AppBar.styled';
import { AuthNav } from '../authNav';
import { UserMenu } from '../userMenu';
// import { useLoginRedirect } from 'hooks';

export const AppBar = () => {
  // const isLoggedIn = useLoginRedirect();
  return (
    <>
      <AppWrapper>
        <AppTitle>
          <a href="/Phonebook-frontend-new">Phonebook</a>
        </AppTitle>
        <>
          <UserMenu />
          {/* {isLoggedIn && <UserMenu />} */}
          <AuthNav />
        </>
      </AppWrapper>
    </>
  );
};
