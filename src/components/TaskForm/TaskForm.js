import {useForm} from 'react-hook-form';
import { Button, Box, Typography, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';
import savedTask from '../../store/SavedTask';
import TaskReducer from '../../reducers/reducers_tasks'
import TaskPagestore from '../TaskPage/TaskPagestore';
import { Navigate, Route, Routes } from 'react-router-dom';

console.log(TaskReducer);

const tytulValidation={
    required:true, minLength:5, maxLength:80
}  
const amountValidation={
    required:true, pattern:[0-9], maxLength:1000
} 

const TaskForm = () => {
    const{register,handleSubmit} =useForm();
    const onSubmit = data => {savedTask(data)}
    

return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <Box sx={{display:"grid", gridTemplateColumns: "3fr 2fr", gap: 2, justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header"
  "main img"
  "main2 main2"
  "button button"
  "footer footer"`}}>
  
    <Box sx={{ gridArea: 'header'}}> 
    <Typography variant="h3" align="center" color="primary" >Tworzenie zadania dla wolontariusza </Typography>
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
    <Select label="Kategorie" options={Categories} isMulti isSearchable {...register("categories")} />
    
    </Box>
    <Box sx={{ gridArea: 'button'}}>
    <Routes>
    <Route path="/TaskPage" element={<TaskPagestore/>} />
    </Routes>
    <Button href={"/TaskPage"} size="medium" type="submit" variant="contained" endIcon={<SendIcon />} color="primary" > Opublikuj zadanie</Button>
    </Box>
    </Box>
    </form>
   
    
    )
    
}

export default TaskForm;