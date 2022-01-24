import { Box, Button,Typography } from "@material-ui/core";
import LogoPomocny from "../../assets/img/logo-pomocny.svg";
import ImgGlobe from "../../assets/img/globe-mask.svg";

const SectionInNumbers = () => {
    return(
        <Box id={"section-in-numbers"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box sx= {{ display: 'flex', flexDirection: 'column', alignItems: "center"}} >
                <Box component="img" height={'60px'} alt="Logo pomocny.pl" src={LogoPomocny}/>
                <Typography variant="h2">w liczbach</Typography>
            </Box>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <Typography  className={"bigNumber"}>100</Typography>
                    <Typography variant="caption">Tylu osobom pomogliśmy</Typography>
                </Box>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <Typography  className={"bigNumber"}>12334</Typography>
                    <Typography variant="caption">Tyle zadań zakończyło się sukcesem</Typography>
                </Box>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <Typography  className={"bigNumber"}>345</Typography>
                    <Typography variant="caption">Tyle zgłosiło się wolontariuszy</Typography>
                </Box>
                
            </Box>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Box alignSelf={'center'}>
                    <Typography variant={'body1'} paragraph={true}>
                        Imponujące? Dołącz do nas już dziś i bądź pomocny!
                    </Typography>
                    <Button variant="contained" color='success' href={"/"}>Zostań wolontariuszem</Button>

                </Box>
                <Box component="img" maxWidth={'400px'} alt="" src={ImgGlobe}/>
            </Box>
        </Box>
    )
}

export default SectionInNumbers;