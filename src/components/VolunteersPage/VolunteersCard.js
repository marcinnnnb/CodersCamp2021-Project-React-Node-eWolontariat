import { Box, Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia } from "@material-ui/core";
import Avatar from "../../assets/img/girl1.jpg";
import TelegramIcon from '@material-ui/icons/Telegram';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router';


function VolunteersCard({data, start, end}){
    
    const vol = data.slice(start,end)
    let navigate = useNavigate();

    return(
        <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'4rem'} justifyContent={'center'}>
            {vol.map((volunteer,id) =>(
                <Card key={`item-${id}`} raised={true} style={{ position: "relative", padding: '1.5rem', height: '370px', width: '270px', margin: '1.6rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', borderRadius:'12px'}}>
                    <CardActionArea style = {{borderRadius:"50%", width: "150px", height: "150px", display: "flex"}} onClick={()=>{navigate("/VolunteerPage")}}>
                    <CardMedia
                        component="img"
                        height={"150px"}
                        image={Avatar}
                        alt=""
                        style = {{borderRadius:"50%", width:"150px"}}
                        />
                    </CardActionArea>
                    <CardContent style={{ height: "250px"}}>
                        <Typography gutterBottom variant="h3" align={'center'} onClick={()=>{navigate("/VolunteerPage")}} style={{cursor:'pointer'}}>
                            {volunteer.nick}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5}  style={{color:"#F0D43F", fontSize: "1.7rem", alignSelf:'center'}} />
                        <Typography variant='caption' align={'center'} paragraph gutterBottom={true} style={{marginTop:"0.2rem"}}>
                            {volunteer.short_description}
                        </Typography>
                    </CardContent>   
                    <CardActions>
                        <Button variant={"outlined"} color={"secondary"} endIcon={<TelegramIcon/>} onClick={()=>{navigate("/VolunteerPage")}} style={{marginTop: 0}}>Napisz wiadomość </Button>
                    </CardActions>        
                </Card>
            ))}
         </Box>
    )
}
export default VolunteersCard;