import { Box, CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Box  padding={2} align={"center"}>
         <CircularProgress style={{margin: "2rem"}} align={"center"} color={"secondary"}/>
     </Box>
  );
}
