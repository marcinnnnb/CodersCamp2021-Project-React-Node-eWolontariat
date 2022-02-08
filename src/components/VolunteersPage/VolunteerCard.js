import { Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia, Avatar } from "@material-ui/core";
import TelegramIcon from '@material-ui/icons/Telegram';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router';

function VolunteerCard(volunteer,id){
    let navigate = useNavigate();
    
    return(
        <Card key={`volunteer-${id}`} raised={true} style={{ padding: '1.4rem 1.5rem', margin: '1.6rem', height: '380px', width: '280px', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems: 'center', borderRadius:'12px'}}>
            <CardActionArea style = {{borderRadius:"50%", width: "150px", height: "150px", display: "flex"}} onClick={()=>{navigate("/VolunteerPage")}}>
                <CardMedia
                    component={'img'}
                    height={"150px"}
                    src={require(`../../assets/img/volunteers/${volunteer.volunteer.image}.jpg`)}
                    alt={`${volunteer.volunteer.name}`}
                    style = {{borderRadius:"50%", width:"150px"}}
                    />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h3" align={'center'} onClick={()=>{navigate("/VolunteerPage")}}>
                    {volunteer.volunteer.nick}
                </Typography>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                <Typography variant='caption' align={'center'} paragraph gutterBottom={true} style={{marginTop:"1rem"}}>
                    {volunteer.volunteer.short_description}
                </Typography>
            </CardContent>     
            <CardActions>
                <Button variant={"outlined"} color={"secondary"} endIcon={<TelegramIcon/>} onClick={()=>{navigate("/VolunteerPage")}}>Napisz wiadomość </Button>
            </CardActions>
        </Card>
    )
}
export default VolunteerCard;