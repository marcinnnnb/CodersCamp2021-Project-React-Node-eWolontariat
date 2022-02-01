import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    btn:{
      marginBottom: '2rem', 
      marginTop: '1rem', 
      paddingRight: '2rem',
      paddingLeft:'2rem',
      maxHeight: '2rem',
      fontWeight: 700
     },
    text:{
      color: '#868686',
      marginBottom: '2rem',
    },
    icon:{
      fontSize: '10rem',
      margin: '0',
      padding: '0'
    },
    container:{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '4rem',
      width: '100%'
  },
    sideBarL:{
    width: '20%',
    margin: '0',
    padding: '0',
  },
    sideBarR:{
    width: '70%',
  },
  name:{
    display: 'flex',
    borderBottom: '1px solid #AFAFAF',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '2rem'
  },
  action:{
    borderBottom: '1px solid #AFAFAF',
    marginBottom: '2rem'
  },
  })

const UserProfile = () => {
    const classes = useStyles();
  
    return (
      <Container className={classes.container}>
        <Box className={classes.sideBarL}>
          <PersonIcon color='secondary' className={classes.icon}/>
          <Button className={classes.text}>Edytuj zdjęcie</Button>
        </Box>
        <Box className={classes.sideBarR}>
          <Box className={classes.name}>
            <Typography variant='h4'>[name]</Typography>
            <Button className={classes.btn} variant="contained" color="secondary">Wolontariusz</Button>
            <Button className={classes.btn} variant="outlined">Edytuj profil</Button>
          </Box>
          <Box className={classes.action}>
            <Typography variant='h5'>Akcje, w których wziąłem udział</Typography>
            <Typography variant='h6'>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> 
            </Typography>
            <Button className={classes.text}>Załaduj więcej</Button>
            <Typography variant='h6' className={classes.text}>Aby dołączyć do jakieś akcji musisz założyć profil wolontariusza</Typography>
        
             <Button className={classes.btn} variant="contained" color="secondary" href={"VolunteerForm"}>Zakładam sobie profil wolonratiusza</Button>
        
          </Box>
          <Box>
            <Typography variant='h5'>Organizacje, do których należę: [number]</Typography>
            <Typography variant='h6' className={classes.text}>[liczba organizacji]</Typography>
            <Button className={classes.btn} variant="contained" color="primary" href={"/OrganizationForm"}>Tworzę stronę organizacji</Button>
          </Box>
        </Box>
      </Container>
    );
}

export default UserProfile;