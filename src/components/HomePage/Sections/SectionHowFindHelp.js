import { Box, Typography,Button } from "@material-ui/core";
import PlanningImg from '../../../assets/img/planning.svg';

const SectionHowFindHelp = () => {
    return(
        <Box id={"section-how-find-help"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            py={'4rem'}
        >
            <Box maxWidth={'76%'} m={'0 auto'}>
                <Typography variant="h1">Jak znaleźć pomoc na pomocny.pl</Typography>
                <Typography variant="body1" paragraph={true} align={'justify'}>
                        Pomocny.pl to nie tylko strona z ogłoszeniami dotyczącymi wolontariatu. To miejsce spotkań ludzi, którzy potrzebują przestrzeni 
                        na rozmowę o tym jak można im pomóc. Jeżeli jesteś w trudnej sytuacji i jest coś, w czym można Cię wesprzeć, możesz stworzyć nowe 
                        zadanie lub odezwać się bezpośrednio do któregoś z wolontariuszy. 
                </Typography> 
            </Box>
            
            
            <Box display={'flex'} py={'2rem'} px={'8rem'} justifyContent={'space-evenly'} mr={'2rem'}> 
                <Box component="img"  maxHeight={'360px'} alt="" src={PlanningImg}/>
                <Box ml={3} alignSelf={'center'}>
                    <Box m={3}>
                        <Typography style={{fontWeight:'700'}}>Krok 1.</Typography>
                        <Typography paragraph={true}>
                            Aby rozpocząć kliknij przycisk Stwórz zadanie.
                        </Typography>
                        <Button variant="contained" size={'medium'} color='primary' href={"/TaskForm"}>Stwórz zadanie</Button>
                    </Box>
                    <Box m={3}>
                        <Typography style={{fontWeight:'700'}}>Krok 2.</Typography>
                        <Typography paragraph={true}>
                            Zostaniesz przekierowany do formularza, który poprowadzi Cię dalej. W&nbsp;podpowiednich miejscach wpisz najważniejsze informacje 
                            dotyczące tworzonego przez Ciebie zadania: krótki opis tego, czego potrzebujesz oraz ilu wolontariuszy może się w to zaangażować. 
                            Możesz dodać również zdjęcie.
                        </Typography>
                    </Box>
                    <Box m={3}>
                        <Typography style={{fontWeight:'700'}}>Krok 3.</Typography>
                        <Typography paragraph={true}>
                            Kiedy wolontariusz zgłosi się do Twojej akcji, zostaniesz o tym powiadomion_ mailowo.
                        </Typography>
                    </Box>
                </Box>
            </Box>
                
        </Box>
    )
}

export default SectionHowFindHelp;