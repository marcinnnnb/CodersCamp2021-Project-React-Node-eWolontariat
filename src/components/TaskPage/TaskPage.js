import { Button, Typography, Box, TextField, Card, Divider } from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import liscik from "../../assets/img/plane.svg";
import skrzynka from "../../assets/img/mailbox.svg";
import avatar from "../../assets/img/facet.png";
import CustomButton from "../../theme/CustomButton";
import { useSelector } from "react-redux";
import { selectAllTasks, selectTasksId} from '../../store/taskSlice';
import { useParams } from 'react-router-dom'
import setCategoryIcon from "../../theme/setCategoryIcon";
import { styled } from '@mui/material/styles';

const StyledTaskPage = styled(Card)(({ theme }) => ({
    height: "100%",
    margin: '5rem', 
    display:'flex',  
    flexDirection: "row",
    justifyContent:'center', 
    alignItems: 'center', 

    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        padding: "0", 
        margin: '2rem 0.6rem',
        height: "auto",
        '& p': {
            fontSize: "1rem",
            margin: "2rem 0.6rem",  
        },
        '& .box-responsive': {
            display: "block",
            padding: "1.4rem",      
            textAlign: "center"
        },
        '& span': {
            fontSize: '0.8rem'     
        },
        '& .comments' :{
            textAlign: "left",
        },
        '& img': {
            maxWidth: "25%"
        },
    },
    [theme.breakpoints.down('sm')]: {
        margin: '1rem 0.3rem',
        '& p': {
            margin: "1rem 0.5rem",  
        },
        '& .box-responsive': {
            padding: "0.6rem",      
        },
    },
}));

const TaskPage = () => {
    const { taskId } = useParams();
    let id = parseInt({ taskId }.taskId);
    const tasksList = useSelector(selectAllTasks).tasks;
    const task = selectTasksId(tasksList, id);

    return (
        <StyledTaskPage id={"task-page"}>
            <Box className={"box-responsive"} 
            sx={{display:"grid",gridTemplateColumns: {xl:"(3fr, 1fr)", xs:"1fr"}, gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',gridTemplateAreas: `"header header ""main sidebar""comments mailbox""footer footer"`}}>
                <Box style={{ gridArea: 'header'}}>
                    <Typography variant="h1" align="center" paragraph> {task.title}</Typography>
                </Box>
                <Box sx={{ display:"flex", flexDirection:"column", gridArea: 'main', alignItems:"center", width:'90%', justifyContent:"center"}}>
                    <Box sx={{ display:"flex", flexDirection:"row", width:'90%'}}>
                        <Typography variant={"subtitle1"} paragraph>Kategorie: </Typography>
                            {task.categories.map((cat)=>
                                (<div key={cat.id}> 
                                    <CustomButton 
                                        variant="contained" 
                                        style={{margin: "0.8rem"}}
                                        color={setCategoryIcon(task.categories[0])[1]}
                                        startIcon={setCategoryIcon(task.categories[0])[0]}                        
                                    >
                                        <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {cat.value || task.categories} 
                                    </CustomButton>
                                </div>))}
                    </Box>
                    <Box 
                        className={"main-img"}
                        component="img"
                        padding={"2rem"}
                        src={require(`../../assets/img/tasks/${task.image}.jpg`)}
                        alt={`${task.title}`}
                        style = {{maxWidth:"80%"}}
                    />
                        <Typography variant="body1" paragraph>{task.action_description}</Typography>  
                        <img width="250rem" height="200rempx" src={liscik} alt=""/>

                </Box>
                <Box sx={{ gridArea:"comments", width:"90%"}}  mx='0.5rem'  >
                    <Typography variant="h2" align="center" paragraph>Komentarze</Typography>  
                    <Card className={"comments"} raised={true} style={{ margin:'1rem', padding: '0.6rem 0.8rem'}}>
                        <Typography  variant="body2" paragraph ><img height="45rem" src={avatar} alt=""/>  {task.comments}</Typography>
                    </Card>
                    <Card raised={true} style={{ margin:'1rem', padding: '0.8rem 0.5rem'}}>
                        <TextField label="Napisz komentarz" multiline rows={2} fullWidth />
                    </Card>
                </Box>
                <Box  style={{gridArea:'sidebar' , display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around', maxHeight:'40rem'}}>
                    <Box >
                        <Button style={{ margin:'1rem'}} variant="contained" color="primary" href="/TasksPage">Zobacz wszystkie zadania </Button>
                    </Box>
                    <Card  style={{ margin:'0.8rem', padding: '2rem'}}>
                        <Box >
                            <Typography variant="h3" align="center" paragraph>Ilu wolontariuszy potrzebujemy?</Typography>
                            <Typography variant="body1" align={'center'} paragraph>{task.amount}</Typography>
                            <Typography variant="body1" align={'center'} paragraph>Ilu się zapisało: {task.sign}</Typography>
                            <ProgressBar const completed= {Math.floor(task.sign /task.amount*100)}/>
                            <Box style={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around'}} >
                                <CustomButton variant="outlined" color="primary" >Udostępnij</CustomButton>
                                <Button  variant="contained" color="secondary" style={{marginTop: '1rem'}}> Pomagam </Button>
                            </Box>
                        </Box>
                    </Card>

                    <Card  raised={true} style={{ margin: '0.8rem', padding: '0.8rem 1.5rem'}}>
                        <Box>
                            <Typography style={{ margin: '1rem'}}variant="h5" align="center" paragraph>Zgłoszeni wolontariusze</Typography>
                            <Button  mb="1rem" variant="outlined" align="center">Kasia z Gdańska</Button>
                        </Box>
                    </Card>
                </Box>
                <Box sx={{ gridArea:'mailbox', marginTop:"1orem", alignSelf:"end"}}>
                    <Box>
                        <img width="200rem" src={skrzynka} alt=""/>
                    </Box>
                </Box>
            </Box>
        </StyledTaskPage>
    )
}

export default TaskPage;