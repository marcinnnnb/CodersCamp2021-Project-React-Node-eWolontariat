import { TextField, Button, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { openDialog, FormType } from '../../store/dialogSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 20,
  },
  text2: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export const LoginDialog = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [login, setLogin] = useState('');
  const [haslo, setDetails] = useState('');

  return (
    <>
      <TextField
        className={classes.field}
        id="outlined-basic"
        label="Login"
        variant="outlined"
        required
        fullWidth
        error={login ? false : true}
        onChange={(e) => setLogin(e.target.value.trim())}
      />

      <TextField
        className={classes.field}
        id="outlined-basic"
        label="Hasło"
        variant="outlined"
        required
        fullWidth
        error={haslo ? false : true}
        onChange={(e) => setDetails(e.target.value.trim())}
      />

      <Button className={classes.field} type="submit" color="primary" variant="contained" fullWidth>
        Zaloguj się
      </Button>

      <Typography align="center">
        <Link
          component="button"
          variant="body1"
          onClick={() => dispatch(openDialog({ formType: FormType.rejestracja }))}
        >
          Nie masz jeszcze konta? Zarejestruj się!
        </Link>
      </Typography>
    </>
  );
};

export default LoginDialog;
