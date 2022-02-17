import { Button, Typography, Card, CardContent, CardActions } from "@material-ui/core";
import CustomAvatar from "../../theme/CustomAvatar";
import CustomTypography from "../../theme/CustomTypography";
import { useNavigate } from 'react-router';
import setCategoryIcon from "../../theme/setCategoryIcon";
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative", 
    height: "300px",
    maxWidth: "280px", 
    padding: '2.4rem 0.4rem', 
    margin: '1.6rem', 
    width: '100%', 
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'flex-start', 
    alignItems: 'center', 
    borderRadius:'12px',
    '& h4': {
        paddingTop: '1rem',
        borderTop: "1px solid #eee",
    },
    '& .describe': {
        margin:"2rem 0",  
    },
    [theme.breakpoints.down('md')]: {
      margin: '2rem 0.6rem',
      height: "auto",
    },
}));

function TaskCard(task){
    let navigate = useNavigate();
    const taskIcon = setCategoryIcon(task.task.categories[0])[0];
    const iconColor = setCategoryIcon(task.task.categories[0])[1];

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/TaskPage/${task.task.id}`);
    }

    return(
            <StyledCard raised={true}>
                <CustomAvatar 
                variant={"avatarBackground"} 
                backgroundcolor={iconColor} >
                    {taskIcon}
                </CustomAvatar>
                <CustomTypography 
                    variantcolor={"typographycolor"} 
                    margin={"4rem 0"} 
                    color= {iconColor}
                    style={{
                        textTransform: "uppercase", 
                        fontSize: "0.8rem", 
                        fontWeight: "700", 
                        letterSpacing: "1.2px", 
                        margin: "10px 0"
                        }}
                        >
                        {task.task.categories}
                </CustomTypography>
                <CardContent>
                    <Typography variant='h4'>
                        {task.task.title}
                    </Typography>
                    <Typography className={"describe"} variant='caption' paragraph gutterBottom={true}>
                        {task.task.action_short_description}
                    </Typography>
                </CardContent>    
                    <CardActions>
                        <Button style={{
                            position: "absolute", 
                            left: "30%", 
                            bottom: "40px"
                            }} 
                            variant={"contained"} 
                            color={"secondary"} 
                            onClick={handleClick}
                            >Pomagam
                        </Button>
                    </CardActions> 
            </StyledCard>
    )
}

export default TaskCard;