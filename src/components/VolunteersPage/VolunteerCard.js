import { Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia } from "@material-ui/core";
import TelegramIcon from '@material-ui/icons/Telegram';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from "../../theme/CustomButton";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import axios from "axios";

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
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        axios.get(`https://whispering-oasis-16160.herokuapp.com/picture/${volunteer.volunteer.avatar}`).then((response) => {
            setAvatar("data:image/png;base64," + response.data);
        });
      }, [volunteer.volunteer.avatar]);

    return(
        <StyledCard key={`volunteer-${volunteer.volunteer._id}`} raised={true}>
            <CardActionArea style = {{borderRadius:"50%", width: "150px", height: "150px", display: "flex"}} onClick={()=>{navigate(`/VolunteerPage/${volunteer.nick}`)}}>
                <CardMedia
                    component={'img'}
                    height={"150px"}
                    src={avatar}
                    alt={`${volunteer.volunteer.firstName}${volunteer.volunteer.lastName}`}
                    style = {{borderRadius:"50%", width:"150px"}}
                    />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h3" align={'center'} style={{cursor: "pointer"}} onClick={(e)=>{
                        e.preventDefault();
                        navigate(`/VolunteerPage/${volunteer.volunteer._id}/${volunteer.volunteer.firstName}+${volunteer.volunteer.lastNamename}`);
                    }}>
                    {volunteer.volunteer.firstName} {volunteer.volunteer.lastName}
                </Typography>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                <Typography variant='caption' align={'center'} paragraph gutterBottom={true} style={{marginTop:"1rem"}}>
                    {volunteer.volunteer.shortDescription}
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
                        navigate(`/VolunteerPage/${volunteer.volunteer._id}`);
                    }}
                    >Zobacz profil</CustomButton>
            </CardActions>
        </StyledCard>
    )
}
export default VolunteerCard;