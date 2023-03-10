import { useEffect } from 'react';
import { useLoginMutation } from 'redux/auth/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/auth/authSlice';
import { LoginForm } from 'components/authForm';

export const Login = () => {
  const [
    login,
    {
      data: loginData,
      isSuccess: isLoginSucces,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    console.log({ email, password });
    if (email && password) {
      await login({ email, password });
    } else {
      toast.error('Please fill all fields');
    }
  };

  useEffect(() => {
    if (isLoginSucces) {
      toast.success('Login Successfuly');
      dispatch(
        setUser({
          name: loginData.user.name,
          token: loginData.token,
          avatar: loginData.user.avatarURL,
        })
      );
      navigate('/contacts');
    }
    if (isLoginError) {
      console.log(loginError.data.message);
      toast.error(loginError.data.message);
    }
  }, [isLoginSucces, isLoginError, loginError, navigate, dispatch]);

  return <LoginForm onSubmit={handleLogin} />;
};
