import { Divider, Typography, Container, Box, Card } from '@material-ui/core'
import { Rating } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import CustomAvatar from "../../theme/CustomAvatar";
import { useSelector } from "react-redux";
import { selectAllVolunteers, selectVolunteerId} from '../../store/volunteerSlice';
import { useParams } from 'react-router-dom';
import setCategoryIcon from "../../theme/setCategoryIcon";
import CustomButton from "../../theme/CustomButton";

const VolunteerPage = () => {
    const { volunteerId } = useParams();
    let id = parseInt({ volunteerId }.volunteerId);
    const volunteersList = useSelector(selectAllVolunteers).volunteers;
    const volunteer = selectVolunteerId(volunteersList, id);

    return (
        <Container style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop:'5rem'}}>
            <Box style={{width: '70%', marginRight:'3rem'}}>
                <Box style={{ display:'flex'}}>
                    <Box style={{display:'block', width:'20%', marginRight:"2rem", padding:'0'}}>
                        <Box 
                            component="img" 
                            src={require(`../../assets/img/volunteers/${volunteer.image}.jpg`)}
                            style = {{borderRadius:"50%", width:"150px", height: "150px", objectFit: "cover"}} />
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5}  style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                        </Box>
                        <Box>
                            {volunteer?.categories.map(cat=>(
                                <CustomButton 
                                key={`item-${id}`} 
                                id= {cat}
                                variant="contained" 
                                color={setCategoryIcon(cat)[1]}
                                startIcon={setCategoryIcon(cat)[0]}
                                style={{margin:'0 1rem 2rem 0'}}                          
                                >
                                <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {cat}
                                </CustomButton>  
                            ))}
                            <Typography gutterBottom variant="h2">{volunteer.name.concat(" ", volunteer.surname)}</Typography>
                            <Typography variant='h3'>{volunteer.short_description}</Typography>
                    </Box>
                </Box>
                <Typography style={{marginTop:'5rem'}}>{volunteer.description}</Typography>
                <Typography variant="h2" style={{marginTop:'8rem', textAlign:'center'}}>Komentarze</Typography>
                <Card raised={true} style={{ margin:'5rem', padding: '1rem 1rem', display:'flex', flexDirection:'column',   justifyContent:'space-between'}}>
                    <Box style={{ display:'flex'}}>
                        <PersonIcon color='primary' style={{fontSize: '3rem'}}/>
                        <Box style={{paddingLeft:'1rem'}}>

                            {volunteer.comment?.map(comment => (
                                <>
                                <Typography variant='h4'>{volunteer.comment[0] }</Typography>
                                <Typography variant='body2'>{volunteer.comment[1]  }</Typography>
                                </>
                            ))}
                        </Box> 
                    </Box>
                </Card>
            </Box>
            <Box style={{width: '20%',margin: '0',padding: '0',}}>
                <Typography variant='h4'>Zrealizowane przeze mnie zadania:</Typography>
                {volunteer.categories.map(cat=>(
                    volunteer.actions.map(act=>(
                    <Card style={{margin:'2rem'}}>
                        <CustomAvatar 
                            variant={"avatarBackground"} 
                            backgroundcolor={setCategoryIcon(cat)[1]} 
                            style={{margin:'auto'}}>
                            {setCategoryIcon(cat)[0]}
                        </CustomAvatar>
                        <Typography style={{padding:'1rem', textAlign:'center'}}variant='h5'>{act}</Typography>
                    </Card>
                ))))}
            </Box>
        </Container>
    )
}

export default VolunteerPage;