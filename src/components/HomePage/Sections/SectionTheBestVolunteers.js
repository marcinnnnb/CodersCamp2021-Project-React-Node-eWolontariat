import { Box, Button, Typography } from "@material-ui/core";
import { useNavigate } from 'react-router';
import VolunteersList from "../../Volunteer/VolunteersList.js";
import { styled } from '@mui/material/styles';

const StyledTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '1.6rem',
        lineHeight: "1.4"
    },
}));

const SectionTheBestVolunteers = () => {
    let navigate = useNavigate();

    return(
        <Box id={"section-the-best-volunteers"}
            height = {"100%"}
            align={"center"}
            padding={"3rem 2rem"}
            marginTop={"4rem"}
        >
            <StyledTitle variant="h1">Najbardziej aktywni wolontariusze</StyledTitle>
            <Box display={'flex'} padding={'0 2rem 2rem 0'} justifyContent={'space-evenly'}>
                <VolunteersList startSlice={0} endSlice={3}/>
            </Box>
            <Button variant="outlined" onClick={()=>{navigate("/VolunteersPage")}}>Zobacz więcej</Button>
        </Box>
    )
}

export default SectionTheBestVolunteers;