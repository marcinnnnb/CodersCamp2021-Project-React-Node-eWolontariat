import { Box, Button, Typography,Card, CardMedia, CardContent, CardActions} from "@material-ui/core";
import ImgFindCard from '../../../assets/img/find-volunteer.svg';
import ImgBeVolunteer from '../../../assets/img/be-volunteer.svg';



const SectionHowItWorks = () => {
    return(
        <Box id={"section-how-it-works"}
            display={"flex:"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Zobacz jak to działa</Typography>
            <Box display={'flex'} py={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Card raised={true} style={{padding: '1rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <CardMedia 
                            component={'img'}
                            style={{maxHeight: '200px', p: '10%'}}
                            alt=""
                            image={ImgFindCard}
                            title="Znajdź wolontariusza"
                            maxHeight='166px'
                            >
                        </CardMedia>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Znajdź wolontariusza
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Napisz czego Ci potrzeba i stwórz zadanie
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" color="primary">
                            Stwórz zadanie
                        </Button>
                    </CardActions>
                </Card>
                <Card raised={true} style={{padding: '1rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <CardMedia 
                            component={'img'}
                            style={{maxHeight: '200px', p: '2rem'}}
                            alt=""
                            maxHeight='223px'
                            image={ImgBeVolunteer}
                            title="Znajdź wolontariusza"
                            >
                        </CardMedia>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Znajdź wolontariusza
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Napisz czego Ci potrzeba i stwórz zadanie
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" color="success">
                            Załóż profil
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}

export default SectionHowItWorks;