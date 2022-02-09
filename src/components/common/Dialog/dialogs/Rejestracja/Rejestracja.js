import { Typography, Box, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openDialog, FormType } from '../../store/dialogSlice';
import EmailIcon from '@mui/icons-material/Email';

export const Rejestracja = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h3" align="center">
        Wybierz formę rejestracji:
      </Typography>

      <Box sx={{ marginTop: 20, marginBottom: 20 }}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}
          startIcon={<EmailIcon />}
        >
          Zarejestruj się za pomocą e-mail
        </Button>
      </Box>
    </>
  );
};

export default Rejestracja;
