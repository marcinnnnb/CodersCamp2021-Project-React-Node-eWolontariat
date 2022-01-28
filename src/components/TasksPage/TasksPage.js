import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useEffect, useState } from 'react';
import TasksCard from '../TasksCard';
import CatButtons from '../CatButtons';
import ChooseCat from '../ChooseCat';


const useStyles = makeStyles({
     btnLong:{
        paddingLeft: '5rem',
        paddingRight: '5rem',
     },
    btnPurple:{
        backgroundColor: '#868AE0',
        marginBottom: '2rem', 
        paddingRight: '2rem',
        paddingLeft: '2rem',
        maxHeight: '2rem',
        fontWeight: '2rem',
        marginLeft: '2rem',
        color: '#fff',
        position: 'relative',
        left: '25rem'
    },
    flex:{
        display: 'flex',
        marginBottom: '3rem',
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        marginTop: '2rem'
    }
  }) 


const TasksPage = () => {
    
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        fetch('https://api.npoint.io/3f77545257d8fcd44ade')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])

    
    const classes = useStyles();

  
    return(
        <Container>
            <Typography variant='h4'>Wszystkie zadania</Typography>
            <CatButtons/>
            <Box className={classes.flex}>
               <ChooseCat/>
               <Button className={classes.btnPurple} variant="contained">Szczęśliwy traf</Button>
            </Box>
            <Grid container spacing={8}>
                {tasks.splice(6)}
                {tasks.map(task => (
                    <Grid item 
                    key={task.id} 
                    lg={4} md={6} sx={12}>
                        <TasksCard task = {task}/>
                    </Grid>  
                ))}  
            </Grid>
            <Box className={classes.center}>
                <Button className={classes.btnLong} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>
            </Box>
        </Container>
    )
}

export default TasksPage;