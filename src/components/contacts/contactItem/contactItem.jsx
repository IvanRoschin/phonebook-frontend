import { useState } from 'react';
import { EditContactModal } from '../EditContactModal';

import {
  // useDeleteContactMutation,
  useUpdateFavoriteMutation,
} from 'redux/contacts/contactsApi';
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { ContactMenu } from '../contactMenu';

export const ContactItem = ({ _id, name, phone, email, favorite }) => {
  // const [openModal, setOpenModal] = useState(false);
  // const [
  //   deleteContact,
  //   { isError: isDeleteError, error: DeleteError, isLoading: isDeleting },
  // ] = useDeleteContactMutation();
  const [updateFavorite] = useUpdateFavoriteMutation();

  // const handleDelete = async e => {
  //   e.preventDefault();
  //   if (_id && !isDeleteError) {
  //     await deleteContact(_id);
  //     toast.warning(`Contact is deleted`);
  //   } else {
  //     toast.error(DeleteError);
  //   }
  // };

  const handleFavorite = e => {
    e.preventDefault();
    updateFavorite({ _id, favorite: String(!favorite) });
  };

  //Item menu
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  //

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div>
            <IconButton aria-label="add to favorites" onClick={handleFavorite}>
              {favorite ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon color="secondary" />
              )}
            </IconButton>
          </div>
          <ContactMenu id={_id} />
          {/* <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
              <MenuItem onClick={handleFavorite}>Edit</MenuItem>
            </Menu>
          </div> */}
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
    </Grid>
  );
};
