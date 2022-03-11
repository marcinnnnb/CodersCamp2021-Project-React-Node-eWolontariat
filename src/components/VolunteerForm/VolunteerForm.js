import { Box, Typography, TextField, Container, styled, Divider } from "@material-ui/core";
import {useForm} from 'react-hook-form';
import Select from 'react-select'
import Categories from '../../assets/data/Categories';
import CustomTypography from "../../theme/CustomTypography";
import CustomButton from "../../theme/CustomButton";
import SendIcon from '@material-ui/icons/Send';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addNewVolunteer } from "../../store/volunteerSlice";

const StyledSelect = styled(Select)(({ theme }) => ({
    margin: "1.2rem 0",
    '& .css-1rhbuit-multiValue': {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    '& .css-xb97g8': {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    '& .css-12jo7m5': {
        color: theme.palette.secondary.contrastText,
    },
    '& .css-tj5bde-Svg': {
        fill: theme.palette.secondary.contrastText,
    }
  }));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputLabel-root': {
        fontWeight: "600", 
        letterSpacing: "1.1 px", 
        fontSize: "1.2rem"
    }
}));

const VolunteerForm = () => {
    const{register,handleSubmit} =useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (newVolunteer,e) => {
        e.preventDefault()
        dispatch( addNewVolunteer(newVolunteer))
        //navigate('/TaskPage')
         };

    return (
        <Container>
            <Box id={"volunteer-form"}
                padding={"3rem 4rem"}
                my={2}
                justifyContent={"center"}
                alignItems={"center"}
            >
            <CustomTypography variantcolor={"typographycolor"} variant="h1" align="left" color="tertiary" style={{margin: "0 0 1rem 0"}}>Publikowanie profilu wolontariusza</CustomTypography>
            <Divider/>
            <Typography variant="h2" style={{margin: "6rem 0 3rem 0", fontWeight: 600, fontSize: "1.6rem"}}>Aby dodać do swojego profilu status wolontariusza wypełnij poniższy formularz:</Typography>

            <form onSubmit={handleSubmit(onSubmit)} style={{margin: "2rem 0 3rem 0"}}>
                    <Typography variant="h3" >Wybierz kategorie, z których chciałbyś otrzymywać powiadomienia o nowych zadaniach:</Typography>
                    <StyledSelect style = {{marginBottom: "6rem"}}  label="Kategorie" placeholder="Wybierz kategorie" options={Categories} isMulti isSearchable {...register("categories")} />
                    <StyledTextField multiline rows={4} fullWidth label="Napisz parę słów o sobie. W czym chciałbyś pomagać, czy masz jakieś doświadczenie związanie z wolontariatem" {...register("action_description")} /> 
            </form>
                <Box align={"right"}>
                    <CustomButton size="medium" type="submit" variant="contained" endIcon={<SendIcon />} color="tertiary"> Opublikuj profil</CustomButton>
                </Box>
            </Box>
        </Container>
    )
}

export default VolunteerForm;