import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Typography, Box, TextField } from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import liscik from "../../assets/img/plane.svg";
import skrzynka from "../../assets/img/mailbox.svg";
import avatar from "../../assets/img/facet.png";
import CustomButton from "../CustomButton";
import tasks from '../../reducers/reducers_tasks';
import taskSlice from '../Tasks/taskSlice';


 class TaskPage2 extends Component {
    createTaskPage(){

        return this.props.taskSlice.map((task)=>{
            (
                <Box key={task.id} 
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"4rem"}
        >
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
                <Box sx={{ borderRadius: 3,  boxShadow: 5, width: '90%', display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Typography variant="h6" align="center">Ilu wolontariuszy potrzebujemy?</Typography>
                    <p>{task.amount}</p>
                    <p>Ilu się zapisało: {task.sign}</p>
                    <ProgressBar const completed={task.sign/task.amount*100}/>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around', height:"120px"}} >
                        <CustomButton variant="outlined" color="primary" size="large" >Udostępnij</CustomButton>
                        <Button  variant="contained" color="secondary" size="large" > Pomagam </Button>
                    </Box>
                    
                </Box>
                <Box sx={{ borderRadius: 3,  boxShadow: 5, width: '90%', display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Typography margin="10px" variant="h6" align="center">Zgłoszeni wolontariusze</Typography>
                    <Button  mb="10px" variant="outlined" size="medium">Kasia z Gdańska</Button>
                </Box>
                <Box sx={{ marginTop:"10px", justifySelf:"end"}}>
                    <Box>
                        <img width="200px" src={skrzynka} alt=""/>
                    </Box>
                </Box>
            </Box>
          
            <Box sx={{ gridArea: 'main', alignItems:"center", width:'90%', justifyContent:"center"}}>
                <Typography variant={"subtitle1"}>Kategorie: </Typography><Button  variant="contained" color="secondary">{task.categories}</Button>
                <p align="center"><img width="400px" src={task.image} alt=""/></p>
                <Typography variant="body2">{task.action_description}</Typography>  
                <img width="300px" src={liscik} alt=""/>
                <Box sx={{gridArea:"main", borderRadius: 1,  boxShadow: 5,  display:"flex", flexDirection:"column", justifyContent: 'space-evenly', marginTop:"10px", marginBottom:"20px"}} >
                    <Typography variant="h5" align="center" >Komentarze</Typography>  
                    <Typography variant="body2" align="left" ><img height="45px" src={avatar} alt=""/>{task.comments}</Typography>
                </Box>
                <TextField label="Napisz komentarz" multiline rows={3} fullWidth/>
            </Box>
            </Box>
        
        
        </Box>
            );
        });
    }


    render() {
        return (
            <div>
            {this.createTaskPage()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(TaskPage2);