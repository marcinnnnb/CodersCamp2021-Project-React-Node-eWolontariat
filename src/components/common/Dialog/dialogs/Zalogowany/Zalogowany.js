import { Typography, Button, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/dialogSlice";

export const Zalogowany = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{ marginTop: 20 }}>
          <Typography
            variant="h3"
            align="center">
            Jesteś zalogowany!
          </Typography>
      </Box>
      <Box
        sx={{ marginTop: 35, marginBottom: 25 }}
        align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(closeDialog())}>
            Zaczynamy!
          </Button>
      </Box>
    </>
  )
}

export default Zalogowany;