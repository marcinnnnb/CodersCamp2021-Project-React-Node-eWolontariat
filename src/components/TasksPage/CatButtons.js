import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import LanguageIcon from '@material-ui/icons/Language';
import PetsIcon from '@material-ui/icons/Pets';
import Categories from '../../assets/data/Categories';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    btn:{
      marginBottom: '1rem', 
      paddingRight: '1rem',
      paddingLeft: '1rem',
      maxHeight: '2rem',
      fontWeight: 700,
      marginLeft: '1rem',
      width: '15rem'
     },
     text:{
        color: '#868686',
      },
    buttons:{
        display:'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '3rem',
        marginBottom: '3rem'
    }
    })

function CatButtons({task}){

    const classes = useStyles();


    return(
    <>
        <Typography variant='h6' className={classes.text}>Popularne kategorie</Typography>
        <Box className={classes.buttons}>
        {Categories.splice(4)}
         {Categories.map (cat =>(
            <Button  key={cat.id} className={classes.btn} variant="contained" color={getColor(cat.id)} startIcon={getIcon(cat.value)}>{cat.value}</Button>
         ))}
        </Box>
    </>
    )
 }
export default CatButtons

function getIcon(nameCat){

    switch (nameCat){
        case 'Korepetycje':
        return (<SchoolIcon/>)
        case 'Wyprowadzanie psów':
        return (<PetsIcon/>)
        case  "Tłumaczenia":
        return (<LanguageIcon/>)
        case  "Opieka nad dziećmi":
        return (<ChildFriendlyIcon/>)
        case  "Strony www":
        return (<ComputerIcon/>)
        default:
        return (<ListAltIcon/>)

    }
}
function getColor(id){
    if(id % 2 === 0){
        return 'secondary'}
    else return 'primary'
}
