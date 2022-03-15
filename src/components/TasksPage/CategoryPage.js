import { Box, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskCard from './TaskCard';

const CategoryPage = () => {
    const { category } = useParams();
    const categoryName = String(category).replace("-"," ");
    const [events, setEvents] = useState('');
    let startSlice = 0;
    let endSlice = 8;

    useEffect(() => {
        axios.get(`https://whispering-oasis-16160.herokuapp.com/event?category=${categoryName}`).then((response) => {
            setEvents(response.data.events);
        });
      }, [categoryName]);

    if (!events) return null;
    
    return (
        <Box  id={"page-all-tasks"}
              height = {"100%"}
              alignItems={"center"}
        >
            <Typography variant='h1' align={"center"} style={{margin: "3rem 0 2rem 0"}}>Kategoria: {categoryName} </Typography>
            <Box display={'flex'} flexDirection={"row"} flexWrap={"wrap"} padding={'0 4rem 4rem 4rem'} justifyContent={'center'}>
                {events?.slice(startSlice,endSlice).map((task,id) =>{
                return <TaskCard key={`item-${task._id}`} task={task} id={task._id}/>
                })}
            </Box>            
        </Box>
    );
};

export default CategoryPage;