import { Box, List, ListItem, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserClient from "services/client/UserClient";
import { fetchPicture, fetchUserPictures, loadPicture, selectPicture, selectPictureId, selectPictureStatus } from "store/pictureSlice";
import { selectLoggedInUser } from "store/systemSlice";

export const ImagePicker = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(selectLoggedInUser);
    const pictureStatus = useSelector(selectPictureStatus);
    const picture = useSelector(selectPicture);
    const pictureId = useSelector(selectPictureId);
    const [picturePreview, setPicturePreview] = useState([]);
    const [file, setFile] = useState();

    const handleChange = (e) => {
        const value = e.target.value;
        setFile(value);
      };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch(fetchAddNewPicture(file));
      };
    
    return (
        <List>
        <form 
        encType="multipart/form-data"
        onSubmit={handleSubmit}>
        <TextField
                        name="image"
                        value="" 
                        required 
                        type="file"
                        id="imgInp"
                        accept="image/png, image/jpeg" 
                />
        </form>
             
            <Box
                style={{height: '40%'}}
                component={'img'}
                padding={"2rem"}
                src={`data:image/jpeg;base64,${picturePreview}`}
                alt={''}
            />
        
        
            
        </List>
    )
}

export default ImagePicker;