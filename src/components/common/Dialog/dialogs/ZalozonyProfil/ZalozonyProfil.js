import { Typography, Button, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/dialogSlice";

export const ZalozonyProfil = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{ marginTop: 20 }}>
          <Typography
            variant="h3"
            align="center">
            Założyłeś profil!
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

export default ZalozonyProfil;