import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const ContactForm = ({ btnText }) => {
  const [
    addContact,
    {
      isSuccess: isAddContactSuccess,
      isError: isAddContcatError,
      error: AddContactError,
    },
  ] = useAddContactMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    if (name && email && phone) {
      try {
        await addContact({ name, email, phone });
      } catch (err) {
        console.error(err);
      }
    } else {
      toast.error('Please fill all Input');
    }
  };

  useEffect(() => {
    if (isAddContactSuccess) {
      toast.success('Contact added successfully');
    }
    if (isAddContcatError) {
      toast.error(AddContactError?.data.message);
    }
  }, [AddContactError?.data.message, isAddContactSuccess, isAddContcatError]);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container rowSpacing={1}>
        <Grid item width={'100%'}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
          />
        </Grid>
        <Grid item width={'100%'}>
          <TextField
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
          />
        </Grid>
        <Grid item width={'100%'}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>

        <Grid itemwidth={'100%'}>
          <Button
            type="submit"
            width="50%"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {btnText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
