import { Box } from "@material-ui/core";
import { useState } from "react";
import NewVolunteer from "./NewVolunteer";
import VolunteersLists from "./VolunteersList";

const Volunteers = () => {

    const [value,setValue] = useState("");
    const [list,setList]= useState([]);

    return(
        <Box 
            display={"flex"}
            flexDirection={"column"} 
            alignItems={"center"}>
            <NewVolunteer setValue={setValue} setList={setList} value={value}/>
            <VolunteersLists setList={setList} list={list}/>
        </Box>
    );
};

export default Volunteers;