import { Button, Box, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useState } from 'react';
import ChooseCat from '../ChooseCat';
import CasinoIcon from '@material-ui/icons/Casino';
import { useNavigate } from 'react-router';
import TasksList from '../Task/TasksList';

let tasksPerPage = 6;
let arrayForHoldingTasks = [];

const TasksPage = () => {
    let navigate = useNavigate();
    const [next, setNext] = useState(6);
    const [showNextCards, setNextCards] = useState(false);

    const handleShowMoreTasks = () => {
        setNext(next + tasksPerPage);
        setNextCards(true);
    };

    let content;

    if (showNextCards===true) {
      content = (
        <TasksList startSlice={0} endSlice={next}/>
      );
    } else if (showNextCards===false) {
      content = (
        <TasksList startSlice={0} endSlice={6}/>
        )
    }

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
            {content}
            <Box  align={"center"} marginBottom={"2rem"}>
                <Button onClick={handleShowMoreTasks} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>
            </Box>
        </Box>
    )
}

export default TasksPage;