// import { useDispatch } from 'react-redux';
// import { setFilter } from 'redux/contacts/filterSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const Filter = () => {
  // const dispatch = useDispatch();
  // const handleSearch = e => {
  //   dispatch(setFilter(e.target.value));
  // };
  return (
    <TextField
      id="standard-search"
      type="search"
      variant="standard"
      label="find by name"
      sx={{
        mb: '1.5rem',
      }}
      fullWidth

      // onChange={handleSearch}
    />
  );
};
