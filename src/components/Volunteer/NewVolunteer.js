import { Box,Button,TextField } from "@material-ui/core"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewVolunteers } from "../../store/volunteerSlice";

const NewVolunteer = () => {
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
                    dispatch(addNewVolunteers(value));
                    setValue("");
                 }

                 }>Add
            </Button>   
        </Box>
    );
};

export default NewVolunteer;