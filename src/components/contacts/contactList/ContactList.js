import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { ContactItem } from '../contactItem';

export const ContactList = () => {
  const {
    data: contacts,
    isError: isFetchContactsError,
    // isLoading: isFetchContactsLoading,
    // isSuccess: isFetchContactsSucces,
    error: isFectchContactError,
  } = useFetchContactsQuery();
  console.log(contacts);

  const filter = useSelector(getFilter);

  const filtredContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  // if (contacts.length === 0) {
  //   toast.warning('Your contact list is empty');
  // }
  useEffect(() => {
    if (isFetchContactsError) {
      console.log(isFetchContactsError);
      toast.error(isFectchContactError.data.message);
    }
  });

  return (
    <Grid container rowSpacing={1} spacing={{ xs: 1, sm: 2, md: 3 }}>
      {filtredContacts.map(item => (
        <ContactItem key={item._id} {...item} />
      ))}
    </Grid>
  );
};
