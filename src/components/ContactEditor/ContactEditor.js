import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { ContactForm } from 'components/contacts/ContactForm';

export const ContactEditor = () => {
  const [
    addContact,
    {
      isSuccess: isAddContactSuccess,
      isError: isAddContcatError,
      error: AddContactError,
    },
  ] = useAddContactMutation();

  const { data: contacts } = useFetchContactsQuery();

  const handleAddContact = async ({ name, email, phone }) => {
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      toast.error(`${name} is already in contacts.`);
      return;
    } else if (name && email && phone) {
      try {
        await addContact({ name, email, phone });
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.error('Please fill all Input');
    }
  };

  useEffect(() => {
    if (isAddContactSuccess) {
      toast.success(`Contact is added to Phonebook.`);
    }
    if (isAddContcatError) {
      toast.error(AddContactError?.data.message);
    }
  }, [AddContactError?.data.message, isAddContactSuccess, isAddContcatError]);

  return (
    <>
      <Typography variant="h6" component="h2" align="center" color="#1976d2">
        Add Contact
      </Typography>
      <ContactForm
        btnText={`Add Contact`}
        onSubmit={handleAddContact}
      ></ContactForm>
    </>
  );
};
