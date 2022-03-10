import { Box, Typography,Button } from "@material-ui/core";
import PlanningImg from '../../../assets/img/planning.svg';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 6rem",

    [theme.breakpoints.down('md')]: {
        padding: "2rem",
    },
  }));

  const StyledBoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: "0",
        margin: '0',
        fontSize: '1rem'
    },
  }));

  const StyledTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '1.6rem',
        lineHeight: "1.4"
    },
  }));


const SectionHowFindHelp = () => {
    return(
        <Box id={"section-how-find-help"}>
            <StyledBox>
                    <StyledTitle  variant="h1">Jak znaleźć pomoc na pomocny.pl</StyledTitle>
                    <StyledTypography variant="body1" paragraph={true} align={'justify'}>
                            Pomocny.pl to nie tylko strona z ogłoszeniami dotyczącymi wolontariatu. To miejsce spotkań ludzi, którzy potrzebują przestrzeni 
                            na rozmowę o tym jak można im pomóc. Jeżeli jesteś w trudnej sytuacji i jest coś, w czym można Cię wesprzeć, możesz stworzyć nowe 
                            zadanie lub odezwać się bezpośrednio do któregoś z wolontariuszy. 
                    </StyledTypography>
            <StyledBox/>
            <StyledBoxRow > 
                    <Box component="img"  maxHeight={'360px'} alt="" src={PlanningImg}/>
                    <Box alignSelf={'center'}>
                        <Box m={3}>
                            <StyledTypography style={{fontWeight:'700'}}>Krok 1.</StyledTypography>
                            <StyledTypography paragraph={true}>
                                Aby rozpocząć kliknij przycisk Stwórz zadanie.
                            </StyledTypography>
                            <Button variant="contained" size={'medium'} color='primary' href={"/TaskForm"}>Stwórz zadanie</Button>
                        </Box>
                        <Box m={3}>
                            <StyledTypography style={{fontWeight:'700'}}>Krok 2.</StyledTypography>
                            <StyledTypography paragraph={true}>
                                Zostaniesz przekierowany do formularza, który poprowadzi Cię dalej. W&nbsp;podpowiednich miejscach wpisz najważniejsze informacje 
                                dotyczące tworzonego przez Ciebie zadania: krótki opis tego, czego potrzebujesz oraz ilu wolontariuszy może się w to zaangażować. 
                                Możesz dodać również zdjęcie.
                            </StyledTypography>
                        </Box>
                        <Box m={3}>
                            <StyledTypography style={{fontWeight:'700'}}>Krok 3.</StyledTypography>
                            <StyledTypography paragraph={true}>
                                Kiedy wolontariusz zgłosi się do Twojej akcji, zostaniesz o tym powiadomion_ mailowo.
                            </StyledTypography>
                        </Box>
                    </Box>
                </StyledBoxRow>
                    
            </StyledBox>
        </Box>
    )
}

export default SectionHowFindHelp;