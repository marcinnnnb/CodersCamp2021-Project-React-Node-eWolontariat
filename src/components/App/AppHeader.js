import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import LogoPomocny from "assets/img/logo-pomocny.svg";
import LogoSignet from "assets/img/hand-peace-solid.svg";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { openDialog, FormType } from 'components/common/Dialog/store/dialogSlice';
import PersistentDrawerRight from "components/Drawer/Drawer";
import { styled } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import { selectIsLoggedIn } from "store/systemSlice";
import ResponsiveMenu from "components/Drawer/ResponsiveMenu";

const LogoBox = styled(Box)(({ theme }) => ({
    height: "46px",
    cursor: "pointer",
    padding: "1rem 0",
}));

const StyledAppBar= styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
       '& span': {
           fontSize: '0.8rem'
       }
    },
    
}));

const AppHeader = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const matches = useMediaQuery('(min-width:600px)', { noSsr: true });
    const loggedIn = useSelector(selectIsLoggedIn);

    let elementForNotLoggedIn;
    let buttons;

    function getLogo() {
        const logo = <LogoBox className="logo" component="img" alt="Logo pomocny.pl" type="button"
                        src={ 
                            matches ?  LogoPomocny :  LogoSignet
                        }                     
                        onClick={(e)=>{
                            e.preventDefault();
                            navigate('/');
                        }}
                    />
        return logo;
     };

     function getAuthButton() {
        matches ? (
        elementForNotLoggedIn = (
           (
                <>
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
            </>
            )
        )) : elementForNotLoggedIn =  <ResponsiveMenu/>;

        return elementForNotLoggedIn;
     }

     function setAppBar(marginT) {
              matches ? (
                buttons = <><Button 
                            style={{height: '2.5rem', marginTop: marginT}}
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
                        </>

        ) : buttons = null;
        return buttons;
     };
    
    return (
    <header>
        <StyledAppBar position='static' color={'inherit'}>
            <Toolbar >
                    {getLogo()}
                    <Box display={"flex"} justifyContent={"flex-end"} flexGrow={"1"} gridColumnGap={"1.4rem"}>
                        {loggedIn && setAppBar("1rem")}
                        {!loggedIn && getAuthButton()}
                        {loggedIn && <PersistentDrawerRight />}
                    </Box>            
            </Toolbar>
        </StyledAppBar>
    </header>
)}

export default AppHeader;


