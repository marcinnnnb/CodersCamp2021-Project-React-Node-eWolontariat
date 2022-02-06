import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import Api from "./ApiTasks";
import SearchInput from "../../../SearchInput";
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';
import PopularCategories from "../../../PopularCategories";
import { useNavigate } from 'react-router';



const SectionNewTasks = () => {

const isCompVol = false;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  let navigate = useNavigate();
  const start= 0;
  const end = 3;
  
   
  useEffect(() => {
      async function fetchData() {
          try {
              const response = await Api.getData();
              const json = await response.json();

           setData(json);
          } catch (e) {
              setError(e.message || 'Unexpected error');
          }
          setLoading(false);
      }
          fetchData();
      }, []);
      
      if (loading) {
          return (
              <Box align={"center"}>
                  <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
              </Box>
          )}
      
      if (error) {
          return( 
                <Box align={"center"}>
                    <div style={{color: 'red'}}>ERROR: {error}</div>
                </Box>
          )}
          
    return(
        <Box id={"section-new-tasks"}
            height = {"100%"}
            alignItems={"center"}
            margin={"3rem 3rem 0 3rem"}
        >
            <Typography variant="h1">Zobacz jakiej pomocy potrzebują inni</Typography>
            <Box display={'flex'} justifyContent={'center'}>
                <SearchInput data={data}/>
            </Box>
            <PopularCategories data = {data} start={start} end={end} isCompVol={isCompVol}/>
            <Box align={"center"}>
                <Button 
                    variant="outlined" 
                    onClick={()=>{navigate("/TasksPage")}} 
                    endIcon={<ArrowRightRounded style={{fontSize: "2rem"}}/>}
                    >
                    Wszystkie zadania
                </Button>
            </Box>
        </Box>
    ) 
}

export default SectionNewTasks;