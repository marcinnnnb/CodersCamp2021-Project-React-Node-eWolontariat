import { Box, CircularProgress, Typography, Divider } from "@material-ui/core";
import { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortVolunteers,  selectAllVolunteers  } from "../../store/volunteerSlice";
import { fetchVolunteers } from "../../store/fetchVolunteers";
import CustomButton from "../../theme/CustomButton";
import getVolunteersCards from "./getVolunteersCards";
import setVolunteersRatingButtons from "../VolunteersPage/setVolunteersRatingButtons";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Categories from "../../assets/data/Categories";

const VolunteersList = ({startSlice,endSlice}) => {
  const dispatch = useDispatch();
  const volunteersList = useSelector(selectAllVolunteers);
  const volunteerStatus = useSelector(state => state.volunteers.status);
  const error = useSelector(state => state.volunteers.error);
  const [filteredVolunteers, setVolunteers] = useState([]);
  const [isFilterVolunteers, setFilterVolunteers] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  let orderedVolunteers =[];

  useEffect(() => {
    if (volunteerStatus === 'idle') {
      dispatch(fetchVolunteers())
    }
  }, [volunteerStatus, dispatch]);

  let content;
    if (volunteerStatus === 'loading...') {
       content = (
        <Box style={{color: 'red'}} padding={2} align={"center"}>
            <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
        </Box>
      );
  } else if (volunteerStatus === 'succeeded (:') {
    orderedVolunteers = dispatch(sortVolunteers(volunteersList.volunteers)).payload;
  } else if (volunteerStatus === 'failed :(') {
    content = <Box style={{color: 'red'}} padding={2} align={"center"}>ERROR: {error}</Box>;
}  

    function getFilteredTextFromButton(text) {
        return (
          volunteersList.volunteers?.filter(element => 
                element.categories.includes(text))
            )
    };

    let thePopularCategoriesButtons = setVolunteersRatingButtons(volunteersList).slice(0,4);

    return (
      <Box>
         <Box id="filtering-buttons" display={"flex"} justifyContent={'center'}  gridColumnGap={"2rem"} padding={"2rem 0"} margin={"1rem"} flexWrap={"wrap"}>
              <Typography variant="subtitle2" align={"left"} style={{marginTop: "1rem"}}>Najpopularniejsze <br/>kategorie:</Typography>
                    <CustomButton 
                        variant="outlined" 
                        color={"primary"} 
                        style={{marginTop: "1rem"}} 
                        onClick={()=>{
                            setVolunteers(volunteersList.volunteers.slice(startSlice,endSlice));
                            setSelectValue("");
                        }}        
                    >
                    Wszystkie</CustomButton>

                {thePopularCategoriesButtons.map((category,id)=>(
                    
                    <CustomButton 
                        key={`item-${id}`} 
                        id= {category.value}
                        variant="contained" 
                        style={{marginTop: "1rem"}}
                        color={category.buttonColor}
                        startIcon={category.icon}
                        onClick={()=>{
                          setVolunteers(getFilteredTextFromButton(category.value));
                            setFilterVolunteers(true);
                            setSelectValue(category.value);
                        }}                           
                    >
                        <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {category.value}
                    </CustomButton>
                ))}
           </Box>
         
           {content}
           <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} flexWrap={"wrap"} >
            <FormControl variant="standard" style={{bottom: "10px"}}>
                  <InputLabel >Wybierz kategorię</InputLabel>
                  <Select
                    value = {selectValue}
                    onChange={(e)=> {
                      setSelectValue(e.target.value);
                      setVolunteers(getFilteredTextFromButton(e.target.value));
                      setFilterVolunteers(true);
                    }}
                  label="Wybierz kategorię"
                  style={{width: "260px", fontSize: "1rem" }}
                  >
                      <MenuItem value="" style={{fontSize: "1rem"}}>
                          <em>Wszystkie kategorie</em>
                      </MenuItem>
                      {Categories.map (cat =>(
                      <MenuItem  
                          key={cat.label} 
                          value={cat.value} 
                          style={{fontSize: "1rem"}}>
                          {cat.label} 
                      </MenuItem>
              ))}
                  </Select>
              </FormControl>
           </Box>
            <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 4rem 0 4rem'} justifyContent={'center'}>
                {getVolunteersCards(isFilterVolunteers, selectValue, orderedVolunteers, filteredVolunteers, startSlice, endSlice)}
            </Box>
      </Box>
    )
}

export default VolunteersList;