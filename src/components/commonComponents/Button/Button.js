import { Button } from '@mui/material';

export const Btn = ({ props }) => {
  return (
    <Button type="submit" width="50%" variant="contained" sx={{ mt: 3, mb: 2 }}>
      {props}
    </Button>
  );
};
