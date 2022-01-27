import { useEffect, useState } from "react";
import { Button, Typography, Box, ThemeProvider } from "@mui/material";
import TextField from '@mui/material/TextField'
import theme from "./Theme";
import ProgressBar from "./ProgressBar";
import liscik from "./images/liscik.jpg";
import skrzynka from "./images/skrzynka.png";
import avatar from "./images/facet.png"

export default function Wyswietl(){

  const [zadania,setZadania]=useState([])

useEffect(()=>{

  fetch('https://api.npoint.io/3f77545257d8fcd44ade')
  .then(res=>res.json())
  .then(data=>setZadania(data))
   },[])

return(
  <ThemeProvider theme={theme}>
  {zadania.slice(0,1).map((zadania)=>(
  <div key={zadania.id}>
  <Box sx={{display:"grid",gridTemplateColumns: {xl:"(3fr, 1fr)", xs:"1fr"}, gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
    gridTemplateAreas: `"header ."
  "main sidebar"
  " . ."
  "footer footer"`}}>
  <Box sx={{ gridArea: 'header'}}>
  <Typography variant="h3" fontWeight="400" align="center"> {zadania.title}</Typography>
  </Box>

  <Box sx={{gridArea:'sidebar' , display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around'}}>
  <Box>
  <Button variant="contained" color="primary" size="large">Zobacz wszystkie zadania </Button>
  </Box>
  <Box sx={{   borderRadius: 3,  boxShadow: 5, width: '90%', display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'flex-start'}}>
  <Typography variant="h6" align="center">Ilu wolontariuszy potrzebujemy?</Typography>
  <p>{zadania.amount}</p>
  <p>Ilu się zapisało: {zadania.sign}</p>
  <ProgressBar const completed={zadania.sign/zadania.amount*100}/>
  <Box sx={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-around', height:"120px"}} >
  <Button variant="contained" color="secondary" size="large" >Udostępnij</Button>
  <Button  variant="contained" color="info" size="large" > Pomagam </Button>
  </Box>
  
  </Box>
  <Box sx={{ borderRadius: 3,  boxShadow: 5, width: '90%', display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'space-evenly'}}>
  <Typography margin="10px" variant="h6" align="center">Zgłoszeni wolontariusze</Typography>
  <Button  mb="10px" variant="outlined"  color="neutral" size="medium">Kasia z Gdańska</Button>
  </Box>
  <Box sx={{ marginTop:"10px", justifySelf:"end"}}>
  <Box>
  <img width="200px" src={skrzynka} />
  </Box>
  </Box>
  </Box>

  <Box sx={{ gridArea: 'main', alignItems:"center", width:'90%', justifyContent:"center"}}>
  <Button  variant="contained" color="secondary">{zadania.categories}</Button>
  <p align="center"><img width="400px" src={zadania.image} /></p>
  <p>{zadania.action_description}</p>  
  <img width="300px" src={liscik} />
  <Box sx={{gridArea:"main", borderRadius: 1,  boxShadow: 5,  display:"flex", flexDirection:"column", justifyContent: 'space-evenly', marginTop:"10px", marginBottom:"20px"}} >
  <Typography borderBottom="1px solid " variant="h5" align="center" >Komentarze</Typography>  
  <Typography marginLeft="20px" variant="body" align="left" ><img height="45px" src={avatar} />{zadania.comments}</Typography>
    </Box>
  <TextField label="Napisz komentarz" multiline rows={3} fullWidth/>
  </Box>
  </Box>
  </div>
    
    ))}
    
    </ThemeProvider>
)
}



  




