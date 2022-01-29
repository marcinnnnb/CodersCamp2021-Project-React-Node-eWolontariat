import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
import Box from '@material-ui/core/Box';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import LanguageIcon from '@material-ui/icons/Language';
import PetsIcon from '@material-ui/icons/Pets';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {Grid} from '@material-ui/core'
import {SvgIcon} from '@material-ui/core'

const useStyles = makeStyles({
    btnPurple:{
        backgroundColor: '#868AE0', 
        paddingRight: '2rem',
        paddingLeft: '2rem',
        maxHeight: '2rem',
        fontWeight: 700,
        color: '#fff'
    },
    content:{
        display:'block',
        height: '16vw',
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
    }
})

function TasksCard({tasks}){

    const classes = useStyles();

    return(
        <Grid container spacing={8}>
            {tasks.map(task => (
                <Grid item 
                key={task.id} 
                lg={4} md={6} sx={12}>
                    <Card style={{marginTop:'2rem'}}>
                        <SvgIcon color={getColor(task.id)} style={{width:'30%', height:'30%', display:'block', margin: 'auto'}} component={getIcon(task.categories)}/>
                        <CardContent className={classes.content}>
                            <Typography paragraph variant='h5'>
                                {task.title}
                            </Typography>
                            <Typography>
                                {task.action_short_description}
                            </Typography>
                        </CardContent>
                        <Box className={classes.center}>
                            <Button className={classes.btnPurple} variant="contained" href="/TaskPage">Pomagam</Button>
                        </Box>
                    </Card>
                </Grid>  
            ))}  
        </Grid>
            
    )
}
export default TasksCard;

function getIcon(nameCat){

    switch (nameCat){
        case 'Korepetycje':
        return (SchoolIcon)
        case 'Wyprowadzanie psów':
        return (PetsIcon)
        case  "Tłumaczenia":
        return (LanguageIcon)
        case  "Opieka nad dziećmi":
        return (ChildFriendlyIcon)
        case  "Strony www":
        return (ComputerIcon)
        case  "Fotografia":
        return (PhotoCameraIcon)
        default:
        return (ListAltIcon)

    }
}

function getColor(id){
    if(id % 2 === 0){
        return 'secondary'}
    else return 'primary'
}