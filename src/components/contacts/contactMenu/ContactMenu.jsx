import { useEffect, useState } from 'react';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsApi';
import Box from '@mui/material/Box';
import { ContactForm } from '../ContactForm';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ContactMenu = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const { data: contacts } = useFetchContactsQuery();
  const findContactById = contacts.filter(contact => contact._id === id);
  const [
    deleteContact,
    { isError: isDeleteError, isSuccess: isDeleteSuccess, error: DeleteError },
  ] = useDeleteContactMutation();

  const [
    updateContact,
    {
      isSuccess: isUpdateContactSuccess,
      isError: isUpdateContcatError,
      error: UpdateContactError,
    },
  ] = useUpdateContactMutation();

  const handleDelete = async e => {
    e.preventDefault();
    if (id) {
      try {
        await deleteContact(id);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const handleUpdateContact = async fields => {
    if (id) {
      try {
        await updateContact({ id, ...fields });
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    if (isDeleteError) {
      toast.error(DeleteError.data.message);
    } else if (isDeleteSuccess) {
      toast.warning(`Success`);
    }
  });

  useEffect(() => {
    if (isUpdateContactSuccess) {
      toast.success(`Contact is updated`);
      setOpenModal(false);
    }
    if (isUpdateContcatError) {
      toast.error(UpdateContactError?.data.message);
    }
  }, [
    UpdateContactError?.data.message,
    isUpdateContactSuccess,
    isUpdateContcatError,
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('findContactById[0].name', findContactById[0].name);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={openEl ? 'long-menu' : undefined}
        aria-expanded={openEl ? 'true' : undefined}
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
        open={openEl}
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
      {openModal && (
        <div>
          <Modal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                onClick={() => setOpenModal(false)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="h2"
                align="center"
                color="#1976d2"
              >
                Update Contact
              </Typography>
              {contacts && (
                <ContactForm
                  name={findContactById[0].name}
                  phone={findContactById[0].phone}
                  email={findContactById[0].email}
                  btnText="Save"
                  onSubmit={handleUpdateContact}
                />
              )}
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};
