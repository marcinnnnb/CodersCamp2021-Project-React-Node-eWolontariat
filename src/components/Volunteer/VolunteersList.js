import { Box, CircularProgress, Typography, Divider } from "@material-ui/core";
import { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortVolunteers,  selectAllVolunteers  } from "../../store/volunteerSlice";
import { fetchVolunteers } from "../../store/fetchVolunteers";
import Categories from "../../assets/data/Categories";
import setCategoryIcon from "../../theme/setCategoryIcon";
import CustomButton from "../../theme/CustomButton";
import VolunteerCard from "../VolunteersPage/VolunteerCard";
import SearchInput from "../SearchInput";

const VolunteersList = () => {
  const dispatch = useDispatch();
  const volunteersList = useSelector(selectAllVolunteers);
  const volunteerstatus = useSelector(state => state.volunteers.status);
  const error = useSelector(state => state.volunteers.error);
  const [filteredVolunteers, setVolunteers] = useState([]);
  const [isFilterVolunteers, setFilterVolunteers] = useState(false);
  let orderedVolunteers =[];

  console.log(volunteersList);
  console.log(filteredVolunteers);
  console.log(orderedVolunteers);

  useEffect(() => {
    if (volunteerstatus === 'idle') {
      dispatch(fetchVolunteers())
    }
  }, [volunteerstatus, dispatch]);

  let content;

  if (volunteerstatus === 'loading') {
    content = 
        (<CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>)
    
  } else if (volunteerstatus === 'succeeded (:') {
    orderedVolunteers = dispatch(sortVolunteers(volunteersList.volunteers)).payload.slice(0,3);
    
  } else if (volunteerstatus === 'failed') {
    content = (
        <div style={{color: 'red'}}>ERROR: {error}</div>
    )
  }  

  console.log(orderedVolunteers)

  const thePopularCategories = (Categories.map(category=>{
    let rate=0;
    volunteersList.volunteers?.map(volunteer=>{
        (volunteer.categories).forEach(volunteerCategory=>{
            if(volunteerCategory===category.value){
                rate++;
            }
        });
        return rate;
    });
    category.rate=rate;
    category.buttonColor = setCategoryIcon(category.value)[1];
    category.icon = setCategoryIcon(category.value)[0];
    return category
    })).sort(compare).slice(0,4);

    function getFilteredTextFromButton(text) {
        return (
          volunteersList.volunteers?.filter(element => 
                element.categories.includes(text))
            )
    };

    function getVolunteersCards(){
      if (isFilterVolunteers===false) return (
          orderedVolunteers?.map((volunteer,id) =>{
                return <VolunteerCard key={`item-${volunteer.id}`} volunteer={volunteer} id={volunteer.id}/>
              })
      )
      if (isFilterVolunteers===true) return (
          filteredVolunteers?.map((volunteer,id) =>{
                return <VolunteerCard key={`item-${volunteer.id}`} volunteer={volunteer} id={volunteer.id}/>
            })
      )
    };

    return (
      <Box>
         <Box id="filtering-buttons" display={"flex"} justifyContent={'center'}  gridColumnGap={"2rem"} padding={"2rem 0"} margin={"1rem"} alignItems={"center"} flexWrap={"wrap"}>
              <Typography variant="subtitle2" align={"left"} style={{marginTop: "1rem"}}>Najpopularniejsze <br/>kategorie:</Typography>
                    <CustomButton 
                        variant="outlined" 
                        color={"primary"} 
                        style={{marginTop: "1rem"}} 
                        onClick={()=>{
                            setVolunteers(volunteersList.volunteers.slice(0,3));
                        }}        
                    >
                    Wszystkie</CustomButton>

                {thePopularCategories.map((category,id)=>(
                    
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
                        }}                           
                    >
                        <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {category.value}
                    </CustomButton>
                ))}
          </Box>
           {content}
            <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 4rem 0 4rem'} justifyContent={'center'}>
                  {getVolunteersCards()}
            </Box>
      </Box>
    )
}

function compare( a, b ) {
    if ( a.rate > b.rate  ){
      return -1;
    }
    if ( a.rate < b.rate ){
      return 1;
    }
    return 0;
  };

export default VolunteersList;