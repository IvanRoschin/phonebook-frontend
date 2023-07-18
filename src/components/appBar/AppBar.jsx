import { AuthNav } from '../authNav';
import { UserMenu } from '../userMenu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { token } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <PhoneAndroidIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Phone Book
          </Typography>

          {token ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
};
