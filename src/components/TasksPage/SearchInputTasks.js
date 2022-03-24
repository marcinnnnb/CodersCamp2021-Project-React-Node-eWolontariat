import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography, ListItemText } from '@material-ui/core';
import CustomAvatar from 'theme/CustomAvatar';
import { ListItemButton } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import CustomTypography from 'theme/CustomTypography';
import setCategoryIcon from 'theme/setCategoryIcon';
import { useNavigate } from 'react-router-dom';
import { fetchSearchedTasks, filterList, selectSearchedData, selectSearchedDataStatus } from 'store/searchSlice';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: '0.6rem',
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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));

  const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    margin: "0.8rem", 
    fontSize: "0.8rem", 
    fontWeight: "600",
    '& .spanColor': {
      fontWeight: 600,
      letterSpacing: '1px',
      background: 'linear-gradient(104deg,#82ffad00 .9%,#82ffad 2.4%,#82ffad80 5.8%,#82ffad1a 93%,#82ffadb3 96%,#82ffff00 98%),linear-gradient(183deg,#82ffad00,#82ffad4d 7.9%,#82ffad00 15%)',
      textShadow: '-12px 12px 9.8px #82ffadb3, 21px -18.1px 7.3px #fff0, -18.1px -27.3px 30px #fff'
    },
    [theme.breakpoints.down('md')]: {
      '& .titleSpan': {
        fontWeight: 600,
        fontSize: "0.8rem",
      }
    },
  }));

  const StyledBoxForSearch = styled(Box)(({ theme }) => ({
    border: "1px #eee solid",
    width: "800px",
    [theme.breakpoints.down('md')]: {
      width: "600px",
      '& .MuiTypography-body1': {
        margin: "0 0 0.6rem 0",
        lineHeight: 1 

      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '300px'
    },
  }));

  const SearchInputTasks = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const tasksList = useSelector(selectSearchedData);
    const tasksListStatus = useSelector(selectSearchedDataStatus);
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [displaySearchIcon, setdisplaySearchIcon] = useState(true);
      
      function  findMatches(wordToMatch) {
        return( tasks.tasks?.filter((task)=>{
          const regex = new RegExp(wordToMatch,"gi");
          return task.title.toLowerCase().match(regex) || task.shortDescription.toLowerCase().match(regex) || task.description.toLowerCase().match(regex)
        }));
      };

      function displayMatches({value,data}) {
        if (value && value.length > 1) {
          setdisplaySearchIcon('none');
          const matchArray = findMatches(value,data);
          setTasks(matchArray);
        } else {
          setdisplaySearchIcon('flex');
        }
        return displaySearchIcon;
      };

      let limit=6

      useEffect(() => {

        const params = new URLSearchParams({
          'search': value,
          'limit': 30
        });

        if (value==='') setTasks([]);
        
        if (tasksListStatus === 'idle' && value ) {
          dispatch(fetchSearchedTasks(params));
          setTasks(tasksList);
        };
        
        
      }, [tasksList, tasksListStatus, dispatch, value, limit]);

      return (
          <Search>
            <SearchIconWrapper>
                <SearchIcon color='primary' 
                style={{display: `${displaySearchIcon}`}}
                />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Znajdź zadanie…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=>{
                  setValue(e.target.value);
                  displayMatches({value,tasks});
                  dispatch(filterList());
                }}
                onKeyUp={(e)=>{
                  setValue(e.target.value);
                  displayMatches({value,tasks});
                  dispatch(filterList());
                }}
                value={value}
                >
            </StyledInputBase>
            {tasks?.map((el,id)=>{
              const regex = new RegExp(value,'gi');
              return (
                    <StyledBoxForSearch key={`item-${id}`}>
                      <ListItemButton 
                        key={`listitembutton-${id}`}  
                        display={"flex"} 
                        style={{width: "100%"}} 
                        disableGutters
                        onClick={(e)=>{
                            e.preventDefault();
                            navigate(`/TaskPage/${el.id}`);
                        }}>
                          <CustomAvatar 
                            variant={"avatarBackground"} 
                            backgroundcolor={setCategoryIcon(el?.categories[0]?.name)[1]}
                            style={{margin: "0.8rem"}}
                            key={`item-${id}`} 
                            >
                              {setCategoryIcon(el?.categories[0]?.name)[0]}
                            </CustomAvatar>
                            <Divider key={`divideritem-${id}`}  orientation="vertical" flexItem/>
                              <StyledListItemText className={"searchList"} key={`listitem-${id}`} 
                                primary= 
                                          {el.title.replace(regex, `<span>${value}<span>`).split('<span>').map((item,id)=>{
                          
                                              if (item.match(regex)) return (
                                                <CustomTypography variant={"body2"} component="span" className={"titleSpan spanColor"} key={`spancolortititem-${id}`}>{item}</CustomTypography>
                                              )
                                              else return (
                                                <Typography className={"titleSpan spanwithoutColor"} key={`typotititem-${id}`} component="span">{item}</Typography>
                                              )
                                          })}
                                
                                secondary=
                                          {el.shortDescription.replace(regex, `<span>${value}<span>`).split('<span>').map((item,id)=>{
                                            
                                            if (item.match(regex)) return (
                                              <CustomTypography variant="subtitle2" component="span" className={"subtitleSpan spanColor"} key={`spancolordesc-${id}`}>{item}</CustomTypography>
                                            )
                                            else return (
                                              <Typography variant="subtitle2" className={"subtitleSpan spanwithoutColor"} key={`typodesc-${id}`} component="span" >{item}</Typography>
                                            )
                                        })}
                              >
                              </StyledListItemText>
                  </ListItemButton>
                </StyledBoxForSearch>
                )
            })}
        </Search>
      ) 
   
  }

  export default SearchInputTasks;