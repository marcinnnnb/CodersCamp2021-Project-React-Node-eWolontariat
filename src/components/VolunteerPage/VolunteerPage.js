import { Button, Typography, Container, Box, CircularProgress, Card } from '@material-ui/core'
import {useState, useEffect} from 'react';
import Api from "../../components/HomePage/Sections/SectionTheBestVolunteers/ApiVolunteers";
import { Rating } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import CustomAvatar from "../CustomAvatar";
import Avatar from "../../assets/img/girl1.jpg";



const VolunteerPage = () => {

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
        <Container style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop:'2rem'}}>
            {vols.slice(n,n+1).map((vol)=>(
                <>
                    <Box style={{width: '80%'}}>
                        <Box style={{ display:'flex'}}>
                            <Box style={{display:'block', width:'20%', margin:'0', padding:'0'}}>
                                <Box component="img" src={Avatar} style = {{borderRadius:"50%", width:"150px", height: "150px", objectFit: "cover"}} />
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5}  style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                            </Box>
                            <Box>
                                {vol.categories.map(cat=>(<Button variant="contained" style={{margin:'0 1rem 2rem 0'}} color='primary'>{cat}</Button>))}
                                <Typography gutterBottom variant="h2">{vol.name} {vol.surname}</Typography>
                                <Typography variant='h3'>{vol.short_description}</Typography>
                            </Box>
                        </Box>
                        <Typography style={{marginTop:'2rem'}}>{vol.description}</Typography>
                        <Typography variant="h2" style={{marginTop:'3rem', textAlign:'center'}}>Komentarze</Typography>
                        <Card raised={true} style={{ margin:'1rem', padding: '1rem 1rem', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                            <Box style={{ display:'flex'}}>
                                <PersonIcon color='primary' style={{fontSize: '3rem'}}/>
                                <Box style={{paddingLeft:'1rem'}}>
                                    <Typography variant='h4'>[name]</Typography>
                                    <Typography variant='body2'>[com]</Typography>
                                </Box> 
                            </Box>
                        </Card>
                    </Box>
                    <Box style={{width: '20%',margin: '0',padding: '0',}}>
                        <Typography variant='h4'>Zrealizowane przeze mnie zadania:</Typography>
                        {vol.actions.map(act=>(
                            <Card style={{margin:'2rem'}}>
                                <CustomAvatar 
                                    variant={"avatarBackground"} 
                                    backgroundcolor={vol.avatarColor} 
                                    style={{margin:'auto'}}>
                                    {vol.categorieIcon}
                                </CustomAvatar>
                                <Typography style={{padding:'1rem', textAlign:'center'}}variant='h5'>{act}</Typography>
                            </Card>
                        ))}
                    </Box>
                </>
            ))}
        </Container>
    )
}

export default VolunteerPage;