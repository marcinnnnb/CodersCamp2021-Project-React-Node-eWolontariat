import { useEffect, useState } from "react";
import { Button, Typography, Box, TextField, Card } from "@material-ui/core";
import { borders } from '@mui/system';
import ProgressBar from "./ProgressBar";
import liscik from "../../assets/img/plane.svg";
import skrzynka from "../../assets/img/mailbox.svg";
import avatar from "../../assets/img/facet.png";
import CustomButton from "../../theme/CustomButton";
import pies from "../../assets/img/pies.jpg"

const TaskPage = () => {
    
    const [zadania,setZadania]=useState([])
    let n=Math.floor(Math.random()*6);

    useEffect(()=>{
    
      fetch('https://api.npoint.io/3f77545257d8fcd44ade')
      .then(res=>res.json())
      .then(data=>setZadania(data))
      .catch(err=>{console.error(err)});
       },[]);


    return (
        <Box id={"task-page"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"2rem"}
        >
        {zadania.slice(n,n+1).map((zadania)=>(
            <div key={zadania.id}>
            <Box sx={{display:"grid",gridTemplateColumns: {xl:"(3fr, 1fr)", xs:"1fr"}, gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
              gridTemplateAreas: `"header ."
            "main sidebar"
            "footer footer"`}}>
            <Box sx={{ gridArea: 'header'}}>
                <Typography variant="h1" align="center"> {zadania.title}</Typography>
            </Box>
          
            <Box sx={{gridArea:'sidebar' , display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around'}}>
                <Box>
                    <Button variant="contained" color="primary" size="large" href="/TasksPage">Zobacz wszystkie zadania </Button>
                </Box>
                <Card  style={{ margin:'0,8rem', padding: '2.0rem',  display:'flex',  flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                <Box >
                    <Typography variant="h3" align="center">Ilu wolontariuszy potrzebujemy?</Typography>
                    <Typography variant="body1" align={'center'}>{zadania.amount}</Typography>
                    <Typography variant="body1" align={'center'}>Ilu się zapisało: {zadania.sign}</Typography>
                    <ProgressBar const completed={zadania.sign/zadania.amount*100}/>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around', height:"100px"}} >
                        <CustomButton variant="outlined" color="primary" size="large" >Udostępnij</CustomButton>
                        <Button  variant="contained" color="secondary" size="large" > Pomagam </Button>
                    </Box>
                    </Box>
                    </Card>

                    <Card raised={true} style={{ padding: '0.8rem 2.4rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
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
                <Typography variant={"subtitle1"}>Kategorie: </Typography>
                <Button  variant="contained" color="secondary">{zadania.categories}</Button>
                <p align="center"><img width="400px" src={zadania.image} alt=""/></p>
                <Typography variant="body1">{zadania.action_description}</Typography>  
                <img width="300px" height="200px" src={liscik} alt=""/>

                <Card raised={true} style={{ margin:'1rem', padding: '0.5rem 0.1rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                <Box sx={{gridArea:"main"}}  mx='0.5rem'  >
                    <Typography variant="h3" align="center" >Komentarze</Typography>  
                    <Typography  variant="body2"  ><img height="45px" src={avatar} alt=""/>{zadania.comments}</Typography>
                    </Box>
                    </Card>

                    <Card raised={true} style={{ margin:'1rem', padding: '0.8rem 0.5rem', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}}>
                    <TextField label="Napisz komentarz" multiline rows={2} fullWidth/>
                    </Card>
            </Box>
            </Box>
         
            </div>
        
        ))}</Box>
    )
}

export default TaskPage;