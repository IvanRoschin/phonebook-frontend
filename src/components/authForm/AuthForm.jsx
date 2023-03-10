// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import { LinkRouter } from './RegisterForm.styled';

// import { useState } from 'react';

// export const AuthForm = ({
//   initialValues = { name: '', email: '', password: '' },
//   onSubmit,
// }) => {
//   const [showRegister, setShowRegister] = useState(false);

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       await onSubmit(values);
//       resetForm();
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <FormikForm>
//         {!showRegister
//           ? 'Please enter your email & password'
//           : 'Please enter your User detail'}
//         {showRegister && (
//           <>
//             <FormLabel>Name</FormLabel>
//             <FormInput type="name" name="name" required />
//             <ErrorMessage name="name" />
//           </>
//         )}
//         <FormLabel>Email</FormLabel>
//         <ErrorMessage name="email" />
//         <FormInput type="email" name="email" required />

//         <FormLabel>Password</FormLabel>
//         <ErrorMessage name="password" />
//         <FormInput type="password" name="password" required />

//         {!showRegister ? (
//           <>
//             <FormBtn type="submit">Login</FormBtn>
//             Don't have account?
//             <span
//               style={{ cursor: 'pointer' }}
//               onClick={() => setShowRegister(true)}
//             >
//               Signup
//             </span>
//           </>
//         ) : (
//           <>
//             <FormBtn type="submit">Signup</FormBtn>
//             Already have an account?
//             <span
//               style={{ cursor: 'pointer' }}
//               onClick={() => setShowRegister(false)}
//             >
//               Login
//             </span>
//           </>
//         )}
//       </FormikForm>
//     </Formik>
//   );
// };
