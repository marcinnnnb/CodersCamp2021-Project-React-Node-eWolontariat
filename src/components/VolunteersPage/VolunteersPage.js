
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import VolunteersCard from './VolunteersCard';
import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box'
import ChooseCat from '../TasksPage/ChooseCat';
import PopularCategories from '../PopularCategories';



const useStyles = makeStyles({
     btnLong:{
        paddingLeft: '5rem',
        paddingRight: '5rem',
     },
    flex:{
        display: 'flex',
        marginBottom: '3rem'
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        marginTop: '2rem'
    }
  }) 


const VolunteersPage = () => {
    const [vols, setVols] = useState([]);

    useEffect(()=>{
        fetch('https://api.npoint.io/44dbc66d5c17c97ade26')
        .then(res => res.json())
        .then(data => setVols(data))
    }, [])

    
    const classes = useStyles();

    return(
        <Container>
            <Typography variant='h4'>Wolontariusze</Typography>
            <PopularCategories data = {vols}/>
            <Box className={classes.flex}>
            <ChooseCat/> 
            </Box>
            <Grid container spacing={10}>
                {vols.splice(6)}
                {vols.map(vol => (
                    <Grid item 
                    key={vol.nick} 
                    lg={4} md={6} sx={12} 
                    >
                        <VolunteersCard vol = {vol}/>
                    </Grid>  
                ))}  
            </Grid>
            <Box className={classes.center}>
                <Button className={classes.btnLong} variant="outlined" endIcon={<ArrowDownwardIcon/>}>Załaduj więcej</Button>
            </Box>
        </Container>
    )
    
}

export default VolunteersPage;