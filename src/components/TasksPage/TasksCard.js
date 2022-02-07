import { Button, Typography, Card, CardContent, CardActions, SvgIcon, Icon } from "@material-ui/core";
import CustomAvatar from "../CustomAvatar";
import CustomTypography from "../CustomTypography";
import { useNavigate } from 'react-router';

function TasksCard(tasks,id){
    let navigate = useNavigate();
    return(
            <Card key={`item-${id}`} raised={true} style={{ position: "relative", height: "270px", maxWidth: "350px", padding: '2.4rem 0.4rem', margin: '1.6rem', width: '22%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems: 'center', borderRadius:'12px'}}>
                <CustomAvatar 
                variant={"avatarBackground"} 
                backgroundcolor={tasks.task.avatarColor} >
                    {tasks.task.categorieIcon}
                </CustomAvatar>
                <CustomTypography 
                    variantcolor={"typographycolor"} 
                    margin={"4rem 0"} 
                    color= {tasks.task.avatarColor}
                    style={{
                        textTransform: "uppercase", 
                        fontSize: "0.8rem", 
                        fontWeight: "700", 
                        letterSpacing: "1.2px", 
                        margin: "10px 0"
                        }}
                        >
                        {tasks.task.categories}
                </CustomTypography>
                <CardContent>
                    <Typography variant='h4' style={{margin: "0.6rem 0", position: "absolute", padding: "0.4rem 1.2rem 0.4rem 0", top:"110px", left: "24px", borderTop: "1px solid #eee"}}>
                        {tasks.task.title}
                    </Typography>
                    <Typography variant='caption' paragraph gutterBottom={true} style={{margin:"1rem",  position: "absolute", top:"160px", left: "10px"}}>
                        {tasks.task.action_short_description}
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
                            onClick={()=>{navigate("/TaskPage")}}>
                            Pomagam
                        </Button>
                    </CardActions> 
            </Card>
    )
}

export default TasksCard;