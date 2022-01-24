import { Box, Typography} from "@material-ui/core";


const SectionNewTasks = () => {
    return(
        <Box id={"section-new-tasks"}
            display={"flex:"}
            height = {"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Typography variant="h1">Zobacz jakiej pomocy potrzebują inni</Typography>
            <Box display={'flex'} padding={'4rem'} justifyContent={'space-evenly'} mr={'2rem'}>
               
               
            </Box>
        </Box>
    )
}

export default SectionNewTasks;