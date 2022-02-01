import { Box, Typography} from "@material-ui/core";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@mui/material/InputBase';
import TasksPage from '../../TasksPage/TasksPage';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: '1px solid #DFDCDC',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));

const SectionNewTasks = () => {
    return(
        <Box id={"section-new-tasks"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Zobacz jakiej pomocy potrzebują inni</Typography>
            
            <Box display={'flex'} justifyContent={'center'}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon color='primary'/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Znajdź zadanie dla wolontariusza…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            </Box>
        </Box>
    )
}

export default SectionNewTasks;