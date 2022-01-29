import React from "react";
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from 'react-select'
import Categories from "./Kategorie";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './tworzeniezad.css';

const tytulValidation={
    required:true, minLength:5, maxLength:80
}  
const amountValidation={
    required:true, pattern:[0-9], maxLength:1000
} 



export default function Tworzeniezad() {
    const{register,handleSubmit} =useForm();
    const onSubmit = data => console.log(data);

return (
    <ThemeProvider theme={theme}>
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <Grid container
    spacing={2}
    justify="center"
    align="flex-start"
    margin="10px"
    >
    <Grid item xs={12}>
    <Typography variant="h3" align="center" color="secondary.light" >Tworzenie zadania dla wolontariusza </Typography>
    </Grid>

    <Grid item xs={7}>
    <TextField fullWidth label="Tytuł zadania" {...register('title', tytulValidation)} {...tytulValidation}/>
    </Grid>

    <Grid item xs={7}>
    <label>
    Wybierz kategorie:
    <Select  options={Categories} isMulti isSearchable {...register("categories")} >
    </Select>
    </label>
    </Grid>

    <Grid item xs={4} >
    <Box  sx={{  backgroundColor: 'primary', p: 2, border: '1px dashed grey' }}>
    <input name="image" type="file" accept="image/png, image/jpeg"  />
    </Box>
    </Grid>
  
    <Grid item xs={7}>
    <TextField type="number" fullWidth label="Ilu wolontariuszy potrzebujesz?" {...register('amount', amountValidation)} {...amountValidation}/>
    </Grid>

    <Grid item xs={10}>
    <TextField multiline rows={4} fullWidth label="Dodaj opis zadania" {...register("action_description")} />
    </Grid>

    <Grid item xs={10}>
    <TextField fullWidth multiline rows={2} label="Dodaj krótki opis widoczny na miniaturze" {...register("action_short_description")} />
    </Grid>

    <Grid item xs={12}>
    <Button type="submit" variant="contained" endIcon={<SendIcon />} color="primary" > Opublikuj zadanie</Button>
    </Grid>
    
    </Grid>
    </form>
    </ThemeProvider>

    
)
}

    



