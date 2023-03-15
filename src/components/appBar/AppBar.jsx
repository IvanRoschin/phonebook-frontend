import { AuthNav } from '../authNav';
import { UserMenu } from '../userMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSlice';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
export const Header = () => {
  const { token } = useSelector(selectAuth);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <PhoneAndroidIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>

          {token ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};
