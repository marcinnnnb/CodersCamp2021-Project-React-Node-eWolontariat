import {useForm} from 'react-hook-form';
import { Button, Box, Typography, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';
import { Route, Routes } from 'react-router-dom';
import OrganizationPage from '../OrganizationPage/OrganizationPage';
import { Input } from '@material-ui/core';
import './Organization.css'


const tytulValidation={
    required:true, minLength:5, maxLength:80
}  
const TaskForm = () => {
    const{register,handleSubmit} =useForm();
    const onSubmit = data => console.log(data)
    

return (
    <form onSubmit={handleSubmit(onSubmit)}>  
        <Box > 
            <Typography variant="h2" align="center" color="primary" >Tworzenie profilu organizacji </Typography>
        </Box>
        <Box sx={{ display:"flex", flexDirection:"column", gap:30,  justifyContent: 'space-around', width:"97%"}}>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent: 'space-between'}}>
                <label >Wybierz avatar: 
                <input name="image" type="file" accept="image/png, image/jpeg"  />
                </label>
                
                <label> Wybierz zdjęcie w tle: 
                <input name="image" type="file" accept="image/png, image/jpeg" {...register("image")}/>
                </label>
            </Box>
            <label>Podaj numer KRS: 
                <Input name="KRS_number" type="number" {...register("KRS_number")}  />
            </label>
            <Typography variant="body1">Wybierz kategorie: </Typography>
            <Select label="Kategorie" options={Categories} isMulti isSearchable {...register("categories")} />
            <TextField fullWidth label="Nazwa organizacji" {...register('title', tytulValidation)} {...tytulValidation}/>
            <TextField multiline rows={4} fullWidth label="Opis organizacji" {...register("action_description")} />   
        </Box>
        <Box display={"flex"} padding={"1rem 0"} justifyContent={"flex-end"}>
            <Routes>
                <Route path="/OrganizationPage" element={<OrganizationPage/>} />
            </Routes>
            <Button href={"/OrganizationPage"} size="medium" type="submit" variant="contained" endIcon={<SendIcon />} color="primary" > Opublikuj profil organizacji</Button>
        </Box>
    </form>
    )
}

export default TaskForm;