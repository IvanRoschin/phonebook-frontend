import { useLoginMutation } from 'redux/auth/authSlice_query';

import { Link } from 'react-router-dom';
import { AuthForm } from 'components/authForm';

export const LoginPage = () => {
  const [login] = useLoginMutation();
  const handleLogin = async values => {
    login(values);
  };

  return (
    <>
      <AuthForm onSubmit={handleLogin} btnText={'Login'} />
      <Link to="/">Havent account? | Signup</Link>
    </>
  );
};
