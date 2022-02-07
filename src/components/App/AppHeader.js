import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import LogoPomocny from "../../assets/img/logo-pomocny.svg";

const AppHeader = () => {
    let navigate = useNavigate();
    return (
    <header>
        <AppBar position='static' color={'inherit'}>
            <Toolbar>
                
                    <Box
                        component="img"
                        sx={{
                        height: "46px",
                        }}
                        alt="Logo pomocny.pl"
                        src={LogoPomocny}
                        padding={"1rem 0"}
                        onClick={()=>{navigate("/TasksPage")}} 
                    />
                
                    <Box display={"flex"} justifyContent={"flex-end"} flexGrow={"1"} gridColumnGap={"1.4rem"}>
                        <Button variant="contained" color='primary' href={"/TaskForm"} size={'medium'}>Stwórz zadanie</Button>
                        <Button variant="text" size={'medium'}>Zaloguj się</Button>
                        <Button variant="text" size={'medium'}>Zarejestruj się</Button>
                    </Box>              
            </Toolbar>
        </AppBar>
    </header>
)}

export default AppHeader;