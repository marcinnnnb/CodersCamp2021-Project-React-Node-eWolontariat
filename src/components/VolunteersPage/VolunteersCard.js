import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import {makeStyles} from '@material-ui/core'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    btnPurple:{
        color: '#868AE0',
    },
    content:{
        display:'block',
        height: '10vw',
        justifyContent: 'center'
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
    },
})

function VolunteersCard({vol}){

    const classes = useStyles();

    return(
        <Card style={{marginTop:'2rem'}}>
            <CardMedia component='img' style={{width:'30%', height:'30%', margin:'auto'}} image={vol.image} />
            <CardContent className={classes.content}>
                <Typography variant='h5'>
                   {vol.nick}
                </Typography>
                <Typography>
                    {vol.short_description}
                </Typography>
            </CardContent>
            <Box className={classes.center}>
                <Button className={classes.btnPurple} variant="outlined" endIcon={<TelegramIcon/>} href="/VolunteerPage">Napisz wiadomość </Button>
            </Box>
        </Card>
    )
}
export default VolunteersCard;