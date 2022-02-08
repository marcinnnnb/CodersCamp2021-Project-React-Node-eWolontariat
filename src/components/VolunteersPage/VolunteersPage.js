import { useState } from 'react';
import { Box, Button, Typography } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useNavigate } from 'react-router-dom';
import VolunteersList from '../Volunteer/VolunteersList';
import SearchInput from '../SearchInput';

let volsPerPage = 6;

const VolunteersPage = () => {
    let navigate = useNavigate();
    const [next, setNext] = useState(6);
    const [showNextCards, setNextCards] = useState(false);
  
    const handleShowMoreVols = () => {
        setNext(next + volsPerPage);
        setNextCards(true);
      };

    let content;

    if (showNextCards===true) {
        content = (
            
          <VolunteersList startSlice={0} endSlice={next}/>
        );
      } else if (showNextCards===false) {
        content = (
          <VolunteersList startSlice={0} endSlice={6}/>
          );
      }

    return(
        <Box
        height = {"100%"}
        alignItems={"center"}
        >
            <Typography variant='h1' align={"center"}>Wolontariusze</Typography>
            <Box display={'flex'} justifyContent={'center'}>
                <SearchInput />
            </Box>
            {content}
            <Box  align={"center"} marginBottom={"2rem"}>
            <Button onClick={handleShowMoreVols} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>
            </Box>
        </Box>
    )
    
}

export default VolunteersPage;