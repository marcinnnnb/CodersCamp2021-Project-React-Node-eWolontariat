import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import LogoPomocny from "../../assets/img/logo-pomocny.svg";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { openDialog, FormType } from '../common/Dialog/store/dialogSlice';
import PersistentDrawerRight from "../Drawer/Drawer";

const AppHeader = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    return (
    <header>
        <AppBar position='static' color={'inherit'}>
            <Toolbar >
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
                            style={{height: '2.5rem', marginTop:'1rem'}}
                            variant="contained" 
                            color='primary' 
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
                            onClick={() => dispatch(openDialog({ formType: FormType.loginDialog }))} 
                        >
                            Zaloguj się
                        </Button>
                        <Button 
                            variant="text" 
                            size={'medium'}
                            onClick={() => dispatch(openDialog({ formType: FormType.rejestracja }))}
                        >
                            Zarejestruj się
                        </Button>
                        <PersistentDrawerRight />
                    </Box>              
            </Toolbar>
        </AppBar>
    </header>
)}

export default AppHeader;