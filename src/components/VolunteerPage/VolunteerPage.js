import { Divider, Typography, Box, Card } from '@material-ui/core'
import { Rating } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import CustomAvatar from "../../theme/CustomAvatar";
import { useSelector } from "react-redux";
import { selectAllVolunteers, selectVolunteerId} from '../../store/volunteerSlice';
import { useParams } from 'react-router-dom';
import setCategoryIcon from "../../theme/setCategoryIcon";
import CustomButton from "../../theme/CustomButton";
import { styled } from '@mui/material/styles';



const StyledVolunteerPage = styled(Card)(({ theme }) => ({
    height: "100%",
    margin: '5rem 2rem', 
    display:'flex',  
    flexDirection: "row",
    padding: '3rem',

    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        padding: "0", 
        margin: '2rem 0.6rem',
        height: "auto",
        textAlign: "center",
        alignItems: 'center',
        '& p': {
            fontSize: "1rem",
            margin: "1.5rem 0.6rem",  
        },
        '& .box-responsive': {
            display: "block",
            padding: "1.4rem",      
        },
        '& span': {
            fontSize: '0.8rem'     
        },
        '& .commetnts' :{
            textAlign: "left",
        }
    },
    [theme.breakpoints.down('sm')]: {
        margin: '1rem 0.3rem',
        '& p': {
            margin: "1rem 0.5rem",  
        },
        '& .box-responsive': {
            padding: "0.6rem",      
        },
    },
}));


const VolunteerPage = () => {
    const { volunteerId } = useParams();
    let id = parseInt({ volunteerId }.volunteerId);
    const volunteersList = useSelector(selectAllVolunteers).volunteers;
    const volunteer = selectVolunteerId(volunteersList, id);

    return (
        <StyledVolunteerPage> 
        <Box className={"box-responsive"} 
            sx={{display:"grid",gridTemplateColumns: {xl:"(3fr, 1fr)", xs:"1fr"}, gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',gridTemplateAreas: `"header sidebar ""main sidebar""comments comments"`}}>
            <Box style={{gridArea: 'header' }}>
                <Box style={{ display:'flex'}}>
                    <Box style={{display:'block', width:'30%', marginRight:"2rem", padding:'0'}}>
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
                            <Typography paragraph gutterBottom variant="h2">{volunteer.name.concat(" ", volunteer.surname)}</Typography>
                            <Typography paragraph variant='h3'>{volunteer.short_description}</Typography>
                    </Box>
                </Box>
            </Box>
                <Typography paragraph style={{marginTop:'5rem', gridArea: 'main'}}>{volunteer.description}</Typography>
            <Box sx={{ gridArea:"comments", width:"90%"}}  mx='0.5rem'  >
                <Typography paragraph variant="h2" style={{marginTop:'6rem', textAlign:'center'}}>Komentarze</Typography>
                <Card raised={true} style={{ margin:'5rem', padding: '1rem 1rem', display:'flex', flexDirection:'column',   justifyContent:'space-between'}}>
                    <Box style={{ display:'flex'}}>
                        <PersonIcon color='primary' style={{fontSize: '3rem'}}/>
                        <Box style={{paddingLeft:'1rem'}}>

                            {volunteer.comment?.map(comment => (
                                <>
                                <Typography paragraph variant='h4'>{volunteer.comment[0] }</Typography>
                                <Typography paragraph variant='body2'>{volunteer.comment[1]  }</Typography>
                                </>
                            ))}
                        </Box> 
                    </Box>
                </Card>
            </Box>
            <Box style={{gridArea:'sidebar' , display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around'}}>
                <Typography paragraph variant='h4'>Zrealizowane przeze mnie zadania:</Typography>
                {volunteer.categories.map(cat=>(
                    volunteer.actions.map(act=>(
                    <Card style={{margin:'3rem', width:'20rem'}}>
                        <CustomAvatar 
                            variant={"avatarBackground"} 
                            backgroundcolor={setCategoryIcon(cat)[1]} 
                            style={{margin:'auto'}}>
                            {setCategoryIcon(cat)[0]}
                        </CustomAvatar>
                        <Typography paragraph style={{padding:'1rem', textAlign:'center'}}variant='h5'>{act}</Typography>
                    </Card>
                ))))}
            </Box>
        </Box>
        </StyledVolunteerPage>
    )
}

export default VolunteerPage;