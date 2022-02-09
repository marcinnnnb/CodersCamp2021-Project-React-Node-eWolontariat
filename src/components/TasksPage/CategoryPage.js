import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllTasks, selectTasksCategory } from '../../store/taskSlice';
import getTasksCards from '../Task/getTasksCards';

const CategoryPage = () => {
    const { category } = useParams();
    const orderedTasks = useSelector(selectAllTasks).tasks;
    const categoryName = String(category).replace("-"," ");
    const filteredTasks = selectTasksCategory(orderedTasks, categoryName );
    let isFilterTasks = true;
    let startSlice = 0;
    let endSlice = 8;
    
    return (
        <Box  id={"page-all-tasks"}
              height = {"100%"}
              alignItems={"center"}
        >
        <Typography variant='h1' align={"center"} style={{margin: "3rem 0 2rem 0"}}>Kategoria: {categoryName} </Typography>
        <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 4rem 4rem 4rem'} justifyContent={'center'}>
                  {getTasksCards(isFilterTasks, orderedTasks, filteredTasks, startSlice, endSlice)}
        </Box>

        </Box>
    )

}

export default CategoryPage;