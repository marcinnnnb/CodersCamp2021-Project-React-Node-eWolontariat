import {useState, useEffect} from 'react';
import Api from "../../store/ApiVolunteers";
import { Box, Button, Typography, CircularProgress } from "@material-ui/core";
import ChooseCat from '../../components/ChooseCat';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PopularCategories from "../PopularCategories"



let volsPerPage = 6;
let arrayForHoldingVols = [];
const isCompVol=true;
     


const VolunteersPage = () => {
    const [vols, setVols] = useState([]);
    const [next, setNext] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await Api.getData();
                const json = await response.json();
 
             setVols(json);
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
        )
    }
     
    if (error) {
        return <div style={{color: 'red'}}>ERROR: {error}</div>
    }


    const handleShowMoreVols = () => {
        setNext(next + volsPerPage);
        setShowButton(false)
        arrayForHoldingVols = vols.slice(next, next+volsPerPage);
        arrayForHoldingVols = [arrayForHoldingVols, vols];
      };

    
  

    return(
        <Box
        height = {"100%"}
        alignItems={"center"}
        >
            <Typography variant='h1' align={"center"}>Wolontariusze</Typography>
            <Box margin={"0 3rem"} display={"flex"} justifyContent={'flex-start'}>
                <Box display={"flex"} >
                    <ChooseCat data={vols}/>
                </Box>
            </Box>
         
            <PopularCategories data={vols} start={0} end={volsPerPage+next} isCompVol={isCompVol}/>
            <Box  align={"center"} marginBottom={"2rem"}>
            {showButton && <Button onClick={handleShowMoreVols} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>}
            </Box>
        </Box>
    )
    
}

export default VolunteersPage;