import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/auth/authApi';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { toast } from 'react-toastify';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const [logout] = useLogoutMutation();
  const { user } = useAuth();

  const navigate = useNavigate();

  const { name, avatarURL, id } = user;

  const handleLogout = async () => {
    await logout(id);
    toast.success('Logout Successfully');
    navigate('/auth');
  };

  return (
    <Box
      sx={{
        gridTemplateColumns: 'repeat(4, 2fr)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      Wellcome,
      <Avatar src={avatarURL} alt="avatar" />
      {name}
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};
