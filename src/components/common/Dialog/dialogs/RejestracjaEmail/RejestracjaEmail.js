import { TextField, Button, styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog, FormType } from '../../store/dialogSlice';
import { fetchRegistrationData, selectResponseStatus } from 'store/systemSlice';

const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 20,
  }
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input:autofill': {
      boxShadow: 'none',
      textFillColor: '#e9626a',
  }
}));

export const RejestracjaEmail = () => {
  const dispatch = useDispatch();
  const responseStatus = useSelector(selectResponseStatus);

  const classes = useStyles();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name.trim()]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRegistrationData(data));
  };

  if(responseStatus === 'succeeded register (:') {
    dispatch(openDialog({ formType: FormType.zalozonyProfil }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledTextField 
        className={classes.field}
        type="text"
        name="firstName"
        label="Imię"
        variant="outlined"
        required
        fullWidth
        error={data.firstName ? data.firstName.trim().length < 3 : true}
        value={data.firstName}
        onChange={handleChange}
        helperText="Co najmniej 3 litery,w tym jedna wielka."
      />

      <StyledTextField 
        className={classes.field}
        type="text"
        name="lastName"
        label="Nazwisko"
        variant="outlined"
        required
        fullWidth
        error={data.lastName ? false : true}
        value={data.lastName}
        onChange={handleChange}
        helperText="Co najmniej 3 litery,w tym jedna wielka."
      />

      <StyledTextField 
        className={classes.field}
        type="text"
        name="login"
        label="Login"
        variant="outlined"
        required
        fullWidth
        error={data.login ? false : true}
        value={data.login}
        onChange={handleChange}
        helperText="Co najmniej 4 znaki, jedna wielka litera i jedna cyfra."
      />

      <StyledTextField 
        className={classes.field}
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
        error={data.email ? false : true}
        value={data.email}
        onChange={handleChange}
      />

      <StyledTextField 
        className={classes.field}
        type="password"
        name="password"
        label="Hasło"
        variant="outlined"
        required
        fullWidth
        error={data.password? data.password.trim().length < 5 : true}
        value={data.password}
        onChange={handleChange}
        helperText="Co najmniej 8 znaków, jedna wielka litera i jedna cyfra."
      />

      <Button
        type="submit"
        className={classes.field}
        color={'primary'}
        variant="contained"
        fullWidth
      >
        Zarejestruj się
      </Button>
      </form>
  );
};

export default RejestracjaEmail;
