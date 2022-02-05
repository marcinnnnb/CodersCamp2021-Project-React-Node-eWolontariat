import { Button, Typography, Container, Box, CircularProgress } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import {useState, useEffect} from 'react';
import Api from "../../components/HomePage/Sections/SectionTheBestVolunteers/ApiVolunteers";
import { useNavigate } from 'react-router';
import CustomButton from '../CustomButton'


const UserProfile = () => {
    
    let navigate = useNavigate();

    let n=Math.floor(Math.random()*6);

    const [vols, setVols] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
      async function fetchData() {
          try {
              const response = await Api.getData();
              const json = await response.json();

           setVols(json);
          } catch (e) {
              setError(e.message || 'Unexpected error');
          }

          setLoading(false);
      }

      fetchData();
  }, []);
   
  if (loading) {
      return (
          <Box align={"center"}>
              <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
          </Box>
      )
  }
   
  if (error) {
      return <div style={{color: 'red'}}>ERROR: {error}</div>
  }

  
    return (
      <Container style={{display: 'flex',justifyContent: 'center',paddingTop: '4rem',width: '100%'}}>
        {vols.slice(n,n+1).map((vol)=>(
        <>
        <Box style={{width: '20%',margin: '0',padding: '0',}}>
          <PersonIcon color='secondary' style={{fontSize: '10rem',margin: '0',padding: '0'}}/>
          <Button variant="outlined" disabled>Edytuj zdjęcie</Button>
        </Box>
        <Box style={{ width: '70%'}}>
          <Box style={{  display: 'flex',borderBottom: '1px solid #AFAFAF',justifyContent: 'space-between',alignItems: 'baseline',marginBottom: '2rem'}}>
            <Typography gutterBottom variant="h1">{vol.name} {vol.surname}</Typography>
            <CustomButton style={{marginBottom:'1rem'}} variant="contained" color='tertiary'>Wolontariusz</CustomButton>
            <Button variant="outlined" disabled>Edytuj profil</Button>
          </Box>
          <Box style={{borderBottom: '1px solid #AFAFAF', marginBottom: '2rem'}}>
            <Typography variant='h3'>Akcje, w których wziąłem udział</Typography>
            <Typography variant='h3' style={{color: '#868686'}}>
              <ul>
              {vol.actions.map((act)=>(
                <li>{act}</li>
              ))}
              </ul> 
            </Typography>
            <Button variant="outlined" style={{ marginBottom: '2rem',}} disabled>Załaduj więcej</Button>
            <Typography variant='h3' style={{color: '#868686', marginBottom: '2rem',}}>Aby dołączyć do jakieś akcji musisz założyć profil wolontariusza</Typography>
        
             <Button style={{marginBottom:'1rem'}} variant="contained" color="secondary" onClick={()=>{navigate("/VolunteerForm")}}>Zakładam sobie profil wolonratiusza</Button>
        
          </Box>
          <Box>
            <Typography variant='h3'>Organizacje, do których należę:</Typography>
            <Typography variant='h3' style={{color: '#868686', marginBottom: '2rem',}}>[liczba organizacji]</Typography>
            <Button style={{marginBottom:'2rem'}}variant="contained" color="primary" onClick={()=>{navigate("/OrganizationForm")}}>Tworzę stronę organizacji</Button>
          </Box>
        </Box>
        </>
      ))}
    </Container>
    );
}

export default UserProfile;