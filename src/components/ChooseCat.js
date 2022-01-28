import React from 'react';
import TextField from '@material-ui/core/TextField'
import Categories from '../assets/data/Categories';
import { MenuItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'



const ChooseCat = () => {


  return (
    <>
        <Typography style={{marginRight:'3rem'}} variant='h5'>Wybierz wg kategorii:</Typography>
        <TextField
            select
            label='Kliknij, aby rozwinąć'
            variant='outlined'
            style={{width:'20%', height: '2rem'}}
        >
        {Categories.map (cat =>(
            <MenuItem key={cat.label} value={cat.value}>
                {cat.label}
            </MenuItem>
        ))}
        </TextField>
    </>
    )
}

export default ChooseCat;