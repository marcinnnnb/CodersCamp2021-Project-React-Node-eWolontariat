import { Box, Button, Typography } from "@material-ui/core";
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';
import { useNavigate } from 'react-router';
import TasksList from '../../Task/TasksList';

const SectionNewTasks = () => {
  let navigate = useNavigate();
          
    return(
        <Box id={"section-new-tasks"}
            height = {"100%"}
            alignItems={"center"}
            margin={"3rem 3rem 0 3rem"}
        >
            <Typography variant="h1">Zobacz jakiej pomocy potrzebują inni</Typography>
            <TasksList startSlice={0} endSlice={6}/>
            <Box align={"center"}>
                <Button 
                    variant="outlined" 
                    onClick={()=>{navigate("/TasksPage")}} 
                    endIcon={<ArrowRightRounded style={{fontSize: "2rem"}}/>}
                    >
                    Wszystkie zadania
                </Button>
            </Box>
        </Box>
    ) 
}

export default SectionNewTasks;
