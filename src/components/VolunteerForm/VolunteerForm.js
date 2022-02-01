import NewVolunteer from "../Volunteer/NewVolunteer";
import { Box } from "@material-ui/core";
import VolunteersList from "../Volunteer/VolunteersList";

const VolunteerForm = () => {
    return (
        <Box id={"volunteer-form"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >

            <NewVolunteer/>
            <VolunteersList/>


        </Box>
    )
}

export default VolunteerForm;