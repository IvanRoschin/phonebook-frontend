import { Navigation, AppBarLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Navigation>
        <AppBarLink to="/register">Signup</AppBarLink>
        <AppBarLink to="/">Login</AppBarLink>
      </Navigation>
    </>
  );
};
