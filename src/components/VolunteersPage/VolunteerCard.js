import { Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia } from "@material-ui/core";
import TelegramIcon from '@material-ui/icons/Telegram';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from "../../theme/CustomButton";
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: '1.4rem 1.5rem', 
    margin: '1.6rem', 
    height: '420px', 
    width: '280px', 
    display:'flex', 
    flexDirection:'column',  
    justifyContent:'center', 
    alignItems: 'center', 
    borderRadius:'12px',   
  }));

function VolunteerCard(volunteer){
    let navigate = useNavigate();

    return(
        <StyledCard key={`volunteer-${volunteer.id}`} raised={true}>
            <CardActionArea style = {{borderRadius:"50%", width: "150px", height: "150px", display: "flex"}} onClick={()=>{navigate(`/VolunteerPage/${volunteer.nick}`)}}>
                <CardMedia
                    component={'img'}
                    height={"150px"}
                    src={require(`../../assets/img/volunteers/${volunteer.volunteer.image}.jpg`)}
                    alt={`${volunteer.volunteer.name}`}
                    style = {{borderRadius:"50%", width:"150px"}}
                    />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h3" align={'center'} style={{cursor: "pointer"}} onClick={(e)=>{
                        e.preventDefault();
                        navigate(`/VolunteerPage/${volunteer.volunteer.id}/${volunteer.volunteer.nick}`);
                    }}>
                    {volunteer.volunteer.nick}
                </Typography>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                <Typography variant='caption' align={'center'} paragraph gutterBottom={true} style={{marginTop:"1rem"}}>
                    {volunteer.volunteer.short_description}
                </Typography>
            </CardContent>     
            <CardActions style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Button variant={"outlined"} color={"secondary"} endIcon={<TelegramIcon/>} style={{width: "100%"}}>Napisz wiadomość </Button>
                <CustomButton 
                    style={{ width: "100%"}} 
                    variant="text" 
                    color='tertiary' 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate(`/VolunteerPage/${volunteer.volunteer.id}/${volunteer.volunteer.nick}`);
                    }}
                    >Zobacz profil</CustomButton>
            </CardActions>
        </StyledCard>
    )
}
export default VolunteerCard;