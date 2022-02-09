import { Box, Button, Typography } from "@material-ui/core";
import { useNavigate } from 'react-router';
import VolunteersList from "../../Volunteer/VolunteersList.js";


const SectionTheBestVolunteers = () => {
    let navigate = useNavigate();

    return(
        <Box id={"section-the-best-volunteers"}
            height = {"100%"}
            align={"center"}
            padding={"3rem 2rem"}
            marginTop={"4rem"}
        >
            <Typography variant="h1">Najbardziej aktywni wolontariusze</Typography>
            <Box display={'flex'} padding={'0 2rem 2rem 0'} justifyContent={'space-evenly'}>
                <VolunteersList startSlice={0} endSlice={3}/>
            </Box>
            <Button variant="outlined" onClick={()=>{navigate("/VolunteersPage")}}>Zobacz więcej</Button>
        </Box>
    )
}

export default SectionTheBestVolunteers;