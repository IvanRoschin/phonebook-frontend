import { useSignupMutation } from 'redux/auth/authSlice_query';
import { AuthForm } from 'components/authForm';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const [signup] = useSignupMutation();

  const handleRegister = async values => {
    signup(values);
  };

  return (
    <>
      <AuthForm onSubmit={handleRegister} btnText={'Signup'} />
      <Link to="/login">Allready have account? | Login</Link>
    </>
  );
};
