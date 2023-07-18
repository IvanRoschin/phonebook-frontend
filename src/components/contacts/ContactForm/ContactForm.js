import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const ContactForm = ({
  name = '',
  email = '',
  phone = '',
  onSubmit,
  btnText,
}) => {
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    onSubmit({ name, email, phone });
  };

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

        <Box
          sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Button
            type="submit"
            width="50%"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {btnText}
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
