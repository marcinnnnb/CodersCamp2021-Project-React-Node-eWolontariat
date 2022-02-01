import Categories from "../assets/data/Categories";
import CustomButton from "./CustomButton";
import setCategoryIcon from "./setCategoryIcon";
import { Box, Typography, Divider } from '@material-ui/core';

function compare( a, b ) {
    if ( a.rate > b.rate  ){
      return -1;
    }
    if ( a.rate < b.rate ){
      return 1;
    }
    return 0;
  };

function PopularCategories ({data}){

    const thePopularCategories = (Categories.map(category=>{
        let rate=0;
        data.map(task=>{
            (task.categories).forEach(taskCategory=>{
                if(taskCategory===category.value){
                    rate++;
                }
            });
            return rate;
        });
        category.rate=rate;
        category.buttonColor = setCategoryIcon(category.value)[1];
        category.icon = setCategoryIcon(category.value)[0];
        return category
    })).sort(compare).slice(0,5);

    return(
        <Box id="filtering-buttons" display={"flex"} justifyContent={'space-evenly'}  gridColumnGap={"2rem"} padding={"2rem 0"} margin={"1rem 3rem 0 3rem"} alignItems={"flex-end"}>
               <Box justifyContent={"flex-start"} flexGrow={"1"} >
                <Typography variant="body2" align={"left"}>Najpopularniejsze kategorie:</Typography>
               </Box>
               
                {thePopularCategories.map((category,id)=>(
                    
                    <CustomButton 
                        key={`item-${id}`} 
                        variant="contained" 
                        color={category.buttonColor}
                        startIcon={category.icon}
                        >
                        <Divider orientation="vertical" flexItem style={{backgroundColor: "#eee", marginRight:"10px"}} /> {category.value}
                    </CustomButton>
                ))}
            </Box>
    )

}

export default PopularCategories;