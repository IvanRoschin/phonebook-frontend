import { Formik, ErrorMessage } from 'formik';
import {
  FormikForm,
  FormLabel,
  FormInput,
  FormBtn,
  LinkRouter,
} from './AuthForm.styled';

export const LoginForm = ({
  initialValues = { email: '', password: '' },
  onSubmit,
}) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await onSubmit(values);
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikForm>
        'Please enter your email & password'
        <FormLabel>Email</FormLabel>
        <ErrorMessage name="email" />
        <FormInput type="email" name="email" required />
        <FormLabel>Password</FormLabel>
        <ErrorMessage name="password" />
        <FormInput type="password" name="password" required />
        <FormBtn type="submit">Login</FormBtn>
        <LinkRouter to="/register">
          {"Don't have an account? Sign Up"}
        </LinkRouter>
      </FormikForm>
    </Formik>
  );
};
