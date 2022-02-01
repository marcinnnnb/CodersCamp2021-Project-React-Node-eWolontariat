import {useState, useEffect} from 'react';
import Api from "./ApiVolunteers";
import { Box, Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia, CircularProgress } from "@material-ui/core";
import Avatar from "../../../../assets/img/girl1.jpg";
import TelegramIcon from '@material-ui/icons/Telegram';
import { Rating } from '@mui/material';

const SectionTheBestVolunteers = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
     
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Api.getData();
                const json = await response.json();
 
             setData(json);
            } catch (e) {
                setError(e.message || 'Unexpected error');
            }
 
            setLoading(false);
        }
 
        fetchData();
    }, []);
     
    if (loading) {
        return (
            <Box align={"center"}>
                <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
            </Box>
        )
    }
     
    if (error) {
        return <div style={{color: 'red'}}>ERROR: {error}</div>
    }

    function compare( a, b ) {
        if ( a.numberActions > b.numberActions ){
          return -1;
        }
        if ( a.numberActions < b.numberActions ){
          return 1;
        }
        return 0;
      }


      const theBestVolunteersArray = (data.map(e => {
          let par = e.actions;
            e.numberActions= par.length
        return e })).sort(compare).slice(0,3);

     
    return(

        <Box id={"section-the-best-volunteers"}
            height = {"100%"}
            align={"center"}
            padding={"3rem 2rem"}
        >
            <Typography variant="h1">Najbardziej aktywni wolontariusze</Typography>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'}>
        
           {theBestVolunteersArray?.map((volunteer,id) =>
           
            <Card key={`item-${id}`} raised={true} style={{ padding: '1.4rem 1.5rem', height: '370px', width: '280px', display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems: 'center', borderRadius:'12px'}}>
                <CardActionArea style = {{borderRadius:"50%", width: "150px", height: "150px", display: "flex"}} href="/VolunteerPage">
                <CardMedia
                    component="img"
                    height={"150px"}
                    image={Avatar}
                    alt=""
                    style = {{borderRadius:"50%", width:"150px"}}
                    />
                </CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h3" align={'center'} href="/VolunteerPage">
                            {volunteer.nick}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly style={{color:"#F0D43F", fontSize: "1.7rem"}} />
                        <Typography variant='body2' align={'center'} paragraph gutterBottom={true} style={{marginTop:"1rem"}}>
                            {volunteer.short_description}
                        </Typography>
                       
                        </CardContent>
                        
                    <CardActions>
                        <Button variant={"outlined"} color={"secondary"} endIcon={<TelegramIcon/>} href="/VolunteerPage">Napisz wiadomość </Button>
                    </CardActions>
                    
                </Card>
           )}
            </Box>
            <Button variant="outlined" href="/VolunteersPage">Zobacz więcej</Button>
        </Box>
    )
}

export default SectionTheBestVolunteers;