import { toast } from 'react-toastify';
import axios from 'axios';
import Button from '@mui/material/Button';
// const apiUrl = process.env.REACT_APP_API_URL;
const formData = JSON.parse(localStorage.getItem('formData'));

const handleClick = async () => {
  const requestData = { email: `${formData.email}` };

  await axios
    .post(`http://localhost:8080/api/users/verify`, requestData)
    .then(response => {
      toast.success(response.data.message);
      console.log(response.data);
    })
    .catch(error => {
      toast.error('Verification has already been passed');
      console.error(error.message);
    });
};

export const RecentEmail = () => {
  return (
    <>
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Recent Email
      </Button>
    </>
  );
};
