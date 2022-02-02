import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const VolunteersList = (props) => {
    const list = useSelector((state)=>state.volunteers.volunteers);
   
    return (
        <Box>
            {list?.map((item, id)=>(
                <div key={`item-${id}`}>
                    {item}
                </div>
            ))}
        </Box>
    )
}

export default VolunteersList;