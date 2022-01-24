import { Box, Button, Typography,Card, CardMedia, CardActionArea, CardContent, CardActions} from "@material-ui/core";
import ImgFindCard from '../../assets/img/find-volunteer.svg';
import ImgBeVolunteer from '../../assets/img/be-volunteer.svg';

const SectionHowItWorks = () => {
    return(
        <Box id={"section-how-it-works"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Zobacz jak to działa</Typography>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
                <Card>
                        <CardMedia 
                            component={'img'}
                            alt="Grafika obrazująca szukanie w Internecie"
                            maxHeight="200"
                            image={ImgFindCard}
                            title="Znajdź wolontariusza">
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
                <Card>
                        <CardMedia 
                            component={'img'}
                            alt="Grafika obrazująca szukanie w Internecie"
                            maxHeight="200"
                            image={ImgBeVolunteer}
                            title="Znajdź wolontariusza">
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