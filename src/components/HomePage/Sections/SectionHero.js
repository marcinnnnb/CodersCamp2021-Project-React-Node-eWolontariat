import { Box, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LogoPomocny from "../../../assets/img/logo-pomocny.svg";
import HeroImg from "../../../assets/img/hero-img.svg";

const SectionHero = () => {
    return(
        <Box id={"section-hero"}
            display={"flex"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Box alignSelf={'center'}>
                    <Box component="img" height={'100px'} alt="Logo pomocny.pl" src={LogoPomocny}/>
                    <Typography variant={'subtitle1'} paragraph={true}>
                        Miejsce spotkań dla tych, którzy potrzebują <br/> pomocy i dla tych, którzy tej pomocy chętnie udzielą.
                    </Typography>
                    <Button variant="contained" color='secondary' href={"/"}>Zobacz jak to działa</Button>

                </Box>
                <Box component="img" maxWidth={'400px'} alt="Grafika powitalna" src={HeroImg}/>
            </Box>
        </Box>
    )
}

export default SectionHero;