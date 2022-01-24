import { Box, Typography,Button } from "@material-ui/core";
import PlanningImg from '../../assets/img/planning.svg';

const SectionHowFindHelp = () => {
    return(
        <Box id={"section-how-find-help"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Jak znaleźć pomoc na pomocny.pl</Typography>
            <Typography variant="body1" paragraph={true}>
                    Pomocny.pl to nie tylko strona z ogłoszeniami dotyczącymi wolontariatu. To miejsce spotkań ludzi, którzy potrzebują przestrzeni 
                    na rozmowę o tym jak można im pomóc. Jeżeli jesteś w trudnej sytuacji i jest coś, w czym można Cię wesprzeć, możesz stworzyć nowe 
                    zadanie lub odezwać się bezpośrednio do któregoś z wolontariuszy. 
                </Typography>
            
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}> 
                <Box component="img"  maxHeight={'400px'} alt="" src={PlanningImg}/>
                <Box alignSelf={'center'}>
                    <Typography variant={'h3'}>Krok 1.</Typography>
                    <Typography variant={'subtitle1'} paragraph={true}>
                        Aby rozpocząć kliknij przycisk Stwórz zadanie.
                    </Typography>
                    <Button variant="contained" size={'medium'} color='primary' href={"/"}>Stwórz zadanie</Button>
                    <Typography variant={'h3'}>Krok 2.</Typography>
                    <Typography variant={'subtitle1'} paragraph={true}>
                        Zostaniesz przekierowany do formularza, który poprowadzi Cię dalej. W odpowiednich miejscach wpisz najważniejsze informacje 
                        dotyczące tworzonego przez Ciebie zadania: krótki opis tego, czego potrzebujesz oraz ilu wolontariuszy może się w to zaangażować. 
                        Możesz dodać również zdjęcie.
                    </Typography>
                    <Typography variant={'h3'}>Krok 3.</Typography>
                    <Typography variant={'subtitle1'} paragraph={true}>
                        Kiedy wolontariusz zgłosi się do Twojej akcji, zostaniesz o tym powiadomion_ mailowo.
                    </Typography>
                </Box>
            </Box>
                
        </Box>
    )
}

export default SectionHowFindHelp;