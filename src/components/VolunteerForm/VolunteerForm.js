import NewVolunteer from "../Volunteer/NewVolunteer";
import { Box, Typography, TextField } from "@material-ui/core";
import VolunteersList from "../Volunteer/VolunteersList";
import {useForm} from 'react-hook-form';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';

const VolunteerForm = () => {
    const{register,handleSubmit} =useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box id={"volunteer-form"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
         <Typography variant="h2" align="center" color="secondary" >Publikowanie profilu wolontariusza</Typography>
         <Typography paragraph align="left">Aby dodać do swojego profilu status wolontariusza wypełnij poniższy formularz:</Typography>

        

            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="body">Wybierz kategorie: </Typography>
                <Select label="Kategorie" options={Categories} isMulti isSearchable {...register("categories")} />

                <TextField multiline rows={4} fullWidth label="Napisz parę słów o sobie. W czym chciałbyś pomagać, czy masz jakieś doświadczenie związanie z wolontariatem" {...register("action_description")} /> 
                <Typography paragraph>Jeśli masz jakieś referencje dodaj je w formacie pdf</Typography>
                <input name="file" type="file" accept="pdf" label="" />

            </form>
            <NewVolunteer/>
            <VolunteersList/>


        </Box>
    )
}

export default VolunteerForm;