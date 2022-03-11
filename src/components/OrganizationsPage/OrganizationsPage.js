import { useState } from 'react';
import { Box, Button, Typography } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import OrganizationsList from '../Organization/OrganizationList';

let volsPerPage = 6;

const OrganizationsPage = () => {
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
          <OrganizationsList startSlice={0} endSlice={next}/>
        );
      } else if (showNextCards===false) {
        content = (
          <OrganizationsList startSlice={0} endSlice={6}/>
          );
      }

    return(
        <Box
        height = {"100%"}
        alignItems={"center"}
        >
            <Typography variant='h1' align={"center"}>Organizacje</Typography>
            {content}
            <Box  align={"center"} marginBottom={"2rem"}>
            {showButton && <Button onClick={handleShowMoreVols} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>}
            </Box>
        </Box>
    )
    
}

export default OrganizationsPage;