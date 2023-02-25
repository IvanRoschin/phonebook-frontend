import { Navigation, AppBarLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Navigation>
      <AppBarLink to="registration">Registration</AppBarLink>
      <AppBarLink to="login">Login</AppBarLink>
    </Navigation>
  );
};
