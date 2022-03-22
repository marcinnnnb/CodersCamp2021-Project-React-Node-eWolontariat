import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import pies from 'assets/img/tasks/pies.jpg';
import petFood from 'assets/img/petFood.png';
import { useSelector } from 'react-redux';
// import { selectAllOrganizations, selectOrganizationId } from 'store/organizationSlice';

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
    width: 'inherit',
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
  const { organizationId } = useParams();
  //w jsonie jest id w stringu,ale w bazie będziemy mieli int
  //let id = parseInt({ organizationId }.organizationId);
  const organizationsList = useSelector((state) => state.organization.organizations);
  const organization = organizationsList.find((item) => item._id === organizationId);

  return (
    <>
      <Box className={classes.topBox}>
        <Typography variant="h3">{organization.name}</Typography>
        <Typography variant="h5">{organization.krsNumber}</Typography>
      </Box>

      <Box className={classes.mainBox}>
        <Box
          component="img"
          sx={{
            maxWidth: '200px',
          }}
          alt=""
          src={organization.image}
        />
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h2">{organization.title}</Typography>
          <Typography variant="h4">Poszukuje do: 3 zadań</Typography>
        </Box>
        <Typography variant="h3">{organization.description}</Typography>
      </Box>

      <Box className={classes.utworzenieZadania}>
        <Button onClick={() => navigate('/TaskForm')} variant="contained" color="primary">
          Utworzone zadania
        </Button>
        <Button onClick={() => navigate('/TaskForm')} variant="contained">
          Dodaj nowe zadanie
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: 80, marginBottom: 80, border: 2 }}>
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" flexWrap="wrap">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
          >
            <Box
              component="img"
              sx={{
                height: '180px',
              }}
              alt=""
              src={pies}
            />
            <Typography variant="h3">Wyprowadzanie psów na spacery</Typography>
            <Typography variant="h3">Zgłosiło się: 2 z 5 wymaganych</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
          >
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
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
          >
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
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OrganizationPage;
