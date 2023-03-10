import { useCurrentQuery } from 'redux/auth/authApi';

export const UserSettings = () => {
  const { data: currentUser } = useCurrentQuery();
  console.log('currentUser:', currentUser);

  return <div>user settings</div>;
};
