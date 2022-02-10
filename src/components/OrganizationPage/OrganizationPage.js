import { Box, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import pies from '../../assets/img/tasks/pies.jpg';
import petFood from '../../assets/img/petFood.png';

const useStyles = makeStyles({
  topBox: {
    width: '100%',
    height: 100,
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    marginBottom: 80,
  },
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 100,
    marginLeft: 100,
  },
  utworzenieZadania: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginRight: 100,
    marginLeft: 100,
  },
});

export const OrganizationPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box className={classes.topBox}>
        <Typography variant="h3">Schronisko dla bezdomnych zwierząt</Typography>
        <Typography variant="h5">KRS 000387593875</Typography>
      </Box>

      <Box className={classes.mainBox}>
        <Box
          component="img"
          sx={{
            height: '200px',
            width: '200px',
            borderRadius: '40%',
          }}
          alt="Zdjęcie pieska podnoszącego łapkę"
          src={pies}
        />
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h2">Schronisko dla bezdomnych zwierząt</Typography>
          <Typography variant="h6">Poszukuje do: 3 zadań</Typography>
        </Box>
        <Typography variant="h3">
          W naszym schronisku znajduje się wiele spragnionych uczucia i domu psów oraz kotów, które z utęsknieniem
          czekają na ludzi chcących dać im prawdziwy dom i opiekę. W schronisku przebywa (w zaleności od pory roku)
          około 200-300 psów i 100-300 kotów rónych ras i wielkości. Schronisko dla przyjmuje zwierzęta całą dobę, a
          wydaje nowym opiekunom w godzinach 10:00-14:00 i 15:00-17:00 przez wszystkie dni tygodnia.
        </Typography>
      </Box>

      <Box className={classes.utworzenieZadania}>
        <Typography onClick={() => navigate('/TaskForm')}>Utworzone zadania</Typography>
        <Button onClick={() => navigate('/TaskForm')} variant="contained">
          Dodaj nowe zadanie
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: 80, marginBottom: 80, border: 2 }}>
        <Grid container spacing={6} justifyContent="space-around" alignItems="center">
          <Grid xs="auto">
            <Box
              component="img"
              sx={{
                height: '180px',
              }}
              alt="Zdjęcie pieska podnoszącego łapkę"
              src={pies}
            />
            <Typography variant="h3">Wyprowadzanie psów na spacery</Typography>
            <Typography variant="h3">Zgłosiło się: 2 z 5 wymaganych</Typography>
          </Grid>
          <Grid xs="auto">
            <Box
              component="img"
              sx={{
                height: '180px',
              }}
              alt="Zdjęcie pieska podnoszącego łapkę"
              src={petFood}
            />
            <Typography variant="h3">Pomoc w organizacji zbiórki karmy</Typography>
            <Typography variant="h3">Zgłosiło się: 0 z 1 wymaganych</Typography>
          </Grid>
          <Grid xs="auto">
            <Box
              component="img"
              sx={{
                height: '180px',
              }}
              alt="Zdjęcie pieska podnoszącego łapkę"
              src={petFood}
            />
            <Typography variant="h3">Pomoc przy budownie nowych boksów</Typography>
            <Typography variant="h3">Zgłosiło się: 1 z 3 wymaganych</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OrganizationPage;
