import { Box, Typography } from "@material-ui/core";
import LogoPomocny from "../../../../assets/img/logo-pomocny.svg";
import ImgGlobe from "../../../../assets/img/globe-mask.svg";
import LogoSignet from "../../../../assets/img/hand-peace-solid.svg";
import CustomButton from "../../../../theme/CustomButton";
import BigNumber from "./BigNumber";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import VolunteerClient from "../../../../services/client/VolunteerClient";
import EventClient from "../../../../services/client/EventClient";

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: '4rem',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.8rem',
        '& p': {
            margin: '1.6rem 0'
        },
        '& img': {
            maxWidth: '100px',
            padding: '0 4rem'
        },
        '& .MuiButton-root': {
            width: '80%',
            marginBottom: "2rem"
        }
    },
  }));

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.3rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        lineHeight: "1.4",
        margin: '2rem 0 4rem 0',
    },
}));

const SectionInNumbers = () => {
    const [eventsSucceededNumber, setEventsSucceededNumber] = useState(0);
    const [volunteersNumber, setVolunteersNumber] = useState(0);

    useEffect(() => {
        EventClient.getEventsSucceeded().then((response) => {
            setEventsSucceededNumber(response.data.events);
        });
      }, []);

    useEffect(() => {
        VolunteerClient.getVolunteersCount().then((response) => {
            setVolunteersNumber(response.data.volunteers);
        });
      }, []);
  
    return(
        <Box id={"section-in-numbers"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          
        >
            <Box sx= {{ display: 'flex', flexDirection: 'column', alignItems: "center"}} >
                <Box component="img" height={'80px'} alt="Logo pomocny.pl" src={LogoPomocny}/>
                <Typography variant="h1" style={{marginTop: 0}}>w liczbach</Typography>
            </Box>
            <StyledBox>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <BigNumber end={100}/>
                    <Typography variant="body1">Tylu osobom pomogliśmy</Typography>
                </Box>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <BigNumber end={eventsSucceededNumber}/>
                    <Typography variant="body1">Tyle zadań zakończyło się sukcesem</Typography>
                </Box>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <BigNumber end={volunteersNumber}/>
                    <Typography variant="body1">Tyle zgłosiło się wolontariuszy</Typography>
                </Box>    
            </StyledBox>
            <StyledBox>
                <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} justifyContent={'center'} alignItems={'center'}>
                    <StyledTitle variant={'body1'} paragraph align={'center'}>
                        Imponujące? Dołącz do nas już dziś i bądź pomocny!
                    </StyledTitle>
                    <CustomButton variant="contained" color="tertiary" size={'medium'} href={"/VolunteerForm"} style={{maxWidth: '50%'}}>Zostań wolontariuszem</CustomButton>
                </Box>
                <Box component="img" maxWidth={'100px'} alt="" src={LogoSignet} alignSelf={'flex-end'}/>
                <Box component="img" maxWidth={'460px'} alt="" src={ImgGlobe}/>
            </StyledBox>
        </Box>
    )
}

export default SectionInNumbers;