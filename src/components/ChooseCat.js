import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import { useState } from 'react';
import Categories from '../../src/assets/data/Categories';


const ChooseCat = (data) => {
    const [category, setCategory] = useState('');
    const [item, setItem] = useState(data);
 

    const handleChange = (event) => {
      setCategory(event.target.value);
    }

    const filterResult = (catItem) => {
        const result = item.categories.filter((curData)=>{
            return curData.categories === catItem;
        })
        setItem(result);
    }
    
  return (
        <FormControl variant="standard" style={{bottom: "10px"}}>
            <InputLabel >Wybierz kategorię</InputLabel>
            <Select
            value={category}
            onChange={handleChange}
            label="Wybierz kategorię"
            style={{width: "260px", fontSize: "1rem" }}
            >
                <MenuItem value="" style={{fontSize: "1rem"}}>
                    <em>Wszystkie kategorie</em>
                </MenuItem>
                {Categories.map (cat =>(
                <MenuItem 
                    onChange={()=>filterResult('Korepetycje')} 
                    key={cat.label} 
                    value={cat.value} 
                    style={{fontSize: "1rem"}} >
                    {cat.value}
                </MenuItem>
        ))}
            </Select>
        </FormControl>
    )
}

export default ChooseCat;