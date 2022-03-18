import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from "react-redux";
import { openDialog, FormType } from 'components/common/Dialog/store/dialogSlice';

export default function ResponsiveMenu() {
  let dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color= "primary"
      >
        <MoreVertIcon sx={{ color: '#FF7A82' }}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
          <MenuItem onClick={() => dispatch(openDialog({ formType: FormType.loginDialog }))} >
            Zaloguj się
          </MenuItem>
          <MenuItem onClick={() => dispatch(openDialog({ formType: FormType.rejestracja }))}>
            Zarejestruj się
          </MenuItem>
      </Menu>
    </div>
  );
}
