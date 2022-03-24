import { Typography, Box, Card, Divider, CircularProgress,TextField } from "@material-ui/core";
import { Rating } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import CustomAvatar from "../../theme/CustomAvatar";
import { useParams } from 'react-router-dom';
import setCategoryIcon from "../../theme/setCategoryIcon";
import CustomButton from "../../theme/CustomButton";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import PictureClient from "../../services/client/PictureClient";
import VolunteerClient from "../../services/client/VolunteerClient";

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
            margin: "0.8rem 0.5rem",  
        },
        '& .box-responsive': {
            padding: "0.8rem",      
        },
    },
}));


const VolunteerPage = () => {
    const { volunteerId } = useParams();
    let id = volunteerId;
    const [volunteer, setVolunteer] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pictureId, setPictureId] = useState('');
    const [previewImg, setPreviewImg] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await VolunteerClient.getVolunteerById(id).then((response) => {
                    return response.data;
                });  
                const json = await response;
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
        PictureClient.getPictureById(pictureId).then((response) => {
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
        <Box className={"box-responsive"} 
            sx={{display:"grid",gridTemplateColumns: {xl:"(3fr, 1fr)", xs:"1fr"}, gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',gridTemplateAreas: `"header sidebar ""main sidebar""comments comments"`}}>
            <Box style={{gridArea: 'header' }}>
                <Box style={{ display:'flex'}}>
                    <Box style={{display:'block', width:'30%', marginRight:"2rem", padding:'0'}}>
                        <Box 
                            component="img" 
                            src={previewImg}
                            style = {{borderRadius:"50%", width:"150px", height: "150px", objectFit: "cover"}} />
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5}  style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                        </Box>
                        <Box>
                            {(volunteer.categories)? (volunteer.categories?.map((cat,catId)=>(
                                <CustomButton 
                                key={`button-${catId}`} 
                                variant="contained" 
                                color={setCategoryIcon(volunteer?.categories[0].name)[1]}
                                startIcon={setCategoryIcon(volunteer?.categories[0].name)[0]}  
                                style={{margin:'0 1rem 2rem 0'}}                          
                                >
                                <Divider key={`div-${catId}`}  orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {cat.name}
                                </CustomButton>  
                            ))): null}
                            <Typography paragraph gutterBottom variant="h2">{volunteer.firstName.concat(" ", volunteer.lastName)}</Typography>
                            <Typography paragraph variant='h3'>{volunteer.shortDescription}</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography paragraph style={{marginTop:'5rem', gridArea: 'main', width: '90%'}}>{volunteer.description}</Typography>

            <Box sx={{ gridArea:"comments", width:"70%"}}  mx='0.5rem'>
                <Typography paragraph variant="h2" style={{marginTop:'6rem', textAlign:'center'}}>Komentarze</Typography>
                <Card className={"comments"} raised={true} style={{ margin:'1rem', padding: '0.6rem 0.8rem'}}>
                    <Typography  variant="body2" paragraph ><PersonIcon color='primary' style={{fontSize: '3rem'}}/>{volunteer.comments}</Typography>
                </Card>
                <Card raised={true} style={{ margin:'1rem', padding: '0.8rem 0.5rem'}}>
                    <TextField label="Napisz komentarz" multiline rows={2} fullWidth />
                </Card>
            </Box>

            <Box style={{gridArea:'sidebar' , display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around'}}>
                <Typography paragraph variant='h4'>Zrealizowane przeze mnie zadania:</Typography>
                {volunteer?.categories.map(cat=>(
                    volunteer.events.map(act=>(
                    <Card  key={"card"+cat._id} className={"card-responsive"} style={{margin:'3rem', width:'20rem'}}>
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
        </Box>
        </StyledVolunteerPage>
    )
}

export default VolunteerPage;