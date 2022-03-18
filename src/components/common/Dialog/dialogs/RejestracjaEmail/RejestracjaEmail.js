import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openDialog, FormType } from '../../store/dialogSlice';
import ErrorIcon from '@mui/icons-material/Error';
import UserClient from 'services/client/UserClient';

const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 20,
  },
});

export const RejestracjaEmail = () => {
  const dispatch = useDispatch();
  const [content,setContent] = useState("");

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
    
     UserClient.registerUser(data).then((response) => {
        console.log(response.status);
        if(response.status === 201) {dispatch(openDialog({ formType: FormType.zalozonyProfil }))};
      }).catch((error) => {
        if (error.response) {
          setContent(
            <Box display={"flex"} flexDirection={"row"}>
                <ErrorIcon fontSize={"small"} color={"error"} style={{marginRight: "0.4rem"}}/> 
                <div style={{color: "red", fontWeight:600, textTransform: "capitalize"}}>{error.response.data.message}!</div>
            </Box>
            );
        } else if (error.request) {
          setContent("Błąd sieci. Sprawdź swoje połączenie!");
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
        type="firstName"
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

      <TextField
        className={classes.field}
        type="lastName"
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

      <TextField
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
