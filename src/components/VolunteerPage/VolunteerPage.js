import { Button, Typography, Container, Box, Card } from '@material-ui/core'
import { Rating } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import CustomAvatar from "../../theme/CustomAvatar";
import Avatar from "../../assets/img/volunteers/monikaMajchrzak.jpg";
import { useSelector } from "react-redux";
import { selectAllVolunteers, selectVolunteerId } from '../../store/volunteerSlice';

const VolunteerPage = ({id}) => {
   
    const volunteersList = useSelector(selectAllVolunteers);
    let volunteer;

    if (id !== null) {
        volunteer = selectVolunteerId(volunteersList,id);
    } else {
        volunteer = selectVolunteerId(volunteersList,5);
    }
    
    
    return (
        <Container style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop:'2rem'}}>
                    <Box style={{width: '80%'}}>
                        <Box style={{ display:'flex'}}>
                            <Box style={{display:'block', width:'20%', margin:'0', padding:'0'}}>
                                <Box 
                                    component="img" 
                                    src={
                                        require(`../../assets/img/volunteers/${volunteer.image}.jpg`)
                                    }
                                    style = {{borderRadius:"50%", width:"150px", height: "150px", objectFit: "cover"}} />
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5}  style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                            </Box>
                            <Box>
                                {volunteer?.categories.map(cat=>(<Button variant="contained" style={{margin:'0 1rem 2rem 0'}} color='primary'>{cat}</Button>))}
                                <Typography gutterBottom variant="h2">{volunteer.name.concat(" ", volunteer.surname)}</Typography>
                                <Typography variant='h3'>{volunteer.short_description}</Typography>
                            </Box>
                        </Box>
                        <Typography style={{marginTop:'2rem'}}>{volunteer.description}</Typography>
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
                        {volunteer.actions.map(act=>(
                            <Card style={{margin:'2rem'}}>
                                <CustomAvatar 
                                    variant={"avatarBackground"} 
                                    backgroundcolor={volunteer.avatarColor} 
                                    style={{margin:'auto'}}>
                                    {volunteer.categorieIcon}
                                </CustomAvatar>
                                <Typography style={{padding:'1rem', textAlign:'center'}}variant='h5'>{act}</Typography>
                            </Card>
                        ))}
                    </Box>
        </Container>
    )
}

export default VolunteerPage;