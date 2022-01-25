import { Box, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LogoPomocny from "../../../assets/img/logo-pomocny.svg";
import HeroImg from "../../../assets/img/hero-img.svg";

const SectionHero = () => {
    return(
        <Box id={"section-hero"}
            padding={2}
            my={2}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box display={'flex'} padding={'3rem'} justifyContent={'space-evenly'}>
                <Box alignSelf={'center'}>
                    <Box component="img" height={'80px'} alt="Logo pomocny.pl" src={LogoPomocny}/>
                    <Typography variant='body1' paragraph gutterBottom={true}>
                        Miejsce spotkań dla tych, którzy potrzebują <br/> pomocy i dla tych, którzy tej pomocy chętnie udzielą.
                    </Typography>
                    <Button variant="contained" color='secondary'size={'large'} href={"#section-how-it-works"}>Zobacz jak to działa</Button>
                </Box>
                <Box component="img" maxWidth={'400px'} alt="" src={HeroImg}/>
            </Box>
        </Box>
    )
}

export default SectionHero;