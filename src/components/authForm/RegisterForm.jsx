import { Formik, ErrorMessage } from 'formik';
import {
  FormikForm,
  FormLabel,
  FormInput,
  FormBtn,
  LinkRouter,
} from './AuthForm.styled';

export const RegisterForm = ({
  initialValues = { name: '', email: '', password: '' },
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
        'Please enter your User detail'
        <FormLabel>Name</FormLabel>
        <FormInput type="name" name="name" required />
        <ErrorMessage name="name" />
        <FormLabel>Email</FormLabel>
        <ErrorMessage name="email" />
        <FormInput type="email" name="email" required />
        <FormLabel>Password</FormLabel>
        <ErrorMessage name="password" />
        <FormInput type="password" name="password" required />
        <FormBtn type="submit">Signup</FormBtn>
        <LinkRouter to="/">{'Already have an account? Sign in'}</LinkRouter>
      </FormikForm>
    </Formik>
  );
};
