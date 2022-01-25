import { Box, Button, Typography,Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import ImgFindCard from '../../../assets/img/find-volunteer.svg';
import ImgBeVolunteer from '../../../assets/img/be-volunteer.svg';
import CustomButton from "../../CustomButton";


const SectionHowItWorks = () => {
    return(
        <Box id={"section-how-it-works"}
            padding={2}
            my={2}
            display={"flex:"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Zobacz jak to działa</Typography>
            <Box display={'flex'} py={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Card raised={true} style={{ padding: '3rem 2rem', height: '380px', display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems: 'center'}}>
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
                        <Button size="medium" variant="contained" color="primary" href={"/TaskForm"}>
                            Stwórz zadanie
                        </Button>
                    </CardActions>
                </Card>
                <Card raised={true} style={{ padding: '3rem 2rem', height: '380px', display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems: 'center'}}>
                        <Box
                            component={'img'}
                            alt=""
                            maxHeight='193px'
                            src={ImgBeVolunteer}
                            title="Znajdź wolontariusza"
                            alignSelf={'center'}
                            my='1.6rem'
                            >
                        </Box>
                        <CardContent>
                        <Typography gutterBottom variant="h2"align={'center'}>
                            Znajdź wolontariusza
                        </Typography>
                        <Typography variant='body2' paragraph gutterBottom={true} align={'center'}>
                            Napisz czego Ci potrzeba i stwórz zadanie
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <CustomButton size="medium" variant="contained" color='tertiary' href={"/VolunteerForm"}>
                            Załóż profil
                        </CustomButton>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}

export default SectionHowItWorks;