import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openDialog, FormType } from '../../store/dialogSlice';

const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 20,
  },
});

export const RejestracjaEmail = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [email, setEmail] = useState('');
  const [haslo, setHaslo] = useState('');

  return (
    <>
      <TextField
        className={classes.field}
        id="outlined-basic"
        label="Imię"
        variant="outlined"
        required
        fullWidth
        error={imie ? imie.trim().length < 3 : true}
        onChange={(e) => setImie(e.target.value.trim())}
      />

      <TextField
        className={classes.field}
        id="outlined-basic"
        label="Nazwisko"
        variant="outlined"
        required
        fullWidth
        error={nazwisko ? false : true}
        onChange={(e) => setNazwisko(e.target.value.trim())}
      />

      <TextField
        className={classes.field}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        required
        fullWidth
        error={email ? false : true}
        onChange={(e) => setEmail(e.target.value.trim())}
      />

      <TextField
        className={classes.field}
        id="outlined-basic"
        label="Hasło"
        variant="outlined"
        required
        fullWidth
        error={haslo ? haslo.trim().length < 5 : true}
        onChange={(e) => setHaslo(e.target.value.trim())}
      />

      <Button
        className={classes.field}
        onClick={() => {
          if (Boolean(imie) && Boolean(nazwisko) && Boolean(email) && Boolean(haslo)) {
            dispatch(openDialog({ formType: FormType.zalozonyProfil }));
          }
        }}
        color={'primary'}
        variant="contained"
        fullWidth
      >
        Zarejestruj się
      </Button>
    </>
  );
};

export default RejestracjaEmail;
