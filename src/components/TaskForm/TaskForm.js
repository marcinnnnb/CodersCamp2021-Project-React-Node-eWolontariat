import {useForm, Controller} from 'react-hook-form';
import { Box, Typography, TextField, styled } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select'
import Categories from 'assets/data/Categories';
import CustomTypography from 'theme/CustomTypography';
import CustomButton from 'theme/CustomButton';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import EventClient from 'services/client/EventClient';


const StyledTaskForm = styled(Box)(({ theme }) => ({
    height: "100%",
    margin: '3rem',  

    [theme.breakpoints.down('md')]: {
        margin: '0.3rem 0.3rem',
        height: "auto",
        flexDirection: "column",
        justifyContent:'center', 
        alignItems: 'center',

        '& p': {
            fontSize: "1rem",  
        },
        '& span': {
            fontSize: '0.8rem'     
        },
        '& h1': {
            fontSize: "1.5rem",  
        },
        '& h3': {
            fontSize: "0.8rem",  
        },
    },
}));
 
const amountValidation={
    required:true, pattern:[0-9], maxLength:1000
} 

export default function TaskForm() {
    const [content,setContent] = useState("")
    const [data, setData] = useState({
        title: "",
        volunteersNeeded: "",
        description: "",
        shortDescription: "",
        categories: ["622bba468ff7100016d06c86"],
        picture: null
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name.trim()]: value
        });
      };
    
      const handleSubmit = (e) => {
         e.preventDefault();
              
            EventClient.addNewEvent(data).then((response) => {
            console.log(response.status);
                
            console.log(categories)
           
            if(response.status === 201) { console.log(response.data)};
          }).catch((error) => {
            if (error.response) {
              setContent(
                <Box display={"flex"} flexDirection={"row"}>
                    <ErrorIcon fontSize={"small"} color={"error"} style={{marginRight: "0.4rem"}}/> 
                    <div style={{color: "red", fontWeight:600, textTransform: "capitalize"}}>{error.response.data.message}!</div>
                </Box>
                );
            } else if (error.request) {
              setContent("Błąd sieci. Sprawdź swoje połączenie!");
            } else {
              console.log(error);
            }
          });


      };


    const{register,control, formState: { errors }} = useForm();

    const categories = []; 

return (
    <StyledTaskForm>
        <Box id={"section-task-form"}
            padding={"3rem 4rem"}
            my={2}
            justifyContent={"center"}
            alignItems={"center"}
        >
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            {content}
            <Box style={{display:"grid", gridTemplateColumns: "3fr 2fr", gap: "1.6rem", justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
                gridTemplateAreas: `"header header"
                    "main img"
                    "main2 main2"
                    ". button"
                    "footer footer"`}}>
                <Box style={{ gridArea: 'header'}}> 
                    <CustomTypography paragraph variantcolor={"typographycolor"} variant="h2" align="center" color="tertiary" style={{marginBottom: "4rem"}}>Tworzenie zadania dla wolontariusza </CustomTypography>
                </Box>

                <Box style={{ gridArea: 'img', alignItems:"center", justifyContent:"center",  backgroundColor: 'primary', height:"9rem"}}>
                    <TextField
                        name="image" 
                        type="file"
                        value={data.picture}
                        accept="image/png, image/jpeg" 
                        {...register('picture')}  
                    />
                </Box>

                <Box style={{ gridArea: 'main', display:"flex",  flexDirection:"column", alignItems: 'stretch', justifyContent: 'space-around', width: '100%', marginLeft:"30px"}}>
                    <TextField 
                        fullWidth 
                        label="Tytuł zadania" 
                        name="title" 
                        type="title"
                        value={data.title}
                        {...register('title', {required:true, minLength:'5'})} 
                        onChange={handleChange}
                    />
                    {errors.title?.type ==='required' && "To pole jest wymagane. Minimalnie 5 znaków"}
                    <TextField 
                        name="volunteersNeeded" 
                        type="number"  
                        fullWidth 
                        label="Ilu wolontariuszy potrzebujesz?" 
                        {...register('volunteersNeeded', amountValidation)} 
                        {...amountValidation} 
                        onChange={handleChange}
                        value={data.volunteersNeeded}    
                    />
                </Box>
                
                <Box style={{ gridArea: 'main2', display:"flex", gap:3, flexDirection:"column", justifyContent: 'space-around', width:"97%"}}>
                    <TextField 
                        multiline 
                        rows={4} 
                        fullWidth 
                        label="Dodaj opis zadania" 
                        {...register("description")} 
                        onChange={handleChange}
                        value={data.description}    
                    />   
                    <TextField 
                        type="description" 
                        name="description" 
                        style={{marginBottom: "2rem"}} 
                        fullWidth 
                        multiline 
                        rows={2} 
                        label="Dodaj krótki opis widoczny na miniaturze" 
                        {...register("shortDescription")} 
                        onChange={handleChange}
                        value={data.shortDescription}                    
                    />
                    <Typography paragraph variant="body1">Wybierz kategorie: </Typography>
                    <Controller
                        control={control}
                        defaultValue={categories[0]}
                        name='categories'
                        render={({ field: { onChange, value, ref } }) => (
                        <Select
                            {...register('categories', {required:true})}
                            label='Kategorie'
                            options={Categories}
                            value={value}
                            onChange={onChange}
                            isMulti
                            isSearchable
                        />
                        )}
                    />
                    {errors.title?.type ==='required' && "To pole jest wymagane"}
                </Box>
                <Box sx={{  gridArea: 'button', padding:"1rem 0"}}>
                <CustomButton type="submit" variant="contained" endIcon={<SendIcon />} color="tertiary" > Opublikuj zadanie</CustomButton>          
            </Box>
        </Box>
        </form>
    </Box>
  </StyledTaskForm>
  
)
    
}
