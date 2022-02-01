import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useEffect, useState } from 'react';
import TasksCard from './TasksCard';
import CatButtons from './CatButtons';
import ChooseCat from './ChooseCat';
import Zadania from '../../assets/data/zadania.json'


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

const tasksPerPage = 6;
let arrayForHoldingTasks = [];


const TasksPage = () => {
    
    const [tasks, setTasks] = useState([]);
    const [next, setNext] = useState(6);
    const [showButton, setShowButton] = useState(true);

    const loopWithSlice = (start, end) => {
        const slicedTasks = Zadania.slice(start, end);
        arrayForHoldingTasks = [...arrayForHoldingTasks, ...slicedTasks];
        setTasks(arrayForHoldingTasks);
      };

      useEffect(() => {
        loopWithSlice(0, tasksPerPage );
      }, []);

    const handleShowMoreTasks = () => {
        loopWithSlice(next, next + tasksPerPage);
        setNext(next + tasksPerPage);
        setShowButton(false)
      };

    
    const classes = useStyles();

  
    return(
        <Container>
            <Typography variant='h4'>Wszystkie zadania</Typography>
            <CatButtons/>
            <Box className={classes.flex}>
               <ChooseCat/>
               <Button className={classes.btnPurple} variant="contained">Szczęśliwy traf</Button>
            </Box>
            <TasksCard tasks = {tasks}/>
            <Box className={classes.center}>
                {showButton && <Button onClick={handleShowMoreTasks} className={classes.btnLong} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>}
            </Box>
        </Container>
    )

}

export default TasksPage;