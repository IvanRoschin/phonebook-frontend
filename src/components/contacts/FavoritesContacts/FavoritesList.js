import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useGetFavoritesQuery } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from '../contactItem';
import Box from '@mui/material/Box';

export const FavoritesList = () => {
  const {
    data: contacts,
    isError: isFetchContactsError,
    error: isFectchContactError,
  } = useGetFavoritesQuery();

  const filter = useSelector(getFilter);

  const filtredContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  if (contacts?.length === 0) {
    toast.warning('Your contact list is empty');
  }
  useEffect(() => {
    if (isFetchContactsError) {
      console.log(isFetchContactsError);
      toast.error(isFectchContactError.data.message);
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filtredContacts.map(item => (
          <Grid key={item._id} item xs={4} sm={4} md={4}>
            <ContactItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
