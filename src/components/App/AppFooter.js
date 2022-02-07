import { Box, Container, Grid, Link, List, ListItem, Typography } from "@material-ui/core";
import LogoPomocny from "../../assets/img/logo-pomocny.svg";
import CodersCampLogo from "../../assets/img/coder-camp.svg";
import GitHubLogo from "../../assets/img/github-logo.png";

const AppFooter = () => {
    return (
    <footer>
        <Box 
            display={"flex"}
            justifyContent={"center"} 
            alignItems={"center"} 
            bgcolor={"#F8F8F8"}
            padding={"2rem 1rem"}
            flex-shrink={"0"}>

            <Container padding={"0"}>
                <Grid container spacing={1}>
                    <Grid item sm={3}>
                    <a href="/">
                        <Box
                            component="img"
                            sx={{
                            height: "60px",
                            }}
                            alt="Logo pomocny.pl"
                            src={LogoPomocny}
                        />
                    </a>
                    <Typography variant={'caption'} paragraph={true}>Projekt został zrealizowany w ramach:</Typography>
                    <Link href={"https://www.coderscamp.edu.pl/"}>
                        <Box
                            component="img"
                            sx={{
                            height: "20px",
                            }}
                            alt="Logo Coders Camp"
                            src={CodersCampLogo}
                        />
                    </Link>
                    
                    </Grid>
                    <Grid item sm={1}></Grid>
                    <Grid item sm={3}>
                        <Typography variant='h3' color='secondary'>Informacje</Typography>
                        <List padding={"0"}>
                            <ListItem component={'a'} href="/VolunteerForm" disableGutters>Zostań wolontariuszem</ListItem>
                            <ListItem component={'a'} href="/VolunteersPage" disableGutters>Znajdź wolontariusza</ListItem>
                            <ListItem component={'a'} href="/#section-how-find-help" disableGutters>Jak znaleźć pomoc</ListItem>
                            <ListItem component={'a'} href="/TasksPage" disableGutters>Znajdź zadanie</ListItem>
                        </List>                       
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant='h3' color='secondary'>Popularne kategorie</Typography>
                    </Grid>
                    <Grid item sm={2}>
                    <Link href={"https://github.com/marcinnnnb/CodersCamp2021-Project-React-Node-eWolontariat"}>
                        <Box
                            component={"img"}
                            style={{
                                height: "20px",
                            }}
                            alt={"Logo Coders Camp"}
                            src={GitHubLogo}
                        />
                    </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
    )}

export default AppFooter;