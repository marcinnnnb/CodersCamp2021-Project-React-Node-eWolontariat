import {useForm, Controller} from 'react-hook-form';
import { Button, Box, Typography, TextField, Container, Divider } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';
import { useNavigate, Route, Routes} from 'react-router-dom';
import { addNewOrganization } from "../../store/organizationSlice";
import { useDispatch } from "react-redux";
import { Input } from '@material-ui/core';
import './Organization.css'

const tytulValidation={
    required:true, minLength:5, maxLength:80
}  

const OrganizationForm = () => {
    const{register,handleSubmit,control} =useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = []; 
   const onSubmit = (data,e) => {
        e.preventDefault()
        console.log(data)
        dispatch(addNewOrganization(data))
        navigate('/OrganizationPage')
         };

return (
    <Container>
        <Box id={"section-task-form"}
            padding={"3rem 3.5rem"}
            my={2}
            justifyContent={"center"}
            alignItems={"center"}
        >
    <form onSubmit={handleSubmit(onSubmit)}>  
        <Box marginBottom={"1.5rem"} > 
            <Typography variant="h2" align="center" color="primary" >Tworzenie profilu organizacji </Typography>
        </Box>
        <Divider/>
        <Box sx={{ display:"flex", flexDirection:"column", gap:30,  justifyContent: 'space-around'}}>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent: 'space-between', marginTop:"1.3rem"}}>
                <label >Wybierz avatar: 
                <input name="image" type="file" accept="image/png, image/jpeg"  />
                </label>
                
                <label> Wybierz zdjęcie w tle: 
                <input name="image" type="file" accept="image/png, image/jpeg" {...register("image")}/>
                </label>
            </Box>
            <TextField fullWidth label="Nazwa organizacji" {...register('title', tytulValidation)} {...tytulValidation}/>
            <TextField type="number" name="KRS" fullWidth label="Podaj numer KRS" {...register('KRS_number')} />
            <Typography variant="body1">Wybierz kategorie: </Typography>
            <Controller
            control={control}
            defaultValue={categories[0]}
            name='categories'
            render={({ field: { onChange, value, ref } }) => (
            <Select
                {...register('categories')}
                label='Kategorie'
                options={Categories}
                value={value}
                onChange={onChange}
                isMulti
                isSearchable
            />
            )}
        />
            <TextField multiline rows={4} fullWidth label="Opis organizacji" {...register("action_description")} />   
        </Box>
        <Box display={"flex"} padding={"1rem 0"} justifyContent={"flex-end"}>
            <Button  size="medium" type="submit" variant="contained" endIcon={<SendIcon />} color="primary" > Opublikuj profil organizacji</Button>
        </Box>
    </form>
    </Box>
    </Container>
    )
}

export default OrganizationForm;