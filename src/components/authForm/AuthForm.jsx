import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormikForm, FormLabel, FormInput, FormBtn } from './AuthForm.styled';

const schema = yup.object({
  email: yup.string().required('Required'),
  password: yup
    .string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
});

export const AuthForm = ({
  initialValues = { email: '', password: '' },
  onSubmit,
  btnText,
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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormikForm>
        <FormLabel>Email</FormLabel>
        <ErrorMessage name="email" />
        <FormInput
          type="email"
          name="email"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormLabel>Password</FormLabel>
        <ErrorMessage name="password" />
        <FormInput
          type="password"
          name="password"
          //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormBtn type="submit">{btnText}</FormBtn>
      </FormikForm>
    </Formik>
  );
};
