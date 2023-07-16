import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useLoginMutation, useSignupMutation } from 'redux/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import desktop from '../../components/images/desktop.jpg';
import { RecentEmail } from 'components/recentEmail';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export function AuthForm() {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  const [
    login,
    { isSuccess: isLoginSuccess, isError: isLoginError, error: loginError },
  ] = useLoginMutation();

  const [
    signup,
    { isSuccess: isSignupSucees, isError: isSignupError, error: signupError },
  ] = useSignupMutation();

  const handleLogin = async event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      try {
        await login({ email, password });
      } catch (error) {
        toast.error(error.data.message);
      }
    } else {
      toast.error('Please fill all Fields');
    }
    form.reset();
  };

  const handleSignup = async event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const subscription = form.subscription.value;

    if (name && email && password && subscription) {
      try {
        await signup({ name, email, password, subscription });
        localStorage.setItem(
          'formData',
          JSON.stringify({ name, email, password, subscription })
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      toast.error('Please fill all Fields');
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success('Login success');
      navigate('/contacts');
    }

    if (isSignupSucees) {
      toast.success('Signup success. Verify you email');
    }
  }, [isLoginSuccess, isLoginError, loginError, isSignupSucees, navigate]);

  useEffect(() => {
    if (isLoginError) {
      toast.error(loginError?.data.message);
    }
    if (isSignupError) {
      toast.error(signupError?.data.message);
    }
  }, [isLoginError, loginError, isSignupError, signupError]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          marginLeft: '20px',
          marginRight: '20px',
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${desktop})`,
            // backgroundImage:
            //   'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `left top`,
            height: '100%',
            width: '300px',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {!showRegister ? 'Login' : 'Register'}
            </Typography>
            <p className="text-blue-50 mb-4">
              {!setShowRegister
                ? 'Please enter your email & password'
                : 'Please enter user detail'}
            </p>
            <Box
              component="form"
              noValidate
              onSubmit={showRegister ? handleSignup : handleLogin}
              sx={{ mt: 1 }}
            >
              {showRegister && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name "
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {showRegister && (
                <div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                  />
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Choose your account type
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      defaultValue="starter"
                    >
                      <FormControlLabel
                        value="pro"
                        name="subscription"
                        control={<Radio />}
                        label="Pro"
                      />
                      <FormControlLabel
                        value="starter"
                        name="subscription"
                        control={<Radio />}
                        label="Starter"
                      />
                      <FormControlLabel
                        value="business"
                        name="subscription"
                        control={<Radio />}
                        label="Business"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {!showRegister ? 'Login' : 'Sign In'}
              </Button>
              {showRegister && <RecentEmail />}
              <Grid container>
                <Grid item>
                  {!showRegister ? (
                    <>
                      Don't have an account?
                      <p
                        className="text-blue-50 fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowRegister(true)}
                      >
                        Signup
                      </p>
                    </>
                  ) : (
                    <>
                      Already have an account?
                      <p
                        className="text-blue-50 fw-bold"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowRegister(false)}
                      >
                        Login
                      </p>
                    </>
                  )}
                </Grid>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
