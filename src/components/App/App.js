import './App.css';
import { AppBar, Box, Toolbar, Button, Container, Grid, Link, Typography, List, ListItem } from "@material-ui/core";
import { Navigate, Route, Routes } from 'react-router-dom';
import { theme } from '../../theme/theme.js';
import { ThemeProvider } from '@material-ui/core/styles';
import HomePage  from '../HomePage/HomePage';
import OrganizationForm from '../OrganizationForm/OrganizationForm';
import OrganizationPage from '../OrganizationPage/OrganizationPage';
import TaskForm from '../TaskForm/TaskForm';
import TaskPage from '../TaskPage/TaskPage';
import TasksPage from '../TasksPage/TasksPage';
import UserProfile from '../UserProfile/UserProfile';
import VolunteerForm from '../VolunteerForm/VolunteerForm';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import VolunteersPage from '../VolunteersPage/VolunteersPage';
import LogoPomocny from '../../assets/img/logo-pomocny.svg';
import CodersCampLogo from '../../assets/img/coder-camp.svg';
import GitHubLogo from '../../assets/img/github-logo.png';
import TaskPagestore from '../TaskPage/TaskPagestore';

function App() {
    return (
        <ThemeProvider theme={theme}>
        <Box height={"100%"} display={"flex"} flexDirection={"column"}>
             <Box sx={{ flexGrow: 1 }}>
            
                <AppBar position='static' color={'inherit'}>
                        <Toolbar>
                        <a href="/">
                            <Box
                                    component="img"
                                    sx={{
                                    height: "46px",
                                    }}
                                    alt="Logo pomocny.pl"
                                    src={LogoPomocny}
                                    padding={"1rem 0"}
                            />
                        </a>
                            
                            <Box display={"flex"} justifyContent={"flex-end"} flexGrow={"1"} gridColumnGap={"1.4rem"}>
                                <Button variant="contained" color='primary' href={"/TaskForm"} size={'medium'}>Stwórz zadanie</Button>
                                <Button variant="text" size={'medium'}>Zaloguj się</Button>
                                <Button variant="text" size={'medium'}>Zarejestruj się</Button>
                            </Box>
                            
                                
                        </Toolbar>
                </AppBar>
               
                <Box padding={2} flex={1} overflow={"auto"}>
                    <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/OrganizationForm" element={<OrganizationForm/>} />
                    <Route path="/OrganizationPage" element={<OrganizationPage/>} />
                    <Route path="/TaskForm/*" element={<TaskForm/>} />
                    <Route path="/TaskPage" element={<TaskPagestore/>} />
                    <Route path="/TasksPage" element={<TasksPage/>} />
                    <Route path="/UserProfile" element={<UserProfile/>} />
                    <Route path="/VolunteerForm" element={<VolunteerForm/>} />
                    <Route path="/VolunteerPage" element={<VolunteerPage/>} />
                    <Route path="/VolunteersPage" element={<VolunteersPage/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </Box>
                
             </Box>

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
        </Box>
        </ThemeProvider>
    )

};

export default App;
