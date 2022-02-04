import { Button, Box, Typography, CircularProgress } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useEffect, useState } from 'react';
import ChooseCat from './ChooseCat';
import CasinoIcon from '@material-ui/icons/Casino';
import Api from '../HomePage/Sections/SectionNewTasks/ApiTasks';
import CatButton from './CatButton';

let tasksPerPage = 6;
let arrayForHoldingTasks = [];


const TasksPage = () => {
    
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [next, setNext] = useState(0);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
      async function fetchData() {
          try {
              const response = await Api.getData();
              const json = await response.json();

              setTasks(json);
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
          )}
      
      if (error) {
          return( 
                <Box align={"center"}>
                    <div style={{color: 'red'}}>ERROR: {error}</div>
                </Box>
          )}

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
                    onClick={()=>{
                        setTasks(tasks.sort(function(a, b){return 0.5 - Math.random()}))
                        console.log(tasks)
                        }}
                  >Szczęśliwy traf</Button>
                </Box>
            </Box>
            <CatButton data = {tasks} start={0} end={tasksPerPage+next}/>
            <Box  align={"center"} marginBottom={"2rem"}>
                {showButton && <Button onClick={handleShowMoreTasks} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>}
            </Box>
        </Box>
    )
}

export default TasksPage;

