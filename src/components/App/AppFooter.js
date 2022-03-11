import { Box, Container, Grid, Link, List, Typography } from "@material-ui/core";
import LogoPomocny from "../../assets/img/logo-pomocny.svg";
import CodersCampLogo from "../../assets/img/coder-camp.svg";
import GitHubLogo from "../../assets/img/github-logo.png";
import setTasksRatingButtons from "../TasksPage/setTasksRatingButtons";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../../store/taskSlice";
import { useNavigate } from "react-router-dom";
import { ListItemButton } from "@mui/material";

const AppFooter = () => {
    let navigate = useNavigate();
    const tasksList = useSelector(selectAllTasks).tasks;
    const thePopularCategoriesArray = setTasksRatingButtons(tasksList).slice(0,10);
 
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
                    <div  onClick={(e)=>{
                                    e.preventDefault();
                                    navigate(`/`);
                                }} style={{cursor: "pointer"}}>
                        <Box
                            component="img"
                            sx={{
                            height: "60px",
                            }}
                            alt="Logo pomocny.pl"
                            src={LogoPomocny}
                        />
                    </div>
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
                            <ListItemButton 
                                component={'a'} 
                                disableGutters
                                style={{cursor: "pointer"}}  
                                onClick={(e)=>{
                                    e.preventDefault();
                                    navigate(`/VolunteerForm`);
                                }} 
                            >
                                Zostań wolontariuszem
                            </ListItemButton>
                            <ListItemButton  
                                component={'a'}  
                                disableGutters
                                style={{cursor: "pointer"}}  
                                onClick={(e)=>{
                                    e.preventDefault();
                                    navigate(`/VolunteersPage`);
                                }} 
                            >
                                Znajdź wolontariusza
                            </ListItemButton>
                            <ListItemButton 
                                component={'a'} 
                                disableGutters
                                style={{cursor: "pointer"}}  
                                onClick={(e)=>{
                                    e.preventDefault();
                                    navigate(`/#section-how-find-help`);
                                }}
                            >
                                Jak znaleźć pomoc
                            </ListItemButton>
                            <ListItemButton 
                                component={'a'} 
                                disableGutters
                                style={{cursor: "pointer"}}  
                                onClick={(e)=>{
                                    e.preventDefault();
                                    navigate(`/TasksPage`);
                                }}
                            >
                                Znajdź zadanie
                            </ListItemButton>
                        </List>                       
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant='h3' color='secondary'>Popularne kategorie</Typography>
                        <List padding={"0"}>
                            {thePopularCategoriesArray?.map((category)=>{
                                return (
                                    <ListItemButton 
                                        key={`item-${category.id}`} 
                                        disableGutters
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            navigate(`/CategoryPage/${category.value.replace(" ","-")}`);
                                        }} 
                                        >
                                        {category.value}
                                    </ListItemButton>
                            )})}
                        </List>
                    </Grid>
                    
                    
                    
                </Grid>
            </Container>
           
        </Box>
        <Link href={"https://github.com/marcinnnnb/CodersCamp2021-Project-React-Node-eWolontariat"}>
                        <Box
                            component={"img"}
                            style={{
                                height: "20px",
                                margin: '2rem'
                            }}
                            alt={"Logo Coders Camp"}
                            src={GitHubLogo}
                        />
                    </Link>
    </footer>
    )}

export default AppFooter;