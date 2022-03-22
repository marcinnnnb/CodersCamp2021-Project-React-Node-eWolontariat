import { Box, CircularProgress, Typography, Divider, MenuItem } from "@material-ui/core";
import { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksList, selectTasksListStatus, selectTasksListError  } from "store/tasksListSlice";
import CustomButton from "theme/CustomButton";
import { fetchTasks } from "store/tasksListSlice";
import SearchInputTasks from "components/TasksPage/SearchInputTasks";
import setTasksRatingButtons from "components/TasksPage/setTasksRatingButtons";
import { FormControl, InputLabel, Select } from "@mui/material";
import Categories from "assets/data/Categories";
import TaskCard from "components/TasksPage/TaskCard";

const TasksList = ({startSlice,endSlice}) => {
  const dispatch = useDispatch();
  const tasksList = useSelector(selectTasksList);
  const tasksListStatus = useSelector(selectTasksListStatus);
  const error = useSelector(selectTasksListError);

  const [tasks, setTasks] = useState([]);
  const [isFilterTasks, setFilterTasks] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    if (tasksListStatus === 'idle') {
      dispatch(fetchTasks());
    };
    setTasks(tasksList)
  }, [tasksList, tasksListStatus, dispatch]);

  let content;

  if (tasksListStatus === 'loading...') {
       content = (
        <Box padding={2} align={"center"}>
            <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
        </Box>
      );
      
  } else if (tasksListStatus === 'failed :(') {
       content = <Box style={{color: 'red'}} padding={2} align={"center"}>ERROR: {error}</Box>;
  }  
  
  const getFilteredTextFromButton=(text)=> {
    return (
        tasksList.tasks?.filter(element => 
              element.categories.includes(text))
          )
    };

  let thePopularCategoriesButtons = setTasksRatingButtons(tasksList).slice(0,4);

    return (

      <Box>
        <Box display={"flex"} justifyContent={"center"} style={{margin: "4rem 0 1rem"}}>
          <SearchInputTasks/>
        </Box>
        <Typography variant="subtitle2" align={"center"} style={{marginTop: "1rem"}}>Najpopularniejsze kategorie:</Typography>
        <Box id="filtering-buttons" display={"flex"} justifyContent={'center'}  gridColumnGap={"2rem"} padding={"0 0 2rem 0"} margin={"1rem"} alignItems={"center"} flexWrap={"wrap"}>
                    <CustomButton 
                        variant="outlined" 
                        style={{marginTop: "1rem"}}
                        color={"primary"}  
                        onClick={()=>{
                          setFilterTasks(false);
                          setSelectValue("");
                        }}        
                    >
                    Wszystkie</CustomButton>
                {thePopularCategoriesButtons.map((category,id)=>(
                    <CustomButton 
                        key={`item-${id}`} 
                        id= {category.value}
                        variant="contained" 
                        style={{marginTop: "1rem"}}
                        color={category.buttonColor}
                        startIcon={category.icon}
                        onClick={()=>{
                            setTasks(getFilteredTextFromButton(category.value));
                            setFilterTasks(true);
                            setSelectValue(category.value);
                        }}                           
                    >
                        <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {category.value}
                    </CustomButton>
                    
                ))}
            </Box>
            <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} flexWrap={"wrap"}>
              
            <FormControl variant="standard" style={{bottom: "10px"}}>
                <InputLabel >Wybierz kategorię</InputLabel>
                <Select
                  value = {selectValue}
                  onChange={(e)=> {
                    setSelectValue(e.target.value);
                    setTasks(getFilteredTextFromButton(e.target.value));
                    setFilterTasks(true);
                  }}
                label="Wybierz kategorię"
                style={{width: "260px", fontSize: "1rem" }}
                >
                    <MenuItem value="" style={{fontSize: "1rem"}}>
                        <em>Wszystkie kategorie</em>
                    </MenuItem>
                    {Categories.map (cat =>(
                    <MenuItem  
                        key={cat.label} 
                        value={cat.value} 
                        style={{fontSize: "1rem"}}>
                        {cat.label} 
                    </MenuItem>
            ))}
                </Select>
            </FormControl>
            </Box>
              {content}
              <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 2rem 4rem 2rem'} justifyContent={'center'}>
                {tasks?.slice(startSlice,endSlice).map((task,id) =>{
                  return <TaskCard key={`item-${task._id}`} task={task} id={task._id}/>
                })}
              </Box>
         </Box>
    )
}

export default TasksList;
