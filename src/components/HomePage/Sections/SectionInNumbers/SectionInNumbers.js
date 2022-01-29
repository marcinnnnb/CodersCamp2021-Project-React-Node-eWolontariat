import { Box, Typography } from "@material-ui/core";
import LogoPomocny from "../../../../assets/img/logo-pomocny.svg";
import ImgGlobe from "../../../../assets/img/globe-mask.svg";
import LogoSignet from "../../../../assets/img/hand-peace-solid.svg";
import CustomButton from "../../../CustomButton";
import BigNumber from "./BigNumber";

const SectionInNumbers = () => {
   
    return(
        <Box id={"section-in-numbers"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"4rem"}
        >
            <Box sx= {{ display: 'flex', flexDirection: 'column', alignItems: "center"}} >
                <Box component="img" height={'80px'} alt="Logo pomocny.pl" src={LogoPomocny}/>
                <Typography variant="h1" style={{marginTop: 0}}>w liczbach</Typography>
            </Box>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <BigNumber end={100}/>
                    <Typography variant="body1">Tylu osobom pomogliśmy</Typography>
                </Box>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <BigNumber end={1230}/>
                    <Typography variant="body1">Tyle zadań zakończyło się sukcesem</Typography>
                </Box>
                <Box alignSelf={'center'} textAlign={'center'}>
                    <BigNumber end={560}/>
                    <Typography variant="body1">Tyle zgłosiło się wolontariuszy</Typography>
                </Box>    
            </Box>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Box display={'flex'} flexDirection={'column'} alignSelf={'center'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant={'body1'} paragraph={true} style={{fontSize: '2.3rem', margin: '0 2rem 2rem 2rem'}} align={'center'}>
                        Imponujące? Dołącz do nas już dziś i bądź pomocny!
                    </Typography>
                    <CustomButton variant="contained" color="tertiary" size={'medium'} href={"/VolunteerForm"} style={{maxWidth: '50%'}}>Zostań wolontariuszem</CustomButton>
                </Box>
                <Box component="img" maxWidth={'100px'} alt="" src={LogoSignet} alignSelf={'flex-end'}/>
                <Box component="img" maxWidth={'460px'} alt="" src={ImgGlobe}/>
            </Box>
        </Box>
    )
}

export default SectionInNumbers;