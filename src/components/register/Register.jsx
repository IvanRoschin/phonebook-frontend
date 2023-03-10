import { useEffect } from 'react';
import { useSignupMutation } from 'redux/auth/authApi';
import { toast } from 'react-toastify';
import { RegisterForm } from 'components/authForm';

export const Register = () => {
  const [
    signup,
    { isSuccess: isSignupSucees, isError: isSignupError, error: SignupError },
  ] = useSignupMutation();

  const handleSignup = async ({ name, email, password }) => {
    if (name && email && password) {
      await signup({ name, email, password });
    } else {
      toast.error('Please fill all fields');
    }
  };

  useEffect(() => {
    if (isSignupSucees) {
      toast.success('Please verify your email');
    }
    if (isSignupError) {
      console.log(SignupError.data.message);
      toast.error(SignupError.data.message);
    }
  }, [isSignupSucees, isSignupError, SignupError]);

  return <RegisterForm onSubmit={handleSignup} />;
};
