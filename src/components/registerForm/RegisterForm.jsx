import { AuthForm } from 'components/authForm';
// import { useRegisterUserMutation } from 'redux/auth/authSlice';

export const RegisterForm = () => {
  //   const [registerUser] = useRegisterUserMutation();
  const handleRegister = () => {
    console.log('Hello');
  };

  return <AuthForm onSubmit={handleRegister} btnText={'Signup'} />;
};
