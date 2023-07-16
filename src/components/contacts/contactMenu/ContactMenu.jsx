import { useEffect, useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { toast } from 'react-toastify';

export const ContactMenu = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);

  const [
    deleteContact,
    { isError: isDeleteError, isSuccess: isDeleteSucces, error: DeleteError },
  ] = useDeleteContactMutation();

  const handleDelete = async e => {
    e.preventDefault();
    if (id) {
      await deleteContact(id);
    }
  };
  useEffect(() => {
    if (isDeleteError) {
      toast.error(DeleteError.data.message);
    } else if (isDeleteSucces) {
      toast.warning(`Contact is deleted`);
    }
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        <MenuItem
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Edit
        </MenuItem>
      </Menu>
    </div>
  );
};
