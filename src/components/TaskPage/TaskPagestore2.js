import React from 'react';
import { Button, Typography, Box, TextField, Card} from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import liscik from "../../assets/img/plane.svg";
import skrzynka from "../../assets/img/mailbox.svg";
import CustomButton from "../../theme/CustomButton";
import {  useSelector } from "react-redux";

export function DisplayTaskPage()  {
        
        const list= useSelector((state)=>state.task.tasks);
        
            return(
                <Box id={"task-page"}
                display={"flex:"}
                height = {"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"2rem"}
            >
            
            {list.slice(0,1).map((task)=>(
                <div key={task.title}>
                <Box sx={{display:"grid",gridTemplateColumns: {xl:"(3fr, 1fr)", xs:"1fr"}, gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
                  gridTemplateAreas: `"header ."
                "main sidebar"
                " . ."
                "footer footer"`}}>
                <Box sx={{ gridArea: 'header'}}>
                    <Typography variant="h1" align="center"> {task.title}</Typography>
                </Box>
              
                <Box sx={{gridArea:'sidebar' , display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around'}}>
                    <Box>
                        <Button variant="contained" color="primary" size="large">Zobacz wszystkie zadania </Button>
                    </Box>
                    <Card  style={{ margin:'0,7rem', padding: '2.0rem',  display:'flex',  flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                    <Box >
                        <Typography variant="h3" align="center">Ilu wolontariuszy potrzebujemy?</Typography>
                        <Typography variant="body1" align={'center'}>{task.amount}</Typography>
                        <Typography variant="body1" align={'center'}>Ilu się zapisało: {task.sign}</Typography>
                        <ProgressBar const completed={0/task.amount*100}/>
                        <Box sx={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around', height:"100px"}} >
                            <CustomButton variant="outlined" color="primary" size="large" >Udostępnij</CustomButton>
                            <Button  variant="contained" color="secondary" size="large" > Pomagam </Button>
                        </Box>
                        </Box>
                        </Card>
    
                        <Card raised={true} style={{ margin:'1rem', padding: '0.8rem 2.4rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                    <Box >
                        <Typography margin="10px" variant="h5" align="center">Zgłoszeni wolontariusze</Typography>
                        <Button  mb="10px" variant="outlined" size="medium" align="center">Kasia z Gdańska</Button>
                    </Box>
                    </Card>
                    <Box sx={{ marginTop:"10px", justifySelf:"end"}}>
                        <Box>
                            <img width="200px" src={skrzynka} alt=""/>
                        </Box>
                    </Box>
                </Box>
              
                <Box sx={{ gridArea: 'main', alignItems:"center", width:'90%', justifyContent:"center"}}>
                <Box sx={{display:"flex", gap:4}}>
                    <Typography variant={"subtitle1"}>Kategorie: </Typography>

                    {task.categories.map((cat)=>
                        (<div key={cat.id}> 
                            <Button  variant="contained" color="secondary"> {cat.value}</Button> 
                    </div> ))}
                    </Box>

                    <p align="center"><img width="500px"  alt=""/></p>
                    <Typography variant="body1">{task.action_description}</Typography>  
                    <img width="300px" height="200px" src={liscik} alt=""/>
    
                    <Card raised={true} style={{ margin:'1rem', padding: '0.5rem 0.1rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                <Box sx={{gridArea:"main"}}  mx='0.5rem'  >
                    <Typography variant="h3" align="center" >Komentarze</Typography>  
                    </Box>
                    </Card>

                    <Card raised={true} style={{ margin:'1rem', padding: '0.8rem 0.1rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                    <TextField label="Napisz komentarz" multiline rows={2} fullWidth/>
                    </Card>
                </Box>
                </Box>
                </div>
            
            ))}</Box>
            )}

            export default DisplayTaskPage;
