import { Box, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LogoPomocny from "../../../assets/img/logo-pomocny.svg";
import HeroImg from "../../../assets/img/hero-img.svg";
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "2rem",
    margin: "2rem 0",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        padding: "0", 
        '& p': {
            fontSize: "1rem",
            margin: "2rem 0.8rem",
            paddingRight: "0",
        },
        '& .box-responsive': {
            display: "block",
            padding: "1.4rem",
            textAlign: "center"
        },
        '& img': {
            maxWidth: "70%",
            paddingLeft: "0",
        },
        '& .main-img': {
            padding: "1rem",
            margin: "1rem"
        }
    },
  }));

const SectionHero = () => {

    return(
        <StyledBox id={"section-hero"}>
            <Box className={"box-responsive"} display={'flex'} padding={'3rem'} justifyContent={'space-evenly'}>
                <Box alignSelf={'center'}>
                    <Box className="logo" component="img" height={'80px'} alt="Logo pomocny.pl" src={LogoPomocny}/>
                    <Typography variant='body1' paragraph gutterBottom={true}>
                        Miejsce spotkań dla tych, którzy potrzebują <br/> pomocy i dla tych, którzy tej pomocy chętnie udzielą.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color='secondary'
                        size={'large'}  
                        href="#section-how-it-works">Zobacz jak to działa</Button>
                </Box>
                <Box className={"main-img"} style={{paddingLeft: "2rem"}} component="img" maxWidth={'400px'} alt="" src={HeroImg}/>
            </Box>
        </StyledBox>
    )
}

export default SectionHero;