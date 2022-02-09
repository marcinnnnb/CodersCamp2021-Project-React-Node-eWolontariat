import { Button, Box, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useState } from 'react';
import CasinoIcon from '@material-ui/icons/Casino';
import { useNavigate } from 'react-router';
import TasksList from '../Task/TasksList';

const TasksPage = () => {
    let navigate = useNavigate();
    const [next, setNext] = useState(8);
    const [showNextCards, setNextCards] = useState(false);
    let tasksPerPage = 8;

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
        <TasksList startSlice={0} endSlice={8}/>
        )
    }

    return(
        <Box  id={"page-all-tasks"}
              height = {"100%"}
              alignItems={"center"}
              >
               <Button 
              variant={"contained"} 
              size={"large"}
              color={"secondary"} 
              startIcon={<CasinoIcon/>}
              onClick={()=>{navigate("/TaskPage")}}
              style={{
                position: "sticky",
                top: "0",
                left: "10%",
                zIndex: 2,
              }}
            > 
            Szczęśliwy traf
            </Button>
              <Typography variant='h1' align={"center"} style={{marginTop: "4rem"}} >Wszystkie zadania</Typography>
            {content}
            <Box  align={"center"} marginBottom={"2rem"}>
                <Button onClick={handleShowMoreTasks} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>
            </Box>
        </Box>
    )
}

export default TasksPage;