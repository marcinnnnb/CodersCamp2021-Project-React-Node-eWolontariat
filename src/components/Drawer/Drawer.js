import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  IconButton,
  List,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout, selectLoggedInUser } from 'store/systemSlice';
import { ListItemButton } from '@mui/material';
import { selectResponseStatus } from 'store/systemSlice';

const drawerWidth = 250;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const name = useSelector(selectLoggedInUser);
  const status = useSelector(selectResponseStatus);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin={2}>
          <Avatar
               alt="userAvatar"
               backgroundColor='primary'
               sx={{ cursor: "pointer", bgcolor: '#868AE0' }}
               onClick={(e)=>{
                    e.preventDefault();
                    navigate(`/UserProfile`);
               }}/>
            <Typography color='secondary' style={{fontWeight: '600', marginTop:'1rem'}} >{name}</Typography>
          </Box>
          <Divider />
          <ListItemButton onClick={(e)=>{
                    e.preventDefault();
                    navigate(`/TasksPage`);
               }}>
            <ListItemIcon>
              <FormatListNumberedIcon  sx={{ color: '#FF7A82' }}/>
            </ListItemIcon>
            <ListItemText primary="Przeglądaj zadania" />
          </ListItemButton>
          <ListItemButton onClick={(e)=>{
                    e.preventDefault();
                    navigate(`/VolunteersPage`);
               }}>
            <ListItemIcon>
              <PeopleIcon  sx={{ color: '#FF7A82' }}/>
            </ListItemIcon>
            <ListItemText primary="Znajdź wolontariusza" />
          </ListItemButton>
          <ListItemButton onClick={(e) => {
             e.preventDefault();
             dispatch(logout()).then(() => {
                navigate(`/`);
                handleDrawerClose();
             });
             }}
           >
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#FF7A82' }}/>
            </ListItemIcon>
            <ListItemText primary="Wyloguj" />
            </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
