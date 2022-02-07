import { Button, Box, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useState } from 'react';
import ChooseCat from '../ChooseCat';
import CasinoIcon from '@material-ui/icons/Casino';
import { useNavigate } from 'react-router';
import TasksList from '../Tasks/TasksList';

let tasksPerPage = 6;
let arrayForHoldingTasks = [];
const isCompVol=false;


const TasksPage = () => {
    
    const [tasks, setTasks] = useState([]);
    const [next, setNext] = useState(0);
    const [showButton, setShowButton] = useState(true);
    let navigate = useNavigate();

  

    const handleShowMoreTasks = () => {
        setNext(next + tasksPerPage);
        setShowButton(false)
        arrayForHoldingTasks = tasks.slice(next, next+tasksPerPage);
        arrayForHoldingTasks = [arrayForHoldingTasks, tasks];
      };

    return(
        <Box  id={"page-all-tasks"}
              height = {"100%"}
              alignItems={"center"}
              >
            <Typography variant='h1' align={"center"}>Wszystkie zadania</Typography>
            
            <Box margin={"0 3rem"} display={"flex"} justifyContent={'flex-start'}>
                <Box display={"flex"} >
                  <ChooseCat/>
                </Box>
                <Box  display={"flex"} justifyContent={"flex-end"} flexGrow={"1"} gridColumnGap={"1.4rem"}>
                  <Button variant={"contained"} color={"secondary"} startIcon={<CasinoIcon/>}
                    onClick={()=>{navigate("/TaskPage")}}
                  >Szczęśliwy traf</Button>
                </Box>
            </Box>
            <TasksList isCompVol={isCompVol}/>
            <Box  align={"center"} marginBottom={"2rem"}>
                {showButton && <Button onClick={handleShowMoreTasks} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>}
            </Box>
        </Box>
    )
}

export default TasksPage;