import {
  useUpdateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Typography } from '@mui/material';
import { ContactForm } from 'components/contacts/ContactForm';

export const UpdateContact = ({ id }) => {
  const [
    updateContact,
    {
      isSuccess: isUpdateContactSuccess,
      isError: isUpdateContcatError,
      error: UpdateContactError,
    },
  ] = useUpdateContactMutation();

  const { data: contacts } = useFetchContactsQuery();

  const findContactById = contacts.filter(contact => contact._id === id);

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id, ...fields });
      toast.success('Contact is updated');
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (isUpdateContactSuccess) {
      toast.success(`Contact is updated`);
    }
    if (isUpdateContcatError) {
      toast.error(UpdateContactError?.data.message);
    }
  }, [
    UpdateContactError?.data.message,
    isUpdateContactSuccess,
    isUpdateContcatError,
  ]);

  return (
    <>
      <Typography variant="h6" component="h2" align="center" color="#1976d2">
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
    </>
  );
};
