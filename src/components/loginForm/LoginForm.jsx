import { AuthForm } from 'components/authForm';

export const LoginForm = () => {
  const handleLogin = () => {
    console.log('Hello');
  };

  return <AuthForm onSubmit={handleLogin} btnText={'Login'} />;
};
