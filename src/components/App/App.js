import './App.css';
import { AppBar, Box, Toolbar, Button, IconButton } from "@material-ui/core";
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { theme } from '../../theme/theme.js';
import { ThemeProvider} from '@mui/material/styles';
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

function App() {
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"}>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' color={'#fff'}>
                        <Toolbar>
                            <IconButton>
                                <Link to={"/"}> pomocny.pl</Link>
                            </IconButton>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color = "primary">
                                    <Link to={"/"}> Stwórz zadanie</Link>
                                </Button>
                            </ThemeProvider>
                            
                            <Button>Zaloguj się</Button>
                            <Button>Zarejestruj się</Button>
                        </Toolbar>
                </AppBar>
                <Box padding={2} flex={1} overflow={"auto"}>
                    <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/OrganizationForm" element={<OrganizationForm/>} />
                    <Route path="/OrganizationPage" element={<OrganizationPage/>} />
                    <Route path="/TaskForm" element={<TaskForm/>} />
                    <Route path="/TaskPage" element={<TaskPage/>} />
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
                height={"50px"} 
                bgcolor={"#F8F8F8"}
                
                flex-shrink={"0"}>
                Footer
            </Box>
            
        </Box>
    )

    
};

export default App;
