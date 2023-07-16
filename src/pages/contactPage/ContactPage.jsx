import { Filter } from 'components/contacts/Filter';
import { ContactList } from 'components/contacts/contactList';
import { BasicModal } from 'components/modal';
import { Button } from 'components/userMenu/UserMenu.styled';
import { Box } from '@mui/material';
import { FavoritesList } from 'components/contacts/FavoritesContacts';
// import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  // const { pathname } = useLocation();

  return (
    <>
      <Box sx={{ display: 'inline-flex' }}>
        <BasicModal />
        <Button
          type="button"
          width="160px"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Get
        </Button>
      </Box>

      <Filter />
      <FavoritesList />
      <ContactList />
    </>
  );
};

export default ContactPage;
