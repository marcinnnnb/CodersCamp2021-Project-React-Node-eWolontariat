import { Box, Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia } from "@material-ui/core";
import Avatar from "../../assets/img/girl1.jpg";
import TelegramIcon from '@material-ui/icons/Telegram';
import { Rating } from '@mui/material';


function VolunteersCard({data, start, end}){
    
    const vol = data.slice(start,end)

    return(
        <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 4rem 4rem 4rem'} justifyContent={'center'}>
            {vol.map((volunteer,id) =>(
                <Card key={`item-${id}`} raised={true} style={{ position: "relative", padding: '1.5rem 1.5rem', height: '390px', width: '280px', margin: '1.6rem', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', borderRadius:'12px'}}>
                    <CardActionArea style = {{borderRadius:"50%", width: "150px", height: "150px", display: "flex"}} href="/VolunteerPage">
                    <CardMedia
                        component="img"
                        height={"150px"}
                        image={Avatar}
                        alt=""
                        style = {{borderRadius:"50%", width:"150px"}}
                        />
                    </CardActionArea>
                    <CardContent style={{ height: "250px", padding: "1rem 0 0 0"}}>
                        <Typography gutterBottom variant="h3" align={'center'} href="/VolunteerPage">
                            {volunteer.nick}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{color:"#F0D43F", fontSize: "1.7rem", display: "flex"}} />
                        <Typography variant='body2' align={'center'} paragraph gutterBottom={true} style={{marginTop:"0.2rem"}}>
                            {volunteer.short_description}
                        </Typography>
                    </CardContent>   
                    <CardActions>
                        <Button variant={"outlined"} color={"secondary"} endIcon={<TelegramIcon/>} href="/VolunteerPage" style={{marginTop: 0}}>Napisz wiadomość </Button>
                    </CardActions>        
                </Card>
            ))}
         </Box>
    )
}
export default VolunteersCard;