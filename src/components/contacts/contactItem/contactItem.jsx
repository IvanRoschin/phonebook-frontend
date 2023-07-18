import { useUpdateFavoriteMutation } from 'redux/contacts/contactsApi';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ContactMenu } from '../contactMenu';

export const ContactItem = ({ _id, name, phone, email, favorite }) => {
  const [updateFavorite] = useUpdateFavoriteMutation();

  const handleFavorite = async e => {
    e.preventDefault();
    try {
      await updateFavorite({ _id, favorite: String(!favorite) });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Card sx={{ maxWidth: 354 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div>
          <IconButton aria-label="add to favorites" onClick={handleFavorite}>
            {favorite ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </IconButton>
        </div>
        <ContactMenu id={_id} />
      </Box>

      <CardContent>
        <Typography variant="subtitle1" color="text.primary">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {phone}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};
