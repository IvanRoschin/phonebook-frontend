import { AuthForm } from 'components/authForm';
import { useRegisterUserMutation } from 'redux/auth/authSlice';

export const RegisterForm = () => {
  const [registerUser] = useRegisterUserMutation();

  const handleRegister = async values => {
    try {
      await registerUser(values);
      //   toast.success(`${values.name} is added to Phonebook.`);
    } catch (error) {
      console.log(error.message);
      //   toast.error('error');
    }
  };

  return <AuthForm onSubmit={handleRegister} btnText={'Signup'} />;
};
