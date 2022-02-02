import { Box } from "@material-ui/core";
import { useState } from "react";
import NewTask from "./NewTask";
import TasksLists from "./TasksList";

const Tasks = () => {

    const [value,setValue] = useState("");
    const [list,setList]= useState([]);

    return(
        <Box 
            display={"flex"}
            flexDirection={"column"} 
            alignItems={"center"}>
            <NewTask setValue={setValue} setList={setList} value={value}/>
            <TasksLists setList={setList} list={list}/>
        </Box>
    );
};

export default Tasks;