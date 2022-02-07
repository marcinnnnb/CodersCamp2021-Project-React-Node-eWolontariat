import {useForm} from 'react-hook-form';
import {useState} from 'react';
import { Button, Box, Typography, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';
import TaskPagestore from '../TaskPage/TaskPagestore';
import { Route, Routes } from 'react-router-dom';
import { addNewTask, selectTask } from "../../store/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { DisplayTaskPage } from '../TaskPage/TaskPagestore2';


const tytulValidation={
    required:true, minLength:5, maxLength:80
}  
const amountValidation={
    required:true, pattern:[0-9], maxLength:1000
} 

export default function TaskForm() {
    const{register,handleSubmit} =useForm();
    const dispatch = useDispatch();
   const onSubmit = (data,e) => {
        e.preventDefault()
        console.log(data)
        dispatch(addNewTask(data))
         };
 
    const [categories, setCategories] = useState([]);
    const handleChange = (event) => {
      setCategories(event.target.value);}
      

return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <Box sx={{display:"grid", gridTemplateColumns: "3fr 2fr", gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header"
  "main img"
  "main2 main2"
  ". button"
  "footer footer"`}}>
  
    <Box sx={{ gridArea: 'header'}}> 
    <Typography variant="h2" align="center" color="primary" >Tworzenie zadania dla wolontariusza </Typography>
    </Box>

    <Box sx={{ gridArea: 'main', display:"flex",  flexDirection:"column", alignItems: 'stretch', justifyContent: 'space-around',width: '100%', marginLeft:"30px"}}>
    <TextField fullWidth label="Tytuł zadania" {...register('title', tytulValidation)} {...tytulValidation}/>
    <TextField type="number" fullWidth label="Ilu wolontariuszy potrzebujesz?" {...register('amount', amountValidation)} {...amountValidation}/>
    </Box>
    
    <Box sx={{ gridArea: 'img', alignItems:"center", justifyContent:"center",  backgroundColor: 'primary', p: 2, border: '1px dashed grey', width:"70%", height:"120px"}}>
    <input name="image" type="file" accept="image/png, image/jpeg"  />
    </Box>

    <Box sx={{ gridArea: 'main2', display:"flex", gap:3, flexDirection:"column", justifyContent: 'space-around', width:"97%"}}>
    <TextField multiline rows={4} fullWidth label="Dodaj opis zadania" {...register("action_description")} />   
    <TextField fullWidth multiline rows={2} label="Dodaj krótki opis widoczny na miniaturze" {...register("action_short_description")} />
    <Typography variant="body1">Wybierz kategorie: </Typography>
    <Select name="categories" label="Kategorie" options={Categories} value={categories} onChange={handleChange} isMulti isSearchable {...register("categories")} />
 
    </Box>
    <Box sx={{  gridArea: 'button', padding:"1rem 0"}}>
    <Routes>
    <Route path="/TaskPage2" element={<DisplayTaskPage />} />
    </Routes>
    <Button   size="medium" type="submit" variant="contained" endIcon={<SendIcon />} color="primary"  > Opublikuj zadanie</Button>
    </Box>
    </Box>

    </form>
    
    
    </div>
    //href={"/TaskPage2"}
    
    )
    
}

