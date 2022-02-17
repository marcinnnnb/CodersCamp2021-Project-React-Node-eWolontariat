import { Box, Button, Typography,Card, CardContent, CardActions} from "@material-ui/core";
import ImgFindCard from '../../../assets/img/find-volunteer.svg';
import ImgBeVolunteer from '../../../assets/img/be-volunteer.svg';
import CustomButton from "../../../theme/CustomButton";
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: '2rem 4rem',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        padding: '0.8rem',
    },
  }));

const StyledCard = styled(Card)(({ theme }) => ({
    padding: '3rem 2rem', 
    height: '380px', 
    borderRadius:'12px', 
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'flex-end', 
    alignItems: 'center',
    margin: "2rem 4rem",
    [theme.breakpoints.down('md')]: {
        margin: '0 0 2rem 0',
        padding: '1rem 1rem 2rem 1rem',
        '& h2': {
            fontSize: "1.4rem"
        },
        '& p': {
            fontSize: "0.8rem"
        }
    },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '1.6rem',
        lineHeight: "1.4"
    },
}));

const SectionHowItWorks = () => {
    let navigate = useNavigate();

    const handleClickToTaskForm = (e)=>{
        e.preventDefault();
        navigate('/TaskForm');
        }
    const handleClickVolunteerForm = (e)=>{
        e.preventDefault();
        navigate('/VolunteerForm');
        }
    return(
        <Box id={"section-how-it-works"}
            padding={2}
            my={2}
            display={"flex:"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <StyledTitle variant="h1">Zobacz jak to działa</StyledTitle>
            <StyledBox>
                <StyledCard id="make-task-card" raised={true} >
                        <Box 
                            component={'img'}
                            alt=""
                            src={ImgFindCard}
                            title="Znajdź wolontariusza"
                            maxHeight='126px'
                            my='1.6rem'
                            >
                        </Box>
                        <CardContent>
                        <Typography gutterBottom variant="h2" align={'center'}>
                            Znajdź wolontariusza
                        </Typography>
                        <Typography variant='body2' align={'center'} paragraph gutterBottom={true} >
                            Napisz czego Ci potrzeba i stwórz zadanie
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" color="primary" onClick={handleClickToTaskForm} >
                            Stwórz zadanie
                        </Button>
                    </CardActions>
                </StyledCard>
                <StyledCard id="be-volunteer-card" raised={true} >
                        <Box
                            component={'img'}
                            alt=""
                            maxHeight='163px'
                            src={ImgBeVolunteer}
                            title="Znajdź wolontariusza"
                            alignSelf={'center'}
                            my='1.6rem'
                            >
                        </Box>
                        <CardContent>
                        <Typography gutterBottom variant="h2"align={'center'}>
                            Zostań wolontariuszem
                        </Typography>
                        <Typography variant='body2' paragraph gutterBottom={true} align={'center'}>
                            Załóż profil wolontariusza i zacznij pomagać                        </Typography>
                        </CardContent>
                    <CardActions>
                        <CustomButton 
                            size="medium" 
                            variant="contained" 
                            color='tertiary' 
                            type="button" 
                            onClick={handleClickVolunteerForm}
                        >
                            Załóż profil
                        </CustomButton>
                    </CardActions>
                </StyledCard>
            </StyledBox>
        </Box>
    )
}

export default SectionHowItWorks;