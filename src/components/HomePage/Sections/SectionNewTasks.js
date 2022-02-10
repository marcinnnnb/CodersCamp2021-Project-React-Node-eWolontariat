import { Box, Button, Typography } from "@material-ui/core";
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';
import { useNavigate, Route, Routes} from 'react-router-dom';
import TasksList from '../../Task/TasksList';

const SectionNewTasks = () => {
    let navigate = useNavigate();
          
    return(
        <Box id={"section-new-tasks"}
            height = {"100%"}
            alignItems={"center"}
        >
            <Typography variant="h1">Zobacz jakiej pomocy potrzebują inni</Typography>
            <TasksList startSlice={0} endSlice={8}/>
            <Box align={"center"}>
                <Routes>
                    <Route path="/TasksPage"/>
                </Routes>
                <Button 
                    variant="outlined" 
                    type="button" 
                        onClick={(e)=>{
                        e.preventDefault();
                        navigate('/TasksPage');
                    }}
                    endIcon={<ArrowRightRounded style={{fontSize: "2rem"}}/>}
                    >
                    Wszystkie zadania
                </Button>
            </Box>
        </Box>
    ) 
}

export default SectionNewTasks;
