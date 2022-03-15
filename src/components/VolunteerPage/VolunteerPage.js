import { Typography, Box, Card, Divider, CircularProgress } from "@material-ui/core";
import { Rating } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import CustomAvatar from "../../theme/CustomAvatar";
//import { useSelector } from "react-redux";
//import { selectAllVolunteers, selectVolunteerId} from '../../store/volunteerSlice';
import { useParams } from 'react-router-dom';
import setCategoryIcon from "../../theme/setCategoryIcon";
import CustomButton from "../../theme/CustomButton";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import Api from "../../store/Clients/ApiVolunteers";
import axios from "axios";

const StyledVolunteerPage = styled(Card)(({ theme }) => ({
    width: '100%',
    margin: '7rem 2rem', 
    padding: '1rem',
    display:'flex',  
    flexDirection: "row",
    justifyContent:'center',  

    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        padding: "0", 
        margin: '2rem 0.2rem',
        height: "auto",
        alignItems: 'center',
        '& p': {
            fontSize: "1rem",
            margin: "1rem 0.2rem",  //paragraph
            paddingRight: "0",
        },
        '& .box-responsive': {
            display: "block",
            padding: "1.4rem",      //class
            textAlign: "center"
        },
        '& .main-img': {
            padding: "1rem",
            margin: "1rem"     //class
        },
        '& img': {
            maxWidth: "60%",    //??
            paddingLeft: "0",
        },
        '& span': {
            fontSize: '0.8rem'     //nic
        },
        '& .card-responsive': {
            width:'150%',
            display: "block",
            padding: "1.4rem",
            
        }
    },
}));

const VolunteerPage = () => {
    const { volunteerId } = useParams();
    //let id = parseInt({ volunteerId }.volunteerId);
    let id = volunteerId;
    //const volunteersList = useSelector(selectAllVolunteers).volunteers;
    //const volunteer = selectVolunteerId(volunteersList, id);
    const [volunteer, setVolunteer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pictureId, setPictureId] = useState('');
    const [previewImg, setPreviewImg] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Api.getVolunteerById(id);
                const json = await response.json();
                setVolunteer(json);
                setPictureId(volunteer.avatar);
            } catch (e) {
                setError(e.message || 'Unexpected error');
            }
            setLoading(false);
        }
            fetchData();
        }, [id, volunteer.avatar]);
    
    useEffect(() => {
            axios.get(`https://whispering-oasis-16160.herokuapp.com/picture/${pictureId}`).then((response) => {
                setPreviewImg("data:image/png;base64," + response.data);
            });
          }, [pictureId]);
                
            if (loading) {
                    return (
                        <Box align={"center"}>
                            <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
                        </Box>
                    )};
                
            if (error) {
                    return( 
                          <Box align={"center"}>
                              <div style={{color: 'red'}}>ERROR: {error}</div>
                          </Box>
                    )};
    return (
        <StyledVolunteerPage> 
            <Box className={"box-responsive"} style={{width: '60%', marginRight:'3rem'}}>
                <Box style={{ display:'flex'}}>
                    <Box style={{display:'block', width:'30%', marginRight:"2rem", padding:'0'}}>
                        <Box 
                            component="img" 
                            src={previewImg}
                            style = {{borderRadius:"50%", width:"150px", height: "150px", objectFit: "cover"}} />
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5}  style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                        </Box>
                        <Box>
                            {volunteer?.categories.map((cat,catId)=>(
                                <CustomButton 
                                key={`button-${catId}`} 
                                variant="contained" 
                                color={setCategoryIcon(volunteer.categories[0].name)[1]}
                                startIcon={setCategoryIcon(volunteer.categories[0].name)[0]}  
                                style={{margin:'0 1rem 2rem 0'}}                          
                                >
                                <Divider key={`div-${catId}`}  orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {cat.name}
                                </CustomButton>  
                            ))}
                            <Typography paragraph gutterBottom variant="h2">{volunteer.firstName.concat(" ", volunteer.lastName)}</Typography>
                            <Typography paragraph variant='h3'>{volunteer.shortDescription}</Typography>
                    </Box>
                </Box>
                <Typography paragraph style={{marginTop:'5rem'}}>{volunteer.description}</Typography>
                <Typography paragraph variant="h2" style={{marginTop:'6rem', textAlign:'center'}}>Komentarze</Typography>
                <Card raised={true} style={{ margin:'5rem', padding: '1rem 1rem', display:'flex', flexDirection:'column',   justifyContent:'space-between'}}>
                    <Box style={{ display:'flex'}}>
                        <PersonIcon color='primary' style={{fontSize: '3rem'}}/>
                        <Box style={{paddingLeft:'1rem'}}>

                        </Box> 
                    </Box>
                </Card>
            </Box>
            <Box style={{width: '20%',margin: '0',padding: '0',}}>
                <Typography paragraph variant='h4'>Zrealizowane przeze mnie zadania:</Typography>
                {volunteer?.categories.map(cat=>(
                    volunteer.events.map(act=>(
                    <Card  key={"card"+cat._id} className={"card-responsive"} style={{margin:'2rem'}}>
                        <CustomAvatar 
                            key={"button"+cat._id}
                            variant={"avatarBackground"} 
                            backgroundcolor={setCategoryIcon(volunteer.categories[0].name)[1]}
                            style={{margin:'auto'}}>
                            {setCategoryIcon(volunteer.categories[0].name)[0]} 
                        </CustomAvatar>
                        <Typography  key={"typo"+cat._id} paragraph style={{padding:'1rem', textAlign:'center'}}variant='h5'>{act}</Typography>
                    </Card>
                ))))}
            </Box>
        </StyledVolunteerPage>
    )
}

export default VolunteerPage;