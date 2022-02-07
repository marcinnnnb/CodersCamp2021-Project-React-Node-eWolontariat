import { Box, CircularProgress, Typography, Divider } from "@material-ui/core";
import { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortTasks,  selectAllTasks  } from "../../store/taskSlice";
import TasksCard from "../TasksPage/TasksCard";
import Categories from "../../assets/data/Categories";
import setCategoryIcon from "../setCategoryIcon";
import CustomButton from "../CustomButton";
import { fetchTasks } from "../../store/fetchTasks";

const TasksList = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector(selectAllTasks);
  const tasksStatus = useSelector(state => state.status);
  const error = useSelector(state => state.error);
  const [filteredTasks, setTasks] = useState([]);
  let orderedTasks =[];
  console.log(tasksList)

  useEffect(() => {
    if (tasksStatus === 'idle') {
      dispatch(fetchTasks())
    }
  }, [tasksStatus, dispatch]);

  let content;

  if (tasksStatus === 'loading...') {
    content = 
        (<CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>)
    
  } else if (tasksStatus === 'succeeded (:') {
    orderedTasks = (dispatch(sortTasks(tasksList.tasks))).payload.slice(0,6);
     
    content = orderedTasks.map((task,id) =>{
       return <TasksCard key={id} task={task} id={task.id}/>
    });
    
  } else if (tasksStatus === 'failed') {
    content = (
        <div style={{color: 'red'}}>ERROR: {error}</div>
    )
  }  

  console.log(tasksList)

  const thePopularCategories = (Categories.map(category=>{
    let rate=0;
    orderedTasks.tasks?.map(task=>{
        (task.categories).forEach(taskCategory=>{
            if(taskCategory===category.value){
                rate++;
            }
        });
        return rate;
    });
    category.rate=rate;
    category.buttonColor = setCategoryIcon(category.value)[1];
    category.icon = setCategoryIcon(category.value)[0];
    return category
    })).sort(compare).slice(0,4);

    function getFilteredTextFromButton(text) {
        return (
          orderedTasks?.filter(element => 
                element.categories.includes(text))
            )
      };

    return (
      <>
        <Box id="filtering-buttons" display={"flex"} justifyContent={'space-evenly'}  gridColumnGap={"2rem"} padding={"2rem 0"} margin={"1rem 3rem 0 3rem"} alignItems={"flex-end"}>
               <Box justifyContent={"flex-start"} flexGrow={"1"} >
                    <Typography variant="body2" align={"left"}>Najpopularniejsze kategorie:</Typography>
               </Box>
                    <CustomButton 
                        variant="outlined" 
                        color={"primary"}  
                        onClick={()=>{
                            setTasks(tasksList);
                        }}        
                    >
                    Wszystkie</CustomButton>

                {thePopularCategories.map((category,id)=>(
                    
                    <CustomButton 
                        key={`item-${id}`} 
                        id= {category.value}
                        variant="contained" 
                        color={category.buttonColor}
                        startIcon={category.icon}
                        onClick={()=>{
                            const filteredTasks = getFilteredTextFromButton(category.value);
                            setTasks(filteredTasks);
                            console.log(filteredTasks);
                        }}                           
                    >
                        <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {category.value}
                    </CustomButton>
                ))}
            </Box>
            <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 4rem 4rem 4rem'} justifyContent={'center'}>
            {content}
            </Box>
         </>
    )
}

function compare( a, b ) {
    if ( a.rate > b.rate  ){
      return -1;
    }
    if ( a.rate < b.rate ){
      return 1;
    }
    return 0;
  };

export default TasksList;