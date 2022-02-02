import { Box,Button,TextField } from "@material-ui/core"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "./taskSlice";

const NewTask = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    return(
        <Box>
            <TextField 
                onChange={(e)=>setValue(e.target.value)}
                variant="outlined"
                value={value}>
            </TextField>
            <Button disabled={value.trim() === ""}
                 onClick = {() => {
                    dispatch(addNewTask(value));
                    setValue("");
                 }}size="medium" type="submit" variant="contained" color="primary"  > Opublikuj zadanie
            </Button>   
        </Box>
    );
};

export default NewTask;