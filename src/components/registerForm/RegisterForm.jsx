import { AuthForm } from 'components/authForm';

export const RegisterForm = () => {
  const handleRegister = () => {
    console.log('Hello');
  };

  return <AuthForm onSubmit={handleRegister} btnText={'Signup'} />;
};
