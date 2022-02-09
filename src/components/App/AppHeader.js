import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import LogoPomocny from "../../assets/img/logo-pomocny.svg";
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
    let navigate = useNavigate();
    return (
    <header>
        <AppBar position='static' color={'inherit'}>
            <Toolbar>
                    <Box
                        component="img"
                        style={{
                        height: "46px",
                        cursor: "pointer"
                        }}
                        alt="Logo pomocny.pl"
                        src={LogoPomocny}
                        padding={"1rem 0"}
                        type="button" 
                        onClick={(e)=>{
                            e.preventDefault();
                            navigate('/');
                        }}
                    >
                    </Box>
                
                    <Box display={"flex"} justifyContent={"flex-end"} flexGrow={"1"} gridColumnGap={"1.4rem"}>
                        <Button 
                            variant="contained" 
                            color='primary' 
                            href={"/TaskForm"} 
                            size={'medium'} 
                            type="button" 
                            onClick={(e)=>{
                                e.preventDefault();
                                navigate('/TaskForm');
                            }}
                        >
                            Stwórz zadanie
                        </Button>
                        <Button 
                            variant="text" 
                            size={'medium'}
                            type="button" 
                        >
                            Zaloguj się
                        </Button>
                        <Button 
                            variant="text" 
                            size={'medium'}
                        >
                            Zarejestruj się
                        </Button>
                    </Box>              
            </Toolbar>
        </AppBar>
    </header>
)}

export default AppHeader;