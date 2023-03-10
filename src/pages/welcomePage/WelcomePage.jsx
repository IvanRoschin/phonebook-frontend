import { Login } from 'components/login/Login';
import { UserSettings } from 'components/userSettings';

export const WelcomePage = () => {
  UserSettings();
  return (
    <div>
      <Login />
    </div>
  );
};
