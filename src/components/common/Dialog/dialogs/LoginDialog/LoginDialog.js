import { TextField, Button, Typography, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { openDialog, FormType } from '../../store/dialogSlice';
import { useDispatch } from 'react-redux';
import ErrorIcon from '@mui/icons-material/Error';
import UserClient from 'services/client/UserClient';
import { login } from 'store/systemSlice';

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
  const [content,setContent] = useState("");
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

      UserClient.loginUser(data).then((response) => {
        if(response.status === 200) {
          dispatch(openDialog({ formType: FormType.zalogowany}));
          dispatch(login({ name: data.login }));
          const token = response.headers["auth-token"]
          localStorage.setItem("auth-token", token);
        };
      }).catch((error) => {
        if (error.response) {
          setContent(
            <Box display={"flex"} flexDirection={"row"}>
                <ErrorIcon fontSize={"small"} color={"error"} style={{marginRight: "0.4rem"}}/> 
                <div style={{color: "red", fontWeight:600, textTransform: "capitalize"}}>{error.response.data}</div>
            </Box>
            );
        } else if (error.request) {
          <Box display={"flex"} flexDirection={"row"}>
                <ErrorIcon fontSize={"small"} color={"error"} style={{marginRight: "0.4rem"}}/> 
                <div style={{color: "red", fontWeight:600, textTransform: "capitalize"}}>"Błąd sieci. Sprawdź swoje połączenie!"</div>
          </Box>
        } else {
          console.log(error);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {content}
      <TextField
        className={classes.field}
        type="login"
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

      <TextField
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
          Nie masz jeszcze konta? Zarejestruj się!
        </Link>
      </Typography>
    </form>
  );
};

export default LoginDialog;
