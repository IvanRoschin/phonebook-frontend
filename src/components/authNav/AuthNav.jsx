import { Link } from 'react-router-dom';
import { BasicModal } from 'components/modal';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        p: 1,
        m: 1,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <BasicModal
        sx={{
          p: 1,
          m: 1,
          height: 1,
        }}
      />
      <Box
        sx={{
          p: 1,
          m: 1,
          height: 1,
          marginTop: 2,
        }}
      >
        <Button component={Link} variant="contained" to="/home">
          Contacts
        </Button>
      </Box>
      <Box
        sx={{
          p: 1,
          height: 1,
          marginTop: 2,
        }}
      >
        <Button component={Link} variant="contained" to="/favorites">
          Favorites
        </Button>
      </Box>
      <Box
        sx={{
          p: 1,
          height: 1,
          marginTop: 2,
        }}
      >
        <Button component={Link} variant="contained" to="/account">
          Account
        </Button>
      </Box>
    </Box>
  );
};
