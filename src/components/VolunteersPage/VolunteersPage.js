import { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import VolunteersList from '../Volunteer/VolunteersList';
import SearchInputVolunteers from './SearchInputVolunteers';

let volsPerPage = 6;

const VolunteersPage = () => {
    const [next, setNext] = useState(10);
    const [showNextCards, setNextCards] = useState(false);
    const [showButton, setShowButton] = useState(true)
  
    const handleShowMoreVols = () => {
        setNext(next + volsPerPage);
        setNextCards(true);
        setShowButton(false)
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
                <SearchInputVolunteers />
            </Box>
            {content}
            <Box  align={"center"} marginBottom={"2rem"}>
            {showButton && <Button onClick={handleShowMoreVols} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>}
            </Box>
        </Box>
    )
    
}

export default VolunteersPage;