import { Box } from "@material-ui/core";
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
import { DisplayTaskPage } from '../TaskPage/TaskPagestore2';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export function App() {
   
    return (
        <ThemeProvider theme={theme}>
        <Box height={"100%"} display={"flex"} flexDirection={"column"}>
             <Box sx={{ flexGrow: 1 }}> 
                <AppHeader/>
                <Box padding={"0 2"} flex={1} overflow={"auto"}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/OrganizationForm/*" element={<OrganizationForm/>} />
                    <Route path="/OrganizationPage" element={<OrganizationPage/>} />
                    <Route path="/TaskForm/*" element={<TaskForm/>} />
                    <Route path="/TaskPage" element={<TaskPage/>} />
                    <Route path="/TaskPage2" element={<DisplayTaskPage/>} />
                    <Route path="/TasksPage" element={<TasksPage/>} />
                    <Route path="/UserProfile" element={<UserProfile/>} />
                    <Route path="/VolunteerForm" element={<VolunteerForm/>} />
                    <Route path="/VolunteerPage" element={<VolunteerPage/>} />
                    <Route path="/VolunteersPage" element={<VolunteersPage/>} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </Box>
                <AppFooter />
             </Box>
        </Box>
        </ThemeProvider>
    )
};

export default App;
