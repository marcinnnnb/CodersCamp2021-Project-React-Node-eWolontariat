import { Box, Button, Typography } from "@material-ui/core";
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';
import { useNavigate } from 'react-router-dom';
import OrganizationsList from '../../Organization/OrganizationList';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      
    },
  }));

const StyledTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '1.6rem',
        lineHeight: "1.4"
    },
}));

const SectionNewOrganizations = () => {
    let navigate = useNavigate();
          
    return(
        <StyledBox id={"section-new-tasks"}
            height = {"100%"}
            alignItems={"center"}
        >
            <StyledTitle  variant="h1">Współpracujemy z tymi organizacjami</StyledTitle>
            <OrganizationsList startSlice={0} endSlice={6}/>
            <Box align={"center"}>
                <Button 
                    variant="outlined" 
                    type="button" 
                        onClick={(e)=>{
                        e.preventDefault();
                        navigate('/OrganizationsPage');
                    }}
                    endIcon={<ArrowRightRounded style={{fontSize: "2rem"}}/>}
                    >
                    Wszystkie organizacje
                </Button>
            </Box>
        </StyledBox>
    ) 
}

export default SectionNewOrganizations;
