import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AuthForm } from 'components/authForm';

const AuthPage = () => {
  return (
    <Box>
      <Typography
        sx={{ typography: { xs: 'h3', lg: 'h1' } }}
        component="h1"
        color="#1976d2"
      >
        Welcome to <br />
      </Typography>
      <AuthForm />
    </Box>
  );
};

export default AuthPage;
