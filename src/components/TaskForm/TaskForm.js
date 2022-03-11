import {useForm, Controller} from 'react-hook-form';
import { Box, Typography, TextField, Container } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';
import { useNavigate } from 'react-router-dom';
import { addNewTask } from "../../store/taskSlice";
import { useDispatch } from "react-redux";
import CustomTypography from '../../theme/CustomTypography';
import CustomButton from '../../theme/CustomButton';
import { useSelector } from "react-redux";
import { selectAllTasks } from '../../store/taskSlice';
import 'react-toastify/dist/ReactToastify.css';
 
const amountValidation={
    required:true, pattern:[0-9], maxLength:1000
} 

export default function TaskForm() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const tasksListLength = useSelector(selectAllTasks).tasks.length;
    let newID = tasksListLength+1;
    const date = new Date();

    const{register,handleSubmit,control, formState: { errors }} =useForm(
       {
        defaultValues: {
            sign:0,
            id: newID,
            date: JSON.stringify(date),
            image: "webinar",
            organization: "",
            dateExpired: ""
          }
       }
    );

    const onSubmit = (data,e) => {
        e.preventDefault()
        dispatch(addNewTask(data))
        navigate(`/TaskPage/${newID}`)
         };  

    const categories = []; 

return (
    <Container>
        <Box id={"section-task-form"}
            padding={"3rem 4rem"}
            my={2}
            justifyContent={"center"}
            alignItems={"center"}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box style={{display:"grid", gridTemplateColumns: "3fr 2fr", gap: "1.6rem", justifyItems: 'center', alignItems: 'space-evenly', gridTemplateRows: 'auto',
                gridTemplateAreas: `"header header"
                    "main img"
                    "main2 main2"
                    ". button"
                    "footer footer"`}}>
                <Box style={{ gridArea: 'header'}}> 
                    <CustomTypography variantcolor={"typographycolor"} variant="h2" align="center" color="tertiary" style={{marginBottom: "4rem"}}>Tworzenie zadania dla wolontariusza </CustomTypography>
                </Box>

                <Box style={{ gridArea: 'main', display:"flex",  flexDirection:"column", alignItems: 'stretch', justifyContent: 'space-around', width: '100%', marginLeft:"30px"}}>
                    <TextField fullWidth label="Tytuł zadania" name="title"{...register('title', {required:true, minLength:'5'})} />
                    {errors.title?.type ==='required' && "To pole jest wymagane. Minimalnie 5 znaków"}
                    <TextField type="number" name="amount" fullWidth label="Ilu wolontariuszy potrzebujesz?" {...register('amount', amountValidation)} {...amountValidation}/>
                </Box>
                
                <Box style={{ gridArea: 'img', alignItems:"center", justifyContent:"center",  backgroundColor: 'primary', p: 2, border: '1px dashed grey', height:"180px"}}>
                <input name="image" type="file" accept="image/png, image/jpeg" {...register('image')} />
                </Box>

                <Box style={{ gridArea: 'main2', display:"flex", gap:3, flexDirection:"column", justifyContent: 'space-around', width:"97%"}}>
                    <TextField multiline rows={4} fullWidth label="Dodaj opis zadania" {...register("action_description")} />   
                    <TextField style={{marginBottom: "2rem"}} fullWidth multiline rows={2} label="Dodaj krótki opis widoczny na miniaturze" {...register("action_short_description")} />
                    <Typography variant="body1">Wybierz kategorie: </Typography>
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
                <CustomButton size="medium" type="submit" variant="contained" endIcon={<SendIcon />} color="tertiary" > Opublikuj zadanie</CustomButton>          
            </Box>
        </Box>
        </form>
    </Box>
  </Container>
  
)
    
}
