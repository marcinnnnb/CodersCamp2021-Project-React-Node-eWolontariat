import { TextField, Button, Typography, Link, styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { openDialog, FormType } from '../../store/dialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginData, login,  selectResponseStatus } from 'store/systemSlice';


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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input:autofill': {
      boxShadow: 'none',
      textFillColor: '#e9626a',
  }
}));

export const LoginDialog = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const responseStatus = useSelector(selectResponseStatus);
  const [data, setData] = useState({
    login: "",
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
    dispatch(fetchLoginData(data));   
  };

  if(responseStatus === 'succeeded log in (:') {
    dispatch(login({ user: data.login }));
    dispatch(openDialog({ formType: FormType.zalogowany}));
  }  

  return (
    <form onSubmit={handleSubmit}>
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
        type="password"
        name="password"
        label="Hasło"
        variant="outlined"
        required
        fullWidth
        error={data.password ? false : true}
        onChange={handleChange}
        helperText="Co najmniej 8 znaków, jedna wielka litera i jedna cyfra."
      />

      <Button type="submit" className={classes.field} color="primary" variant="contained" fullWidth>
        Zaloguj się
      </Button>

      <Typography align="center">
        <Link
          component="button"
          variant="body1"
          onClick={() => dispatch(openDialog({ formType: FormType.rejestracja }))}
        >
          <Typography variant="caption" style={{color:"black"}}>Nie masz jeszcze konta? Zarejestruj się!</Typography>
        </Link>
      </Typography>
    </form>
  );
};

export default LoginDialog;
